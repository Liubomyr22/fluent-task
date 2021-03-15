import React from 'react';
import { Grid,Segment,Input } from '@fluentui/react-northstar'
import './App.css';
import Navbar from './components/Navbar';
import TopNavbar from './components/Navbar/TopNavbar';
import DashBoard from './components/Navbar/DashBoard';
import Settings from './components/Navbar/Settings';

function App() {
  const [openDashBoard,setOpenDashBoard] = React.useState(false)
  const [openSettings,setOpenSettings] = React.useState(false)
  return ( 
  <>
<Grid columns="repeat(6, 1fr)" >
  <Segment
    color="brand"
    content={<Input styles={{
      alignItems:"center", width:"100%"}} />}
    inverted
    styles={{
      gridColumn: 'span 6',
    }}
  />
  </Grid>
  <Grid columns="repeat(12, 1fr)" rows=" 100px">
  <Segment
    color="#A9A9A9"
    content={<Navbar />}
    inverted
    styles={{
      gridColumn: 'span 1',
      gridRow: '1/3',
    }}
  />
  <Segment
    color="green"
    content={<TopNavbar setOpenDashBoard={setOpenDashBoard} setOpenSettings={setOpenSettings} />}
    inverted
    styles={{
      gridColumn: 'span 11',
      gridRow: '1',
    }}
  />
  <Segment
    color="green"
    content={openDashBoard && <DashBoard setOpenDashBoard={setOpenDashBoard} />
    || openSettings && <Settings setOpenSettings={setOpenSettings} />}       
    inverted
    styles={{
      gridColumn: 'span 11',
      gridRow: '2',
    }}
  />
</Grid>
 </>
  );
}

export default App;
