import CANNON from "cannon";

export default class Material {
  constructor(world) {
    this.world = world;
    this.materials = [];
    this.createContactMaterial();
  }
  createContactMaterial() {
    this.wheelsMaterial = new CANNON.Material("wheels");
    this.groundMaterial = new CANNON.Material("ground");

    this.groundWheelsContactMaterial = new CANNON.ContactMaterial(
      this.wheelsMaterial,
      this.groundMaterial,
      {
        friction: 0.3,
        restitution: 0.1,
      }
    );
    this.world.world.addContactMaterial(this.groundWheelsContactMaterial);
  }
}
