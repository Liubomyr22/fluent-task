import React from 'react';
import { Flex, AppsIcon,WindowMinimizeIcon,EmojiIcon,BellIcon,ChatIcon,ContactGroupIcon,CalendarIcon,FilesEmptyIcon,MoreIcon } from '@fluentui/react-northstar';


const icons = [
    {
        icon: <EmojiIcon  size="largest" />,
        label: "Intranet"
    },
    {
        icon: <BellIcon size="largest" />,
        label: "Bell"
    },
    {
        icon: <ChatIcon size="largest" />,
        label: "Chat"
    }, {
        icon: <ContactGroupIcon size="largest" />,
        label: " Contact "
    },
    {
        icon: <CalendarIcon size="largest"  />,
        label: "Calendar"
    },
    {
        icon: <FilesEmptyIcon size="largest" />,
        label: "File"
    },
    {
        icon: <MoreIcon  size="largest"/>,
        label: "More"
    },
    {
        icon: <WindowMinimizeIcon size="largest"/>,
        
    },
    {
        icon: <AppsIcon  size="largest"/>,
        label: "Apps"
    },
]

const NavbarStyles = {
 color:"red"
} 

const Navbar = () => {
    return <div className={NavbarStyles}>
        {icons.map(element => {
            return <div >
                <Flex column>
                {element.icon}
                {element.label}
                </Flex>
                </div>
        })}
        
    </div>
}

export default Navbar;