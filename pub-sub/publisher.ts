import { jsonCodec, natsClient } from "../nats-instance";

export const addNewMessage = (topic: string, payload: any) => {
  natsClient.publish(topic, jsonCodec.encode(payload));
};
