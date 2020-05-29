import './app.css';

import {GameApp} from './gameApp';
import {Player, PlayerControl} from './player';
import {Message} from './chat';

let player1;

const MainApp = new GameApp([
    player1 = new Player(-100, 0, {
        sprite: require('./img/pl1.png').default,
        portrait: require('./img/pl1.jpg').default,
        color: '#cacd87'
    } ).addControl( new PlayerControl ).addMessages([
        new Message('#cacd87', 'Dylan', 'Message 1'),
        new Message('#87c9cd', 'James', 'Message 2'),
        new Message('#cacd87', 'Dylan', 'Message 3'),
        new Message('#cacd87', 'Dylan', 'Message 4')
    ]),
    new Player(100, 0, {
        sprite: require('./img/pl2.png').default,
        portrait: require('./img/pl2.jpg').default,
        color: '#87c9cd'
    } ).addMessages([
        new Message('#87c9cd', 'Hayden', 'Message 1'),
        new Message('#cacd87', 'Dylan', 'Message 2'),
        new Message('#87c9cd', 'Hayden', 'Message 3'),
        new Message('#87c9cd', 'Hayden', 'Message 4'),
        new Message('#cacd87', 'Dylan', 'Message 5'),
        new Message('#87c9cd', 'Hayden', 'Message 6'),
        new Message('#87c9cd', 'Hayden', 'Message 7')
    ]),
    new Player(100, 100, {
        sprite: require('./img/pl3.png').default,
        portrait: require('./img/pl3.jpg').default,
        color: '#cd8ad1'
    } ).addMessages([
        new Message('#cacd87', 'Dylan', 'Message 1'),
        new Message('#cd8ad1', 'Dan', 'Message 2')
    ])
]);

MainApp.showCallUI(player1);

export default MainApp;