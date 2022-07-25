import Head from "next/head";
import Link from "next/link";
import {useState} from "react";
import classes from '../styles/Home.module.css';

export default function SearchUsername() {
    const [username, serUsername]=useState();

    return (
        <div className={classes.container}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                bingo!
                <input
                    type="search"
                    placeholder="username..."
                    onChange={(e) => serUsername(e.target.value)}
                />
                <button>
                    <Link href={`/profile/${username}`}>search</Link>
                </button>
            </main>
        </div>
    )
}