import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description:
        "You can have multiple presets, Set the one you want to use to 'main' and change the one you're not using to something e",
      type: 'string',
    }),
    defineField({
      name: 'schedules',
      title: 'Schedules',
      type: 'image',
    }),
    defineField({
      name: 'sa',
      title: 'Special Announcement',
      type: 'image',
    }),
    defineField({
      name: 'time',
      title: 'Stream Time',
      description: 'Central US Time',
      type: 'object',
      fields: [
        defineField({name: 'date', title: 'Date', type: 'datetime'}),
        defineField({name: 'active', title: 'Is active?', type: 'boolean'}),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'object',
      fields: [
        {
          name: 'good',
          title: 'Good Counter',
          type: 'number',
          validation: (rule) => rule.required().min(1),
        },
        {
          name: 'bad',
          title: 'Corruption Counter',
          type: 'number',
          validation: (rule) => rule.required().min(1),
        },
      ],
    }),
  ],
})
