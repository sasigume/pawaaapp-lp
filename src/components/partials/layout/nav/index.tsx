import dynamic from 'next/dynamic';
import { Box, HStack, Spacer, Switch, useColorMode } from '@chakra-ui/react';
import FaiconDiv from '@/components/common/faicon-div';
import { ReactNode } from 'react';
import DrawerLeft from './drawer-left';
import SiteLogo from '@/components/common/SiteLogo';
import PostList from '../../post';
import { Post } from '@/models/contentful/Post';
const SignIn = dynamic(() => import('./drawer-left/signin'), { ssr: false });

interface NavProps {
  preview: boolean;
  drawerLeftChildren?: ReactNode;
  posts?: Post[];
}
export default function Nav({ preview, drawerLeftChildren, posts }: NavProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      zIndex={30}
      bg={colorMode == 'light' ? 'white' : 'blackAlpha.800'}
      w="100vw"
      as="nav"
      px={{ base: 2, md: 6 }}
      py={2}
      shadow="lg"
      position="fixed"
    >
      <HStack>
        <Box w={{ base: 'auto', xl: 0 }} display={{ base: 'flex', lg: 'none' }}>
          <DrawerLeft preview={preview}>
            <>
              {drawerLeftChildren}
              {posts && posts.length > 0 && (
                <Box mt={8}>
                  <PostList mode="drawer" posts={posts} />
                </Box>
              )}
            </>
          </DrawerLeft>
        </Box>
        <SiteLogo mr={6} display={{ base: 'none', sm: 'inline-block' }} />
        <Spacer />

        <Box pl={4}>
          <SignIn />
        </Box>
      </HStack>
    </Box>
  );
}
