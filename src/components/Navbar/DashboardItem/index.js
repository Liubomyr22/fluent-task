import React from 'react';
import { Grid, Segment, Flex } from '@fluentui/react-northstar'


const DashBoardItem = ({ num }) => {
    return <Grid columns="repeat(3, 1fr)" rows="50px 0px 10px" >
        <Segment
            content={<Flex margin="margin.none"> {`Sub Menu Item ${num}`}</Flex>}
            styles={{
                gridColumn: 'span 2',
            }}
        />
    </Grid>
}

export default DashBoardItem;