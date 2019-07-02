import React from "react"
import buttonstyles from "./backbutton.module.css"

export default props  => (
    <img onClick ={()=>redict()} className={buttonstyles.back} src="https://github.com/bangoga/bangoga.github.io/blob/master/back.png?raw=true" alt="shee"></img>
    )


    function redict() {
        window.location="../";
    }
//Icon made by Freepik 