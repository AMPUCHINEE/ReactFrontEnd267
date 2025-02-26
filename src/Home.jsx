
import './App.css'
import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    {name: 'Ampuchinee', message: 'Hi there'},
    { name: 'Ice', message: 'Hello...'}
  ];
  return (
    <div className='App'>
      <Counter/>
      {helloData.map((data,index) => (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}
      
      <Contact email="s6506021620113@email.kmutnb.ac.th" phone="066066066"/>
    </div>
  );
}



export default App
