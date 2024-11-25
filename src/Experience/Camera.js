import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default class Camera {
  constructor(experience) {
    this.experience = experience;
    this.sizes = experience.sizes;

    this.addCamera();
    this.addOrbitControls();
  }

  addCamera() {
    this.camera = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      1000
    );
    this.experience.scene.add(this.camera);
    this.camera.position.set(0, 20, 50);
    this.camera.lookAt(this.experience.scene);
  }
  updateCamera() {
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  }
  addOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.experience.canvas);
  }
}
