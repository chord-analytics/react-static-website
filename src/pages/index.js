import React from 'react'
import { withSiteData, Head } from 'react-static'
import styled from 'styled-components'

import MainOutLinks from '../containers/Home/MainOutLinks'
import ProfileCards from '../containers/Home/ProfileCards'

import logoImg from '../logo.svg'

const MainBlock = styled.div`
  max-width: 100%;
`

export default withSiteData(() => (
  <MainBlock>
    <Head>
      <title>Chord Analytics | Data Science Consulting</title>
      <meta name="description" content="On the forefront of practical data analytics for business. Reach out today for consulting services. Based in Toronto, ON." />
      <meta property="og:image" content="https://chordanalytics.com/chord_logo.png" />
    </Head>
    <div>
      <img className="header-image" src={logoImg} alt=""/>
    </div>
    <h1 style={{ textAlign: 'center' }}>Data Science and Analytics Consulting</h1>
    <br/>
      <MainOutLinks />
    <br/>
    <div>
      <ProfileCards />
    </div>
  </MainBlock>
))
