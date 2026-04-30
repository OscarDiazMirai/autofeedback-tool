import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ui/App.tsx'

const root = document.getElementById('root');
if(!root){
  console.error('Root element not found in DOM');
}else{
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
