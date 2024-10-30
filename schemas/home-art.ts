import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home_art',
  title: 'Home Art',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'artwork',
      title: 'Artwork',
      type: 'image',
    }),
    defineField({
      name: 'name',
      placeholder: 'Artist Name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      placeholder: 'https://theirsocial.com/profile',
      type: 'url',
    }),
  ],
})
