import Material from "./Material";
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

interface MaterialGridProps {
    mats: Array<Material>
}

function MaterialGrid({mats}: MaterialGridProps) {
    let rowCount = Math.floor((mats.length + 1) / 12) + 1
    let curNdx = 0

    function renderRows() {
        let rows = []

        for (let i = 0; i < rowCount; i++) {
             rows.push(
                    <MDBRow>
                        {renderColumns(i)}
                    </MDBRow>
                )
        }

        return rows
    }

    function renderColumns(row: number) {
        let columns = []

        for (let i = 0; i < 12 && curNdx < mats.length; i++, curNdx++) {
            columns.push(
                <MDBCol md='1'>
                    <MDBRow>
                        <img src={mats[curNdx].icon} style={{width:'75px'}} />
                    </MDBRow>
                    <MDBRow>
                        <span className='text-white text-center'>{mats[curNdx].amount}</span>
                    </MDBRow>
                </MDBCol>
            )
        }

        return columns
    }

    return (
        <MDBContainer>
            {renderRows()}
        </MDBContainer>
    )
}

export default MaterialGrid