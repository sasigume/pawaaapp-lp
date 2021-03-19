import { Badge, Box, Code } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import LinkChakra from '../link-chakra'
import React from 'react'
const gfm = require('remark-gfm')

interface MdLinkProps {
  url: string
  title: string
}

const MdLink = ({ url, title }: MdLinkProps) => (
  <LinkChakra href={url} area-label={title}>
    <Box fontWeight="bold" transitionDuration=".3s" shadow="sm" _hover={{ shadow: "lg" }} my={4} p={3} rounded="lg" border="solid" borderWidth={1} borderColor="gray.400">
      <Box textStyle="h4">{title}</Box>
      {url}
    </Box>
  </LinkChakra>
)

interface RenderProps {
  source: string
  plugins?: any[]
  renderers?: any
}

function MarkdownRender(props: RenderProps) {

  // match id space to automatic generated anchor link hyphene
  const headingId = (props: any) => props.children[0].props.children.replace(` `, `-`)

  const newProps = {
    source: props.source,
    plugins: [
      gfm,
    ],
    renderers: {
      ...props.renderers,

      heading: (props: any) => (
        <Box textStyle={(`h${props.level}`)}>
          {props.level == 1 && <h1 id={headingId(props)}>{props.children}</h1>}
          {props.level == 2 && <h2 id={headingId(props)}>{props.children}</h2>}
          {props.level == 3 && <h3 id={headingId(props)}>{props.children}</h3>}
          {props.level == 4 && <h4 id={headingId(props)}>{props.children}</h4>}
          {props.level == 5 && <h5 id={headingId(props)}>{props.children}</h5>}
          {props.level == 6 && <h6 id={headingId(props)}>{props.children}</h6>}
        </Box>),
      code: (props: any) =>
        <Code whiteSpace="pre-wrap" colorScheme="teal">{props.value}</Code>,
    }
  }
  const newPropsIfValid = {
    ...newProps,
    renderers: {
      ...newProps.renderers
    }
  }

  const ErrorMd = () => {
    return <ReactMarkdown allowDangerousHtml {...newPropsIfValid} />
  }

  // wrap with class for chakra theme
  return (
    <Box w="full" className="mdrenderWrapper">
      <ErrorMd />
    </Box>
  );
}

export default MarkdownRender