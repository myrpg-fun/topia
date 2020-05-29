import {Data, Collection, LazyCollection} from 'lizzi';
import {Loader} from 'lizzi/DOM';

import './chat.css';
const T = Loader(require('./chat.html'));

export class Message extends Data{
    createView(){
        return T.createView('#message', this)
            .style('.mi-color', {
                background: this.ref('color')
            })
            .text('.mi-name', this.ref('name'))
            .text('.mi-message', this.ref('message'));
    }
    
    constructor(color, name, message){
        super({
            color: color,
            name: name,
            message: message
        });
    }
}
