import React from 'react'
import { withSiteData, Head } from 'react-static'
import styled from 'styled-components'

const CenterDiv = styled.div`
  margin: auto;
  text-align: center;
`

const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 800px;
  max-width: 95%;
  margin: auto
`

export default withSiteData(() => (
  <div>
    <Head>
      <title>Chord Analytics Blog | Data Science Consulting</title>
      <meta name="description" content="Check out our latest content. We write about Python and share data-driven analysis on cryptocurrencies." />
    </Head>
    <Cards>
      <CenterDiv>
        <h1>We blog about our projects on Medium.</h1>
      </CenterDiv>
      <br />
      <MediumOutlink />
    </Cards>
  </div>
))
