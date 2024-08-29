"use client";
import ErrorUI from "@/components/ErrorUI";
import { LinkIcon } from "@nextui-org/link";
import Link from "next/link";
import { FC, FormEvent, useState } from "react";
import { ReactTyped } from "react-typed";
import RegistrationForm from "@/components/Auth/RegistrationForm";

interface IFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}
const Register: FC = () => {
    const [formValues, setFormValues] = useState<IFormValues>({email: '', password: '', confirmPassword: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    function handleSignUp(e: FormEvent) {
        const { email, password, confirmPassword } = formValues;
        e.preventDefault();
        console.log(`I ran, niggerrrr`);
        
        if (password !== confirmPassword) {
            console.log('Ran into that error')
            setError('Passwords dont match!');
        }
    }
    return (
        <main className="grid md:grid-cols-2">
            <div className="w-100% hidden md:flex md:flex-col justify-center items-center img-fill w-[100%] h-screen bg-black text-white font-bold md:text-3xl lg:text-5xl  p-4">
                <ReactTyped
                    strings={["Eather", "Innovation + Healthcare"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />
            </div>

            <div className="px-4  w-[100%] flex flex-col justify-center">
                {error && <ErrorUI />}
                <h1 className="text-3xl text-center">
                    <span className="font-bold">Eather</span> | Register
                </h1>
                {/* form goes here */}
                <RegistrationForm handleSubmit={handleSignUp}/>
                <div className="flex items-center">
                    Already Signed up? Go to login{" "}
                    <Link href="/login" className="text-blue-800">
                        <LinkIcon />
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Register;
