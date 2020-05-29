import '@/reboot.css';
import {MainApp} from 'lizzi/DOM/MainApp';
import {Router} from 'lizzi/Router';

class MyApp extends MainApp{
    constructor(){
        super({
            title: 'Topia.io - loading'
        });
        
        Router.exactMatch([], () => 
            import('./topia/app').then(
                app => {
                    this.title = 'Topia.io';
                    this.app = app.default.createView();
                }
            )
        );

        //404 error
        Router.noMatch(() => 
            import('./404/index').then(
                app => {
                    this.title = 'Topia.io - Page not found';
                    this.app = app.default.createView();
                }
            )
        );
    }
};

const app = new MyApp;
