import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {CaseStudyApp} from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider, {InsuranceCaseStudyThemeContextProvider} from './contexts/ThemeContext'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);
reportWebVitals();
