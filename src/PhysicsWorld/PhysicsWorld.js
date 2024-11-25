import CANNON from "cannon";
import CannonDebugger from "cannon-es-debugger";
import Ground from "./Ground";
import Car from "./Car";
import Material from "./Materials";
import Wheels from "./Wheels";
import CarPhysics from "./CarPhysics";

export default class PhysicsWorld {
  constructor(experience) {
    this.experience = experience;
    this.createNewWorld();
    this.createDebugger();

    this.materials = new Material(this);

    this.ground = new Ground(this);
    this.ground.addGround();

    this.car = new Car(this);
    this.wheels = new Wheels(this);
    this.wheels.addWheels();
    this.car.addToWorld();

    this.carPhysics = new CarPhysics(this);
  }

  createNewWorld() {
    this.world = new CANNON.World();
    this.world.gravity = new CANNON.Vec3(0, -10.8, 0);
  }
  createDebugger() {
    this.debugger = new CannonDebugger(this.experience.scene, this.world, {
      color: 0xff0fff,
    });
  }
  updateWorld() {
    this.debugger.update();
    this.world.step(1 / 60, 16, 3);
  }
}
