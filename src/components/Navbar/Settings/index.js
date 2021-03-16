import React from 'react';
import { ReactMegaMenu } from "react-mega-menu"
import SettingsContent from '../SettingsContent';
import InsideSettings from '../InsideSettings';

const settingsData = [
    {
        label: <SettingsContent num={"1"} />,
        key: 1,
        items: <InsideSettings />
    },
    {
        label: <SettingsContent num={"2"} />,
        key: 2,
        items: <InsideSettings />
    },
    {
        label: <SettingsContent num={"3"} />,
        key: 3,
        items: <InsideSettings />
    }
]
const Settings = ({ setOpenSettings }) => {
    return <ReactMegaMenu
        tolerance={50}
        onExit={() => setOpenSettings(false)}
        data={[...settingsData]}
    />
}

export default Settings;