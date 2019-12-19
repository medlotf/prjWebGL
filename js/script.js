import * as THREE from '../vendor/three.js-master/build/three.module.js';
import { OrbitControls } from '../vendor/three.js-master/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from '../vendor/three.js-master/examples/jsm/loaders/FBXLoader.js';
import { Material } from '../../cup/vendor/three.js-master/build/three.module.js';

let scene,camera,renderer,controls;

let init=()=>{
    scene= new THREE.Scene();

    camera= new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,45,30000);
    camera.position.set(-900,-200,-900);

    renderer=new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls=new OrbitControls(camera,renderer.domElement);
    controls.addEventListener('change',renderer);
    controls.minDistance=1000;
    controls.maxDistance=3000;
    
    let materialArray=[];
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
    scene.add(skybox);

    animate();
}

let animate=()=>{
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}

init();