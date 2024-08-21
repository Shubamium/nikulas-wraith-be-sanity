import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'alerts',
  title: 'Alerts',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: `Set as 'main' without quote to use this preset`,
      type: 'string',
    }),
    defineField({
      name: 'numbers',
      title: 'Numbers List',
      description: 'The numbers will show up here when you subscribe',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
