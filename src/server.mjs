import Fastify from "fastify";
import { readFileSync } from "fs";
import fastify_static from "@fastify/static";
import { join } from "path";

const __dirname = import.meta.dirname;

const fastify = Fastify({
    logger: true
});

fastify.register(fastify_static, {
    root: join(__dirname, 'public/static'),
    prefix: '/static/',
});

fastify.get('/', async (_req, reply) => {
    reply.header('Content-Type', 'text/html');
    return reply.send(readFileSync(join(__dirname,'public/index.html')));
});

try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err);
}
