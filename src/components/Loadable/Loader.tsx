import { useEffect, useRef, type ReactNode } from 'react'

import nProgress from 'nprogress'

// Estilos CSS en línea para el contenedor del loader
const loaderWrapperStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
}

// Estilos CSS en línea para la barra de progreso
const linearProgressStyle: React.CSSProperties = {
  height: '4px',
  backgroundColor: '#e0e0e0',
}

const linearProgressBarStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: '#1976d2',
  animation: 'progressAnimation 1.5s infinite',
}

const keyframes = `
  @keyframes progressAnimation {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`

// Inyecta los keyframes en el documento
const styleSheet = document.createElement('style')
styleSheet.type = 'text/css'
styleSheet.innerText = keyframes
document.head.appendChild(styleSheet)

// ==============================|| LOADER ||============================== //
const Loader = (): ReactNode => {
  const ref = useRef<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      nProgress.configure({ showSpinner: false })
      nProgress.start()
    }

    return () => {
      if (ref.current) {
        nProgress.done()
      }
      ref.current = true
    }
  }, [])

  return (
    <div style={loaderWrapperStyle}>
      <div style={linearProgressStyle}>
        <div style={linearProgressBarStyle}></div>
      </div>
    </div>
  )
}

export default Loader
