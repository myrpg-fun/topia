const {zzLinkFind} = require('./zzLink');
const {zzReference} = require('../index');
const {Router} = require('../Router');

class zzLinkPreventSubmit extends zzLinkFind{
    addEventToEL(el){
        el.addEventListener('submit', function(event){
            event.preventDefault();
        }.bind(this), false);
    }
    
    constructor(DOMFind){
        super(DOMFind);
    }
}

class zzLinkInputValue extends zzLinkFind{
    addEventToEL(el){
        this.modelRel.onSet( function(event){
            if (el.value !== event.value){
                el.value = event.value;
            }
        }, this );

        el.addEventListener('input', function(){
            if (el.value !== this.modelRel.value){
                let value = this.fnChange(el.value);
                if (value !== undefined){
                    this.modelRel.value = value;
                }
            }
        }.bind(this), false);
        
        el.addEventListener('blur', function(){
            if (el.value !== this.modelRel.value){
                el.value = this.modelRel.value;
            }
        }.bind(this), false);

        el.value = this.modelRel.value;
    }
    
    clearEvents(DOMel){
        this.modelRel.off( this );
    }

    constructor(DOMFind, modelRel, fnChange){
        super(DOMFind);
        
        this.modelRel = modelRel;
        this.fnChange = fnChange?fnChange:(v) => v;
    }
}

class zzLinkAutoResizeTextarea extends zzLinkFind{
    delayedResize (text) {
        setTimeout(() => {
            text.style.height = 'auto';
            text.style.height = text.scrollHeight+'px';
        }, 0);
    }
    
    addEventToEL(text){
        text.addEventListener('change',  this.delayedResize.bind(this, text), false);
        text.addEventListener('input',  this.delayedResize.bind(this, text), false);
        text.addEventListener('cut',  this.delayedResize.bind(this, text), false);
        text.addEventListener('paste',  this.delayedResize.bind(this, text), false);
        text.addEventListener('drop',  this.delayedResize.bind(this, text), false);
        text.addEventListener('keydown',  this.delayedResize.bind(this, text), false);

        this.delayedResize(text);
    }
}

class zzLinkTextValue extends zzLinkFind{
    onModelSet(DOMText, event){
        DOMText.data = event.value;
    };
        
    addEventToEL(el){
        if (!this.append){
            el.innerHTML = '';
        }
        
        for (let i in this.modelRel){
            let text = this.modelRel[i];
            
            let DOMText = document.createTextNode('');
            
            if (typeof text === 'string'){
                DOMText.data = text;
            }
            
            if (text instanceof zzReference){
                text.onSet( this.onModelSet.bind(this, DOMText), this );
                DOMText.data = text.value;
            }

            el.appendChild(DOMText);
        }
    }

    clearEvents(DOMel){
        for (let i in this.modelRel){
            if (this.modelRel[i] instanceof zzReference){
                this.modelRel[i].off( this );
            }
        }
    }

    constructor(DOMFind, modelRel, append){
        super(DOMFind);
        
        !Array.isArray(modelRel) && (modelRel = [modelRel]);
        
        this.modelRel = modelRel;
        this.append = append?true:false;
    }
}

class zzLinkHtmlValue extends zzLinkFind{
    onModelChange(el){
        let html = '';
        for (let i in this.modelRel){
            let text = this.modelRel[i];
            
            if (typeof text === 'string'){
                html += text;
            }
            
            if (text instanceof zzReference){
                html += text.value;
            }
        }
        
        el.innerHTML = html;
    };
        
    addEventToEL(el){
        for (let i in this.modelRel){
            if (this.modelRel[i] instanceof zzReference){
                this.modelRel[i].onSet( this.onModelChange.bind(this, el), this );
            }
        }
        
        this.onModelChange(el);
    }

    clearEvents(){
        for (let i in this.modelRel){
            if (this.modelRel[i] instanceof zzReference){
                this.modelRel[i].off( this );
            }
        }
    }

    constructor(DOMFind, modelRel){
        super(DOMFind);
        
        !Array.isArray(modelRel) && (modelRel = [modelRel]);
        
        this.modelRel = modelRel;
    }
}

