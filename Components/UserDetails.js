import Head from "next/head";
import classes from "../styles/Home.module.css";
import detailsClasses from "../styles/UserDetails.module.css";
import {SimpleGrid, Center, Badge, Tag, Text} from '@chakra-ui/react'
import {Box} from "@chakra-ui/layout";
import {useEffect, useState} from "react";

export default function UserDetails({data, username}) {
    const [repos, setRepos]=useState([]);

    const getRepos=async () => {
        let res=await fetch(`https://api.github.com/users/${username}/repos`);
        return await res.json();
    };

    useEffect(() => {
        getRepos().then((res) => setRepos(res));
    }, []);

    return (
        <div className={classes.container}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                <SimpleGrid columns={2} spacing={10}>
                    <Center>
                        <Box className={detailsClasses.gridItem}>
                            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                                <div>
                                    <img src={data?.avatar_url} alt="avatar" className={detailsClasses.avatar}/>
                                </div>
                                <div className={detailsClasses.name}>
                                    <p style={{fontSize: "40px"}}>{data?.name}</p>
                                    <p style={{fontSize: "25px"}}>{data?.login}</p>
                                </div>
                            </div>
                            <div className={detailsClasses.info}>
                                Followers: {data?.followers}
                                {" "}
                                Following: {data?.following}
                            </div>
                            <div className={detailsClasses.info}>
                                <div>
                                    Location: {data?.location ?? "not recorded"}
                                </div>
                                <div>
                                    Blog: {data?.blog!=="" ? data?.blog : "not recorded"}
                                </div>
                                <div>
                                    Biography: {data?.bio ?? "not recorded"}
                                </div>
                            </div>
                        </Box>
                    </Center>
                    <Center>
                        <Box>
                            <Text fontSize={35} mb={10} color="purple.800" fontWeight="bold">
                                Repositories:
                            </Text>
                            <SimpleGrid columns={2} spacing={5}>
                                {repos.map((item) => (
                                    <div className={detailsClasses.repoCard}>
                                        <div>
                                            <span style={{margin: "0 0.5em 0.5em 0", display: "inline-block"}}>{item?.name}</span>
                                            <Badge colorScheme='purple'>{item?.visibility}</Badge>
                                        </div>
                                        <Tag variant='solid' colorScheme='purple'>
                                            {item?.language ?? "unknown"}
                                        </Tag>
                                    </div>
                                ))}
                            </SimpleGrid>
                        </Box>
                    </Center>
                </SimpleGrid>
            </main>
        </div>
    )
}