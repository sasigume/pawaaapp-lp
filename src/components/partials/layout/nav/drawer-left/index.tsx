import { ReactNode, useRef } from 'react';

import {
  Box,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

// issue#106
/*const FaiconDiv = dynamic(() => import('@/components/common/faicon-div'));
const Logo = dynamic(() => import('@/components/common/Logo'));*/
//import SignIn from './signin';
import FaiconDiv from '@/components/common/faicon-div';
import LinkChakra from '@/components/common/link-chakra';
import SiteLogo from '@/components/common/SiteLogo';
import AdsenseBox from '@/components/common/adsense-box';
import { ASIDE_WITDH } from '@/lib/chakra/styles';

interface Props {
  preview: boolean;
  children: ReactNode;
  hideAdsense?: boolean;
}

export default function DrawerLeft({ children, hideAdsense }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button
        zIndex={10}
        ml={3}
        pr={2}
        ref={btnRef}
        colorScheme="blue"
        leftIcon={<FaiconDiv icon={['fas', 'bars']} />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        aria-label="ドロワーメニュー(左)"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody pt={8} pb={6}>
              <SiteLogo />
              {hideAdsense != true && <AdsenseBox minWidth={ASIDE_WITDH} slot={'8321176059'} />}
              <Box my={6}>{children}</Box>
              <Button leftIcon={<FaiconDiv icon={['fas', 'book']} />} as={LinkChakra} href="/eula/">
                利用規約
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
