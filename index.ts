import { connectToNats } from "./nats-instance";
import { addNewMessage } from "./pub-sub/publisher";
import { readNewMessages } from "./pub-sub/subscriber";
import { requestData } from "./request-reply/request";

const topic = "user";
const payload = {
  _id: 1,
  phoneNumber: "911234567890",
};

// 1. Request Response Mode - Similar to HTTP
async function requestResponseMode() {
  // Request for data
  const data = await requestData(topic, payload);
  console.log("Got requested data ->", data);
}

// 2. Pub-Sub mode
async function pubSubMode() {
  // Publish message to a topic/subject
  addNewMessage(topic, payload);
  // Subscribe & listen to the published messages
  await readNewMessages(topic);
}

async function main() {
  //   await connectToNats();
  //   requestResponseMode();
  //   await pubSubMode();
}

main();
