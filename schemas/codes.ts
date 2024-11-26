import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'codes',
  title: 'Promo Codes',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      validation: (rule) => rule.uppercase(),
    }),
    defineField({
      name: 'amount',
      title: 'Amount in %',
      type: 'number',
    }),
  ],
})
