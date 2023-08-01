import {
  Container, 
  Header, 
  Statistic, 
  Segment, 
  Grid, 
  Icon,
  Form,
  Button
} from 'semantic-ui-react'
import MainHeader from './component/MainHeader';
import DisplayBalance from './component/DisplayBalance';
import DisplayBalances from './component/DisplayBalances'
import EntryLines from './component/EntryLines';
import { useState, useEffect } from "react";
import NewEntryForm from './component/NewEntryForm';
import ModalEdit from './component/ModalEdit';
import { useSelector } from "react-redux";


function App() {

  const entries = useSelector((state) => state.entries)
  const {isOpen, id} = useSelector((state) => state.modals)
  const [entry, setEntry] = useState()
  // này show data khi nhấn edit
  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id]);
  


  return (
    <Container>
      <MainHeader type='h1' title='Budget Redux Saga Mẫu Tự Làm'/>
      <DisplayBalance 
        title='Your Balance' 
        value='123'
        color='green'
        size='small'
        />
      <DisplayBalances/>
      <MainHeader title='History' type='h3'/>
      <EntryLines entries={entries}/>
      <MainHeader title='Add New Transaction' type='h3'/>
      <NewEntryForm/>
      <ModalEdit
        isOpen={isOpen}
        {...entry}
      />
    </Container>
  );
}

export default App;

// var initialEntries = [
//   {
//   id:1,
//   description:'work income',
//   value:'1500',
//   isExpense: false,
// },
// {
//   id:2,
//   description:'work income',
//   value:'1500',
//   isExpense: false,
// },
// {
//   id:3,
//   description:'work income',
//   value:'1500',
//   isExpense: false,
// },
// {
//   id:4,
//   description:'work income',
//   value:'1500',
//   isExpense: false,
// },
// {
//   id:5,
//   description:'work income',
//   value:'1500',
//   isExpense: false,
// },

// ]
