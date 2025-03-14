import type { Metadata } from 'next'

import type { Page, Post } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

export const generateMeta = async (args: {
  doc: any
}): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage = doc.meta.image?.url || `${getServerSideURL()}`

  const title = doc?.meta?.alt
    ? doc?.meta?.alt
    : 'Payload Website Template'

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.alt || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  }
}
