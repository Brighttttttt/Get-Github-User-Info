import Head from "next/head";
import Link from "next/link";
import classes from "../styles/Home.module.css";
import notFoundClasses from "../styles/UserNotFound.module.css";
import {Button} from "@chakra-ui/button";
import {ArrowBackIcon} from '@chakra-ui/icons';

export default function UserNotFound() {
    return (
        <div className={classes.container}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                <div className={notFoundClasses.textBox}>
                    <h1>Whoops!</h1>
                    <h2>There`s no account with this username.</h2>
                </div>
                <Link href="/">
                    <Button
                        color='purple.700'
                        variant='outline'
                        sx={{borderWidth: "2px", margin: "2em", color: "#4e0101", opacity: "0.7"}}
                    >
                        <ArrowBackIcon color="#4e0101" mr={3}/>
                        Go back to search page
                    </Button>
                </Link>
            </main>
        </div>
    )
}