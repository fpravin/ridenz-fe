const Login = () => {
    return (
        <div className="container max-w-md mx-auto mt-1">
            <form className="bg-rose-100	 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 m-3 text-center text-2xl font-bold">Sign In</h1>
                <div className="flex flex-col mt-5">
                    <label htmlFor="email" className="font-bold"> Email</label>
                    <input type="text" id="email" className="border-2 rounded-xl" />
                    <label htmlFor="password" className="mt-5 font-bold"> Password</label>
                    <input type="text" id="password" className="border-2 rounded-xl" />
                    <div className="mt-4 mx-auto">
                        <button className="border-2 rounded-full w-36 mt-3 p-1 bg-slate-900 text-yellow-50 hover:bg-slate-600">Login</button>
                    </div>
                    <a href="/frontend-ridenz/src/components/SignUp.tsx" className="underline mx-auto mt-2">Dont have an account?</a>
                </div>
            </form>
        </div>
    )
}
export default Login;