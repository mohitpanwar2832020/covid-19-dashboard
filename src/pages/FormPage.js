import {Box, Button, makeStyles } from "@material-ui/core";
import axios from 'axios';

 
    let useStyles= makeStyles({
        root:{
        width:"100vw",
        minHeight:"100vh",
        background:"#aaaaaa",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
      },
      
        headerImage:{
          marginTop:"50px",
          width:"500px",
          height:"150px",
          borderRadius:"15px",
      },
      
      inputBox:{
        marginTop:"30px",
        width:"500px",
        height:"100px",
        borderRadius:"15px",
        background:"#ffffff"
      }
      
      })
      
     export default function FormPage() {
      
        let formSubmit= function(){
          let data = {
            name:"mohit panwar",
            age:"18"
          }
      
          axios.post("http://localhost:5000/submit/", data).then((response)=>{
            console.log(response)
          }).catch((error)=>{
            console.log(error);
          });
        }
      
        let classes=useStyles();
        return (
          <Box className={classes.root}>
            <img className={classes.headerImage} src="D:/webD/lecture-18/forms/src/pics/2.jpg" alt="123"/>
      
            <Box className={classes.inputBox}></Box>
            <Box className={classes.inputBox}></Box>
            <Box className={classes.inputBox}></Box>
      
            <Button onClick={formSubmit}>click here</Button>
          </Box>
          
        );
      }
      



