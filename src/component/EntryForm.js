import React, {Fragment} from 'react'
import {Form, Segment, Checkbox} from 'semantic-ui-react'

function EntryForm() {
  return (
    <Fragment>
        <Form.Group>
            <Form.Input
                icon='tags'
                placeholder='new shiny thing'
                width={12}
                label='Description'
                value='hehe'
            >

            </Form.Input>

            <Form.Input
                icon='dollar'
                placeholder='100'
                width={4}
                label='value'
                value='123123'
            >

            </Form.Input>
        </Form.Group>

        <Segment compact>
            <Checkbox
                checked='true'
                toggle
                label='is Expense'

            />
        </Segment>
    </Fragment>
  )
}

export default EntryForm