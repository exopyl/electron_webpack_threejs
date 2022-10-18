'use strict';

var THREE = require('three');
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

var camera, scene, renderer, light;
var trackballControls;

function init() {

  // Camera
  const fov = 45;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 2000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 200);


  const canvas = document.querySelector('#c');
  renderer = new THREE.WebGLRenderer( { canvas } );
  renderer.setClearColor('#00A26D');
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  window.addEventListener('resize', onWindowResize, false);

    // Trackball
  trackballControls = new TrackballControls(camera, renderer.domElement);
  trackballControls.rotateSpeed = 2.
  trackballControls.update();
  trackballControls.addEventListener('change', render);
  camera.controls = trackballControls;

    // Scene.
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog("#00A26D", 400, 700);

    // axis helper
    var axis = new THREE.AxesHelper(5);
    scene.add(axis);

    // add ground
    var ground = new THREE.Mesh(
        new THREE.PlaneGeometry( 1000, 1000, 50, 50 ),
        new THREE.MeshBasicMaterial( { color: 0x0, wireframe: true } ) );
    ground.position.z = -0.01;
    scene.add(ground);


  // Lights
  light = new THREE.PointLight(0xffffff, 1.5);
  light.position.set(-600, 600, 1000);
  scene.add(light);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  render()
}

// start scene
init();
function animate() {
    requestAnimationFrame(animate)
    trackballControls.update();
    render()
}

// Draw Scene
function render() {
    renderer.render(scene, camera)
}

animate()
