"use client";

import {Canvas, useFrame} from "@react-three/fiber";
import Batiments from "@/components/three/models/Batiments.jsx";
import Test from "@/components/three/models/LANDING_page";
import {Environment, Grid, PerspectiveCamera} from "@react-three/drei";
import {DoubleSide} from "three";
import {useEffect, useRef, useState} from "react";
import * as THREE from "three";

const RotatingCameraInside = () => {
    const cameraRef = useRef();

    useFrame(() => {
        if (cameraRef.current) {

            cameraRef.current.rotation.y -= 0.005;
        }
    });

    return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1, 0]}/>;
};
const Hero = () => {
    const scale = 1;
    return (
        <Canvas>
            <RotatingCameraInside/>
            <hemisphereLight color={"white"} groundColor={"brown"} position-y={2}/>
            {
                /*
            <Batiments />
                 */
            }
            <Test scale={[scale, scale, scale]}/>
            <Grid
                sectionSize={1}
                sectionColor={"black"}
                sectionThickness={1}
                cellSize={0.5}
                cellColor={"black"}
                cellThickness={0.8}
                infiniteGrid
                fadeDistance={50}
                fadeStrength={30}
                side={DoubleSide}
            />
            <fog attach="fog" args={["#ffffff", 0, 12]}/>
        </Canvas>
    );
};

export default Hero;
