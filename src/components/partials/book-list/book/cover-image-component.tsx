import LinkChakra from '@/components/common/link-chakra'

interface Props {
  title: string;
  url: string;
  slug: string;
}

export default function CoverImageComponent({ title, url, slug }: Props) {
  return (
    <div className="">
      {slug ? (
        <LinkChakra href={`/books/${slug}`}>
          <div className="flex items-center justify-center">
            <img className="mx-auto w-auto" src={url} alt={title} />
          </div>
        </LinkChakra>
      ) : (
          <img className="mx-auto w-auto" src={url} alt={title} />
        )}
    </div>
  )
}
