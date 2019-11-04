import React, { useState } from 'react'
import { Header, Button, Modal, Form, Icon } from 'semantic-ui-react'
import './App.css'

const ThemeSelector = ({ setTheme }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpen = () => setIsModalOpen(true)

    const handleClose = () => setIsModalOpen(false)

    const changeTheme = (e, {value}) => {
        setTheme(value)
    }

    const options = [
        { key: 'blue', text: 'Blue', value: 'blue' },
        { key: 'red', text: 'Red', value: 'red' },
        { key: 'yellow', text: 'Yellow', value: 'yellow' },
        { key: 'green', text: 'Green', value: 'green' }
    ]
return (

<Modal open={isModalOpen} trigger={<Button onClick={handleOpen}>Change theme</Button>} onClose={handleClose} dimmer={'blurring'} size={'tiny'}>
        <Modal.Header>Select a Theme</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Customize</Header>
            <Form>
              <Form.Group widths='equal'>
                <Form.Select
                  label='Themes'
                  options={options}
                  placeholder='Set your Theme'
                  onChange={changeTheme}
                />
              </Form.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={handleClose} inverted>
            <Icon name='checkmark' /> Update
          </Button>
        </Modal.Actions>
      </Modal>
    )
}

export default ThemeSelector