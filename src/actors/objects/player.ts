import HTML5Game from '../../html5game';
import Actor from '../actor';
import {Vector3} from 'THREE';


/**
 * Represents the player object
 */
function player(a:Actor,game:HTML5Game){
    if(a.initialize){
        a.initialize = false;
    }

    if(game.input.poll('ArrowLeft')) a.num.x -= 10;
    if(game.input.poll('ArrowRight')) a.num.x += 10;
    if(game.input.poll('ArrowUp')) a.num.y -= 10;
    if(game.input.poll('ArrowDown')) a.num.y += 10;

    game.video.drawCircle(a.num.x,a.num.y,20);
    game.video.meshes['cube'].position.x = (a.num.x) * .005;
    game.video.meshes['cube'].position.y = (a.num.y) * -.005;
}

export default player;