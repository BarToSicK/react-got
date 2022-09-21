import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


const root = ReactDOM.createRoot(
    document.getElementById('root')
);

const App = (
    <>
        <Container>
            <Header />
        </Container>
        <Container>
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    <RandomChar/>
                </Col>
            </Row>
            <Row>
                <Col md='6'>
                    <ItemList />
                </Col>
                <Col md='6'>
                    <CharDetails />
                </Col>
            </Row>
        </Container>
    </>
)
root.render(App);

export default App;