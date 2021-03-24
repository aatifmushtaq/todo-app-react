import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme)=>({
 window:{
    marginTop:'30px',

   padding : theme.spacing(4,0,6),
   backgroundColor: theme.palette.background.paper
 },
 groceryList : {
     marginTop:"10px",
   // padding: theme.spacing(8,0,6)
   backgroundColor: theme.palette.background.paper
  
 },
 formContainer:{
    padding : theme.spacing(2,2,2), 
 },
 btnGroup:{
    padding : theme.spacing(1,1,1),
    float: 'right'
 },
 title:{
    display:"inline-block",
    padding : theme.spacing(3,0,0)
 },
 btn:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
 },
 item : {
    //backgroundColor: theme.palette.background.paper
 }

}));

export default useStyles