class zzLinkSwitchValue extends zzLinkFind{
    removeClass(el, className){
        let cels = el.className.split(' ');
        let i = cels.indexOf(className);
        if (i !== -1){
            cels.splice(i, 1);
            el.className = cels.join(' ');
        }
    }
    
    addClass(el, className){
        let cels = el.className.split(' ');
        cels.push(className);
        el.className = cels.join(' ');
    }
    
    addEventToEL(el){
        let onModelSet = function(ev){
            let s = this.sets.find(f => f.value === ev.last);
            if (s){
                this.removeClass(el, s.class);
            }

            s = this.sets.find(f => f.value === ev.value);
            if (s){
                this.addClass(el, s.class);
            }
        }.bind(this);
        
        let onClick = function(){
            let k = this.skeys.indexOf( this.modelRel.value )+1;

            if (!this.skeys[k]){k = 0;}

            this.modelRel.value = this.skeys[k];
        }.bind(this);
        
        this.modelRel.onSet( onModelSet, this);
        el.addEventListener('click', onClick, false);

        this.skeys.forEach(v => this.removeClass(el, this.sets[v]));
        
        onModelSet({last: null, value: this.modelRel.value});
    }

    clearEvents(DOMel){
        this.modelRel.off( this );
    }

    constructor(DOMFind, modelRel, sets){
        super(DOMFind);
        
        this.modelRel = modelRel;
        this.sets = sets?sets:[
            {value: false, class: 'off'},
            {value: true, class: 'on'}
        ];
        this.skeys = this.sets.map(s => s.value);
    }
}

class zzLinkCheckboxValue extends zzLinkFind{
    addEventToEL(el){
        let onModelSet = function(ev){
            if (el.value){
                el.checked = (ev.value === el.value);
            }else{
                el.checked = ev.value?true:false;
            }
        }.bind(this);
        
        let onClick = function(e){
            if (el.checked){
                this.modelRel.value = el.value?el.value:true;
            }else{
                this.modelRel.value = el.value?'':false;
            }
        }.bind(this);
        
        this.modelRel.onSet( onModelSet, this);
        el.addEventListener('click', onClick, false);

        onModelSet({last: null, value: this.modelRel.value});
    }

    clearEvents(DOMel){
        this.modelRel.off( this );
    }

    constructor(DOMFind, modelRel){
        super(DOMFind);
        
        this.modelRel = modelRel;
    }
}

class zzLinkSelectValue extends zzLinkFind{
    removeClass(el, className){
        let cels = el.className.split(' ');
        let i = cels.indexOf(className);
        if (i !== -1){
            cels.splice(i, 1);
            el.className = cels.join(' ');
        }
    }
    
    addClass(el, className){
        let cels = el.className.split(' ');
        cels.push(className);
        el.className = cels.join(' ');
    }
    
    addEventToEL(el){
        let onModelSet = function(ev){
            let value = el.getAttribute(this.attrName) || (el.dataset[this.attrName]);
            if (value){
                if (ev.value === value){
                    this.addClass(el, this.className);
                }else{
                    this.removeClass(el, this.className);
                }
            }else if (!ev.value){
                this.addClass(el, this.className);
            }else{
                this.removeClass(el, this.className);
            }
        }.bind(this);
        
        let onClick = function(e){
            let value = el.getAttribute(this.attrName) || (el.dataset[this.attrName]);
            if (value){
                this.modelRel.value = value;
            }else{
                this.modelRel.value = false;
            }
        }.bind(this);
        
        this.modelRel.onSet( onModelSet, this);
        el.addEventListener('click', onClick, false);

        onModelSet({last: null, value: this.modelRel.value});
    }

    clearEvents(DOMel){
        this.modelRel.off( this );
    }

    constructor(DOMFind, modelRel, className, attrName){
        super(DOMFind);
        
        this.modelRel = modelRel;
        this.className = className;
        this.attrName = attrName || 'value';
    }
}

class zzLinkAttributeValue extends zzLinkFind{
    setupAttr(attr, modelArr, el){
        var DOMAttr = document.createAttribute(attr);
        el.setAttributeNode( DOMAttr );

        let dfn = () => {
            let value = '';

            for (let model of modelArr){
                if (model instanceof zzReference){
                    value += model.value;
                }else{
                    value += model;
                }
            }
            
            DOMAttr.value = value;
        };
        
        for (let model of modelArr){
            if (model instanceof zzReference){
                model.onSet(dfn, this);
            }
        }
        
        dfn();
    }
    
