import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './App.css';
import {MDBBtn, MDBContainer, MDBIcon, MDBInput, MDBInputGroup, MDBNavbar, MDBNavbarBrand} from "mdb-react-ui-kit";
import Servant from "./components/Servant";
import Planner from "./components/Planner";
import SearchResultList from './components/SearchResultList';

function App() {
    const [searchInit, setSearchInit] = useState(true)
    const [plannerInit, setPlannerInit] = useState(true)
    const [searchLoading, setSearchLoading] = useState(false)
    const [plannerLoading, setPlannerLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [servant, setServant] = useState({} as Servant)

    function onSearch() {
        setSearchInit(false);
        setSearchLoading(true);
        console.log("search");
        fetch('/api/fgo/v1/servant?query=' + searchValue)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data);
                console.log(data);
                setSearchLoading(false);
            })
            .catch(err => {
                console.log(err);
                setSearchLoading(false);
            });
    }

    function onResultClick(id: number) {
        console.log("get servant with id " + id)

        setSearchInit(true)
        setPlannerInit(false)
        setPlannerLoading(true)

        fetch('api/fgo/v1/servant/' + id)
            .then(res => res.json())
            .then(data => {
                setServant({
                    id: data["id"],
                    name: data["name"],
                    classIcon: data["classIcon"],
                    icon: data["icon"],
                    portraits: data["portraits"],
                    appends: data["appends"],
                    skills: data["skills"],
                    ascensionMaterials: data["ascensionMaterials"],
                    skillMaterials: data["skillMaterials"],
                    appendMaterials: data["appendMaterials"]
                } as Servant)
                setPlannerLoading(false)
            })
    }

  return (
    <div>
        <MDBNavbar dark bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>FGO Planner</MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>

        <br />

        <div className="d-flex justify-content-center px-5">
            <MDBInputGroup>
                <MDBInput label='Search' id='search' onChange={(e) => setSearchValue(e.target.value)} />
                <MDBBtn rippleColor='dark' onClick={onSearch}>
                    <MDBIcon icon='search' />
                </MDBBtn>
            </MDBInputGroup>
        </div>

        <div className='position-relative'>
            <div className='z-0 py-3 position-absolute w-100'>
                <Planner loading={plannerLoading} init={plannerInit} servant={servant} />
            </div>

            <div className='px-5 z-1 position-relative'>
                <SearchResultList loading={searchLoading} init={searchInit} results={searchResults} resultClick={onResultClick} />
            </div>
        </div>
    </div>
  );
}

export default App;
