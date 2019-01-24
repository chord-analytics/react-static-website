import React from 'react'
import { withSiteData, Head } from 'react-static'
import styled from 'styled-components'

import CaseStudiesTextBlock from '../containers/Case Studies/CaseStudiesTextBlock'
import EmailCTA from '../containers/About/EmailCTA'

const MainBlock = styled.div`
  width: 800px;
  max-width: 95%;
  margin: auto;
`

const CenterDiv = styled.div`
  margin: auto;
  text-align: center;
`

export default withSiteData(() => {
  return (
    <div >
    <Head>
      <title>Chord Analytics Case Studies | Data Science Consulting</title>
      <meta name="description" content="Let us help with your next data project. We offer global consulations and analytics services, from Toronto ON." />
    </Head>
    <MainBlock>
      <div>
        <CenterDiv>
          <h1>Case Studies</h1>
        </CenterDiv>
        <CaseStudiesTextBlock />
        <EmailCTA />
      </div>
    </MainBlock>
  </div>
  )
});
