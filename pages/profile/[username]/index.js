import Head from "next/head";
import classes from '../../../styles/Home.module.css';
import {useRouter} from "next/router";

export default function UserDetails() {
    const router=useRouter();
    const username=router.query.username;

    return (
        <div className={classes.container}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                <p>{username}</p>
            </main>
        </div>
    )
}