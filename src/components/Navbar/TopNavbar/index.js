import React from 'react';
import { Dropdown,Flex,AddIcon,CircleIcon,MoreIcon,ExclamationCircleIcon, Grid } from '@fluentui/react-northstar'
import DashBoard from '../DashBoard';
  

const inputItems = [
    'Bruce Wayne',
    'Natasha Romanoff',
    'Steven Strange',
  
  ];

const TopNavbar = ({setOpenDashBoard,setOpenSettings}) => {
    

    return <>
    <Flex space="between">
        <Flex gap="gap.small" vAlign="center">
        <CircleIcon size="largest" background="blue" />
        <h2>Intranet</h2>
        <div onClick={ ()=>setOpenDashBoard(true)}>Dashboard</div>
        <div onClick={ ()=>setOpenSettings(true)}>Settings</div>
        <AddIcon />
        </Flex>
        <Flex vAlign="center"gap="gap.small" >
        <MoreIcon size="medium" />
        <ExclamationCircleIcon size="medium" />
        <Dropdown  inverted items={inputItems} placeholder="Meet" fluid={true} /> 
        </Flex>
        </Flex>
        <Grid>
        </Grid>
        </>
}

export default TopNavbar;
