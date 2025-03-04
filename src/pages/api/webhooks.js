import Shopify from "../../lib/shopify";

export default async function handler(req, res) {
    console.log('Incoming Webhook')
    if (req.method === "POST") {
        try {
            await Shopify.Webhooks.Registry.process(req, res)
            console.log(`Webhook processed, returned status code 200`);
        } catch (error) {
            console.log(`Failed to process webhook: ${error}`);
        }
    } else {
        res.status(403).send("Only POST is allowed")
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
}