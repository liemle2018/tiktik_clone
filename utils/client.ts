import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'q35s3du4',
  dataset: 'production',
  apiVersion: '2022-10-27',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
