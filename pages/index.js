import Head from 'next/head';
import SearchUsername from "../Components/SearchUsername";
import classes from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={`${classes.container} ${classes.gradientBackground}`}>
      <Head>
        <title>Get Github User Info</title>
        <meta name="description" content="Get Github User Info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
          <SearchUsername/>
      </main>
    </div>
  )
}
