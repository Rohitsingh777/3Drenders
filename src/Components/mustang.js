

import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { TextureLoader } from "three";

import { useEffect } from 'react';
import { MeshStandardMaterial } from 'three';

const Lambo = () => {
  const obj = useLoader(FBXLoader, "lambo/H_NSX_2019.fbx");
  const texture = useLoader(TextureLoader, "lambo/ff.png");
  const colorMap = useLoader(TextureLoader, "lambo/tr.png"); // Assuming you have a color map

  useEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        // Create a new MeshStandardMaterial for better PBR rendering
        const material = new MeshStandardMaterial({
          map: texture,
          color: 0xffffff, // Set a base color (white in this case)
          metalness: 0.8,
          roughness: 0.2,
        });

        // Apply color map if available
        if (colorMap) {
          material.color.setHex(0xffffff); // Reset to white to allow color map to show properly
          material.map = colorMap;
        }

        child.material = material;
        child.material.needsUpdate = true;
      }
    });
  }, [obj, texture, colorMap]);

  return <primitive object={obj} scale={0.4} />;
};





//  const Lambo = () => {
//     // const materials = useLoader(FBXLoader, "Poimandres.mtl");
//     const obj = useLoader(FBXLoader, "lambo/H_NSX_2019.fbx");
//     console.log(obj);

//   // Optional: Manually apply a texture if not applied correctly
//   const texture = useLoader(TextureLoader, "lambo/ff.png");




//   obj.traverse((child) => {
//     if (child.isMesh) {
//       // Manually set the material and texture
//       child.material.map = texture;
//       child.material.needsUpdate = true;
//     }
//   });
//     return <primitive object={obj} scale={0.4} />;
//   };
  
  
  
  
  export default Lambo ; 