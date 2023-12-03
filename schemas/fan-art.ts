import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fan-art',
  title: 'Fan Art',
  type: 'document',
  fields: [
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
			name:'link',
			title:'Link',
			placeholder: 'https://theirsocial.com/profile',
			type: 'url'
		})
  ],
})
