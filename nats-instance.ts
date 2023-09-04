import { connect, NatsConnection, StringCodec, JSONCodec } from "nats";

let natsClient: NatsConnection;
const connectToNats = async () => {
  natsClient = await connect({ servers: "demo.nats.io:4222" });
  return natsClient;
};

const stringCodec = StringCodec();

const jsonCodec = JSONCodec();

export { connectToNats, natsClient, stringCodec, jsonCodec };
