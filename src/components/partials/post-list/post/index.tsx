import Avatar from './avatar'
import Date from '../../../common/date'
import CoverImageComponent from './cover-image-component'
import Link from 'next/link'
import SubjectList from './subject-list'
import PostBody from './post-body'
import { PostComponentType } from '@/models/Post'

export default function PostComponent({
  mode,
  slug,
  first_published_at,
  published_at,
  content
}: PostComponentType) {
  return (
    <div>
      <div className="mb-5">
        <CoverImageComponent slug={slug} title={content.title} url={content.image} />
      </div>
      {mode == "single" && (<h2 className="text-3xl font-bold mb-3">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{content.title}</a>
        </Link>
      </h2>
      )}
      {mode !== "single" && (<h3 className="text-3xl font-bold mb-3">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{content.title}</a>
        </Link>
      </h3>
      )}
      <div className="text-sm mb-4">
        <SubjectList subjects={content.subjects ?? []} />
      </div>
      <div className="text-lg mb-4">
        公開: <Date dateString={first_published_at} /> /最終更新: <Date dateString={published_at} />
      </div>
      {mode == "list" && <p className="text-lg mb-4">{content.intro}</p>}
      <Avatar slug={content.creator.slug} content={content.creator.content} />
      {mode == "single" ? <PostBody md={content.long_text} /> : ''}
    </div>
  )
}
