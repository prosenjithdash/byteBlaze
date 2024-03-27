import { useLoaderData } from "react-router-dom";

const Author = () => {
    const author = useLoaderData();
    console.log(author);
    return (
        <div>
            <h2>{author.user.name}</h2>
        </div>
    );
};

export default Author;