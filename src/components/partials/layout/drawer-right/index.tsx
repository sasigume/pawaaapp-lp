import { ReactNode, useRef } from 'react'
import LinkChakra from '@/components/common/link-chakra'
import SignIn from './signin'
import {
  useColorMode,
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Center,
  Divider,
} from "@chakra-ui/react"
import FaiconDiv from '@/components/common/faicon-div'
import Logo from '@/components/common/Logo'

interface Props {
  preview: boolean;
  children: ReactNode
}

export default function DrawerRight({ children }: Props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Button ref={btnRef} colorScheme="green" leftIcon={<FaiconDiv icon={['fas', 'user']} />} onClick={onOpen} position="fixed" top={5} right={5}>
        MENU
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        aria-label="ドロワーメニュー(右)"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader mt={12} justifyContent="center">


              <Divider mb={8} />

              <Stack direction="column" spacing={6} mb={6}>
                <Button aria-label="カラーモードを切り替える" colorScheme={colorMode === "light" ? "purple" : "cyan"} onClick={toggleColorMode} leftIcon={colorMode === "light" ?
                  (<FaiconDiv icon={['fas', 'moon']} />) : (<FaiconDiv icon={['fas', 'sun']} />)}>
                  {colorMode === "light" ? "ダークモード" : "ライトモード"}
                </Button>
              </Stack>

              <SignIn />

            </DrawerHeader>
            <DrawerBody overflow-y="scroll">
              {children}
            </DrawerBody>
            <DrawerFooter>
              <Box>Powered by
              <Box mb={8}>
                  <Center>
                    <Logo fill={colorMode === "light" ? "#000" : "#fff"} />
                  </Center>
                </Box>
              </Box>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}