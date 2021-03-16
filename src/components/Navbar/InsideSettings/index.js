import { Text, Header, Flex, AddIcon, SearchIcon, Input, Button } from '@fluentui/react-northstar'
import React from 'react';
import AccordionExample from '../Acordion';


const InsideSettings = () => {
    return <>
        <Flex gap="gap.medium" padding="padding.medium" debug >
            <Flex.Item >
                <Flex column gap="gap.small" vAlign="center" padding="padding.medium">
                    <Flex column >
                        <Header as="h2" content="Configure Navigation" />
                        <Text content="The Mega Menu can be configured here" />
                    </Flex>
                    <Header as="h4" content="Add Navigation Entries" />
                    <Text content="Here is an example how a section can be used to group input." />
                    <Flex gap="gap.smaller" >
                        <Flex.Item styles={{}}>
                            <Button icon={<AddIcon />} content="Add entry" iconPosition="before" primary />
                        </Flex.Item>
                        <Flex.Item>
                            <Input icon={<SearchIcon />} clearable placeholder="Search for a navigation entry" />
                        </Flex.Item>
                    </Flex>
                    <Flex gap="gap.smaller">
                        <Flex.Item>
                            <AccordionExample />
                        </Flex.Item>
                    </Flex>
                    <Flex gap="gap.smaller" className="style" >
                        <Button content="Discard" primary />
                        <Button content="Save" secondary />
                    </Flex>
                </Flex>
            </Flex.Item>
        </Flex>
    </>
}

export default InsideSettings;
