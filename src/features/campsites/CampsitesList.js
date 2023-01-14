import { selectAllCampsites } from './campsitesSlice';
import { Col, Row } from 'reactstrap';

const CampsitesList = ({ setCampsiteId }) => {
    const campsites = selectAllCampsites();

    return (
        <Row className="ms-auto"> 
            {campsites.map((campsite) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={campsite.id}
                        onClick={() => setCampsiteId(campsite.id)}
                    >
                );
            })}
        </Row>
    );
}

export default CampsitesList;