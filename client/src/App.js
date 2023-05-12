import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import Header from "./Pages/Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner"

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Header/>
        <Banner/>
      </RouterProvider>
    </div>
  );
}

export default App;
