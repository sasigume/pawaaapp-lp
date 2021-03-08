import dayjs from 'dayjs'
import { Badge, Box, Center, Flex } from '@chakra-ui/react'
import { Post } from '@/models/contentful/Post'

import LinkChakra from '@/components/common/link-chakra'

import MarkdownRender from '@/components/common/MarkdownRender'

interface Props {
  post: Post
}

export function SinglePostComponent({ post }: Props) {
  return (
    <article style={{ maxWidth: '100vw', overflowX:'hidden' }} area-label={post.title}>
      <Flex w="full" overflowX="hidden" direction="column">
        <Center>
          <Box mr={{ base: 0, md: 8 }}>

            <Box area-label="更新日時" mb={6}>
              <Badge colorScheme="blue">公開: {dayjs(post.sys.firstPublishedAt).format('YYYY/MM/DD')}</Badge>
              <Badge colorScheme="green">最終更新: {dayjs(post.sys.publishedAt).format('YYYY/MM/DD')}</Badge>
            </Box>
          </Box>
        </Center>

        <Box mx="auto" px={0} direction="column" style={{ maxWidth: '100vw' }}>
          <Box textStyle="h1" mb={8}>
            <LinkChakra href={`/${post.slug}`}>
              <h1>{post.title}</h1>
            </LinkChakra>
          </Box>
          <Box area-label="記事の概要" my={4} fontSize="1.4rem">
            {post.description}
          </Box>
          <Box>
            <Flex w="full">
              <MarkdownRender source={post.body} />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </article>
  )
}
