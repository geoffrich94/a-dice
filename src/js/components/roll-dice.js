const rollDiceComponent = {
  init: function () {
    this.el.sceneEl.addEventListener('click', function (event) {

      console.log(camera.object3D.position);

      // Create element to be thrown, setting position, scale, and model
      const diceModel = document.createElement('a-entity');
      // diceModel.setAttribute('position', camera.object3D.position);
      diceModel.setAttribute('position', '0 1.6 -2');
      diceModel.setAttribute('scale', '0.1 0.1 0.1');
      diceModel.setAttribute('gltf-model', '#diceModel');

      // Choose a random rotation offset for some variation
      const randomRotation = {
        x: -90 + Math.random() * 30, y: Math.random() * 360, z: 0
      };
      diceModel.setAttribute('rotation', randomRotation);

      // Set velocity, rotated with camera direction
      // const velocity = new THREE.Vector3(0, 0, -10);
      // velocity.applyQuaternion(camera.object3D.quaternion);
      // diceModel.setAttribute('velocity', velocity);

      // Add physics body
      diceModel.setAttribute('body', {
        type: 'dynamic',
        shape: 'box',
      });

      // Add dice to scene
      const scene = document.getElementById('scene');
      scene.appendChild(diceModel);
    })
  }
};

AFRAME.registerComponent('roll-dice', rollDiceComponent);