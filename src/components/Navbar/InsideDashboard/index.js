import React from 'react'
import { Flex } from '@fluentui/react-northstar'
import InsideDashBoardContent from '../InsideDashBordContent';

const InsideDashboard = () => (
  <Flex debug>
    <InsideDashBoardContent />
    <InsideDashBoardContent />
  </Flex>
)

export default InsideDashboard;