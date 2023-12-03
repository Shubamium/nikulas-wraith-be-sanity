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
	preview:{
		select:{
			media:'artwork'
		}
}
})

// export default defineType({
//   name: 'nik-art',
//   title: 'Nik Art',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'artwork',
//       title: 'Artwork',
//       type: 'image',
//     })
//   ],
// 	preview:{
// 			select:{
// 				media:'artwork'
// 			}
// 	}
// })
