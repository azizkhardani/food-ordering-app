import React,{Component} from 'react'
import Restaurent from './Restaurent.jsx'
import axios from 'axios'



export default class App extends Component {
  constructor(){
      super()
      this.state={
          view: "list",
          restaurent:[]
      }
      this.changeView = this.changeView.bind(this)
  }
  
componentDidMount(){
    axios.get('/api/restaurent')
    .then((res)=>{
        console.log(res.data)
        this.setState({restaurent: res.data})
        // this.componentDidMount()
    })
    .catch((err)=>{
        console.log(err)
    })
}

  changeView(option){
     this.setState({view: option})
  }

  renderView(){
      const {view} = this.state
      if(view === 'list'){
          return <Restaurent restaurent={this.state.restaurent} />
      }
  }
  
    render(){
       return(
       <div>
           <div className="nav">
               <span className="logo" onClick={()=>this.changeView('list')}>
                   ZIZO-FOOD
               </span>
               <input type="text"/>
               <button>Search</button>
               <span className="nav-nun" onClick={()=>this.changeView('panier')}>
                   Panier
               </span>
           </div>
           <div>
               {this.renderView()}
           </div>
       </div>
       )
   }
    
    }