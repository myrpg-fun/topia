import * as PIXI from 'pixi.js';
import delay from './delay';

import {Data, Collection, LazyCollection} from 'lizzi';
import {Loader} from 'lizzi/DOM';

import './player.css';
const T = Loader(require('./player.html'));

const accel = {fast: 0.1, slow: 0.2, speed: 3};

export class PlayerControl extends Data{
    constructor(){
        super({
            up: false,
            down: false,
            left: false,
            right: false
        });
        
        window.addEventListener('keydown', e => {
            switch(e.code){
                case 'ArrowUp':
                case 'KeyW':
                    this.up = true;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    this.down = true;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    this.left = true;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.right = true;
                    break;
            }
        });
        
        window.addEventListener('keyup', e => {
            switch(e.code){
                case 'ArrowUp':
                case 'KeyW':
                    this.up = false;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    this.down = false;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    this.left = false;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.right = false;
                    break;
            }
        });
    }
}

export class Player extends Data{
    addControl(control){
        control.on('set:up', ev => this.ay = ev.value?-0.1:0);
        control.on('set:down', ev => this.ay = ev.value?0.1:0);
        control.on('set:left', ev => {
            this.ax = ev.value?-accel.fast:0;
            this.look = 1;
        });
        control.on('set:right', ev => {
            this.ax = ev.value?accel.fast:0;
            this.look = -1;
        });
        
        return this;
    }
    
    createCallView(){
        let data = new Data({
            hide: false,
            hideMenu: true,
            sound: 50
        });
        
        return T.createView('#player', this)
            .init(async () => {
                data.hide = true;
                await delay(0);
                data.hide = false;
            }, async () => {
                data.hide = true;
                await delay(300);
            })
            .attr('.rounded img', {
                src: this.ref('portrait')
            })
            .click('.player .rounded, .player .volume', () => {
                data.hideMenu = !data.hideMenu;
            })
            .class('.player', {
                fadeout: data.ref('hide')
            })
            .click('.menu-hide', () => {
                data.hideMenu = true;
            })
            .click('.menu-send', () => {
                data.hideMenu = true;
                this.emit('open-chat', this);
            })
            .class('.menu', {
                fadeout: data.ref('hideMenu')
            })
            .click('.volume-slider', (el, view, ev) => {
                let rect = el.getBoundingClientRect();
                data.sound = Math.max(0, ev.clientX - rect.left - 10)*100/(rect.width - 20);
            })
            .style('.slider', {
                width: [data.ref('sound'), '%']
            })
            .style('.player', {
                left: [this.ref('viewX'), 'px'],
                boxShadow: ["0px 0px 20px ", this.ref('color'), ", 0px 0px 10px ", this.ref('color')]
            });
    }
    
    createCallsUIView(){
        return T.createView('#portraits', this)
            .collection('.portraits', this.userPortraitsUI, 'createCallView', true);
    }
    
    createChatUIView(){
        return T.createView('#chat', this)
            .attr('.rounded img', {
                src: this.ref('portrait')
            })
            .collection('.messages', this.messages, 'createView');
    }
    
    spriteInit(sprite){
        this.texture = PIXI.Texture.from(sprite);
        this.sprite = new PIXI.Sprite(this.texture);
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 1;
        
        this.on('add-to', (app) => {
            app.container.addChild(this.sprite);
            
            //pixi ticker needs to make global
            app.pixi.ticker.add((delta) => {
                //change acceleration/coordinates per tick
                if (this.ax === 0){
                    this.vx += -Math.sign(this.vx)*accel.slow;
                    if (Math.abs(this.vx)<= accel.slow){
                        this.vx = 0;
                    }
                }
                this.vx = Math.min(accel.speed, Math.max(-accel.speed, this.vx + this.ax * delta));
                
                if (this.ay === 0){
                    this.vy += -Math.sign(this.vy)*accel.slow;
                    if (Math.abs(this.vy)<= accel.slow){
                        this.vy = 0;
                    }
                }
                this.vy = Math.min(accel.speed, Math.max(-accel.speed, this.vy + this.ay * delta));
                
                this.x += this.vx * delta;
                this.y += this.vy * delta;
            });
        });
        
        this.on(['set:x', 'set:y'], () => {
            //move sprite
            this.sprite.x = this.x;
            this.sprite.y = this.y;
            this.sprite.zIndex = this.y;
        }).run();
        
        this.on(['set:look'], () => {
            //rotate sprite
            this.sprite.scale.x = this.look;
        }).run();
    }
    
    portraitInit(portrait, color){
        this.userPortraits = new Collection([]);
        
        this.set({
            viewX: 0
        });
        
        this.userPortraitsUI = new LazyCollection(this.userPortraits).setFilter(values => {
            let len = values.length;
            //sort by X
            values.forEach((v, i) => v.viewX = i * 200 - (len - 1) * 200 / 2);
            
            return values;
        });
        
        this.on(['set:x', 'set:y'], () => {
            this.emit('change-coords', this);
        });
        
        this.on('player-over', player => {
            if (!this.userPortraits.has(player)){
                this.userPortraits.add(player);
            }
        });
        
        this.on('player-out', player => {
            if (this.userPortraits.has(player)){
                this.userPortraits.remove(player);
            }
        });
        
        this.set({
            portrait: portrait,
            color: color
        });
    }
    
    addMessages(messages){
        this.messages.add(messages);
        
        return this;
    }
    
    constructor(x, y, options){
        super({
            //coords
            x: x,
            y: y,
            //velocity
            vx: 0,
            vy: 0,
            //acceleration
            ax: 0,
            ay: 0,
            //look at (1, -1)
            look: 1
        });
        
        this.spriteInit(options.sprite);
        this.portraitInit(options.portrait, options.color);
        
        this.messages = new Collection([]);
    }
};