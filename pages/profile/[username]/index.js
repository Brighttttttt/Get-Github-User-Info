import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import classes from '../../../styles/Home.module.css';
import UserNotFound from "../../../Components/UserNotFound";
import UserDetails from "../../../Components/UserDetails";

export default function UserDetailsPage() {
    const router=useRouter();
    const username=router.query.username;

    const [data, setData]=useState();

    const getUserDetails=async () => {
        let res=await fetch(`https://api.github.com/users/${username}`);
        return await res.json();
    };

    useEffect(() => {
        getUserDetails().then((res) => setData(res));
    }, []);

    return (
        <div className={`${classes.container} ${classes.gradientBackground}`}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                {data?.message ?
                    <UserNotFound/>
                    : <UserDetails data={data} username={username}/>
                }
            </main>
        </div>
    )
}