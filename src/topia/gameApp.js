import * as PIXI from 'pixi.js';

import {Data, Collection, LazyCollection} from 'lizzi';
import {Loader} from 'lizzi/DOM';

import './gameApp.css';
const T = Loader(require('./gameApp.html'));

const devicePixelRatio = window.devicePixelRatio || 1;

export class GameApp extends Data{
    initRenderer(field){
        let el = field.find('.app')[0];

        el.appendChild(this.pixi.view);

        let resize = () => {
            this.pixi.renderer.resize(el.clientWidth, el.clientHeight);

            this.container.x = el.clientWidth / devicePixelRatio / 2;
            this.container.y = el.clientHeight / devicePixelRatio / 2;
        };

        window.addEventListener('resize', resize);

        //resize after append
        setTimeout(resize, 0);
    }
    
    createView(){
        return T.createView('#app', this)
            .init(this.initRenderer.bind(this))
            .view('.calls', this.ref('portraitsUI'))
            .view('.chat', this.ref('chatUI'))
            .click('.chat', this.closeChat.bind(this))
            .if('.chat', this.ref('chatUI'));
    }
    
    showCallUI(player){
        this.portraitsUI = player.createCallsUIView();
    }

    initPixi(){
        //init PIXI app
        this.pixi = new PIXI.Application({
            width: 0, height: 0, resolution: devicePixelRatio, backgroundColor: 0xFFFFFF
        });

        this.container = new PIXI.Container();
        
        this.pixi.stage.addChild(this.container);
        
        // Create a background
        const texture = PIXI.Texture.from(require('./img/background.jpg').default);
        const background = new PIXI.Sprite(texture);
        background.anchor.x = texture.width / 2;
        background.anchor.y = texture.height / 2;
        background.zIndex = -100000;
        this.container.addChild(background);
        
        this.pixi.ticker.add((delta) => {
            this.container.children.sort((a, b) => a.zIndex - b.zIndex);
        });        
    }
    
    closeChat(){
        this.chatUI = null;
    }
    
    constructor(players){
        super();

        this.initPixi();
        
        this.set({
            portraitsUI: null,
            chatUI: null
        });
        
        this.players = new Collection([]);
        
        this.players.on('add', (player) => {
            player.emit('add-to', this);
            
            player.on('change-coords', p1 => {
                //if players over
                let players = this.players.elements;
                for (let p2 of players){
                    let dx = p1.x - p2.x;
                    let dy = p1.y - p2.y;

                    let len = Math.sqrt(dx*dx + dy*dy);
                    if (len < 80){
                        p1.emit('player-over', p2, p1);
                        p2.emit('player-over', p1, p2);
                    }else{
                        p1.emit('player-out', p2, p1);
                        p2.emit('player-out', p1, p2);
                    }
                }
            }).call(player);
            
            player.on('open-chat', (player) => {
                this.chatUI = player.createChatUIView();
            });
            
            player.on('close-chat', () => {
                this.closeChat();
            });
        });
        
        this.players.add(players);
    }
}

