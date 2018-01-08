import './App.css'

import React, {Component} from 'react';
import RightArea from 'containers/rightarea'
import LeftArea from 'containers/leftarea'

class App extends Component {
   render () {
      return (
         <div>
            <div className="head">
               <div> Front-end-Developer Test Task</div>
               <div>корзина</div>
            </div>
            <div className="container">
               <div className="app">
                  <div className="app-left">
                     <div className="app-left-content">
                        <div className="road"> Shipping > Billing > Payment</div>
                        <div>
                           <LeftArea/>
                        </div>
                     </div>
                  </div>
                  <div className="app-right">
                     <div className="app-right-content">
                        <RightArea/>
                        <div className="hr"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
