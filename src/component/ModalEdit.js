import React from 'react'
import {Modal, Button} from 'semantic-ui-react'
import EntryForm from './EntryForm'

 function ModalEdit() {
  return (
    <Modal>
        <Modal.Header>Edit entry</Modal.Header>
        <Modal.Content>
            <EntryForm/>
        </Modal.Content>
        <Modal.Actions>
            <Button>Close</Button> 
            <Button primary >OK</Button> 
        </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
