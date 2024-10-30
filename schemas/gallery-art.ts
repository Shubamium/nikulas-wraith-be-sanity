import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'GalleryArt',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'img',
      type: 'image',
    }),
    defineField({
      name: 'artist',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
        }),
        defineField({
          name: 'link',
          placeholder: 'https://',
          type: 'url',
        }),
      ],
    }),
  ],
})
