import Head from "next/head";
import { useRouter } from 'next/router';
import {useState} from "react";
import classes from '../styles/Home.module.css';
import searchUserClasses from "../styles/SearchUser.module.css";
import { Input } from '@chakra-ui/react';
import {Button} from "@chakra-ui/button";
import {InputLeftElement, InputGroup} from "@chakra-ui/input";
import {SearchIcon} from '@chakra-ui/icons';
import { useToast, Text } from '@chakra-ui/react';

export default function SearchUsername() {
    const [username, serUsername]=useState();
    const router = useRouter();
    const toast = useToast();

    const getUserDetails=async () => {
        let res=await fetch(`https://api.github.com/users/${username}`);
        return await res.json();
    };

    const checkUser=() => {
        getUserDetails()
            .then((res) => res?.message ?
                toast({
                    title: 'Wrong Username!',
                    description: "There`s no account with this username.",
                    status: 'error',
                    duration: 5000,
                    variant: 'subtle',
                    position: 'top',
                    isClosable: true,
                })
                : router.push(`/profile/${username}`
                ))
    }

    return (
        <div className={classes.container}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                <img src="/github.png" alt="github-logo" className={searchUserClasses.github}/>
                <Text fontSize={35} mb={10} color="purple.800" fontWeight="bold">
                    Find Github User Details By Username!
                </Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='purple.800' />}
                    />
                    <Input
                        placeholder="Username ..."
                        _placeholder={{ color: 'purple.600' }}
                        _hover={{borderColor: 'purple.600'}}
                        focusBorderColor="purple.600"
                        sx={{borderWidth: "2px", color: "#44337A"}}
                        onChange={(e) => serUsername(e.target.value)}
                    />
                </InputGroup>
                <Button
                    color='purple.700'
                    variant='outline'
                    sx={{borderWidth:"2px", margin: "2em"}}
                    type="submit"
                    onClick={() => checkUser()}
                >
                    Search User
                </Button>
            </main>
        </div>
    )
}