"use client";
import { useGLTF } from '@react-three/drei'
import {useRef} from "react";
export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/batiments.glb')
  const cafeRef = useRef();
  const pizzaRef = useRef();
  const restaurantRef = useRef();
  const shopRef = useRef();
  return (
      <group {...props} dispose={null}>
        <group position={[0, 0, 3.48]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group ref={cafeRef} position={[-912.209, 0, -452.518]} rotation={[-Math.PI, 0.663, -Math.PI]} scale={[100, 100, 100]}>
              <mesh
                  geometry={nodes.CafeBuilding_Texture_buildings1_0.geometry}
                  material={materials.Texture_buildings1}
                  position={[-2.26, 0, 3.998]}
                  rotation={[-Math.PI, 0.55, -Math.PI]}
              />
            </group>
            <group ref={pizzaRef} position={[0, 0, -13.818]} scale={[100, 100, 100]}>
              <mesh
                  geometry={nodes.PizzaBuilding_Texture_buildings1_0.geometry}
                  material={materials.Texture_buildings1}
                  position={[2.055, 0, -0.97]}
                  rotation={[Math.PI, -0.341, Math.PI]}
              />
            </group>
            <group ref={restaurantRef} position={[-779.484, 0, 36.069]} rotation={[Math.PI, -0.098, Math.PI]} scale={[100, 100, 100]}>
              <mesh
                  geometry={nodes.RestaurantBuilding_Texture_buildings1_0.geometry}
                  material={materials.Texture_buildings1}
                  position={[1.91, 0, -0.703]}
                  rotation={[Math.PI, -0.138, Math.PI]}
              />
            </group>
            <group ref={shopRef} position={[0, 0, 804.259]} rotation={[0, -0.741, 0]} scale={[100, 100, 100]}>
              <mesh
                  geometry={nodes.ShopBuilding_Texture_buildings1_0.geometry}
                  material={materials.Texture_buildings1}
                  position={[-3.738, 0, 0.662]}
                  rotation={[-Math.PI, 0.719, -Math.PI]}
              />
            </group>
          </group>
        </group>
      </group>
  )
}

useGLTF.preload('/models/batiments.glb')
