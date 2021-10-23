// import logo from './logo.svg';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Doctor from './pages/Doctor/Doctor';

import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
// import Register from './pages/Register/Register';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="total">
      
  <AuthProvider>

<BrowserRouter>
   <Header></Header>
   <Switch>
     <Route exact path="/">
       <Home></Home>

     </Route>
     <Route exact path="/home">
       <Home></Home>

     </Route>
     <Route exact path="/login">
       <Login></Login>

     </Route>
     <Route exact path="/register">
       <Register></Register>

     </Route>
<PrivateRoute path="/detail/:detailId">
<Detail></Detail>
</PrivateRoute>

    <Route exact path="/doctor">
      <Doctor></Doctor>
    </Route>
    <PrivateRoute path="/contact">
      <Contact></Contact>

    </PrivateRoute>
    
    <Route exact path="*">
      <NotFound></NotFound>

    </Route>
   
   </Switch>
   <Footer></Footer>
   </BrowserRouter>
  </AuthProvider>
    </div>
  );
}

export default App;

