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

    let materialArray=[];
    let loader=new THREE.TextureLoader();
    let txt_ft=loader.load('../skybox/mp_normandy/normandy_ft.tga');
    let txt_bk=loader.load('../skybox/mp_normandy/normandy_bk.tga');
    let txt_up=loader.load('../skybox/mp_normandy/normandy_up.tga');
    let txt_dn=loader.load('../skybox/mp_normandy/normandy_dn.tga');
    let txt_rt=loader.load('../skybox/mp_normandy/normandy_rt.tga');
    let txt_lf=loader.load('../skybox/mp_normandy/normandy_lf.tga');
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_ft}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_bk}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_up}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_dn}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_rt}));
    materialArray.push(new THREE.MeshBasicMaterial({map:txt_lf}));
    
    let skyboxGeo= new THREE.BoxGeometry(10000,10000,10000);
    let skybox=new THREE.Mesh(skyboxGeo,materialArray);
    scene.add(skybox);



}
