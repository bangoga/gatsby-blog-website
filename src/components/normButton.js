import React from "react"
import buttonstyles from "./normButton.module.css"

export default props  => (
<button onClick ={()=>redict(props.buttonName)} type="button" class={buttonstyles.btnprimary}>{props.buttonName}</button>
)


function redict(name) {
    if(name==="Home"){
        window.location="../";
    }
    else if(name==="Linkedin"){

    }
    
}
