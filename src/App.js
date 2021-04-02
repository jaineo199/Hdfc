import React from 'react';
import Navbar from './Components/Navbar';
import Second from './Components/Second';
import Third from './Components/Third';



function App(){
    return(
        <React.Fragment>
     
        <Navbar/>
        <Second/>
        <hr style={{height:'20px', backgroundColor:'#161717'}}/>
        <Third/>
         
       

        </React.Fragment>
    )
}

export default App;