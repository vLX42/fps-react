import { useState, useEffect } from 'react'
import { useFPSCore } from './useFPSCore'

type FPSDetectProps = {
  minimumFps?: number
  fpsSampleRate?: number
  fpsHistory?: number
}

export const useFPSDetect = ({
  minimumFps = 20,
  fpsSampleRate = 1000,
  fpsHistory = 2,
}: FPSDetectProps) => {
  const { fps } = useFPSCore({ fpsHistory, fpsSampleRate })
  const [lowFrameRate, setLowFrameRate] = useState(false)

  useEffect(() => {
    const average = (array: number[]) =>
      array.reduce((a, b) => a + b, 0) / array.length
    average(fps) <= minimumFps && setLowFrameRate(true)
  }, [fps])

  return lowFrameRate
}
