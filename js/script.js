import * as THREE from '../vendor/three.js-master/build/three.module.js';
import { OrbitControls } from '../vendor/three.js-master/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/loaders/GLTFLoader.js';

let scene,camera,renderer,controls;

let init=()=>{

    scene= new THREE.Scene();
    scene.background=new THREE.Color(0xdddddd);

    //camera= new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,45,30000);
    //camera.position.set(-900,-200,-900);
    //camera.position.set(0,0,0);

    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y=45/180*Math.PI;
    camera.position.set(800,100,1000);

    renderer=new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera,renderer.domElement);
    controls.addEventListener('change', renderer);
    controls.minDistance=1000;
    controls.maxDistance=3000;
    
    /*let materialArray=[];
    let loader=new THREE.TextureLoader();
    let txt_ft=loader.load('Skybox/meadow_ft.jpg');
    let txt_bk=loader.load('Skybox/meadow_bk.jpg');
    let txt_up=loader.load('Skybox/meadow_up.jpg');
    let txt_dn=loader.load('Skybox/meadow_dn.jpg');
    let txt_rt=loader.load('Skybox/meadow_rt.jpg');
    let txt_lf=loader.load('Skybox/meadow_lf.jpg');
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_ft, side:THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_bk, side:THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_up, side:THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_dn, side:THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_rt, side:THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_lf, side:THREE.DoubleSide}));
    let skyboxGeo= new THREE.BoxGeometry(20000,20000,20000);
    let skybox=new THREE.Mesh(skyboxGeo,materialArray);
    scene.add(skybox);*/

    //houses,tribune,plane texture
    /*let loaderr = new GLTFLoader();
    loaderr.load('perso.gltf',(obj)=>{
        //car=obj.scene.children[0];
        obj.scene.scale.set(2,2,2);
        obj.scene.position.set(0,0,0);
        scene.add(obj.scene);
    });*/
                //PointLight
                let light = new THREE.PointLight(0xc4c4c4,4);
                light.position.set(0,300,500);
                scene.add(light);
    
                let light2 = new THREE.PointLight(0xc4c4c4,4);
                light2.position.set(500,100,0);
                scene.add(light2);
    
                let light3 = new THREE.PointLight(0xc4c4c4,4);
                light3.position.set(0,100,-500);
                scene.add(light3);
    
                let light4 = new THREE.PointLight(0xc4c4c4,4);
                light4.position.set(-500,300,500);
                scene.add(light4);
    
               
    
                //gltf object
                let loader=new GLTFLoader();
                loader.load('perso.gltf',(obj)=>{
                    let car=obj.scene.children[0];
                    car.scale.set(2,2,2);
                    scene.add(obj.scene);
                });

    animate();
}

let animate=()=>{
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}
    
init();