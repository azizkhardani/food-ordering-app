import React from "react";
import SandwichMc from './SandwichMc.jsx'
import SandwichKfc from './SandwichKfc.jsx'

export default class Restaurent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
    //   view:'list'
    };
    // console.log(this.state.view)
    this.changeView = this.changeView.bind(this);
  }

  changeView = (elm) => {   
    //   console.log(elm.name)                       
    // if(elm.name === "McDonalds"){
        this.setState({ 
           menu: elm,
        //    view:opt
       
        }
        );
    // }
    
  };

  renderView(){
    const {menu} = this.state
    // const {view} = this.state.view

     if(menu.name === 'McDonalds' ){
        return <SandwichMc cart={this.props.cart} />
    }else if(menu.name === 'KFC'){
        return <SandwichKfc cart={this.props.cart}/>
    }
  }
  render() {
    return (
      <div>
        {this.props.restaurent.map((elm, indx) => (
          <ul key={indx}>
            <li className="list-item">
              <h5>{elm.name}</h5>
              <img src={elm.imageUrl} />
              <button onClick={() => this.changeView(elm)}>View</button>
            </li>
          </ul>
        ))}
        <div>
               {this.renderView()}
           </div>
      </div>
    );
  }
}
