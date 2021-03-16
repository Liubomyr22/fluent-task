import React from 'react'
import { Accordion } from '@fluentui/react-northstar'


const subPanels = [
  {
    key: 'd',
    title: 'Sub navigation item 1',
    content: 'Sub sub navigation item 1',
  },
  {
    key: 'd',
    title: 'Sub navigation item 2',
    content: 'Sub sub navigation item 2',
  },
]

export const AccordionRecursion = () => {
  return <>
    <Accordion panels={subPanels} />
  </>
}

const panels = [
  {
    key: 'p',
    title: 'Navigation Item 1',
    content: <AccordionRecursion />,
  },
  {
    key: 'd',
    title: 'Navigation Item 2',
    content: <AccordionRecursion />,
  },
  {
    key: 'd',
    title: 'Navigation Item 3',
    content: <AccordionRecursion />,
  },
  {
    key: 'd',
    title: 'Navigation Item 4',
    content: <AccordionRecursion />,
  },
  {
    key: 'd',
    title: 'Navigation Item 5',
    content: <AccordionRecursion />,
  },
  {
    key: 'd',
    title: 'Navigation Item 6',
    content: <AccordionRecursion />,
  },
]

const AccordionExample = () => <Accordion panels={panels} />

export default AccordionExample