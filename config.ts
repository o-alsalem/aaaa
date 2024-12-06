import type { Block } from 'payload'

export const BlogPost: Block = {
  slug: 'blogPost',
  labels: {
    singular: 'Blog Posts List',
    plural: 'Blog Posts Lists',
  },
  fields: [
    {
      name: 'postsPerPage',
      type: 'number',
      defaultValue: -1,
      required: true,
    }
  ],
  interfaceName: 'BlogPostBlock',
}
