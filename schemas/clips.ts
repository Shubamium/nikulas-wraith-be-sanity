import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clips',
  title: 'Clips',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),

    defineField({
      name: 'video',
      description: 'Video file, .webm format recommended.',
      type: 'file',
    }),
  ],
})
