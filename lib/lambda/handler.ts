export async function handler(event:string, context: string) {
    console.log('Statge Name is :'+ process.env.stage);
    return {
        body : 'Hello from Escrow Lmabda Function',
        statusCode: 200,
    }
    
}