setupScene() {
    console.log("Setting up enhanced scene lighting...");
    
    // Enhanced ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    this.scene.add(ambientLight);

    // Main directional light (sun)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 100, 25);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    this.scene.add(directionalLight);

    // Add some point lights for better illumination
    const pointLight1 = new THREE.PointLight(0x4444ff, 0.5, 100);
    pointLight1.position.set(50, 20, 50);
    this.scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff4444, 0.5, 100);
    pointLight2.position.set(-50, 20, -50);
    this.scene.add(pointLight2);

    // Enhanced fog
    this.scene.fog = new THREE.Fog(0x87CEEB, 50, 500);

    console.log("Enhanced lighting setup complete");
}
