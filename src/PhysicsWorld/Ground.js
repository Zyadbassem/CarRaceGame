import CANNON from "cannon";

export default class Ground {
  constructor(world) {
    this.world = world;

    this.createGround();
  }

  createGround() {
    const shape = new CANNON.Plane();
    this.ground = new CANNON.Body({
      mass: 0,
      shape: shape,
      material: this.world.materials.groundMaterial,
    });
    this.ground.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  }
  addGround() {
    this.world.world.addBody(this.ground);
  }
}
