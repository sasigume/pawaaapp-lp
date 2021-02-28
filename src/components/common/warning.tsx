import LinkChakra from "@/components/common/link-chakra"
import { Box } from "@chakra-ui/react"

const Warning = () => (
  <Box background="gray.700" color="white" p={6} m={4} rounded="xl">
    <div>
      <LinkChakra href="/posts/eula" underline={true}>利用規約</LinkChakra>に反した投稿は即刻削除します。Twitterアカウントと投稿が紐づけられていることを忘れないでください。
      </div>
    <div>サーバーサイドのデータは常時同期しているわけではないので、コメントなどの反映には少し時間がかかります。</div>
  </Box>
)
export default Warning