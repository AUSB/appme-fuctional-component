import React from 'react';

//this is a functional component, in the component, we dont use state, this. and there is no render method
//we dont automatically get the props passed to it like we do inside a class-based component
// we just use props as the parameter passed in the funtional component
//we are not refering to and instance of a class(like this), 
//we just reference the props that we pass into that function as a paramter, 
const New1 = (props) => {  // props is the array in App.js, it is new1 in App.js
    const { new1 } = props;//  then we can access it just use the same props
    //const new1 = this.props.new1;
    const newoList = new1.map(newo => {// transfer each element "newo" of array "new1" to a new elememt which consists of new array 
        return (
            <div className="newo" key={newo.id}>
                <div> Name: {newo.name}</div>
                <div> Age: {newo.age}</div>
                <div> Belt: {newo.belt}</div>
            </div>
        )
    }
    )
    return (
        <div className="newo-list">
            {newoList}
        </div>
    )

}
export default New1;
