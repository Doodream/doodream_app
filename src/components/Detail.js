import React from "react";

function Detail({location, history}){

    if(location.state === undefined){
        history.push("/");
    }
    if(location.state){
        return <span>{location.state.title}</span>;
    }else{
        return null;
    }
}

export default Detail

