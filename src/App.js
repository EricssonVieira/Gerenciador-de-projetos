import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Navbar from './Components/layouts/Navbar'
import Footer from './Components/layouts/Footer'
import Contato from './Components/Pages/Contato'
import NovoProjeto from './Components/Pages/NovoProjeto'
import Projetos from './Components/Pages/Projetos'
import Container from './Components/layouts/Container'


function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Container custonClass="min-height">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/novoprojeto" element={<NovoProjeto />} />
        <Route  path="/projetos" element={<Projetos />} />
        <Route  path="/contato" element={<Contato />} />

      </Routes>
        </Container>
    <Footer/>
    </Router>
      </>
  );
}

export default App;

