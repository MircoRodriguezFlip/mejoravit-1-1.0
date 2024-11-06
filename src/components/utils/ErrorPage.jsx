import Container from 'react-bootstrap/Container';

export const ErrorPage = () => {
    return (
        <Container className="d-flex vh-100 justify-content-center align-items-center">
            <div className="text-center">
                <h1>404 - Página no encontrada</h1>

                <p>Lo sentimos, la página que estás buscando no existe.</p>
            </div>
        </Container>
    );
};
