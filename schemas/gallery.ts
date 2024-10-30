import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'tab',
      title: 'Tab Name',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Category List',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Category Name',
              type: 'string',
            }),
            defineField({
              name: 'art',
              title: 'Arts',
              type: 'array',
              of: [
                defineField({
                  name: 'art',
                  type: 'reference',
                  to: [{type: 'GalleryArt'}],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
