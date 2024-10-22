


// import "./styles.css";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense, useRef } from "react";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import Lambo from "./Components/mustang";
import { CAR } from "./Components/Gldexp";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, "Poimandres.mtl");
  const obj = useLoader(OBJLoader, "Mustang Mach-E.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};



export default function App() {

      
  return (
    <>
    {/* <div
     style={{
      width : "50vw",
      height : "50vh"
    }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls scale={false} />
          <Environment preset="sunset" background />
        </Suspense>
        <directionalLight position={[10, 10, 5]} intensity={0.1} color={"red"} />

      </Canvas>
    </div>
     */}
    <div
      style={{
        width : "100vw",
        height : "100vh"
      }}
      >
      
    <Canvas>
        <Suspense fallback={null}>
          <CAR />
          <OrbitControls scale={false} />
          <Environment preset="city" background />
        </Suspense>
        <directionalLight position={[10, 10, 5]} intensity={0.3} color={"white"} />

      </Canvas>
    </div>
      </>
  );
}
