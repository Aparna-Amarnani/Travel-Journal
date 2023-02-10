
import NavBar from './components/NavBar';
import Main from './components/Main';
import data from './data';

function App() {
  const k=data.map(items => {
    return(
      <Main item={items} />
    )
  })
  return (
    <div className="App">
      <NavBar />
      <section className="content">
        {k}
      </section>
    </div>
  );
}

export default App;
