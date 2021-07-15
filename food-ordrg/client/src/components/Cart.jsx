import React from 'react';

export default class Cart extends React.Component {
render(){
    return (
        <div>
            {
                this.props.cart.map((elm,indx)=>(
                    <ul key={indx}>
                        <li>
                            {elm.name}
                        </li>
                        <li>
                            {elm.price}
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}
}