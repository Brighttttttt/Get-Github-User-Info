import classes from "../styles/Pagination.module.css"

export default function Pagination({itemsPerPage, allItems, paginate, currentPage}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(allItems/itemsPerPage);i++)
        pageNumbers.push(i);

    let className;
    function activePage(item, currentPage) {
        if(item===currentPage)
            className=classes.active;
        else
            className=classes.paginationItem;
    }

    return(
        <div>
            <nav>
                <ul className={classes.paginationBox}>
                    {pageNumbers.map((item)=>(
                        <li onClick={activePage(item, currentPage)}>
                            <div onClick={()=>paginate(item)} className={className}>{item}</div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}