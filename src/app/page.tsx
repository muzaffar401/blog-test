import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";


export const revalidate = 60;

export default async function Home() {
  const getData = async () => {
    const data:Post[] = await client.fetch((`*[_type == 'post'] | order(_createdAt asc){
      summary,title,image,"slug":slug.current
    }`));
    return data;
  }
  const data = await getData(); 
  console.log(data);
  
 
  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((post:Post) => (
          <BlogCard key={post.slug} post={post} />
        ))}

      </section>
    </main>
  );
}
