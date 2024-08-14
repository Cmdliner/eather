"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { LinkIcon } from "@nextui-org/link";
import Link from "next/link";
import {ReactTyped} from "react-typed";

const Register = () => {
    return (
        <main className="grid md:grid-cols-2">
            <div className="w-100%hidden md:flex md:flex-col justify-center items-center img-fill w-[100%] h-screen bg-black text-white font-bold md:text-3xl lg:text-5xl  p-4">
                <ReactTyped 
                strings={["Eather", "Innovation + Healthcare"]} 
                typeSpeed={100}
      		backSpeed={100} 
      		loop />
            </div>

            <div className="px-4  w-[100%] flex flex-col justify-center">
                <h1 className="text-3xl text-center">
                    <span className="font-bold">Eather</span> | Register
                </h1>
                <form className="p-5">
                    <Input type="email" placeholder="Email" className="mb-4" />
                    <Input type="password" placeholder="Password" className="mb-4" />
                    <Input type="password" placeholder="Confirm Password" className="mb-4" />
                    <Button type="submit" value="Register" className="bg-blue-500 text-black mx-auto" />
                </form>
                <div>Already Signed up? Go to login <Link href="/login"><LinkIcon /></Link></div>
            </div>
        </main>
    )
}

export default Register;
