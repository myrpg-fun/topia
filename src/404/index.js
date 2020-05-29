const {Data, Collection, CollectionFilter} = require('lizzi');
const {Loader} = require('lizzi/DOM');

const T = Loader( require('./index.html') );

class E404App extends Data{
    createView(){
        return T.createView('#e404', this)
            .route('a', [])
            .init(function(field){
                let el = field.find('.menu-block').elements[0];
                function doResize() {
                    var scale;

                    var elWidth = 1920;
                    var elHeight = 1080;

                    scale = Math.min(
                      window.innerWidth / elWidth,    
                      window.innerHeight / elHeight
                    );

                    el.setAttribute('style', "transform:translate(-50%, -50%) " + "scale(" + scale + ")");
                }

                window.onresize = doResize;
                doResize();
            });        
    }
}

export default new E404App;