import React from 'react'
import {Grid, Typography,Container, Button,ButtonGroup} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles'



const List = ({list, removeItem, editItem}) => {
    const classes = useStyles();
    return (
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="stretch"
        >
           {
               list.map((item)=>{
                   const{id,title} = item;
                    return(
                        <Grid item key={id} className={classes.item}>
                            <Typography variant='subtitle2' className={classes.title}>{title}</Typography>
                            <ButtonGroup className={classes.btnGroup} color="primary" aria-label="small outlined primary button group">
                            <IconButton aria-label="delete"  color="primary" onClick={()=>removeItem(id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="delete"  color="primary" onClick={()=>editItem(id)}>
                                <EditIcon />
                            </IconButton>
                            </ButtonGroup>
                        </Grid>
                         
                         )})
            }
        </Grid>
   
    )
}

export default List
