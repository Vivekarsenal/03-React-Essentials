
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}





function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept  {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept  {...CORE_CONCEPTS[2]}     
          
          />
          <CoreConcept {...CORE_CONCEPTS[3]}       
          
          /> 

        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
         <tabButton> Components   </tabButton>
         <tabButton> JSX </tabButton>
         <tabButton> Props  </tabButton>
         <tabButton> State   </tabButton>
          </menu>
         
        </section>
        
      </main>
    </div>
  );
}

export default App;

