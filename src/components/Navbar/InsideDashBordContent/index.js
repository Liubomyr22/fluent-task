import React from 'react';
import { Flex, Text, Header } from '@fluentui/react-northstar'

const InsideDashBoardContent = () => {
  return <Flex gap="gap.medium" padding="padding.medium" column >
    <Flex.Item grow>
      <Flex column gap="gap.small" vAlign="stretch">
        <Header as="h3" content="My career and Benefits" />
        <Text content="Benefits" />
        <Text content="Learning portal" />
        <Text content="Jobs" />
        <Text content="Give" />
      </Flex>
    </Flex.Item>
    <Flex.Item grow>
      <Flex column gap="gap.small" vAlign="stretch">
        <Header as="h3" content="Travel and Expense" />
        <Text content="Travel" />
        <Text content="Expense" />
        <Text content="Payments" />
        <Text content="US Travel" />
      </Flex>
    </Flex.Item>
  </Flex>
}

export default InsideDashBoardContent;