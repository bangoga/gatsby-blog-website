import React from "react"
import Header from "../components/header"
import Card from "../components/card"
import SideBar from "../components/sidebar"

export default ({data}) =>{
var i ;
let articles = data.allFile.edges[0].node.childComponentsJson.article; 
var allArticles = []
for (i=0;i<articles.length;i++){
    allArticles.push({
        key:articles[i].id,
        teaser:articles[i].teaser,
        full:articles[i].full,
        title:articles[i].title,
        img:articles[i].img,
        subtitle:articles[i].subtitle
    });
}

console.log(allArticles)
var returnValue = (
    <div>
    <Header /> 
    <div class="float-left col-md-4" >
    <SideBar />
    </div>

    <div class="float-left col-md-6" style={{ color: `teal`}}>
        {
            allArticles.map((art) => {
                
                console.log(art)
                return (
                    <Card key={art.key} title={art.title} subtitle = {art.subtitle} body={art.teaser} aid={art.key} full={art.full} imgs={art.img}/>
                )
            })
        }

    </div>
  
  </div>
)

return( returnValue)
}

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


/**
 * Explaination of whats happening 
 * so as you can see jsx doesn't allow you to  make a forloop inside of it, case being that JSX binded inside () means there is a function that is being returned or an experession
 * Can't put a forloop inside an expression
 * but mapping can be done.
 * parameters => expression
 * x.map(parameters => expression) ==> array of the mapping
 * similarly an array with norm fucntion could have been provided
 * 
 */
