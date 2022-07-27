import Head from "next/head";
import classes from '../../styles/Home.module.css';
import UserNotFound from "../../Components/UserNotFound";
import UserDetails from "../../Components/UserDetails";

export default function UserDetailsPage({data, repos}) {
    return (
        <div className={`${classes.container} ${classes.gradientBackground}`}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                {data?.message ?
                    <UserNotFound/>
                    : <UserDetails data={data} repos={repos}/>
                }
            </main>
        </div>
    )
}

UserDetailsPage.getInitialProps = async (ctx) => {
    const username = ctx.query["username"];
    const data = await fetch(`https://api.github.com/users/${username}`);
    const repos = await fetch(`https://api.github.com/users/${username}/repos`);
    const tempData = await data.json();
    const tempRepos = await repos.json();
    return {data: tempData, repos: tempRepos};
}
