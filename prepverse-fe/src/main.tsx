import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store.ts'
import { SocketProvider } from './features/chat/utils/SocketContext.tsx'
import { inject } from '@vercel/analytics'

inject()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocketProvider>
          <App />
        </SocketProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
