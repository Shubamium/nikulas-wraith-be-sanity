import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subscribtion',
  title: 'Subscribtion List',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'endpoint',
      description: `Main identifier`,
      type: 'string',
    }),
    defineField({
      name: 'expirationTime',
      title: 'Expiration Time',
      type: 'datetime',
    }),
    defineField({
      name: 'keys',
      type: 'object',
      fields: [
        defineField({
          name: 'auth',
          type: 'string',
        }),
        defineField({
          name: 'p256dh',
          type: 'string',
        }),
      ],
    }),
  ],
})
