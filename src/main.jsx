import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Next from './Next'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Next />
    </BrowserRouter>
  </StrictMode>,
)
