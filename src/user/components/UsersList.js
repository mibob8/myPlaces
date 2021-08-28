import React from 'react'
import { retrieveSourceMap } from 'source-map-support';
import './UsersList.css'


const UsersList = props=>{
    if(props.items.lenth === 0){
        return (<div className='center'></div>);
    }
};

export default UsersList;