import HTML5Game from '../../html5game';

function startbutton(actor:Record<string,string|number>,game:HTML5Game){
    if(typeof actor.load == "undefined"){
        actor.load = 1;
        actor.frame = 0;
    }

    game.video.drawImage(<number>actor.frame*1280/640,0,'images/hud/stars1.png');
    game.video.drawImage(<number>actor.frame*1280/480,0,'images/hud/stars2.png');

    if(typeof actor.frame == 'number') actor.frame +=1;
    if(actor.frame > 120) actor.frame = 1;

    game.video.drawImage(440,520,'images/hud/startbutton.png');

    let x = game.input.poll('mouseX');
    let y = game.input.poll('mouseY');
    if(x > 440 && x < 840 && y > 520 && y < 640){
        game.video.drawImage(440,520,'images/hud/startarrows.png');
        if(game.input.poll('mouse1')){
            game.data.loadStage('stages/stage1.xml',game);
        }
    }

    

}

export default startbutton;