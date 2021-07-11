import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Route,Switch} from "react-router-dom";
import FormPage from '../pages/FormPage';
import InboxPage from '../pages/InboxPage';
import SimpleList from '../components/SimpleList';






const useStyles = makeStyles((theme) => ({
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


 function MainLayout() {
     const [drawerOpen,setDrawerOpen]=useState(false);
  const classes = useStyles();

  return (
    
        <React.Fragment>
          
        <AppBar position="static">
        <Toolbar>
          <IconButton onClick={function(){
            setDrawerOpen(!drawerOpen);
          }}edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}  >
             <h2>COVID-19 VACCINATION Dashboard</h2>  
          </Typography>
          
           
            <Button color="inherit" >NEW CASE</Button>
            <Button color="inherit">OLD CASE</Button>
            <Button color="inherit">DEATH</Button>
            <Button color="inherit" >LOGIN</Button>
         
          
        </Toolbar>
      </AppBar>
      <img style={{
              height:"500px",
              width:"100%"
            }} src="https://graphics.reuters.com/CHINA-HEALTH-MAP/0100B59S39E/images/share-card.png" alt="123"/>
            <h2 style={{color:" #4682B4",width:"100%"}}>Globally, as of 5:29pm CEST, 9 July 2021, there have been 185,291,530 confirmed cases of COVID-19, including 4,010,834 deaths, reported to WHO. As of 7 July 2021, a total of 3,078,787,056 vaccine doses have been administered.</h2>
            
              
              <div
              style={{
                width:"400px",
                height:"10px",
                background:"#00FFFF",
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-end",
                justifyContent:"center",
                padding:"30px",
                borderRadius:"20px",
                marginLeft:"10px",
                marginTop:"80px",
                marginBottom:"20px"
            }}>
             <h1 style={{color:" #808000"}}>Vaccinations by location</h1>

            </div>
            
            <div>
            <table>
                  <tr>
                    <th style={{color:"#800000",paddingLeft:"70px",marginTop:"30px",fontSize:"25px"}}>Location   </th>
                    <th style={{color:"#800000",paddingLeft:"70px",marginTop:"30px",fontSize:"25px"}}>Doses given  </th>
                    <th style={{color:"#800000",paddingLeft:"70px",marginTop:"30px",fontSize:"25px"}}>Fully vaccinated</th>
                    <th style={{color:"#800000",paddingLeft:"70px",marginTop:"30px",fontSize:"25px"}}>% of population fully vaccinated</th>
                  </tr>
                  <hr></hr>
                <tr>
              <td> <img style={{
              height:"60px",
              width:"60px",
              marginTop:"40px",
              marginLeft:"75px",
              borderRadius:"15px"
            }} src="https://images-na.ssl-images-amazon.com/images/I/41JINRlOkpL.jpg" alt="123"/></td>
                <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>36.9Cr</td>
                <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>7.03Cr</td>
                <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>5.1%</td>
                  </tr>
                  <hr></hr>
                <tr>
               <td><img style={{
              height:"60px",
              width:"60px",
              marginTop:"40px",
              marginLeft:"75px",
              borderRadius:"15px"
            }} src="https://image.freepik.com/free-vector/people-s-republic-china-flag_183326-41.jpg" alt="123"/></td>
                <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>135Cr</td>
                <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>22.3Cr</td>
                <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>-</td>
                </tr>
                <hr></hr>
                <tr>
                <td><img style={{
              height:"60px",
              width:"60px",
              marginTop:"40px",
              marginLeft:"75px",
              borderRadius:"15px"
            }} src="https://images-na.ssl-images-amazon.com/images/I/911Hw17J98L._SL1500_.jpg" alt="123"/></td>
                    <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>33.2Cr</td>
                    <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>15.8Cr</td>
                    <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>48.2%</td>
                      </tr>
                      <hr></hr>
                      <tr>
                <td><img style={{
              height:"60px",
              width:"60px",
              marginTop:"40px",
              marginLeft:"75px",
              borderRadius:"15px"
            }} src="https://image.shutterstock.com/image-illustration/waving-fabric-flag-brazil-260nw-118750324.jpg" alt="123"/></td>
                    <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>11.1Cr</td>
                    <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>2.95Cr</td>
                    <td style={{fontSize:"20px",paddingLeft:"70px",marginTop:"50px",paddingTop:"25px"}}>51.3%</td>
                    </tr>


                
            </table>

            </div>
            <img></img>

            <div
              style={{
                width:"400px",
                height:"100px",
                background:"#808080",
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-end",
                justifyContent:"flex-start",
                padding:"30px",
                borderRadius:"20px",
                marginLeft:"400px",
                marginTop:"80px",
                marginBottom:"20px"
            }}>
             <h1 style={{color:" #00FFFF"}}>WEAR MASKS AND MAINTAIN DISTANCE</h1>

            </div>
            
             


            
            

           
      <Drawer  open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <SimpleList setDrawerOpen ={setDrawerOpen}/>         
      </Drawer>

        <Switch>
            <Route path="/form" exact>
                <FormPage/>                
            </Route>
            <Route path="/inbox" exact>
                <InboxPage/>                
            </Route>
        </Switch>
            </React.Fragment>

            
      

  );
 }


export {MainLayout};