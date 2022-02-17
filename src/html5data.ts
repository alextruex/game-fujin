import HTML5Game from './html5game';
import Actor from './actors/actor';

class HTML5Data{
    constructor(){
        
    }

    loadStage(file:string,game:HTML5Game){
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener('load', () => {
            let dom = new DOMParser();
            let doc = dom.parseFromString(xhttp.responseText,'text/xml');
            console.log(doc);
            let newStage:Array<Actor> = [];
            let actors = doc.firstElementChild?.children;
            
            if(typeof actors != 'undefined') for(let i = 0; i < actors.length; i++){
                let newActor:Actor = {
                    behavior:actors[i].nodeName,
                    initialize:true,
                    num:{},
                    str:{}
                };
                for(let j = 0; j < actors[i].attributes.length; j++){
                    let key = actors[i].attributes[j].nodeName;
                    let value = actors[i].attributes[j].nodeValue;
                    if(typeof key == 'string' && typeof value == 'string'){
                        if(isNaN(+value)) newActor.str[key] = value;
                        else newActor.num[key] = +value;
                    }
                }
                newStage.push(newActor);
            }
            game.stage = newStage;
            console.log(newStage);
        });
        xhttp.open("GET",file);
        xhttp.send();
    }
}

export default HTML5Data;