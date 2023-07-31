import React, {Fragment} from 'react'
import {Form, Segment, Checkbox} from 'semantic-ui-react'

function EntryForm({ 
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense
}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          placeholder="new shiny thing"
          width={12}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Form.Input>

        <Form.Input
          icon="dollar"
          placeholder="100"
          width={4}
          label="value"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Form.Input>
      </Form.Group>

      <Segment compact>
              <Checkbox
                  checked={isExpense}
                  toggle
                  label="is Expense"
                  onChange={()=> setIsExpense((oldState) => !oldState)}
              />
      </Segment>
    </Fragment>
  );
}

export default EntryForm