import CANNON from "cannon";

export default class CarPhysics {
  constructor(world) {
    this.car = world.car.vehicle;
    console.log(this.car);
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" || e.key === "w") {
        this.moveForward();
      } else if (e.key === "ArrowDown" || e.key === "s") {
        this.moveBackward();
      } else if (e.key === "ArrowRight" || e.key === "d") {
        this.moveRight();
      } else if (e.key === "ArrowLeft" || e.key === "a") {
        this.moveLeft();
      }
    });

    document.addEventListener("keyup", (e) => {
      this.stop();
    });
  }
  moveForward() {
    this.car.setWheelForce(10, 0);
    this.car.setWheelForce(10, 1);
  }
  moveBackward() {
    this.car.setWheelForce(-5, 0);
    this.car.setWheelForce(-5, 1);
  }
  moveRight() {
    this.car.setSteeringValue(5, 3);
    this.car.setSteeringValue(5, 2);
  }
  stop() {
    this.car.setWheelForce(0, 0);
    this.car.setWheelForce(0, 1);
  }
}
