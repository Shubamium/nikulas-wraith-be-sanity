import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vip',
  title: 'VIP',
  type: 'document',
  fields: [
    defineField({
      name: 'pfp',
      title: 'Profile Picture',
      type: 'image',
			
    }),
		defineField({
			name: 'name',
			placeholder: 'Person Name',
			title: 'Name',
			type:'string',
		}),
		defineField({
			name:'handle',
			title:'Handle',
			type: 'string',
			placeholder: '@person_name',
		}),
		defineField({
			name:'link',
			title:'Link',
			placeholder: 'https://theirsocial.com/profile',

			type: 'url'
		})
  ],
})
