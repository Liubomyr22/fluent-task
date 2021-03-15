import react from 'react';
import { Grid,Segment,OpenOutsideIcon, Flex } from '@fluentui/react-northstar'


const SettingsContent = ({num}) => {
    return <>
    <Grid columns="repeat(3, 1fr)" rows="50px 0px 10px" >
          <Segment
    content={<Flex ><OpenOutsideIcon /> <div>{`step ${num}`}</div></Flex>}
    styles={{
      gridColumn: 'span 2',
    }}
  />
    </Grid>
    </>
}

export default SettingsContent;