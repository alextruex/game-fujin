import * as THREE from 'three';

class HTML5Video{
    canvas:HTMLCanvasElement;
    canvas3D:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    renderer:THREE.WebGLRenderer;
    images:Record<string,HTMLImageElement>;
    meshes:Record<string,THREE.Mesh> = {};
    scene:THREE.Scene;
    camera:THREE.Camera;

    constructor(width:number,height:number){
        this.canvas = document.createElement('canvas');

        this.canvas.width = width;
        this.canvas.height = height;
        if (width > height){
            this.canvas.style.width = '100vw';
            this.canvas.style.height = height/width*100 + 'vw';
            this.canvas.style.maxHeight = '100vh'
            this.canvas.style.maxWidth = width/height*100 + 'vh';
        }
        else{
            this.canvas.style.width = width/height*100 + 'vh';
            this.canvas.style.height = '100vh';
            this.canvas.style.maxHeight = height/width*100 + 'vw'
            this.canvas.style.maxWidth = '100vw';
        }       
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0px';
        this.canvas.style.right = '0px';
        this.canvas.style.top = '0px';
        this.canvas.style.bottom = '0px';
        this.canvas.style.margin = 'auto';
        this.canvas.id = "gameCanvas";

        this.canvas3D = document.createElement('canvas');
        this.canvas3D.width = width;
        this.canvas3D.height = height;
        if (width > height){
            this.canvas3D.style.width = '100vw';
            this.canvas3D.style.height = height/width*100 + 'vw';
            this.canvas3D.style.maxHeight = '100vh'
            this.canvas3D.style.maxWidth = width/height*100 + 'vh';
        }
        else{
            this.canvas3D.style.width = width/height*100 + 'vh';
            this.canvas3D.style.height = '100vh';
            this.canvas3D.style.maxHeight = height/width*100 + 'vw'
            this.canvas3D.style.maxWidth = '100vw';
        }        
        /*
        this.canvas3D.style.width = '100vw';
        this.canvas3D.style.height = 'height: 56.25vw';
        this.canvas3D.style.maxHeight = '100vh'
        this.canvas3D.style.maxWidth = '177.78vh';
        */
        this.canvas3D.style.position = 'absolute';
        this.canvas3D.style.left = '0px';
        this.canvas3D.style.right = '0px';
        this.canvas3D.style.top = '0px';
        this.canvas3D.style.bottom = '0px';
        this.canvas3D.style.margin = 'auto';
        this.canvas3D.id = "threeCanvas";

        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        document.body.appendChild(this.canvas3D);
        document.body.appendChild(this.canvas);

        document.body.style.backgroundColor = '#000000';
        document.body.style.backgroundImage = 'url("images/backgrounds/wallpaper.png")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.margin = '0px';
        this.images = {};

        this.renderer = new THREE.WebGLRenderer( { canvas: this.canvas3D } );
        this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, this.canvas.width / this.canvas.height, 0.1, 1000 );
        const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		this.meshes['cube'] = new THREE.Mesh( geometry, material );
        this.scene.add(this.meshes['cube']);
		this.camera.position.z = 5;
    }

    render(){
	    this.renderer.render( this.scene, this.camera );
    }

    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    
    drawImage(x:number,y:number,img:string){
        if (typeof this.images[img] == "undefined"){
            this.images[img] = new Image();
            this.images[img].src = img;
        }
        let image = this.images[img];
        this.ctx.drawImage(image,x,y);
    }

    drawRect(x:number,y:number,w:number,h:number){
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(x,y,w,h);
    }

    drawCircle(x:number,y:number,r:number){
        this.ctx.fillStyle = '#FF0000';
        this.ctx.beginPath();
        this.ctx.arc(x + this.canvas.width/2,y + this.canvas.height/2,r, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'gold';
        this.ctx.fill();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#663300';
        this.ctx.stroke();
    }

    debugText(text:string){
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.font = 'bold 32px sans-serif';
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText(text,644,20);
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillText(text,640,16);
    }

    drawLine(x1:number,y1:number,x2:number,y2:number){
        this.ctx.strokeStyle = '#AA0000';
        this.ctx.beginPath();
        this.ctx.moveTo(x1,y1);
        this.ctx.lineTo(x2,y2);
        this.ctx.stroke();
    }

    resizeCanvas(){
        
    }

    
}

export default HTML5Video;