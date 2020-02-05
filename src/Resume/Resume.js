import React from 'react'
import { Image, List, Grid, Label, Icon, Accordion } from 'semantic-ui-react'
import myImage from '../assets/author-img.JPG'
import './Resume.css'

const Resume = React.memo(({ color }) => {
    return(
        <React.Fragment>
            <Grid stackable padded centered divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column width={5}>
                        <Image avatar src={myImage} size='small'/>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' width={5} textAlign='left'>
                        <List animated size='large'>
                            <List.Item>
                                <List.Icon name='user' color={color}/>
                                <List.Content>
                                    Feroz Damani
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' color={color}/>
                                <List.Content>San Francisco, CA</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='mail' color={color}/>
                                <List.Content>
                                    <a href='mailto:ferozdamani13@gmail.com'>ferozdamani13@gmail.com</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='linkify' color={color}/>
                                <List.Content>
                                    <a href='https://github.com/ferozdamani' rel="noopener noreferrer" target='_blank'>GitHub Profile</a>
                                </List.Content>
                            </List.Item>
                        </List>  
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={10} textAlign='center'>
                    <Label.Group size='big'>
                        <Label><Icon name='js' size='big' color='green'/>Javascript</Label>
                        <Label><Icon name='html5' size='big' color='orange'/>HTML</Label>
                        <Label><Icon name='css3' size='big' color='red'/>CSS</Label>
                        <Label><Icon name='react' size='big' color='blue' loading/>ReactJs</Label>
                        <Label><Icon name='npm' size='big' color='black'/>npm</Label>
                    </Label.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <h2>Work Experience</h2>
            <Accordion>
                <Accordion.Title>
                    Wells Fargo &amp; Co.
                </Accordion.Title>
                <Accordion.Content active={true}>
                    I have worked on Multiple projects at Wells Fargo. Executing various job responsibilities.
                </Accordion.Content>
            </Accordion>
        </React.Fragment>
    )
});

export default Resume;