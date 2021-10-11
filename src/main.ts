import server from './server';

function bootstrap() {
    const PORT = server.get('port');

    server.listen(PORT, () => console.log(`Server listening on: http://localhost:${ PORT }`));
}

bootstrap();
