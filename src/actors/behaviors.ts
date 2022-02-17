import image from './generic/image';
import startbutton from './hud/startbutton';
import player from './objects/player';
import ball from './objects/ball';

let behaviors: Record<string, Function> = {
    'image':image,
    'startbutton':startbutton,
    'player':player,
    'ball':ball
}

export default behaviors;