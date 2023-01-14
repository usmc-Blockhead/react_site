import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { useState } from 'react';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;
