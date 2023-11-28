import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";

interface SearchResultProps {
    id: number;
    name: string;
    icon: string;
    classIcon: string;
    onClick: (id: number)=>void
}
function SearchResult({id, name, icon, classIcon, onClick}: SearchResultProps) {
    return (
        <MDBListGroupItem
            tag='button'
            action
            type='button'
            className='d-flex align-items-center'
            onClick={()=>onClick(id)}
        >
            <img
                src={icon}
                alt=''
                style={{width: '45px', height: '45px'}}
                className='rounded-circle'
            />
            <div className='ms-3'>
                <img
                    src={classIcon}
                    alt=''
                    style={{width: '45px', height: '45px'}}
                />
                <span className='fw-bold mb-1 text-white px-3'>
                    {name}
                </span>
            </div>
        </MDBListGroupItem>
    )
}

export default SearchResult;
