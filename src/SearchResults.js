import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card} from 'react-bootstrap';


//SearchResults component
function SearchResults() {
    return (
        <div>        
            <Container>
                <Row className= 'mx-2 row row-cols-1'>
                    <Card.Body>
                        <Card.Img  src="#"/>
                       <Card.Titel>Track Title Here</Card.Titel> 
                       <Card.Artist>Artist Name Here</Card.Artist>
                       <Card.Album>Album Name Here</Card.Album>
                    </Card.Body>
                </Row>
            </Container>   
        </div>
    )
};

export default SearchResults;