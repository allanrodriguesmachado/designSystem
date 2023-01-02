import './styles/global.css';

import {Logo} from "./Logo";
import {Heading} from "./components/Heading";
import {Text} from "./components/Text";
import {Checkbox} from "./components/ Checkbox";
import {Button} from "./components/Button";

import {TextInput} from "./components/TextInput";
import {Envelope, Lock} from "phosphor-react";

export function App() {
    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center text-gray-100 flex-col">
            <header className="flex flex-col items-center">
                <Logo/>

                <Heading size="lg" className="mt-4">Tech.news</Heading>
                <Text size="lg" className="text-gray-100 mt-1">Log in and start using</Text>
            </header>

            <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
                <label htmlFor="email" className="flex flex-col gap-3">
                    <Text className="font-semibold">E-mail adresse</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope/>
                        </TextInput.Icon>

                        <TextInput.Input type="email" id="email" placeholder="Type your e-mail"></TextInput.Input>
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3">
                    <Text className="font-semibold">Your password</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock/>
                        </TextInput.Icon>

                        <TextInput.Input type="password" id="password" placeholder="************"></TextInput.Input>
                    </TextInput.Root>
                </label>

                <label htmlFor="remember" className="flex items-center gap-2">
                    <Checkbox id="remember"/>
                    <Text size="sm" className="text-gray-100">Remember me for 30 days</Text>
                </label>

                <Button type="submit" className="mt-4">Enter the platform</Button>
            </form>

            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text size="sm" asChild>
                    <a href="" className="text-gray-100 underline">Forgot your password?</a>
                </Text>
                <Text size="sm" asChild>
                    <a href="" className="text-gray-100 underline">Don't have an account? create one now</a>
                </Text>
            </footer>
        </div>
    )
}

