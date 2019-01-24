import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

import alexPic from '../../alex.jpg'
import andrewPic from '../../andrew.jpg'
import willemPic from '../../willem.jpg'

const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 1000px;
  min-width: 50%;
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

const PersonCard = styled.div`
  flex: 1 1 150px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 5px;
  padding: 2vw;
  align-items: left;
  justify-content: left;
  align-self: flex-start;
  text-align: left;
  margin: 1rem;
`

const InnerCard = styled.div`
  width: 100%;
  height: 100%
`

class ProfileCards extends React.Component {
  render() {
    return (
      <div>
        <Cards style={{ margin: 'auto' }}>
          <PersonCard style={{ maxWidth: "400px" }}>
            <div className="person-card-contents-1">Andrew Tan</div>
            <div className="person-card-contents-2">Founder</div>
            <div className="person-card-contents-3"><i>M.Sc Engineering Physics</i></div>
            <div className="person-card-contents-4">
            <br/>
              Experienced at building custom applications to query large datasets (petabytes) and train neural networks for Natural Language Processing (NLP) applications. Proficient in C++ and Python.
            </div>
            <Card href="https://github.com/andtan91" target="_blank" background="rgba(0, 0, 0, 0.3)">
              <InnerCard>GitHub</InnerCard>
            </Card>
            <Card href="https://www.linkedin.com/in/andrewtan91/" target="_blank" background="rgb(7, 95, 237, 0.7)">
              <InnerCard>Linkedin</InnerCard>
            </Card>
            <img className="person-card-pic" src={andrewPic} alt=""/>
          </PersonCard>
          <PersonCard>
            <div className="person-card-contents-1">Alex Galea</div>
            <div className="person-card-contents-2">Founder</div>
            <div className="person-card-contents-3"><i>M.Sc Theoretical Physics</i></div>
            <div className="person-card-contents-4">
            <br/>
              Web-analytics expert and Python developer. Proficient with Jupyter Notebooks, data collection, exploration, visualization and predictive analytics. Courseware author and teacher.
            </div>
            <Card href="https://github.com/agalea91" target="_blank" background="rgba(0, 0, 0, 0.3)">
              <InnerCard>GitHub</InnerCard>
            </Card>
            <Card href="https://medium.com/@galea" target="_blank" background="rgba(70, 196, 81, 0.7)">
              <InnerCard>Medium</InnerCard>
            </Card>
            <Card href="https://www.linkedin.com/in/alex-galea/" target="_blank" background="rgb(7, 95, 237, 0.7)">
              <InnerCard>Linkedin</InnerCard>
            </Card>
            <img className="person-card-pic" src={alexPic} alt=""/>
          </PersonCard>
          <PersonCard>
            <div className="person-card-contents-1">Willem Klumpenhouwer</div>
            <div className="person-card-contents-2">Founder</div>
            <div className="person-card-contents-3"><i>PhD Transportation Engineering</i></div>
            <div className="person-card-contents-4">
            <br/>
              Skilled at facilitating logic and data driven conversations, analytical research, and strategic thinking. Experienced with desktop and web application development and data visualization. Improvisor by night.
            </div>
            <Card href="https://github.com/wklumpen" target="_blank" background="rgba(0, 0, 0, 0.3)">
              <InnerCard>GitHub</InnerCard>
            </Card>
            <Card href="https://twitter.com/wklumpen" target="_blank" background="rgba(118, 122, 130, 0.7)">
              <InnerCard>Twitter</InnerCard>
            </Card>
            <Card href="https://www.linkedin.com/in/wklumpen/" target="_blank" background="rgb(7, 95, 237, 0.7)">
              <InnerCard>Linkedin</InnerCard>
            </Card>
            <img className="person-card-pic" src={willemPic} alt=""/>
          </PersonCard>
        </Cards>
      </div>
    );
  }
}

export default ProfileCards;