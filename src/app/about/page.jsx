import Image from 'next/image'
import { getPageBySlug } from '@/lib/cosmic'
import Socials from '@/components/Socials'
import { sanitize } from 'isomorphic-dompurify'
import getMetadata from 'helpers/getMetadata'

async function getData() {
  const pageData = (await getPageBySlug('about-page', 'content,metadata')) || null
  return { pageData }
}

export async function generateMetadata() {
  const [pageData, socialData, siteSettings] = await Promise.all([
    getPageBySlug('about-page', 'metadata'),
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const title = getMetadata(pageData?.metadata?.meta_title, 'About Page')
  const description = getMetadata(pageData?.metadata?.meta_description, 'Default description')
  const image = getMetadata(
    pageData?.metadata?.meta_image?.imgix_url,
    siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  )
  const url = getMetadata(`${siteSettings?.metadata?.site_url}/about`)
  const twitterHandle = getMetadata(socialData?.metadata?.twitter, '@defaultTwitter')

  return {
    title,
    description,
    image,
    openGraph: {
      title,
      description,
      url,
      images: [
        { url: image, width: 800, height: 600 },
        { url: image, width: 1800, height: 1600 },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: twitterHandle,
      images: [image],
    },
  }
}

const AboutPage = async () => {
  const data = await getData()
  const pageData = data.pageData || { metadata: {}, content: '' } // Default empty object

  return (
    <>
      <section>
        <h1 className="text-2xl md:text-3xl mb-12 font-bold">
          {pageData?.metadata?.heading || 'About Me'}
        </h1>
        <div className="flex flex-col md:flex-row-reverse justify-between">
          {pageData?.metadata?.image?.imgix_url && (
            <div className="relative max-w-[200px] md:max-w-sm mb-12">
              <Image
                src={pageData.metadata.image.imgix_url}
                alt="Developer avatar"
                quality={60}
                width={270}
                height={270}
                priority
                style={{ maxWidth: '100%', height: 'auto' }}
                className="w-fit"
              />
            </div>
          )}
          <div className="flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-12">
            <div
              className="text-fore-primary mb-8 space-y-4"
              dangerouslySetInnerHTML={{
                __html: sanitize(pageData?.content || '<p>No content available.</p>'),
              }}
            />
            {pageData?.metadata?.socials?.metadata && (
              <Socials
                resume={pageData.metadata.socials.metadata.resume?.url || '#'}
                email={pageData.metadata.socials.metadata.email || 'N/A'}
                github={pageData.metadata.socials.metadata.github || '#'}
                linkedin={pageData.metadata.socials.metadata.linkedin || '#'}
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export const revalidate = 60
export default AboutPage
