import React from 'react';
import Card from './Card';
import ai from '../src/images/ai.png';
const Service =()=>{
    return (
        <>
            <div className="my-5 ">
                <h1 className="text-center text-warning"> Welcome to Service Page</h1>
            </div>
        <div className="container-fluid mb-5">
            <div className="row ">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                  
                  <Card cards={ai}/>
                  <Card cards={ai}/>
                  <Card cards={ai}/>
                  <Card cards={ai}/>
                  <Card cards={ai}/>
                  <Card cards={ai}/>
                  <Card cards={ai}/>
                  <Card cards={ai}/>
                  <Card cards={ai}/>
                  </div>
                    </div>            
            </div>
        </div>
       
        </>
    );
};

export default Service;