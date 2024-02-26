import Header from "../header/Header";

const App = ({children}) => {
  return (
    <div className='main_body'>
      <Header/>
      {children}
    </div>
  );
}

export default App;
