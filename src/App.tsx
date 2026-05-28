import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="blog-wrapper">
      <Header />
      <main>
        <Article />
      </main>
      <Footer />
    </div>
  )
}

export default App
