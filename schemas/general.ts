import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: "You can have multiple presets, Set the one you want to use to 'main'",
      type: 'string',
    }),
    defineField({
      name: 'schedules',
      title: 'Schedules',
      type: 'image',
    }),
		defineField({
			name:'stats',
			title:'Statistics',
			type:'object',
			fields:[
				{
					name: 'good',
					title: 'Good Counter',
					type: 'number',
				},
				{
					name: 'bad',
					title: 'Corruption Counter',
					type: 'number',
				},
			]
		})
  ],
})
