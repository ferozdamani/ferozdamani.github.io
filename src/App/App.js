import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Menu, Grid, Header, Segment } from 'semantic-ui-react'
import './App.css'
// import logo from '../fd-logo.svg'
import ThemeSelector from './ThemeSelector'
import MyPage from "../MyPage/MyPage"
import Resume from "../Resume/Resume"

function App() {
  const [activeItem, setActiveItem] = useState('myPage')
  const [themingPageColor, setThemingPageColor] = useState('blue')
  
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }

const showThemedPage = (color) => {
  return (
    <Grid centered verticalAlign='middle' container={true}>
      <Grid.Row>
        <Grid.Column width={12} textAlign='center'>
        <Segment inverted textAlign='center'>
          <Header as='h1' inverted color={color}>
            Feroz Damani
          </Header>
        </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8} textAlign='center'>
        <Menu stackable inverted widths={2} color={color}>
            <Menu.Item
              name='myPage'
              active={activeItem === 'myPage'}
              onClick={handleItemClick}
              as={Link}
              to={'/'}
            >
              Home
            </Menu.Item>

            <Menu.Item
              name='resume'
              active={activeItem === 'resume'}
              onClick={handleItemClick}
              as={Link}
              to={'/my-resume'}
            >
              Resume
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={14} textAlign='center'>
          <Switch>
            <Route exact path='/' component={MyPage} />
            <Route exact path='/my-resume' component={Resume} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

  return (
    <div className="App">
      <ThemeSelector setTheme={setThemingPageColor} />
      {showThemedPage(themingPageColor)}
    </div>
  );
}

export default App