    addEventToEL(el){
        for (let name in this.attr){
            this.setupAttr(name, this.attr[name], el);
        }
    }

    clearEvents(){
        for (let name in this.attr){
            for (let model of this.attr[name]){
                if (model instanceof zzReference){
                    model.off( this );
                }
            }
        }
    }

    constructor(DOMFind, attr, modelRel){
        super(DOMFind);

        if (typeof attr === 'string'){
            !Array.isArray(modelRel) && (modelRel = [modelRel]);
            this.attr = {};
            this.attr[attr] = modelRel;
        }else{
            for (let name in attr){
                !Array.isArray(attr[name]) && (attr[name] = [attr[name]]);
                this.attr = attr;
            }            
        }
    }
}

class zzLinkStyleValue extends zzLinkAttributeValue{
    setupAttr(style, modelArr, el){
        let dfn = () => {
            let value = '';

            for (let model of modelArr){
                if (model instanceof zzReference){
                    value += model.value;
                }else{
                    value += model;
                }
            }
            
            el.style[style] = value;
        };
        
        for (let model of modelArr){
            if (model instanceof zzReference){
                model.onSet(dfn, this);
            }
        }
        
        dfn();
    }
}

class zzLinkClassValue extends zzLinkFind{
    addEventToEL(el){
        let listener = function(event){
            var cels = el.className.split(' ');
            
            if (event.last){
                var remove = event.last.split(' ');
                for (var r in remove){
                    let i = cels.indexOf(remove[r]);
                    if (i !== -1){
                        cels.splice(i, 1);
                    }            
                }
            }

            cels.push(event.value);

            el.className = cels.join(' ').replace(/\s+/gmi,' ');
        };

        this.modelRel.onSet( listener, this);
        
        listener({
            last: null,
            value: this.modelRel.value
        });
    }

    clearEvents(DOMel){
        this.modelRel.off( this );
    }

    constructor(DOMFind, modelRel){
        super(DOMFind);
        
        this.modelRel = modelRel;
    }
}

class zzLinkClassObjectValue extends zzLinkFind{
    setupClass(className, model, el){
        if (model instanceof zzReference){
            let listener = function(event){
                var cels = el.className.split(' ');

                var remove = className.split(' ');
                for (var r in remove){
                    let i = cels.indexOf(remove[r]);
                    if (i !== -1){
                        cels.splice(i, 1);
                    }            
                }

                if (event.value){
                    cels.push(className);
                }

                el.className = cels.join(' ').replace(/\s+/gmi,' ');
            };

            model.onSet( listener, this);

            listener({
                last: null,
                value: model.value
            });
        }else if (typeof model === 'string'){
            el.className += ' '+model;
        }
    }
    
    addEventToEL(el){
        for (let name in this.classes){
            this.setupClass(name, this.classes[name], el);
        }
    }

    clearEvents(field){
        for (let name in this.classes){
            if (this.classes[name] instanceof zzReference){
                this.classes[name].off( this );
            }
        }
    }

    constructor(DOMFind, classes){
        super(DOMFind);
        
        this.classes = classes;
    }
}

class zzLinkClick extends zzLinkFind{
    addEventToEL(el, DOMfield){
        el.addEventListener('click', this.fn.bind(this.self?this.self:DOMfield, el, DOMfield));
    }

    constructor(DOMFind, fn, self){
        super(DOMFind);
        
        this.fn = fn;
        this.self = self;
    }
}

class zzLinkIf extends zzLinkFind{
    addEventToEL(el){
        let DOMEmpty = document.createTextNode('');
        el.parentNode.insertBefore(DOMEmpty, el);
        
        let listener = function(event){
            let visible = Boolean(event.value);
            if (Boolean(event.last) !== visible){
                if (visible){
                    DOMEmpty.parentNode.insertBefore(el, DOMEmpty);
                }else{
                    el.remove();
                }
            }
        };

        this.modelRel.onSet( listener, this);
        
        listener({
            last: true,
            value: this.modelRel.value
        });
    }

    clearEvents(DOMel){
        this.modelRel.off( this );
    }

