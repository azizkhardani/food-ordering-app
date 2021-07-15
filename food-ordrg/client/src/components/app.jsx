import React,{Component} from 'react'
import Restaurent from './Restaurent.jsx'
import Cart from './Cart.jsx'
import Search from './Search.jsx'

import axios from 'axios'



export default class App extends Component {
  constructor(){
      super()
      this.state={
          view: "list",
          restaurent:[],
          cart:[],
          name:"",
          oneRestaurent:{}
      }
    //   console.log(this.state.cart)
      this.changeView = this.changeView.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }
  
componentDidMount(){
    axios.get('/api/restaurent')
    .then((res)=>{
        // console.log(res.data)
        this.setState({restaurent: res.data})
        // this.componentDidMount()
    })
    .catch((err)=>{
        console.log(err)
    })
}

handleChange(e){
    this.setState({
        name: e.target.value
    })
}

  changeView(option){
     this.setState({
         view: option
        })    

        axios.get(`/oneRest/${this.state.name}`)
        .then((res)=>{
            // console.log(res.data)
            this.setState({
                
                oneRestaurent: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
  }

  renderView(){
      const {view} = this.state
      if(view === 'list'){
          return <Restaurent restaurent={this.state.restaurent} cart={this.state.cart}  />
      }else if(view === 'cart') {
          return <Cart cart={this.state.cart}/>
      }else{
          return <Search oneRestaurent={this.state.oneRestaurent}/>
      }
  }
  
    render(){
       return(
       <div>
           <div className="nav">
               <span className="logo" onClick={()=> this.changeView('list')}>
                   ZIZO-FOOD
               </span>
               <input type="text" onChange={(e)=>{this.handleChange(e)}}/>
               <button onClick={()=>this.changeView('search')}>Search</button>
               <span className="nav-nun" onClick={()=> this.changeView('cart')}>
                   Cart
               </span>
               {/* <div>
                   <Restaurent restaurent={this.state.restaurent} cart={this.state.cart}/>
               </div> */}
           </div>
           <div>
               {this.renderView()}
           </div>
       </div>
       )
   }
    
    }