import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Menu, Grid, Header, Segment } from 'semantic-ui-react'
import './App.css'
import ThemeSelector from './ThemeSelector'
import MyPage from "../MyPage/MyPage"
import Resume from "../Resume/Resume"

function App() {
  const [activeItem, setActiveItem] = useState('resume')
  const [themingPageColor, setThemingPageColor] = useState('blue')
  
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }

const showThemedPage = (color) => {
  return (
    <Grid centered verticalAlign='middle' container>
      <Grid.Row>
        <Grid.Column textAlign='center'>
        <Segment inverted textAlign='center'>
          <Header as='h1' inverted color={color}>
            <div>Feroz Damani</div>
            <div>Frontend Engineer</div>
          </Header>
        </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column textAlign='center'>
        <Menu stackable inverted widths={2} color={color}>
            <Menu.Item
              name='resume'
              active={activeItem === 'resume'}
              onClick={handleItemClick}
              as={Link}
              to={'/'}
            >
              <strong>Resume</strong>
            </Menu.Item>
            
            <Menu.Item
              name='myPage'
              active={activeItem === 'myPage'}
              onClick={handleItemClick}
              as={Link}
              to={'/typed-page'}
            >
              <strong>typed.js Demo</strong>
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Switch>
            <Route exact path='/' render={(props) => <Resume {...props} color={color} />}/>
            <Route exact path='/typed-page' component={MyPage} />
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
