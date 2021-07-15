import axios from 'axios';
import React from 'react';

export default class SandwichMc extends React.Component {
constructor(props) {
    super(props);
    this.state={
        sandwichs:[],
        cart: this.props.cart
    };
    // console.log(this.state.cart)
this.insertInCart = this.insertInCart.bind(this)
}

insertInCart(elm){
    var arr=this.props.cart.push(elm)
  this.setState({ cart: arr})
}


componentDidMount(){
    axios.get('/sandwMc')
    .then((res)=>{
        this.setState({sandwichs:res.data})
    })
    .catch((err)=>{
        console.log(err)
    })
}

render(){
    return (
        
        <div>
        {
            this.state.sandwichs.map((elm,indx)=>(

            
                <ul key={indx}>

               
                <li className="list-item">
                    <h5>{elm.name}</h5>
                    <img src={elm.imageUrl}/>
                    <h4>{elm.price}</h4>
                    <button onClick={()=>this.insertInCart(elm)}>Get it</button>
                </li>
                </ul>
            ))
        }                
       </div>
    )
}

}