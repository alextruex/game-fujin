import HTML5Game from '../../html5game';
import Actor from '../actor';

function image(actor:Actor,game:HTML5Game){
    game.video.drawImage(actor.num.x,actor.num.y,actor.str.img);
}

export default image;