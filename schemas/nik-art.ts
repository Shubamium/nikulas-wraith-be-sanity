import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nik-art',
  title: 'Nik Art',
  type: 'document',
  fields: [
    defineField({
      name: 'artwork',
      title: 'Artwork',
      type: 'image',
    })
  ],
})
