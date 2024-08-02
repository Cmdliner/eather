import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const Register = () => {
    return (
        <main className="grid grid-cols-2">
            <div className="img-fill w-[100%] h-screen bg-black p-4"></div>

            <div className="p-4  w-[100%]">
                <h1 className="text-3xl text-center"> 
                    <span className="font-bold">Shaed</span> | Register
                </h1>
                <form className="p-5">
                    <Input type="email" placeholder="Email" className="mb-4"/>
                    <Input type="password" placeholder="Password" className="mb-4"/>
                    <Input type="password" placeholder="Confirm Password" className="mb-4"/>
                    <Button type="submit" value="Register" className="bg-blue-500 text-black mx-auto"/>
                </form>
            </div>
        </main>
    )
}

export default Register;