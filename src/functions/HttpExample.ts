import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function HttpExample(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'nundo';

    const responseMessage = {
        message: `Hello, ${name}!`
    };

    return { jsonBody: responseMessage  };
};

app.http('HttpExample', {
    methods: ['GET', 'POST'],
    authLevel: 'function',
    handler: HttpExample
});
