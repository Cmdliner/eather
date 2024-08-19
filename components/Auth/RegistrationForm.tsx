import { FC, FormEvent } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";



interface RegistrationFormProps {
    handleSubmit: (e: FormEvent) => void;
}


const RegistrationForm: FC<RegistrationFormProps> = ({handleSubmit}) => {
    return (
        <form className="p-5" onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" className="mb-4" />
            <Input type="password" placeholder="Password" className="mb-4" />
            <Input
                type="password"
                placeholder="Confirm Password"
                className="mb-4"
            />
            <Button type="submit" className="bg-blue-500">
                Register
            </Button>
        </form>
    );
}

export default RegistrationForm;