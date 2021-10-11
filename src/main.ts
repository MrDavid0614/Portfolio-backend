import server from './server';

function bootstrap() {
    const PORT = server.get('port');

    server.listen(PORT, () => console.log(`Server listen on: http://localhost:${ PORT }`));
}

bootstrap();