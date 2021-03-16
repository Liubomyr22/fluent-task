import React from 'react';
import { Dropdown,Flex,AddIcon,CircleIcon,MoreIcon,ExclamationCircleIcon } from '@fluentui/react-northstar'

const inputItems = [
    'Bruce Wayne',
    'Natasha Romanoff',
    'Steven Strange',
  
  ];

const TopNavbar = ({setOpenDashBoard,setOpenSettings}) => {
    

    return <>
    <Flex space="between" wrap="true">
        <Flex gap="gap.small" vAlign="center" wrap="true">
        <CircleIcon size="largest" background="blue" />
        <h2>Intranet</h2>
        <div onClick={ ()=>setOpenDashBoard(true)}>Dashboard</div>
        <div onMouseOver={ ()=>setOpenSettings(true)}>Settings</div>
        <AddIcon />
        </Flex>
        <Flex vAlign="center"gap="gap.small" >
        <MoreIcon size="medium" />
        <ExclamationCircleIcon size="medium" />
        <Dropdown  inverted items={inputItems} placeholder="Meet" fluid={true} /> 
        </Flex>
        </Flex>
        </>
}

export default TopNavbar;
