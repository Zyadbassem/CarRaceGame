import * as THREE from "three";

export default class Renderer {
  constructor(experience) {
    this.experience = experience;

    this.createRenderer();
  }
  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.experience.canvas,
    });
    this.renderer.setSize(
      this.experience.sizes.width,
      this.experience.sizes.height
    );
  }
  resize() {
    this.renderer.setSize(
      this.experience.sizes.width,
      this.experience.sizes.height
    );
  }

  updateRenderer() {
    this.renderer.render(this.experience.scene, this.experience.camera.camera);
  }
}
