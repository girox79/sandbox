import React from "react";
import ReactDOM from "react-dom/client";


function Hello(props) {
    return(        
        <h1>Hello, from function Hello!</h1>
    );
} 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);