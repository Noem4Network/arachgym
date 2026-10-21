import React from 'react'
import { motion } from 'framer-motion'

/**
 * Animated slow-moving radial gradient background powered by Framer Motion.
 * Features multi-layer chromatic orbs (Electric Cyan, Octane Orange, Deep Indigo)
 * that float seamlessly behind the glassy UI containers and route views.
 */
export function AnimatedRadialBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
      className="arachgym-radial-ambient"
    >
      {/* Primary Cyan Glow Orb - Floating Top-Left to Center */}
      <motion.div
        animate={{
          x: ['-5vw', '8vw', '-2vw', '-5vw'],
          y: ['-8vh', '10vh', '4vh', '-8vh'],
          scale: [1, 1.18, 0.95, 1],
          opacity: [0.75, 0.95, 0.8, 0.75]
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '-15vh',
          left: '-10vw',
          width: '75vw',
          height: '75vw',
          maxWidth: '850px',
          maxHeight: '850px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(0, 229, 255, 0.18) 0%, rgba(0, 229, 255, 0.06) 45%, transparent 70%)',
          filter: 'blur(75px)'
        }}
      />

      {/* Secondary Brand Orange Glow Orb - Floating Bottom-Right to Center-Left */}
      <motion.div
        animate={{
          x: ['8vw', '-10vw', '4vw', '8vw'],
          y: ['10vh', '-8vh', '5vh', '10vh'],
          scale: [1, 1.15, 0.92, 1],
          opacity: [0.7, 0.9, 0.75, 0.7]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        style={{
          position: 'absolute',
          bottom: '-12vh',
          right: '-10vw',
          width: '72vw',
          height: '72vw',
          maxWidth: '820px',
          maxHeight: '820px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(255, 109, 0, 0.16) 0%, rgba(255, 109, 0, 0.05) 45%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Tertiary Deep Violet / Indigo Atmospheric Orb - Breathing Center-Bottom */}
      <motion.div
        animate={{
          y: ['0vh', '-12vh', '0vh'],
          x: ['0vw', '5vw', '-4vw', '0vw'],
          scale: [0.95, 1.1, 0.95],
          opacity: [0.5, 0.75, 0.5]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4
        }}
        style={{
          position: 'absolute',
          top: '35vh',
          left: '20vw',
          width: '60vw',
          height: '60vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(94, 92, 230, 0.12) 0%, rgba(94, 92, 230, 0.03) 50%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />

      {/* Glass Frost Sheen Film Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 30%, transparent 50%, rgba(18, 20, 26, 0.6) 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}

export default AnimatedRadialBackground
