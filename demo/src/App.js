
import './App.css';
import TextBeam from './components/TextBeam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <figure className="quote">
          💭 Quote
          <blockquote>
            <p id="quotation" className="testimony">
              <TextBeam>"Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom."</TextBeam>
            </p>
          </blockquote>

          <figcaption className="author">
            <abbr title="Valentin Louis Georges Eugène Marcel Proust.">Marcel Proust</abbr>
            - French novelist, critic, and essayist.
          </figcaption>
        </figure>
      </header>
    </div>
  );
}

export default App;
