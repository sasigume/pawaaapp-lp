import dayjs from 'dayjs'
import { Badge, Box, Center, Divider, Flex } from '@chakra-ui/react'
import { Post } from '@/models/contentful/Post'

import LinkChakra from '@/components/common/link-chakra'

import MarkdownRender from '@/components/common/MarkdownRender'
import PlatformList from '../common/platform-list'
import PersonList from '../common/person-list'

interface Props {
  post: Post
}

export function SinglePostComponent({ post }: Props) {
  
  return (
    <>
      <Box>

      

            {post.person && (<Box>
              <PersonList persons={[post.person]} />
            </Box>)}

        <Box area-label="更新日時" mb={6}>
          <Badge colorScheme="blue">公開: {dayjs(post.publishDate ?? post.sys.firstPublishedAt).format('YYYY/MM/DD')}</Badge>
          <Badge colorScheme="green">最終更新: {dayjs(post.sys.publishedAt).format('YYYY/MM/DD')}</Badge>
        </Box>
      </Box>

      <Box px={0} direction="column">
        <Box textStyle="h1" mb={8}>
          <LinkChakra href={`/${post.slug}`}>
            <h1>{post.title}</h1>
          </LinkChakra>
        </Box>
        {(post.platformsCollection && post.platformsCollection.items.length > 0) && (<Box>
              <PlatformList platforms={post.platformsCollection.items} />
            </Box>)}
        <Box area-label="記事の概要" my={4} fontSize="1.4rem">
          {post.description}
        </Box>
        <Divider my={4} />
        <Box>
          <Flex w="full">
            <MarkdownRender source={post.body} />
          </Flex>
        </Box>
      </Box>
    </>
  )
}
