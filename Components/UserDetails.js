import Head from "next/head";
import classes from "../styles/Home.module.css";
import detailsClasses from "../styles/UserDetails.module.css";
import {SimpleGrid, Center, Badge, Tag, Text} from '@chakra-ui/react'
import {Box} from "@chakra-ui/layout";
import {useState} from "react";
import Pagination from "./Pagination";
import Link from "next/link";
import {Button} from "@chakra-ui/button";
import {ArrowBackIcon} from "@chakra-ui/icons";

export default function UserDetails({data, repos}) {
    const sortedRepos = repos?.sort((a, b) => {
        return new Date(b?.updated_at).getTime() - new Date(a?.updated_at).getTime();
    });

    const [currentPage, setCurrentPage]=useState(1);
    const itemsPerPage=6;
    const indexOfLastPage=itemsPerPage*currentPage;
    const indexOfFirstPage=indexOfLastPage-itemsPerPage;
    const allItems=sortedRepos?.length;
    const currentItems=sortedRepos?.slice(indexOfFirstPage, indexOfLastPage);
    const paginate=(pageNumber)=>setCurrentPage(pageNumber);

    return (
        <div className={classes.container}>
            <Head>
                <title>User Details</title>
            </Head>

            <main className={classes.main}>
                <SimpleGrid columns={{base: 1, md: 1, lg: 2}} spacing={10}>
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
                                {currentItems?.map((item) => (
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
                            <Pagination itemsPerPage={itemsPerPage} allItems={allItems} paginate={paginate} currentPage={currentPage}/>
                        </Box>
                    </Center>
                </SimpleGrid>
                <Link href="/">
                    <Button
                        color='purple.700'
                        variant='outline'
                        sx={{borderWidth: "2px", margin: "4em"}}
                        pos="absolute" bottom="0" left="0"
                    >
                        <ArrowBackIcon mr={3}/>
                        Go back to search page
                    </Button>
                </Link>
            </main>
        </div>
    )
}