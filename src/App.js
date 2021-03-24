import { Container , CssBaseline, Typography, TextField, Button} from "@material-ui/core"
import useStyles from './styles'
import List from './List'
import {useState} from 'react'

function App() {
  const classes = useStyles();

  const [itemName, setItemName] = useState('');
  const [list,setList] = useState([]);
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const removeItem = (id)=>{
      const newList = list.filter((item) => item.id!==id) ;
      setList(newList);
  }

  const editItem = (id)=>{
    const specificItem = list.find((item)=>item.id===id);
    setEditID(id);
    setIsEditing(true);
    setItemName(specificItem.title);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isEditing){
      const newList = list.map((item)=>{
        if(item.id===editID)
        return {...item,title:itemName};
        else
        return item;
      })
      setList(newList);
      setIsEditing(false);
      setItemName('');
    }
    else{
    const item = {id:new Date().getTime().toString(),title:itemName}
    const newList = [...list,item]
    setList(newList);
    setItemName('');
    }
    //console.log(list);
  }

  const clearList =()=>{
    setList([])
  }

  return (
   <>
   <CssBaseline/>
  
   <Container className={classes.window} maxWidth="xs"  >
    <Typography variant = "h4" align="center">Add Items To Remember</Typography>
    <form className={classes.formContainer} >
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="eg eggs"
        value={itemName}
        onChange={(e)=>setItemName(e.target.value)}
      />
      <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            {isEditing ? 'Edit' :  'Add'}
      </Button>
    </form>
    </Container>
    {list.length>0 &&(
      <Container className={classes.groceryList} maxWidth='xs'>
        <List list={list} removeItem={removeItem} editItem={editItem}/>
        <div className={classes.btn}>
        <Button onClick={clearList}>clear Items</Button>
        </div>
      </Container>
    )}
   </>
  );
}

export default App;
