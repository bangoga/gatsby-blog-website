import React from "react"
import "../styles/global.css"
import Header from "../components/header"
import"bootstrap/dist/css/bootstrap.css"
import Back from "../components/backbutton"
import HtmlParser from "react-html-parser"
import { graphql } from "gatsby"
const url = require('url')


var aid;
if (typeof window !== 'undefined') {
    aid = localStorage.getItem("info");
}
else{
    aid='{"aid":1,"title":"error","full":"error","imgs":[],"subtitle":"error"}';
}

var pageData = JSON.parse(aid);

export default ({data})=>{
    pageData=filter_data(data);
    var initialPar = pageData.full;
    var paragraph = imagePlace(initialPar,pageData.imgs);
    var par = HtmlParser(paragraph);

    var returnValue= (<div>
        <Header/>
        <div class="col-md-8 offset-2">
        <div class="row">
        <div class="col-md-6 offset-3" style={{ color: `black`}}>
            <h2 style={{lineHeight:1,color:`teal`,textAlign:`center`,fontWeight:900}}>{pageData.title}</h2>
            <p style={{fontSize:25,lineHeight:1.2,color:`teal`,textAlign:`center`,fontWeight:400}}>{pageData.subtitle}</p>
            <hr style={{borderBottom:`teal`,borderBottomWidth:2,borderBottomStyle:`solid`,opacity:0.2}}></hr>

            {
                par.map((htmlTags) => {
                    console.log(htmlTags)
                    return (
                        htmlTags
                    )
                })
            }
        </div> 
        </div> 
        </div>
        <div class="col-sm-2"><Back/></div>
 </div> )
if(pageData.title=="error"){
    return(<div class="lds-circle"></div>)
}
else{
return(returnValue)
}
};



//Takes overview data from main page, and organizes it. 


function imagePlace(par,imgs){
    //find strings between tags
    //string between that with this string 
    var i;
    var ans = par
    for(i=0;i<imgs.length;i++){
        var x = "<image"+(i+1)+">"
        var y = "</image"+(i+1)+">";
        var imgSrc = par.substring(
            par.lastIndexOf(x) + 8, 
            par.lastIndexOf(y)
        );
        console.log(imgSrc);

        var returnValue = '<div class="text-center"><figure class="figure"><img class="mx-auto d-block" src='
        + `"`+imgs[i]+`"` 
        +'class="img-fluid" style="object-fit:cover;height:400px;width:1800px;" alt="Front page"></img><figcaption style="margin-bottom:2%;" class="figure-caption">A caption for the above image.</figcaption></figure></div>'
            
        var replacing = ""+x+imgSrc+y
        ans = ans.replace(replacing,returnValue);
       // console.log(ans);   
    }

    return ans;
}

// Building this as a exportable function that would classify what article number it is.
// This is a work around over the fact that graphql in gatsby doesn't allow dynamically passing variables
// So the choice was either to filter after calling all queries again, or write a complex yet less space complex code 

// ------------------------------------------------------------- Query Workaround ---------------------------//
export const query = graphql`
query {
  allFile(filter: {name: {eq: "data"}}) {
    edges {
      node {
        id
        childComponentsJson{
          article {
            id
            full
            teaser
            title
            img
            subtitle
          }
        }
      }
    }
  }
} 
` ;

//-------------------------------------------------------- Handle - filter the data - ------------------------------// 

function filter_data(data){
    var articles = data.allFile.edges[0].node.childComponentsJson.article; 
    if (typeof window !== `undefined`) {
        const urlParams = new URLSearchParams(window.location.search);
        const article_id = parseInt(urlParams.get('user'))-1;
    
        var info = {
            "title":articles[article_id].title,
            "full":articles[article_id].full,
            "imgs":articles[article_id].img,
            "subtitle":articles[article_id].subtitle
        };
    
        console.log(info);
        return info;
      }
      else return {"aid":1,"title":"error","full":"error","imgs":[],"subtitle":"error"};
}



//imgmaker be a component that when tag added in txt, gives me a img in dead middles

// {pageData.imgs[1]!=null ? 
//     <div class="text-center">
//         <figure class="figure">
//             <img  class="mx-auto d-block" src="https://c-8oqtgrjgwu46x24koikzx2etcpmgtx2eeqo.g00.ranker.com/g00/3_c-8yyy.tcpmgt.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2fkoikz.tcpmgt.eqox2fwugt_pqfg_koix2f72202x2f3223712504x2fqtkikpcnx2ffktgevqt-twiigtq-fgqfcvq-ycu-ejctigf-ykvj-owtfgt-chvgt-vjg-hkno-cpf-_51_u-tgngcug-rjqvq-w5x3fyx3d872x26sx3d72x26hox3drlrix26hkvx3detqrx26etqrx3dhcegux26k32e.octmx3dkocig_$/$/$/$/$/$" class="img-fluid" alt="Front page"></img>
//             <figcaption class="figure-caption">A caption for the above image.</figcaption>
//         </figure>
//     </div>    
//     :null}



// Explaination
// To write a new paragraph you need to write it with the tags <image'i'></image'i'> and add it to the json of sources. Make sure all the images are including in the json as well 