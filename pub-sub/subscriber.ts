import { natsClient, jsonCodec } from "../nats-instance";

export const readNewMessages = async (topic: string) => {
  const sub = natsClient.subscribe(topic);
  console.log("Reading new messages...");
  for await (const msg of sub) {
    const data = jsonCodec.decode(msg.data);
    const processed = sub.getProcessed();
    console.log(`[${processed}]: ${data}`);
  }
};
