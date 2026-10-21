import React, { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * ArachGym official logo component with glassy specular reflections,
 * animated glow, and flexible display modes.
 *
 * @param {Object} props
 * @param {number} [props.size=48] - Size in pixels
 * @param {'badge'|'header'|'mark'|'splash'} [props.variant='badge'] - Visual mode
 * @param {boolean} [props.animate=true] - Whether to apply subtle hover/float animations
 * @param {string} [props.className] - Extra class names
 * @param {React.CSSProperties} [props.style] - Inline styles
 */
export function ArachGymLogo({
  size = 48,
  variant = 'badge',
  animate = true,
  className = '',
  style = {}
}) {
  const [imgLoaded, setImgLoaded] = useState(true)

  // Dimensions based on variant
  const isSplash = variant === 'splash'
  const isHeader = variant === 'header'
  const isMark = variant === 'mark'

  const computedWidth = isSplash ? size : isHeader ? size * 0.9 : size
  const computedHeight = isSplash ? size : isHeader ? size * 0.9 : size
  const borderRadius = Math.round(computedWidth * 0.22)

  // Animated wrapper props
  const motionProps = animate ? {
    whileHover: { scale: 1.05, filter: 'brightness(1.08)' },
    whileTap: { scale: 0.96 },
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  } : {}

  const logoImg = (
    <div
      className={`arachgym-logo-badge relative overflow-hidden select-none inline-flex items-center justify-center ${className}`}
      style={{
        width: computedWidth,
        height: computedHeight,
        borderRadius: `${borderRadius}px`,
        boxShadow: isSplash
          ? '0 12px 40px rgba(0, 229, 255, 0.35), 0 4px 18px rgba(255, 109, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
          : '0 8px 24px rgba(0, 229, 255, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
        background: 'linear-gradient(145deg, rgba(28, 32, 44, 0.9) 0%, rgba(12, 14, 20, 0.98) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        ...style
      }}
    >
      {/* Glossy top reflection shimmer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '48%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.02) 100%)',
          borderTopLeftRadius: `${borderRadius}px`,
          borderTopRightRadius: `${borderRadius}px`,
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* Actual raster logo image */}
      {imgLoaded ? (
        <img
          src="/logo.png"
          alt="ArachGym Logo"
          onError={() => setImgLoaded(false)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: `${borderRadius}px`,
            display: 'block'
          }}
        />
      ) : (
        /* Dynamic SVG Vector fallback reproducing the stylized dumbbell-A logo */
        <svg
          viewBox="0 0 120 120"
          style={{ width: '85%', height: '85%' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orangeArrowGrad" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#FF5722" />
              <stop offset="100%" stopColor="#FF9100" />
            </linearGradient>
            <linearGradient id="cyanPillarGrad" x1="50%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#00B0FF" />
            </linearGradient>
            <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CFD8DC" />
              <stop offset="50%" stopColor="#ECEFF1" />
              <stop offset="100%" stopColor="#90A4AE" />
            </linearGradient>
          </defs>
          {/* Barbell Left Weight Plate */}
          <rect x="22" y="60" width="10" height="26" rx="3" fill="url(#chromeGrad)" />
          {/* Barbell Shaft */}
          <rect x="26" y="70" width="68" height="6" rx="2" fill="url(#chromeGrad)" />
          {/* Barbell Right Weight Plate */}
          <rect x="88" y="60" width="10" height="26" rx="3" fill="url(#chromeGrad)" />

          {/* Left Arrow Leg (Orange) */}
          <path
            d="M 32 94 L 56 22 L 64 22 L 48 94 Z"
            fill="url(#orangeArrowGrad)"
          />
          {/* Arrow Head Accent */}
          <polygon points="56,16 66,28 46,28" fill="#FFAB00" />

          {/* Right Pillar Leg (Cyan) */}
          <path
            d="M 58 24 L 66 24 L 88 94 L 74 94 Z"
            fill="url(#cyanPillarGrad)"
          />

          {/* Center Crossbar/Dumbbell lock */}
          <circle cx="60" cy="58" r="8" fill="#FFFFFF" opacity="0.9" />
          <circle cx="60" cy="58" r="5" fill="#00E5FF" />
        </svg>
      )}

      {/* Subtle outer neon perimeter glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: `${borderRadius}px`,
          boxShadow: 'inset 0 0 12px rgba(0, 229, 255, 0.2)',
          pointerEvents: 'none',
          zIndex: 3
        }}
      />
    </div>
  )

  if (isHeader) {
    return (
      <div
        className={`inline-flex items-center gap-3 select-none ${className}`}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}
      >
        <motion.div {...motionProps} style={{ display: 'inline-flex' }}>
          {logoImg}
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span
            style={{
              fontSize: Math.round(computedWidth * 0.46),
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
            }}
          >
            <span style={{ color: '#FFFFFF' }}>Arach</span>
            <span
              style={{
                color: '#00E5FF',
                textShadow: '0 0 12px rgba(0, 229, 255, 0.4)'
              }}
            >
              Gym
            </span>
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--label-3, rgba(255,255,255,0.45))',
              marginTop: 1
            }}
          >
            By ArachTech.am
          </span>
        </div>
      </div>
    )
  }

  if (animate) {
    return (
      <motion.div
        {...motionProps}
        style={{ display: 'inline-flex', position: 'relative' }}
      >
        {logoImg}
      </motion.div>
    )
  }

  return logoImg
}

export default ArachGymLogo
