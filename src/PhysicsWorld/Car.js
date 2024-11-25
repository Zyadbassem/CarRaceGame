import CANNON from "cannon";

export default class Car {
  constructor(world) {
    this.world = world;

    this.createCar();
  }

  createCar() {
    this.carShape = new CANNON.Box(new CANNON.Vec3(4, 0.5, 2));
    this.carBody = new CANNON.Body({
      mass: 100,
      shape: this.carShape,
      material: this.world.materials.wheelsMaterial,
    });
    this.carBody.position.set(0, 6, 0);
    this.vehicle = new CANNON.RigidVehicle({
      chassisBody: this.carBody,
    });
  }
  addToWorld() {
    this.vehicle.addToWorld(this.world.world);
  }
}
