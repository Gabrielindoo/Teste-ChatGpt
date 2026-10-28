import { MotionConfig } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() { return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Pular para o conteúdo</a><Header/><main id="main"><Hero/><About/><Services/><Process/><Portfolio/><Differentials/><FAQ/><Contact/></main><Footer/></MotionConfig>; }
