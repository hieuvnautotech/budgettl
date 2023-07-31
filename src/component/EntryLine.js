import React from 'react'
import {Container, Segment, Grid, Icon} from 'semantic-ui-react'
import { useDispatch} from 'react-redux'
import { openEditModal } from '../actions/modals.actions'

function EntryLine({id, description, value, isExpense=false}) {

  const dispatch = useDispatch()

  return (
    <Container>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              {description}
            </Grid.Column>

            <Grid.Column width={3} textAlign='right'>
              {value}
            </Grid.Column>

            <Grid.Column width={3}>
              <Icon name='edit' bordered onClick={()=>dispatch(openEditModal(id))}/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}

export default EntryLine