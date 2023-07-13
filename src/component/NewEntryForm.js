import React from 'react'
import {Form} from 'semantic-ui-react'
import EntryForm from './EntryForm'
import ButtonOrCancel from './ButtonOrCancel'

function NewEntryForm() {
  return (
    <Form unstackable>
        <EntryForm
            description='asdasd'
            setDescription='asdasda'
            value='123123'
            setValue='123123'
            isExpense='true'
        setIsExpense='true'
        />

        <ButtonOrCancel/>
    </Form>
  )
}

export default NewEntryForm