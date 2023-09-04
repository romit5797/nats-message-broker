import { connectToNats } from "../nats-instance";
import { addNewMessage } from "../pub-sub/publisher";
import { requestData } from "../request-reply/request";

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
  for (let i = 0; i < 5; i++) {
    const modifiedPayload = { ...payload, _id: i };
    addNewMessage(topic, modifiedPayload);
    console.log("Published new msg", modifiedPayload);
  }
}

async function main() {
  console.log("Client connected");
  await connectToNats();
  //   await requestResponseMode();
  await pubSubMode();
}

main();
