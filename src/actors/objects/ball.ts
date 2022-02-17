import HTML5Game from '../../html5game';
import Actor from '../actor';

function ball(actor:Actor,game:HTML5Game){
    game.video.drawCircle(actor.num.x,actor.num.y,actor.num.r);
}

export default ball;