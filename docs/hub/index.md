# SoCon Hub

Hubs play a central role in the SoCon ecosystem, forming a distributed network of servers designed to store and validate SoCon data. Here's an overview of the key concepts related to SoCon Hubs:

## What are Hubs?

Hubs are servers that run software to become part of the SoCon network. They store and validate both onchain Socon data from Ethereum and offchain Socon data from other Hubs. Each Hub maintains a copy of all Socon data, making it accessible through an API. Hubs serve as the gateway for reading and writing data to SoCon, and anyone building a SoCon app needs to interact with them.

## Hub Design

1. **Syncing Data:** A Hub begins by syncing data from Socon contracts on the Optimism blockchain, becoming aware of every user's account and their associated keys.

2. **Lifecycle of a SoCon Message:**
   - Alice creates a new message (e.g., "Hello World!").
   - Alice or her app signs the message with an account key.
   - Alice or her app uploads the message to a Hub.
   - The Hub validates the message's signature and ensures it adheres to the specified message type requirements.

![hub architecture](/img/hub-architecture.png)

## Validation and Storage

- **Validation:** Messages are validated by checking for a valid signature from the account key and adherence to message type requirements, as outlined in the protocol spec.

- **Storage:** Messages are checked for conflicts before being stored. Conflicts may arise due to various reasons, such as an existing copy of the message or rent payment limitations. Conflicts are resolved deterministically and asynchronously using Conflict-Free Replicated Data Types (CRDTs).

## Replication

Hubs synchronize using a two-phase process:
- **Gossip:** Hubs gossip messages to their peers immediately upon receiving and storing them, leveraging libp2p's gossipsub protocol.
- **Diff Sync:** Periodically, Hubs perform a diff sync with a random peer to identify dropped messages efficiently. The diff sync process compares merkle tries of message hashes.

## Consistency

Hubs maintain strong eventual consistency. Even if a Hub is temporarily disconnected, it can safely recover when back online. However, messages may arrive out of order, a trade-off for ensuring robustness.

## Peer Scoring

Hubs monitor the behavior of their peers and assign scores based on factors like message acceptance, falling behind, or excessive gossiping. Peers with unfavorable scores may be ignored by their peers.

Explore the detailed guide on [setting up and running a Hub](#).