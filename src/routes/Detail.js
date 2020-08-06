import React from 'react';
import "./Detail.css";

class Detail extends React.Component {
    async componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return <div className="detail_container">
                <h1>{location.state.title}</h1>
                <img src={location.state.poster} alt={location.state.title} />
                </div>
        }else{
            return null;
        }
        
    }
}

export default Detail;