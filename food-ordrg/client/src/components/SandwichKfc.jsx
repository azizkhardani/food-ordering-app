import axios from 'axios';
import React from 'react';

export default class SandwichKfc extends React.Component {
constructor() {
    super();
    this.state={
        sandwichsK:[]
    };

}

componentDidMount(){
    axios.get('/sandwKc')
    .then((res)=>{
        console.log(res.data)
        this.setState({sandwichsK :res.data})
    })
    .catch((err)=>{
        console.log(err)
    })
}

render(){
    return (
        
        <div>
        {
            this.state.sandwichsK.map((elm,indx)=>(

            
                <ul key={indx}>

               
                <li className="list-item">
                    <h5>{elm.name}</h5>
                    <img src={elm.imageUrl} />
                    <h4>{elm.price}</h4>
                    <button>Get it</button>
                </li>
                </ul>
            ))
        }                
       </div>
    )
}

}