import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext, InsuranceCaseStudyContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage, InsuranceCompany } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);
  // const {InsuranceCaseStudyTheme} = useContext(InsuranceCaseStudyContext);
  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/case-studies/insurance-company" exact component={InsuranceCompany}/>
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

function CaseStudyApp() {

    const {theme} = useContext(InsuranceCaseStudyContext);
    // const {InsuranceCaseStudyTheme} = useContext(InsuranceCaseStudyContext);
    return (
        <div className="app">
            <Router>
                <ScrollToTop/>
                <Switch>
                    <Route path="/case-studies/insurance-company" exact component={InsuranceCompany}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
            <BackToTop/>
        </div>
    );
}

export default App;
export {CaseStudyApp}
