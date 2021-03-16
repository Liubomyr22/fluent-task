import React from 'react';
import { Grid } from '@fluentui/react-northstar'
import { ReactMegaMenu } from "react-mega-menu"
import DashBoardItem from '../DashboardItem';
import InsideDashboard from '../InsideDashboard';


const dashBoardItems = [
    {
        label: <DashBoardItem num={"1"} />,
        key: 1,
        items: <InsideDashboard />
    },
    {
        label: <DashBoardItem num={"2"} />,
        key: 2,
        items: <InsideDashboard />
    },
    {
        label: <DashBoardItem num={"3"} />,
        key: 3,
        items: <InsideDashboard />
    }
];

const DashBoard = ({ setOpenDashBoard }) => {
    return <Grid column>
        <ReactMegaMenu
            tolerance={100}
            onExit={() => setOpenDashBoard(false)}
            data={[...dashBoardItems]}
        />
    </Grid>
}

export default DashBoard;