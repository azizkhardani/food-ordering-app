import React from 'react';

export default class Favorite extends React.Component {
 

    
render(){
    return (
        <div>
            {
                this.props.favori.map((elm,indx)=>(
                <div key={indx}>
                        <h4>
                            {elm.name}
                        </h4>
                        <img
                           src= {elm.imageUrl}
                        />
                    </div>
                ))
            }
        </div>
    )
}
}