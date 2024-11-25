import Experience from "./Experience/Experience";

const experience = new Experience(document.getElementById("web-gl"));

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";
// import CANNON from "cannon";
// import CannonDebugger from "cannon-es-debugger";

// /**
//  * Loaders
//  */
// const gltfLoader = new GLTFLoader();

// /**
//  * Sizes
//  */
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// /**
//  * Canvas
//  */
// const canvas = document.getElementById("web-gl");

// /**
//  * Scene
//  */
// const scene = new THREE.Scene();

// /**
//  * Meshs
//  */
// const axisHelper = new THREE.AxesHelper(20);
// scene.add(axisHelper);

// const floor = new THREE.Mesh(
//   new THREE.PlaneGeometry(100, 100),
//   new THREE.MeshBasicMaterial({
//     color: 0x000000,
//   })
// );
// floor.rotateX(-Math.PI * 0.5);
// scene.add(floor);

// const vehicleGroup = new THREE.Group();

// //scene.add(vehicleGroup);
// const wheelsGeometry = new THREE.SphereGeometry(1);
// const wheelsMaterial = new THREE.MeshBasicMaterial();

// const vehicleChassis = new THREE.Mesh(
//   new THREE.BoxGeometry(8, 1, 4),
//   new THREE.MeshBasicMaterial()
// );
// vehicleGroup.add(vehicleChassis);

// const vehicleWheel1 = new THREE.Mesh(wheelsGeometry, wheelsMaterial);
// vehicleWheel1.position.set(-2, 0, 2.5);
// vehicleGroup.add(vehicleWheel1);

// const vehicleWheel2 = new THREE.Mesh(wheelsGeometry, wheelsMaterial);
// vehicleWheel2.position.set(-2, 0, -2.5);
// vehicleGroup.add(vehicleWheel2);

// const vehicleWheel3 = new THREE.Mesh(wheelsGeometry, wheelsMaterial);
// vehicleWheel3.position.set(2, 0, -2.5);
// vehicleGroup.add(vehicleWheel3);

// const vehicleWheel4 = new THREE.Mesh(wheelsGeometry, wheelsMaterial);
// vehicleWheel4.position.set(2, 0, 2.5);
// vehicleGroup.add(vehicleWheel4);

// /**
//  * Physics
//  */
// // World
// const world = new CANNON.World();
// world.gravity = new CANNON.Vec3(0, -9.82, 0);

// const defaultMaterial = new CANNON.Material("default");
// const contactMaterial = new CANNON.ContactMaterial(
//   defaultMaterial,
//   defaultMaterial,
//   {
//     friction: 0.3,
//     restitution: 0.1,
//   }
// );
// world.addContactMaterial(contactMaterial);

// // Debugger
// const cannonDebugger = new CannonDebugger(scene, world, {
//   color: 0xffff00,
// });

// // Ground
// const groundBody = new CANNON.Body({
//   shape: new CANNON.Plane(),

//   type: CANNON.Body.STATIC,
// });
// groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
// world.addBody(groundBody);

// // Car

// const carBody = new CANNON.Body({
//   mass: 10,
//   shape: new CANNON.Box(new CANNON.Vec3(4, 0.5, 2)),
//   position: new CANNON.Vec3(0, 6, 0),
// });

// const vehicle = new CANNON.RigidVehicle({
//   chassisBody: carBody,
// });

// // Wheels
// const mass = 0.1;
// const axisWidth = 5;
// const wheelShape = new CANNON.Sphere(1);
// const wheelMaterial = new CANNON.Material("wheel");
// const down = new CANNON.Vec3(0, -1, 0);

// const wheelBody1 = new CANNON.Body({ mass, material: wheelMaterial });
// wheelBody1.addShape(wheelShape);
// wheelBody1.angularDamping = 0.4;
// vehicle.addWheel({
//   body: wheelBody1,
//   position: new CANNON.Vec3(-2, 0, axisWidth / 2),
//   axis: new CANNON.Vec3(0, 0, 1),
//   direction: down,
// });

// const wheelBody2 = new CANNON.Body({ mass, material: wheelMaterial });
// wheelBody2.addShape(wheelShape);
// wheelBody2.angularDamping = 0.4;
// vehicle.addWheel({
//   body: wheelBody2,
//   position: new CANNON.Vec3(-2, 0, -axisWidth / 2),
//   axis: new CANNON.Vec3(0, 0, 1),
//   direction: down,
// });

