import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'models',
  title: 'Models',
  type: 'document',
  fields: [
		defineField({
			name: 'type',
			title: 'Type',
			placeholder: 'Design',
			type: 'string',
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
		}),
    defineField({
      name: 'artwork_large',
      title: 'Artwork Large',
      type: 'image',
    }),
		defineField({
      name: 'artwork_small',
      title: 'Artwork Small',
      type: 'image',
    })
	
  ],
})
