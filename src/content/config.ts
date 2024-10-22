import { defineCollection, z } from 'astro:content'

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' }
  return date.toLocaleDateString('en-US', options) // Format as 'Oct 04, 2024'
}

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform(str => formatDate(new Date(str))),
    description: z.string(),
  }),
})

export const collections = {
  blog: blogCollection,
}
