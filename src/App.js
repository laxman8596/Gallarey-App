import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Search from './components/Search';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:imgname" exact component={Search} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App

// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home1 from './components/Home1';
// import './App.css'
// import Searche from './components/Searche';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/" exact component={Home1} />
//           <Route path="/searche/:imgname" exact component={Searche} />
//         </Switch>

//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import './App.css'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home2 from './components/Home2';
// import Search1 from './Search1';
// function App() {
//   return (
//     <div>
//       <BrowserRouter>

//         <Switch>
//           <Route path="/" exact component={Home2} />
//           <Route path="/search1/:imgname" exact component={Search1} />
//         </Switch>


//       </BrowserRouter>
//     </div>
//   )
// }

// export default App