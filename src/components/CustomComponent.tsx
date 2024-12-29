import { PortableTextComponents } from "@portabletext/react";

export const components:PortableTextComponents = {
block:{
p:({children})=> <p className="text-lg text-yellow-500">{children}</p>,
h4:({children})=> <h4 className="text-2xl text-yellow-500">{children}</h4>
},
listItem:{
bullet:({children})=> <li className="list-disc marker:text-yellow-400 list-inside ml-4">{children}</li>
},
marks:{
    strong:({children})=> <strong className="font-bold text-yellow-500">{children}</strong>,

}
}