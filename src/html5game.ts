import HTML5Video from './html5video';
import HTML5Audio from './html5audio';
import HTML5Input from './html5input';
import HTML5Data from './html5data';
import Actor from './actors/actor';
import behaviors from './actors/behaviors';

class HTML5Game{
    video:HTML5Video;
    audio:HTML5Audio;
    input:HTML5Input;
    data:HTML5Data;
    state:Record<string,string>;
    stage:Array<Actor>;

    constructor(){
        this.video = new HTML5Video(720,1280);
        this.audio = new HTML5Audio();
        this.input = new HTML5Input();
        this.data = new HTML5Data();
        this.state = {};
        this.stage = [];
        this.data.loadStage('stages/stage1.xml',this);

        //setInterval(() => {this.main();},1000/4);
        window.requestAnimationFrame(() => {this.main()});
    }

    main(){
        this.video.clear();
        this.stage.forEach((actor) => {
            if(typeof behaviors[actor.behavior] != 'undefined')behaviors[actor.behavior](actor,this);
        });
        this.video.render();

        window.requestAnimationFrame(() => {this.main()});
    }
    
}

export default HTML5Game;