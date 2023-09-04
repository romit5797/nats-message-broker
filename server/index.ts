import { connectToNats } from "../nats-instance";
import { readNewMessages } from "../pub-sub/subscriber";
import { getMessageDetails } from "../request-reply/reply";

const topic = "user";

// 1. Request Reply Mode - Similar to HTTP
async function requestResponseMode() {
  // Request for data
  await getMessageDetails(topic);
}

// 2. Pub-Sub mode
async function pubSubMode() {
  // Subscribe & listen to the published messages
  await readNewMessages(topic);
}

async function main() {
  console.log("Server connected");
  await connectToNats();
  //   await requestResponseMode();
  await pubSubMode();
}

main();
