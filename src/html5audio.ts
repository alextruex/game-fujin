class HTML5Audio{
    sounds:Record<string,HTMLAudioElement>;
    
    constructor(){
        this.sounds = {};
    }

    playSound(snd:string){
        if(typeof this.sounds[snd] == 'undefined'){
            this.sounds[snd] = new Audio();
            this.sounds[snd].src = snd;
        }
        this.sounds[snd].play();
    }

    loopSound(){

    }

    stopSound(){

    }
}

export default HTML5Audio;