import React, {useEffect, useState} from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBCol, MDBContainer, MDBRange, MDBRow, MDBSpinner} from "mdb-react-ui-kit";
import Servant from "./Servant";
import Material from './Material';
import MaterialGrid from "./MaterialGrid";

interface PlannerProps {
    loading: boolean
    init: boolean
    servant: Servant
}

function Planner({loading, init, servant}: PlannerProps) {
    const [ascStart, setAscStart] = useState(0)
    const [ascEnd, setAscEnd] = useState(0)

    const [skill1Start, setSkill1Start] = useState(1)
    const [skill1End, setSkill1End] = useState(1)
    const [skill2Start, setSkill2Start] = useState(1)
    const [skill2End, setSkill2End] = useState(1)
    const [skill3Start, setSkill3Start] = useState(1)
    const [skill3End, setSkill3End] = useState(1)

    const [append1Start, setAppend1Start] = useState(1)
    const [append1End, setAppend1End] = useState(1)
    const [append2Start, setAppend2Start] = useState(1)
    const [append2End, setAppend2End] = useState(1)
    const [append3Start, setAppend3Start] = useState(1)
    const [append3End, setAppend3End] = useState(1)

    const [materials, setMaterials] = useState([] as Material[])

    useEffect(() => {
        let sum = 0
        let mats: Material[] = []
        for (let i = ascStart; i < ascEnd; i++) {
            sum += servant.ascensionMaterials[i].qp

            for (let j = 0; j < servant.ascensionMaterials[i].materials.length; j++) {
                let ndx = mats.findIndex(
                    value => {
                        return value.id === servant.ascensionMaterials[i].materials[j].id
                    }
                )

                if (ndx < 0) {
                    mats.push({...servant.ascensionMaterials[i].materials[j]})
                } else {
                    mats[ndx].amount += servant.ascensionMaterials[i].materials[j].amount
                }
            }
        }

        for (let i = skill1Start - 1; i < skill1End - 1; i++) {
            sum += servant.skillMaterials[i].qp

            for (let j = 0; j < servant.skillMaterials[i].materials.length; j++) {
                let ndx = mats.findIndex(
                    value => {
                        return value.id === servant.skillMaterials[i].materials[j].id
                    }
                )

                if (ndx < 0) {
                    mats.push({...servant.skillMaterials[i].materials[j]})
                } else {
                    mats[ndx].amount += servant.skillMaterials[i].materials[j].amount
                }
            }
        }

        for (let i = skill2Start - 1; i < skill2End - 1; i++) {
            sum += servant.skillMaterials[i].qp

            for (let j = 0; j < servant.skillMaterials[i].materials.length; j++) {
                let ndx = mats.findIndex(
                    value => {
                        return value.id === servant.skillMaterials[i].materials[j].id
                    }
                )

                if (ndx < 0) {
                    mats.push({...servant.skillMaterials[i].materials[j]})
                } else {
                    mats[ndx].amount += servant.skillMaterials[i].materials[j].amount
                }
            }
        }

        for (let i = skill3Start - 1; i < skill3End - 1; i++) {
            sum += servant.skillMaterials[i].qp

            for (let j = 0; j < servant.skillMaterials[i].materials.length; j++) {
                let ndx = mats.findIndex(
                    value => {
                        return value.id === servant.skillMaterials[i].materials[j].id
                    }
                )

                if (ndx < 0) {
                    mats.push({...servant.skillMaterials[i].materials[j]})
                } else {
                    mats[ndx].amount += servant.skillMaterials[i].materials[j].amount
                }
            }
        }

        for (let i = append1Start - 1; i < append1End - 1; i++) {
            sum += servant.appendMaterials[i].qp

            for (let j = 0; j < servant.appendMaterials[i].materials.length; j++) {
                let ndx = mats.findIndex(
                    value => {
                        return value.id === servant.appendMaterials[i].materials[j].id
                    }
                )

                if (ndx < 0) {
                    mats.push({...servant.appendMaterials[i].materials[j]})
                } else {
                    mats[ndx].amount += servant.appendMaterials[i].materials[j].amount
                }
            }
        }

        for (let i = append2Start - 1; i < append2End - 1; i++) {
            sum += servant.appendMaterials[i].qp

            for (let j = 0; j < servant.appendMaterials[i].materials.length; j++) {
                let ndx = mats.findIndex(
                    value => {
                        return value.id === servant.appendMaterials[i].materials[j].id
                    }
                )

                if (ndx < 0) {
                    mats.push({...servant.appendMaterials[i].materials[j]})
                } else {
                    mats[ndx].amount += servant.appendMaterials[i].materials[j].amount
                }
            }
        }

        for (let i = append3Start - 1; i < append3End - 1; i++) {
            sum += servant.appendMaterials[i].qp

            for (let j = 0; j < servant.appendMaterials[i].materials.length; j++) {
                let ndx = mats.findIndex(
                    value => {
                        return value.id === servant.appendMaterials[i].materials[j].id
                    }
                )

                if (ndx < 0) {
                    mats.push({...servant.appendMaterials[i].materials[j]})
                } else {
                    mats[ndx].amount += servant.appendMaterials[i].materials[j].amount
                }
            }
        }

        if (sum > 0) {
            mats.unshift({
                id: -1,
                icon: 'https://static.atlasacademy.io/JP/Items/5.png',
                amount: sum
            } as Material)
        }

        setMaterials(mats)
    }, [ascStart, ascEnd, skill1Start, skill1End, skill2Start, skill2End, skill3Start, skill3End, append1Start,
        append1End, append2Start, append2End, append3Start, append3End, servant.ascensionMaterials,
        servant.skillMaterials, servant.appendMaterials])


    function characterPortrait(ascension: Number) {
        switch (ascension) {
            case 0:
                return 0
            case 1:
                return 1
            case 2:
                return 1
            case 3:
                return 2
            case 4:
                return 3
            default:
                return 0
        }
    }

    function onAscensionMinChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.valueAsNumber > ascEnd) {
            setAscEnd(e.target.valueAsNumber)
        }
        setAscStart(e.target.valueAsNumber)
    }

    function onAscensionMaxChange(e: React.ChangeEvent<HTMLInputElement>) {
        let max = Math.max(ascStart, e.target.valueAsNumber)
        e.target.valueAsNumber = max
        setAscEnd(max)
    }

    function onSkill1MinChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.valueAsNumber > skill1End) {
            setSkill1End(e.target.valueAsNumber)
        }
        setSkill1Start(e.target.valueAsNumber)
    }

    function onSkill1MaxChange(e: React.ChangeEvent<HTMLInputElement>) {
        let max = Math.max(skill1Start, e.target.valueAsNumber)
        e.target.valueAsNumber = max
        setSkill1End(max)
    }

    function onSkill2MinChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.valueAsNumber > skill2End) {
            setSkill2End(e.target.valueAsNumber)
        }
        setSkill2Start(e.target.valueAsNumber)
    }

    function onSkill2MaxChange(e: React.ChangeEvent<HTMLInputElement>) {
        let max = Math.max(skill2Start, e.target.valueAsNumber)
        e.target.valueAsNumber = max
        setSkill2End(max)
    }

    function onSkill3MinChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.valueAsNumber > skill3End) {
            setSkill3End(e.target.valueAsNumber)
        }
        setSkill3Start(e.target.valueAsNumber)
    }

    function onSkill3MaxChange(e: React.ChangeEvent<HTMLInputElement>) {
        let max = Math.max(skill3Start, e.target.valueAsNumber)
        e.target.valueAsNumber = max
        setSkill3End(max)
    }

    function onAppend1MinChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.valueAsNumber > append1End) {
            setAppend1End(e.target.valueAsNumber)
        }
        setAppend1Start(e.target.valueAsNumber)
    }

    function onAppend1MaxChange(e: React.ChangeEvent<HTMLInputElement>) {
        let max = Math.max(append1Start, e.target.valueAsNumber)
        e.target.valueAsNumber = max
        setAppend1End(max)
    }

    function onAppend2MinChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.valueAsNumber > append2End) {
            setAppend2End(e.target.valueAsNumber)
        }
        setAppend2Start(e.target.valueAsNumber)
    }

    function onAppend2MaxChange(e: React.ChangeEvent<HTMLInputElement>) {
        let max = Math.max(append2Start, e.target.valueAsNumber)
        e.target.valueAsNumber = max
        setAppend2End(max)
    }

    function onAppend3MinChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.valueAsNumber > append3End) {
            setAppend3End(e.target.valueAsNumber)
        }
        setAppend3Start(e.target.valueAsNumber)
    }

    function onAppend3MaxChange(e: React.ChangeEvent<HTMLInputElement>) {
        let max = Math.max(append3Start, e.target.valueAsNumber)
        e.target.valueAsNumber = max
        setAppend3End(max)
    }

    if (init) {
        return (
            <div className="text-center">Search for a servant!</div>
        )
    }

    if (!loading) {
        return (
            <MDBContainer fluid className='px-5'>
                <MDBRow className='mb-3'>
                    <MDBCol md='4'>
                        <img src={servant.portraits[characterPortrait(ascEnd)]} alt={servant.name} className='mw-100' />
                    </MDBCol>
                    <MDBCol md='8'>
                        <div>
                            <img src={servant.classIcon} alt="TODO: servant.className" style={{width:'45px', height:'45px'}} />
                            <span className='fw-bold mb-1 text-white px-3'>{servant.name}</span>
                        </div>
                        <MDBRow className='py-2'>
                            <MDBCol md='4'>
                                <span className='fw-bold mb-1 text-white'>Ascension Materials</span>
                                <MDBRow>
                                    <span className='text-white'>From {ascStart} to {ascEnd}</span>
                                </MDBRow>
                                <MDBRow className='py-2'>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={0} min={0} max={4} onChange={onAscensionMinChange} id='ascStart' label='Start' />
                                    </MDBCol>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={0} min={0} max={4} value={ascEnd} onChange={onAscensionMaxChange} id='ascEnd' label='End' />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md='4'>
                                <span className='fw-bold mb-1 text-white'>Skill Materials</span>
                                <MDBRow className='py-2'>
                                    <MDBRow>
                                        <MDBCol md='2'>
                                            <img src={servant.skills[0].icon} style={{width:'30px'}} />
                                        </MDBCol>
                                        <MDBCol md='10'>
                                            <span className='text-white'>{servant.skills[0].name}</span>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <span className='text-white'>From {skill1Start} to {skill1End}</span>
                                    </MDBRow>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} onChange={onSkill1MinChange} id='skill1Start' label='Start' />
                                    </MDBCol>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} value={skill1End} onChange={onSkill1MaxChange} id='skill1End' label='End' />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='py-2'>
                                    <MDBRow>
                                        <MDBCol md='2'>
                                            <img src={servant.skills[1].icon} style={{width:'30px'}} />
                                        </MDBCol>
                                        <MDBCol md='10'>
                                            <span className='text-white'>{servant.skills[1].name}</span>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <span className='text-white'>From {skill2Start} to {skill2End}</span>
                                    </MDBRow>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} onChange={onSkill2MinChange} id='skill2Start' label='Start' />
                                    </MDBCol>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} value={skill2End} onChange={onSkill2MaxChange} id='skill2End' label='End' />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='py-2'>
                                    <MDBRow>
                                        <MDBCol md='2'>
                                            <img src={servant.skills[2].icon} style={{width:'30px'}} />
                                        </MDBCol>
                                        <MDBCol md='10'>
                                            <span className='text-white'>{servant.skills[2].name}</span>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <span className='text-white'>From {skill3Start} to {skill3End}</span>
                                    </MDBRow>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} onChange={onSkill3MinChange} id='skill3Start' label='Start' />
                                    </MDBCol>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} value={skill3End} onChange={onSkill3MaxChange} id='skill3End' label='End' />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md='4'>
                                <span className='fw-bold mb-1 text-white'>Append Materials</span>
                                <MDBRow className='py-2'>
                                    <MDBRow>
                                        <MDBCol md='2'>
                                            <img src={servant.appends[0].icon} style={{width:'30px'}} />
                                        </MDBCol>
                                        <MDBCol md='10'>
                                            <span className='text-white'>{servant.appends[0].name}</span>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <span className='text-white'>From {append1Start} to {append1End}</span>
                                    </MDBRow>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} onChange={onAppend1MinChange} id='append1Start' label='Start' />
                                    </MDBCol>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} value={append1End} onChange={onAppend1MaxChange} id='append1Start' label='End' />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='py-2'>
                                    <MDBRow>
                                        <MDBCol md='2'>
                                            <img src={servant.appends[1].icon} style={{width:'30px'}} />
                                        </MDBCol>
                                        <MDBCol md='10'>
                                            <span className='text-white'>{servant.appends[1].name}</span>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <span className='text-white'>From {append2Start} to {append2End}</span>
                                    </MDBRow>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} onChange={onAppend2MinChange} id='append2Start' label='Start' />
                                    </MDBCol>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} value={append2End} onChange={onAppend2MaxChange} id='append2End' label='End' />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='py-2'>
                                    <MDBRow>
                                        <MDBCol md='2'>
                                            <img src={servant.appends[2].icon} style={{width:'30px'}} />
                                        </MDBCol>
                                        <MDBCol md='10'>
                                            <span className='text-white'>{servant.appends[2].name}</span>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <span className='text-white'>From {append3Start} to {append3End}</span>
                                    </MDBRow>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} onChange={onAppend3MinChange} id='append3Start' label='Start' />
                                    </MDBCol>
                                    <MDBCol md='6'>
                                        <MDBRange defaultValue={1} min={1} max={10} value={append3End} onChange={onAppend3MaxChange} id='append33End' label='End' />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <h5 className='text-center'>Required Materials</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MaterialGrid mats={materials} />
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
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

export default Planner;
