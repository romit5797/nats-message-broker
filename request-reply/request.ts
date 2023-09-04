import { natsClient, jsonCodec } from "../nats-instance";

export const requestData = async (topic: string, payload: any) => {
  try {
    const request = await natsClient.request(topic, jsonCodec.encode(payload), {
      timeout: 10000,
    });
    const data = jsonCodec.decode(request.data);
    return data;
  } catch (error: any) {
    console.log(`problem with request: ${error?.message}`);
  }
};
