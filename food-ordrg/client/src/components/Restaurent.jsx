import React from 'react'

export default class Restaurent extends React.Component {
    // constructor(props) {
    //     super(props)
        
    // }

    render() {
        return (
            <div>
             {
                 this.props.restaurent.map((elm,indx)=>(

                 
                     <ul key={indx}>

                    
                     <li className="list-item">
                         <h5>{elm.name}</h5>
                         <img src={elm.imageUrl} />
                     </li>
                     </ul>
                 ))
             }                
            </div>
        )
    }
}