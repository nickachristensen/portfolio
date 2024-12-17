import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Laptop() {
    const topModel = useGLTF('/assets/Laptop_Top.glb')
    const bottomModel = useGLTF('/assets/Laptop_Bottom.glb')

    console.log(topModel.nodes)
    return (
        <group
        position={[0, -0.7, 0]} 
        rotation={[0, Math.PI, 0]}
        scale={1.3}
        >
            <mesh>
                <primitive object={topModel.nodes.lapTop_Top} />
            </mesh>
            <mesh>
                <primitive object={bottomModel.nodes.lapTop_Bottom} />
            </mesh>
        </group>
    )
}