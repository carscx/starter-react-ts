import { StrictMode, Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { createRoot } from 'react-dom/client'
import i18n from './i18n'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </I18nextProvider>
  </StrictMode>
)
