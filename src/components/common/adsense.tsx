import { Box } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import React, { useEffect } from 'react';

interface AdsenseProps {
  slot: string;
  path?: string;
}

// https://qiita.com/qrusadorz/items/14972b6e069feaf777a9
export default function AdsenseBox(props: AdsenseProps) {
  const enableAd = process.env.ENABLE_AD == 'true' ?? false;

  useEffect(() => {
    if (window.adsbygoogle && process.env.NODE_ENV !== 'development') {
      window.adsbygoogle.push({
        google_ad_client: process.env.GOOGLE_AD_CLIENT,
        enable_page_level_ads: true,
      });
    }
  }, []);

  return (
    <Box mx="auto" my={3} minH="250px">
      {enableAd ? (
        <>
          <Skeleton isLoaded={window.adsbygoogle !== undefined}>
            <Box mb={2} color="gray.800">
              スポンサーリンク
            </Box>
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client={process.env.GOOGLE_AD_CLIENT}
              data-ad-slot={props.slot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </Skeleton>
        </>
      ) : (
        <span>Adsense無効化中</span>
      )}
    </Box>
  );
}
