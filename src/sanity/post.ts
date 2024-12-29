import { defineField,defineType,defineArrayMember } from "sanity";

export const product =  defineType({
    name: 'post',
    type: 'document',
    title: 'BLOG',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                defineArrayMember({
                    type: 'block'
                }),          
            ]
        }),
        defineField({
            name:'author',
            type:'reference',
            title:'Author',
            to:[{type:'author'}]
        })
    ]
});