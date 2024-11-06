import Container from 'react-bootstrap/Container';

export const HomeMain = (props) => {
    return (
        <Container>
            <p className="bienvenido">{props.greeting}</p>
        </Container>
    );
};
