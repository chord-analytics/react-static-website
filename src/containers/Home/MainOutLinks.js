import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 800px;
  max-width: 95%;
`

const Card = styled.a`
  flex: 1 1 150px;
  border: 2px solid rgba(0, 0, 0, 1);
  background: ${props => props.background};
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;
  :hover {
    transform: translate(3px, 0px);
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  }
`

const LinkCard = styled(Link)`
  flex: 1 1 150px;
  border: 2px solid rgba(0, 0, 0, 1);
  background: ${props => props.background};
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;
  :hover {
    transform: translate(3px, 0px);
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.2);
  }
`

const InnerCard = styled.div`
  width: 100%;
  height: 100%
`

class MainOutLinks extends React.Component {
  render() {
    return (
      <div>
        <Cards style={{ margin: 'auto' }}>
            <Card href="https://github.com/chord-analytics" target="_blank" background="rgba(0, 0, 0, 0.7)">
              <InnerCard>GitHub</InnerCard>
            </Card>
            <LinkCard to="/case-studies" background="rgb(236, 0, 0, 0.7)">
              <InnerCard>Case Studies</InnerCard>
            </LinkCard>
        </Cards>
      </div>
    );
  }
}

export default MainOutLinks;