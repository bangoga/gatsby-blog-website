import React from "react"
import Crd from "../components/card.module.css"
import"bootstrap/dist/css/bootstrap.css"

export default props  => (
    <div onClick ={()=>redict(props.aid,props.title,props.full,props.imgs,props.subtitle)} class="card" className={Crd.smallCard}>
        <div class="card-header">
            <blockquote class="blockquote mb-0">
            <p style={{ color: `teal` }}>{props.title}. {props.subtitle}</p>
            </blockquote>
        </div>
        <div class="card-body mb-0" >
            <p className={Crd.pbody}>{props.body}</p>
        </div>
    </div>

)

function redict(aid,title,full,imgs,subtitle) {
    var info = {
        "aid":aid,
        "title":title,
        "full":full,
        "imgs":imgs,
        "subtitle":subtitle
    };
    localStorage.setItem("info", JSON.stringify(info));
    window.location="/fullpage";
}

