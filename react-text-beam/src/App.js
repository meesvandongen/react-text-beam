
import './App.css';
import TextBeam from './components/TextBeam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <figure class="quote">
          💭 Quote
          <blockquote>
              <p id="quotation" class="testimony">
                <TextBeam>"Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom."</TextBeam>
              </p>
          </blockquote>
      
          <figcaption class="author">
              <abbr title="Valentin Louis Georges Eugène Marcel Proust.">Marcel Proust</abbr>
              - French novelist, critic, and essayist.
          </figcaption>
      </figure>

      </header>
    </div>
  );
}

export default App;
