import { useState, useEffect, useRef } from 'react'

type FPSCoreProps = {
  fpsHistory?: number
  fpsSampleRate?: number
}

export const useFPSCore = ({
  fpsHistory = 70,
  fpsSampleRate = 1000,
}: FPSCoreProps) => {
  const fpsCorection = 1000 / fpsSampleRate
  const [frames, _setFrames] = useState<number>(0)
  const framesRef = useRef<number>(frames)
  const setFrames = (data: number) => {
    framesRef.current = data
    _setFrames(data)
  }

  const [prevTime, _setPrevTime] = useState<number>(+new Date())
  const prevTimeRef = useRef<number>(prevTime)
  const setPrevTime = (data: number) => {
    prevTimeRef.current = data
    _setPrevTime(data)
  }

  const [fps, _setFps] = useState<number[]>([])
  const fpsRef = useRef<number[]>(fps)
  const setFps = (data: number[]) => {
    fpsRef.current = data
    _setFps(data)
  }

  useEffect(() => {
    let afRequest: any
    const onRequestAnimationFrame = () => {
      calcFPS()
      afRequest = window.requestAnimationFrame(onRequestAnimationFrame)
    }
    afRequest = window.requestAnimationFrame(onRequestAnimationFrame)

    return () => {
      window.cancelAnimationFrame(afRequest)
    }
  }, [])

  const calcFPS = () => {
    const currentTime = +new Date()
    const _frames = framesRef.current + 1
    setFrames(_frames)
    if (currentTime > prevTimeRef.current + fpsSampleRate) {
      const _fps = Math.round(
        ((_frames * fpsSampleRate) / (currentTime - prevTimeRef.current)) *
          fpsCorection
      )
      let sliceStart = Math.min(fpsRef.current.length - fpsHistory, 0)
      setPrevTime(+new Date())
      setFps([
        ...fpsRef.current.slice(sliceStart - 1, fpsRef.current.length),
        _fps,
      ])
      setFrames(0)
    }
  }

  return { frames, fps }
}
