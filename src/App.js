import './App.css'

import React, {Component} from 'react';
import RightArea from 'containers/rightarea'
import LeftArea from 'containers/leftarea'

class App extends Component {
   render () {
      return (
         <div>
            <div className="container">
               <div className="app">
                  <div className="app-left">
                     <div className="app-left-content">
                        <LeftArea/>
                     </div>
                  </div>
                  <div className="app-right">
                     <div className="app-right-content">
                        <RightArea/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
