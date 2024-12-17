import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Laptop() {
    const topModel = useGLTF('/assets/Laptop_Top.glb')
    const bottomModel = useGLTF('/assets/Laptop_Bottom.glb')
    const groupRef = useRef<THREE.Group>(null)
    const topRef = useRef<THREE.Mesh>(null)
    const bottomRef = useRef<THREE.Mesh>(null)

    useEffect(() => {
        if (!groupRef.current || !topRef.current || !bottomRef.current) return;
    
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#section1",
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          })
          .to(groupRef.current.rotation, {
            x: 0.0,
            ease: "power2.inOut",
          })
          .to(
            groupRef.current.rotation,
            {
              y: Math.PI - 0.4,
              ease: "power2.inOut",
            },
            ">"
          )
          .to(
            topRef.current.rotation,
            {
              x: Math.PI / 2 + 0.1,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(
            groupRef.current.position,
            {
              x: 1.3,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(
            groupRef.current.scale,
            {
              x: 0.7,
              y: 0.7,
              z: 0.7,
              ease: "power2.inOut",
            },
            "<"
          );
    
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#section2",
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          })
          .to(groupRef.current.rotation, {
            y: Math.PI + 0.4,
            ease: "power2.inOut",
          })
          .to(
            groupRef.current.position,
            {
              x: -1.3,
              ease: "power2.inOut",
            },
            "<"
          );
      });
    

    return (
        <group
        ref={groupRef}
        position={[0, -0.7, 0]} 
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.3}
        >
            <mesh ref={topRef}>
                <primitive object={topModel.nodes.lapTop_Top} />
            </mesh>
            <mesh ref={bottomRef}>
                <primitive object={bottomModel.nodes.lapTop_Bottom} />
            </mesh>
        </group>
    )
}