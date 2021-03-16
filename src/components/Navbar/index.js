import React from 'react';
import { Flex, AppsIcon, WindowMinimizeIcon, EmojiIcon, BellIcon, ChatIcon, ContactGroupIcon, CalendarIcon, FilesEmptyIcon, MoreIcon } from '@fluentui/react-northstar';


const icons = [
    {
        icon: <EmojiIcon size="largest" />,
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
        icon: <CalendarIcon size="largest" />,
        label: "Calendar"
    },
    {
        icon: <FilesEmptyIcon size="largest" />,
        label: "File"
    },
    {
        icon: <MoreIcon size="largest" />,
        label: "More"
    },
    {
        icon: <WindowMinimizeIcon size="largest" />,

    },
    {
        icon: <AppsIcon size="largest" />,
        label: "Apps"
    },
]

const Navbar = () => {
    return <div>
        {icons.map(element => {
            return <div >
                <Flex styles={{ background: "silver" }} hAlign="center">
                    <Flex column hAlign="center" padding="padding.medium">
                        {element.icon}
                        <Flex hAlign="center">
                            {element.label}
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        })}
    </div>
}

export default Navbar;