import React from 'react'
import styled from 'styled-components'

const CenterDiv = styled.div`
  margin: auto;
  text-align: center;
`

const Card = styled.a`
  flex: 1 1 150px;
  border: 2px solid rgba(255, 255, 255, 1);
  background: ${props => props.background};
  color: black;
  border-radius: 5px;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-weight: bold;
  font-size: 1.2rem;
  white-space: nowrap;
  width: 400px
  max-width: 95%
  // cursor: pointer;
  // transition: 0.1s ease-out;
  // :hover {
  //   transform: translate(3px, 0px);
  //   box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  };
`

class EmailCTA extends React.Component {
  render() {
    return (
      <CenterDiv style={{ paddingTop: '30px' }}>
        Let us help with your next data project.
        <div style={{ paddingTop: '10px' }}>
          <Card background="rgba(255, 255, 255, 0.7)">
            <div style={{ textAlign: 'center', color: "black" }}>
              <b>chordanalytics@gmail.com</b>
            </div>
          </Card>
        </div>
      </CenterDiv>
    );
  }
}

export default EmailCTA;