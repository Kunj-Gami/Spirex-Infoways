import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Environment, Float, Center, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

const GlassShape = ({ mode, config, scale = 1, ...props }) => {
    const mesh = useRef()

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.1
            mesh.current.rotation.y += delta * 0.15
        }
    })

    return (
        <mesh ref={mesh} scale={scale} {...props}>
            {mode === 'lens' && <sphereGeometry args={[1, 64, 64]} />}
            {mode === 'bar' && <cylinderGeometry args={[0.5, 0.5, 2, 32]} rotation={[0, 0, Math.PI / 2]} />}
            {mode === 'cube' && <boxGeometry args={[1.5, 1.5, 1.5]} />}

            {/* Fallback geometry if mode is unknown */}
            {!['lens', 'bar', 'cube'].includes(mode) && <sphereGeometry args={[1, 64, 64]} />}

            <MeshTransmissionMaterial
                {...config}
                background={new THREE.Color('#000')} // Optional: helps with transmission quality
            />
        </mesh>
    )
}

const Background = () => {
    return (
        <>
            <Environment preset="city" />
            <color attach="background" args={['#111']} />
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <group rotation={[Math.PI / 2, 1, 0]}>
                {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
                    <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
                ))}
                <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
                <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
                <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
            </group>
        </>
    )
}

const FluidGlass = ({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }) => {
    const defaultProps = {
        lens: {
            ior: 1.2,
            thickness: 3.0,
            chromaticAberration: 0.04,
            anisotropy: 0.1,
            roughness: 0.15,
            transmission: 0.99,
            scale: 2 // Default scale for lens
        },
        bar: {
            ior: 1.1,
            thickness: 1.5,
            chromaticAberration: 0.04,
            anisotropy: 0.1,
            roughness: 0.1,
            transmission: 0.99,
            scale: 1.5
        },
        cube: {
            ior: 1.1,
            thickness: 1.5,
            chromaticAberration: 0.1,
            anisotropy: 0.3,
            roughness: 0,
            transmission: 0.99,
            scale: 1.5
        }
    }

    // Determine active props based on mode
    const activeDefaults = defaultProps[mode] || defaultProps.lens
    const userProps = mode === 'lens' ? lensProps : mode === 'bar' ? barProps : cubeProps

    // Extract scale from props if present, otherwise use default
    const { scale, ...materialConfig } = { ...activeDefaults, ...userProps }

    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px', borderRadius: '12px', overflow: 'hidden' }}>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-bias={-0.0001} />

                <Center>
                    <Float floatIntensity={1} rotationIntensity={1} speed={2}>
                        <GlassShape mode={mode} config={materialConfig} scale={scale} />
                    </Float>
                </Center>

                <Background />
            </Canvas>
        </div>
    )
}

export default FluidGlass
