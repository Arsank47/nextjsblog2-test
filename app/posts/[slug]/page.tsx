import fs from "fs";
import Markdown from "markdown-to-jsx"
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";

import React from 'react';
//import fs from 'fs';
//import Markdown from 'markdown-to-jsx';
//import matter from 'gray-matter';
//import getPostContent from '@/app/components/getPostContent';


const getPostContent = (slug: string) => {
    const folder = "posts/" ;
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync (file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
}));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div> 
            <div className="my-12 text-center">
            <h1 className="text-2x1 text-slate-600 text-center">{post.data.title} </h1>
            <p className="text-slate-400 mt-2"> {post.data.date}</p>
            </div>
            <article className="prose lg:prose-x1">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;

/* import fs from "fs";
import Markdown from "markdown-to-jsx"
import matter from "gray-matter";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`; // Forms the file path with the provided slug
    const content = fs.readFileSync(file, "utf8"); // Reads the content of the Markdown file
    return content; // Returns the content as a string


  //  const matterResult = matter(content);
  //  return matterResult;
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <div>
            <h1> This is a post! {slug}</h1>
            <Markdown>{content}</Markdown>
        </div>
    );
};

export default PostPage; */