import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBListGroup, MDBSpinner} from "mdb-react-ui-kit";
import SearchResult from "./SearchResult";

interface SearchResultListProps {
    loading: boolean
    init: boolean
    results: Array<Result>
    resultClick: (id: number)=>void
}

interface Result {
    id: number
    name: string
    icon: string
    classIcon: string
}

function SearchResultList({loading, init, results, resultClick}: SearchResultListProps) {
    if (init) {
        return (
            <div></div>
        )
    }

    if (!loading) {
        return (
            <div>
                <MDBListGroup>
                    {results.map((result) => (
                        <SearchResult key={result.id} id={result.id} name={result.name} icon={result.icon} classIcon={result.classIcon} onClick={()=>resultClick(result.id)} />
                    ))}
                </MDBListGroup>
            </div>
        )
    } else {
        return (
            <div className="d-flex justify-content-center py-5">
                <MDBSpinner color='light'>
                    <span className='visually-hidden'>Searching...</span>
                </MDBSpinner>
            </div>
        )
    }
}

export default SearchResultList;
