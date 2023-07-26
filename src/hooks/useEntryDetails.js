import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import {closeEditModal} from '../actions/modals.actions'
import {v4 as uuidv4} from 'uuid'