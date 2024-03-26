import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <section className="flex items-center min-h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span><h2 className="text-secondary">404</h2>
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-primary">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600 text-orange-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/' className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"><button className="btn btn-primary">Back to homepage</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;