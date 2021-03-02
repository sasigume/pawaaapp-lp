import Meta from './meta'
import { ReactNode } from 'react'

import FloatShare from './float-share'
import LayoutFooter from './layout-footer'
import DrawerLeft from './drawer-left'
import DrawerRight from './drawer-right'
import { Box, Button, useColorMode } from '@chakra-ui/react'
import LinkChakra from '@/components/common/link-chakra'

interface LayoutProps {
  preview: boolean;
  children: ReactNode;
  drawerLeftChildren?: ReactNode,
  drawerRightChildren?: ReactNode,
  title: string;
  desc: string;
  tweetCount?: number;
}

export default function Layout({ preview, children, drawerLeftChildren, drawerRightChildren, title, desc, tweetCount }: LayoutProps) {

  const { colorMode } = useColorMode()

  return (
    <>
      <Meta title={title} desc={desc} />
      <Box pt={20}>
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        <LayoutFooter />
        {drawerLeftChildren && <DrawerLeft preview={preview}>
          {drawerLeftChildren}
        </DrawerLeft>}
        <DrawerRight preview={preview}>
          {drawerRightChildren}
        </DrawerRight>
        <FloatShare count={tweetCount} text={title} />

        {preview && (
          <Box position="fixed" bottom={0} left={0}>
            <Button as={LinkChakra} href="/api/exit-preview">プレビュー解除</Button>
          </Box>
        )}
      </Box>
    </>
  )
}