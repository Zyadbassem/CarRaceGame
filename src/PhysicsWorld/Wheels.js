import CANNON from "cannon";

export default class Wheels {
  constructor(world) {
    this.world = world;
    this.vehicle = world.car.vehicle;
  }

  addWheels() {
    const wheelsShape = new CANNON.Sphere(1);
    const mass = 0.1;
    this.wheelsMaterial = this.world.materials.wheelsMaterial;
    const down = new CANNON.Vec3(0, -1, 0);
    const axisWidth = 5;

    // Wheel1 fl
    const wheelBody1 = new CANNON.Body({ mass, material: this.wheelsMaterial });
    wheelBody1.addShape(wheelsShape);
    wheelBody1.angularDamping = 0.4;
    this.vehicle.addWheel({
      body: wheelBody1,
      position: new CANNON.Vec3(-2, 0, axisWidth / 2),
      axis: new CANNON.Vec3(0, 0, 1),
      direction: down,
    });

    // Wheelw fr
    const wheelBody2 = new CANNON.Body({ mass, material: this.wheelsMaterial });
    wheelBody2.addShape(wheelsShape);
    wheelBody2.angularDamping = 0.4;
    this.vehicle.addWheel({
      body: wheelBody2,
      position: new CANNON.Vec3(-2, 0, -axisWidth / 2),
      axis: new CANNON.Vec3(0, 0, 1),
      direction: down,
    });

    // Wheelw rl
    const wheelBody3 = new CANNON.Body({ mass, material: this.wheelsMaterial });
    wheelBody3.addShape(wheelsShape);
    wheelBody3.angularDamping = 0.4;
    this.vehicle.addWheel({
      body: wheelBody3,
      position: new CANNON.Vec3(2, 0, axisWidth / 2),
      axis: new CANNON.Vec3(0, 0, 1),
      direction: down,
    });

    // Wheelw rr
    const wheelBody4 = new CANNON.Body({ mass, material: this.wheelsMaterial });
    wheelBody4.addShape(wheelsShape);
    wheelBody4.angularDamping = 0.4;
    this.vehicle.addWheel({
      body: wheelBody4,
      position: new CANNON.Vec3(2, 0, -axisWidth / 2),
      axis: new CANNON.Vec3(0, 0, 1),
      direction: down,
    });

    this.vehicle.setSteeringValue(-Math.PI / 2, 0);
    this.vehicle.setSteeringValue(-Math.PI / 2, 1);
  }
}
