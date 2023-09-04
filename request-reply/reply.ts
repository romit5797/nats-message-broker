import { natsClient, jsonCodec } from "../nats-instance";

export const getMessageDetails = async (topic: string) => {
  const sub = natsClient.subscribe(topic);
  console.log("Fetching msg details...");
  for await (const msg of sub) {
    if (msg.respond(jsonCodec.encode({ success: true }))) {
      console.info(`[${topic}] handled #${sub.getProcessed()}`);
    } else {
      console.log(
        `[${topic}] #${sub.getProcessed()} ignored - no reply subject`
      );
    }
  }
};
