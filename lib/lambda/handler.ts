export async function handler(event:string, context: string) {
    console.log('Statge Name is :'+ process.env.stage);
    return {
        body : 'Hello from Escrow Lambda Function',
        statusCode: 200,
    }
    
}