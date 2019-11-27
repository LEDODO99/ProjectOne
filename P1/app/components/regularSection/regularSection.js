import React from 'react';
import './regularSection.css';

export default class RS extends React.Component{
    render(){
        return(
            <div className="rsContainer">
                <div className="Recun">
                    <h2>{this.props.title}</h2>
                    <div>
                        <img src={this.props.img}></img>
                    </div>
                    <div>
                        <p>{this.props.data}</p>
                    </div>
                </div>
            </div>
        )
    }
}