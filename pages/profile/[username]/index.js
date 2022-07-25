import Head from "next/head";
import classes from '../../../styles/Home.module.css';

export default function UserDetails() {
    return (
        <div>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                user details!
            </main>
        </div>
    )
}