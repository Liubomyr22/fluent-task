import React from 'react'
import { Flex, Image, Text, Header } from '@fluentui/react-northstar'

const InsideDashboard = () => (
  <Flex gap="gap.medium"  debug>
    <Flex.Item grow>
      <Flex column gap="gap.small" vAlign="stretch">
        <Flex space="between">
          <Header as="h3" content="LOREM IPSUM" />
          <Text as="pre" content="Oct 24th, 00:01" />
        </Flex>
        <Text content="Manblog." />
        <Flex.Item push>
          <Text as="pre" content="COPYRIGHT: Fluent UI." />
        </Flex.Item>
      </Flex>
    </Flex.Item>
  </Flex>
)

export default InsideDashboard;