// const wheelBody3 = new CANNON.Body({ mass, material: wheelMaterial });
// wheelBody3.addShape(wheelShape);
// wheelBody3.angularDamping = 0.4;
// vehicle.addWheel({
//   body: wheelBody3,
//   position: new CANNON.Vec3(2, 0, axisWidth / 2),
//   axis: new CANNON.Vec3(0, 0, 1),
//   direction: down,
// });

// const wheelBody4 = new CANNON.Body({ mass, material: wheelMaterial });
// wheelBody4.addShape(wheelShape);
// wheelBody4.angularDamping = 0.4;
// vehicle.addWheel({
//   body: wheelBody4,
//   position: new CANNON.Vec3(2, 0, -axisWidth / 2),
//   axis: new CANNON.Vec3(0, 0, 1),
//   direction: down,
// });

// vehicle.addToWorld(world);

// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(-10, 10, -4);
// scene.add(directionalLight);

// /**
//  * Camera
//  */
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   1000
// );
// camera.position.set(0, 6, 20);
// scene.add(camera);
// const controls = new OrbitControls(camera, canvas);

// /**
//  * Move car with arrow
//  */
// const moveForward = (force) => {
//   vehicle.setWheelForce(force, 0);
//   vehicle.setWheelForce(force, 1);
//   vehicle.setWheelForce(force, 2);
//   vehicle.setWheelForce(force, 3);
// };

// const moveBackward = (force) => {
//   vehicle.setWheelForce(-force, 0);
//   vehicle.setWheelForce(-force, 1);
//   vehicle.setWheelForce(-force, 2);
//   vehicle.setWheelForce(-force, 3);
// };

// const steerAngle = Math.PI / 8; // Adjust this value for sharper or smoother turns

// const steerRight = () => {
//   vehicle.setSteeringValue(-steerAngle, 0); // Front-left wheel
//   vehicle.setSteeringValue(-steerAngle, 1); // Front-right wheel
// };

// const steerLeft = () => {
//   vehicle.setSteeringValue(steerAngle, 0); // Front-left wheel
//   vehicle.setSteeringValue(steerAngle, 1); // Front-right wheel
// };

// const stopSteering = () => {
//   vehicle.setSteeringValue(0, 0); // Reset front-left wheel
//   vehicle.setSteeringValue(0, 1); // Reset front-right wheel
// };

// const stopMoving = () => {
//   vehicle.setWheelForce(0, 0);
//   vehicle.setWheelForce(0, 1);
//   vehicle.setWheelForce(0, 2);
//   vehicle.setWheelForce(0, 3);
// };

// document.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "w":
//     case "ArrowUp":
//       moveForward(10);
//       break;

//     case "s":
//     case "ArrowDown":
//       moveBackward(10);
//       break;

//     case "a":
//     case "ArrowLeft":
//       steerLeft();
//       break;

//     case "d":
//     case "ArrowRight":
//       steerRight();
//       break;
//   }
// });

// document.addEventListener("keyup", (event) => {
//   switch (event.key) {
//     case "w":
//     case "ArrowUp":
//     case "s":
//     case "ArrowDown":
//       stopMoving();
//       break;

//     case "a":
//     case "ArrowLeft":
//     case "d":
//     case "ArrowRight":
//       stopSteering();
//       break;
//   }
// });
// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);

// const clock = new THREE.Clock();
// let oldElapsedTime = 0;
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   const deltaTime = elapsedTime - oldElapsedTime;
//   oldElapsedTime = elapsedTime;

//   /**
//    * Physics
//    */
//   cannonDebugger.update();
//   world.step(1 / 60, deltaTime, 3);

//   vehicleChassis.position.copy(carBody.position);
//   vehicleChassis.quaternion.copy(carBody.quaternion);

//   vehicleWheel1.position.copy(wheelBody1.position);
//   vehicleWheel1.quaternion.copy(wheelBody1.quaternion);

//   vehicleWheel2.position.copy(wheelBody2.position);
//   vehicleWheel2.quaternion.copy(wheelBody2.quaternion);

//   vehicleWheel3.position.copy(wheelBody3.position);
//   vehicleWheel3.quaternion.copy(wheelBody3.quaternion);

//   vehicleWheel4.position.copy(wheelBody4.position);
//   vehicleWheel4.quaternion.copy(wheelBody4.quaternion);
//   renderer.render(scene, camera);
//   //   console.log("Car Body Force:", carBody.force);
//   //   console.log("Car Body Position:", carBody.position);
//   window.requestAnimationFrame(tick);
// };

// tick();
