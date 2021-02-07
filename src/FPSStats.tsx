import React from 'react'
import { useFPSCore } from './useFPSCore'

const fpsHistory = 50

export type FPSStatsProps = {
  top?: string | number
  bottom?: string | number
  right?: string | number
  left?: string | number
  fpsSampleRate?: number
}

export const FPSStats = ({
  top = 2,
  left = 2,
  bottom = 'auto',
  right = 'auto',
  fpsSampleRate = 1000,
}: FPSStatsProps) => {
  const { fps } = useFPSCore({ fpsHistory, fpsSampleRate })

  const wrapperStyle: React.CSSProperties = {
    zIndex: 999999,
    position: 'fixed',
    height: '50px',
    width: '75px',
    padding: '3px',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: '4px',
    color: '#ebebeb ',
    fontSize: '9px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    textAlign: 'center',
    top,
    right,
    bottom,
    left,
  }

  const fpsStatsStyle = {
    width: '73px',
    position: 'absolute' as 'absolute',
    left: 0,
    bottom: 0,
    padding: '4px',
  }
  const width = fpsHistory * 10

  return (
    <div style={wrapperStyle}>
      <span>{fps[fps.length - 1]} FPS</span>
      <svg viewBox={`0 0 ${width} 250`} style={fpsStatsStyle}>
        <polyline
          id="pol"
          fill="#fff"
          stroke="#fff"
          points={
            '0 250,' +
            fps
              .slice()
              .reverse()
              .map((fps, i) => `${i * 20} ${250 - fps * (250 / 60)}`)
              .join('\r\n') +
            `,${(fps.length - 1) * 20} 250`
          }
        />
      </svg>
    </div>
  )
}