    constructor(DOMFind, modelRel){
        super(DOMFind);
        
        this.modelRel = modelRel;
    }
}

class zzLinkRoute extends zzLinkFind{
    getValue(v){
        return '/'+(Array.isArray(v)?v.join('/'):v);
    }
    
    addEventToEL(el){
        var DOMAttr = document.createAttribute('href');
        el.setAttributeNode( DOMAttr );

        el.addEventListener('click', function(ev){
            ev.preventDefault();
            Router.go((this.modelRel instanceof zzReference)?this.modelRel.value:this.modelRel);
        }.bind(this));
        
        if (this.modelRel instanceof zzReference){
            this.modelRel.onSet( function(){
                DOMAttr.value = this.getValue(this.modelRel.value);
            }, this).run();
        }else{
            DOMAttr.value = this.getValue(this.modelRel);
        }
    }

    clearEvents(DOMel){
        if (this.modelRel instanceof zzReference){
            this.modelRel.off( this );
        }
    }
        
    constructor(DOMFind, modelRel){
        super(DOMFind);
        
        this.modelRel = modelRel;
    }
}

class zzLinkRouteHref extends zzLinkFind{
    addEventToEL(el){
        el.addEventListener('click', function(ev){
            ev.preventDefault();
            Router.go( el.getAttribute( 'href' ) );
        }.bind(this));
    }

    clearEvents(DOMel){
        if (this.modelRel instanceof zzReference){
            this.modelRel.off( this );
        }
    }
}

module.exports = {
    __zzViewAddon:{
        /* shortcuts */
        preventSubmit(DOMFind){
           return this.link( new zzLinkPreventSubmit(DOMFind) );
        },
        input(DOMFind, modelRel, changeFn){
           return this.link( new zzLinkInputValue(DOMFind, modelRel, changeFn) );
        },
        inputInteger(DOMFind, modelRel){
           return this.input(DOMFind, modelRel, (value) => {
                let val = parseInt(value);
                return isNaN(val)?undefined:val;
           });
        },
        inputFloat(DOMFind, modelRel){
           return this.input(DOMFind, modelRel, (value) => {
                let val = parseFloat(value);
                return isNaN(val)?undefined:val;
           });
        },
        checkbox(DOMFind, modelRel, sets){
           return this.link( new zzLinkCheckboxValue(DOMFind, modelRel, sets) );
        },
        radio(DOMFind, modelRel, sets){
           return this.link( new zzLinkCheckboxValue(DOMFind, modelRel, sets) );
        },
        select(DOMFind, modelRel, className, attrName){
           return this.link( new zzLinkSelectValue(DOMFind, modelRel, className, attrName) );
        },
        autoResizeTextarea(DOMFind){
           return this.link( new zzLinkAutoResizeTextarea(DOMFind) );
        },
        text(DOMFind, modelRel, append){
           return this.link( new zzLinkTextValue(DOMFind, modelRel, append) );
        },
        html(DOMFind, modelRel){
           return this.link( new zzLinkHtmlValue(DOMFind, modelRel) );
        },
        switch(DOMFind, modelRel, sets){
           return this.link( new zzLinkSwitchValue(DOMFind, modelRel, sets) );
        },
        attr(DOMFind, attrName, modelRel){
            return this.link( new zzLinkAttributeValue(DOMFind, attrName, modelRel) );
        },
        style(DOMFind, cssName, modelRel){
            return this.link( new zzLinkStyleValue(DOMFind, cssName, modelRel) );
        },
        class(DOMFind, modelRel){
            if (typeof modelRel === 'string' || modelRel instanceof zzReference){
                return this.link( new zzLinkClassValue(DOMFind, modelRel) );
            }else{
                return this.link( new zzLinkClassObjectValue(DOMFind, modelRel) );
            }
        },
        click(DOMFind, fn, self){
            return this.link( new zzLinkClick(DOMFind, fn, self) );
        },
        if(DOMFind, modelRel){
            return this.link( new zzLinkIf(DOMFind, modelRel) );
        },
        route(DOMFind, data){
            if (data === undefined){
                return this.link( new zzLinkRouteHref(DOMFind) );
            }else{
                return this.link( new zzLinkRoute(DOMFind, data) );
            }
        }    
    }
};
