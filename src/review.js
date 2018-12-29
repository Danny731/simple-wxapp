import React from 'react'
class CalcArea extends React.Component {
render (){
    let width = this .props.width;
    let height = this.props.height||width;

    if(!width){
        return(
            <div> false</div>
        )
    }

    const area = width*height
    return <div style={{backgroundColor: "blue"}}>
    Rectangle we're calculating the are of：
    
    <div style ={{backgroundColor:"white", width:100,height :200}} ></div>
    <div style = {{backgroundColor:"black"}} >  </div>
    
        The width enterned : {width}
        <br/>
        The height enterned : {height}s
        <br/>
        result area: {area}
        <br/>
        <br/>

</div>

    
}
}


export default CalcArea