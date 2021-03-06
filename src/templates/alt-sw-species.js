import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default (props) => {
  const { name, classification } = props.pageContext
  return (
    <Layout>
      <div>
        <h1>This is an alternative Species Template</h1>
        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{ __html: `Species Type: ${classification || 'Unknown'}`}} />
        <p>STARWARZ??!?!</p>
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query($speciesId: ID!) {
//     swapi {
//       Species(id: $speciesId) {
//         name
//         classification
//       }
//     }
//   }
// `