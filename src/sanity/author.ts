import { defineField,defineType,defineArrayMember } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
type: "document",
  fields: [
    defineField({
        name: "name",
        title: "Author Name",
        type: "string",
    }),
    defineField({
        name: "bio",
        title: "Author Bio",
        type: "text",
    }),
    defineField({
        name: "image",
        title: "Author Image",
        type: "image",
        options:{
            hotspot:true,
        }
    }),
   
  ],
});