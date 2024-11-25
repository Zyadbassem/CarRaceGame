import Sizes from "../Utils/Sizes";
import Time from "../Utils/Time";
import * as THREE from "three";
import Camera from "./Camera";
import Renderer from "./Renderer";
import PhysicsWorld from "../PhysicsWorld/PhysicsWorld";

export default class Experience {
  constructor(canvas) {
    // Canvas
    this.canvas = canvas;

    // Sizes
    this.sizes = new Sizes();
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Scene
    this.scene = new THREE.Scene();

    // PhysicsWorld
    this.physicsWorld = new PhysicsWorld(this);

    // Camera
    this.camera = new Camera(this);

    // Renderer
    this.renderer = new Renderer(this);

    // Time
    this.time = new Time();
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.sizes.updateSizes();
    this.camera.updateCamera();
    this.renderer.resize();
  }
  update() {
    this.time.update();
    this.renderer.updateRenderer();
    this.physicsWorld.updateWorld();
  }
}
