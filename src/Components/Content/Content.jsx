import { useLoaderData } from "react-router-dom";
import notFoundImage from '../../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


const Content = () => {
    const content = useLoaderData();
    console.log(content);
    const { cover_image, title, description, published_at, tags, body_html } = content;

    return (
        <div className=" mx-auto group border border-opacity-30 p-2 border-primary    hover:no-underline focus:no-underline dark:bg-gray-50 rounded-lg">
            <img role="presentation" className="object-cover w-full rounded-lg h-44 dark:bg-gray-500" src={cover_image || notFoundImage} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tags}</a>)
                }


            </div>
            <div className=" space-y-2 ">
                <h3 className="text-2xl group-hover:underline ">{title}</h3>
                {/* <Markdown remarkPlugins={[rehypeRaw]}> {body_html}</Markdown> */}
                {body_html}
            </div>

        </div>
    );
};

export default Content;