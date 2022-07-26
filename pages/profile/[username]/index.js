import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import classes from '../../../styles/Home.module.css';

export default function UserDetails() {
    const router=useRouter();
    const username=router.query.username;

    const [data, setData]=useState();

    const getUserDetails=async () => {
        let res=await fetch("https://api.github.com/users/Brighttttttt");
        return await res.json();
    };

    useEffect(() => {
        getUserDetails().then((res) => setData(res));
    }, []);

    return (
        <div className={classes.container}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                <p>{username}</p>
                {console.log(data)}
                <div>{`${data?.id} ${data?.name}`}</div>
            </main>
        </div>
    )
}