import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import SB from "../components/sidebar.module.css"


const ClickableBadge = props => ( 
        <span style={{fontSize:13,width:150,cursor: `pointer`}} class="badge badge-pill badge-info"> {props.text} </span>
)


export default props => 
(    
    <div className = {SB.container}>
        <div className={SB.vl}>
        </div>
        <div class="card" className={SB.cardPic}>  
            <img className={SB.roundedcircle} alt ="avatar" src="https://github.com/bangoga/bangoga.github.io/blob/master/avatar3.jpg?raw=true"></img>
            <div class="card-body">
                <h5 class="card-title"><code style={{color:`black`}}>Khalil Mohsin<br></br><footer class="blockquote-footer">Software Developer</footer></code></h5>
                <p class="card-text">
                As a former management student in my first semester, I found a thrill and sense of accomplishment shifting to a computer science major in my former years. 
                In the little time I've spent as a programmer, I believe I have come a long way. 
                </p>
            </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><ClickableBadge text="Computer Science"/></li>
                <li class="list-group-item"><ClickableBadge text="Politics"/></li>
                <li class="list-group-item"><ClickableBadge text="Game Development"/></li>
                <li class="list-group-item"><ClickableBadge text="Opinions"/></li>
            </ul>
        </div>
        {console.log(props)}
    </div>
   
);
