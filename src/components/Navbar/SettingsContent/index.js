import { Grid, Segment, OpenOutsideIcon, Flex, FlexItem } from '@fluentui/react-northstar'


const SettingsContent = ({ num }) => {
  return <>
    <Grid columns="repeat(2, 1fr)" rows="70px 0px 20px" >
      <Segment
        content={<Flex gap="gap.medium" padding="padding.medium"  > <FlexItem ><OpenOutsideIcon /></FlexItem> <div /> {`Step ${num}`}</Flex>}
        styles={{
          gridColumn: 'span 1',
        }}
      />
    </Grid>
  </>
}

export default SettingsContent;