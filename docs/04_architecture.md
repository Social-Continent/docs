---
sidebar_position: 4
---

# Architecture  

SoCon is split into three main elements: applications, on-chain registries, off-chain hubs.
On-chain registries are responsible for handling accounts, identity and linking accounts with hubs.
Off-chain hubs are responsible for validating, storing, replicating and serving content and social actions.
Applications (aka clients) are responsible for pulling content from hubs and displaying them in feeds, displaying user’s profile and social graph, and sending signed messages to hubs.

![system overiew image](/img/system-overview.png)

Each SoCon account is associated with an Ethereum address, the custody address, which has a SoCon ID fid assigned to it in the SoCon ID Registry. Users sign-in to SoCon clients using their custody address. Whenever users publish a post or perform an action such as “like” or “follow”, the client will generate a cryptographically signed message that includes the user’s soconI d and push it to a hub, the hub will ensure the message was signed by the address associated with the fid in the registry and then store it.

SoCon's architecture is designed to provide a decentralized, secure, and scalable social networking platform. The system is composed of several layers that work in tandem to deliver a seamless and engaging user experience.

![socon's architecture](/img/architecture.png)

## App Layer

### Frontend and API

- **Frontend:** The user interface layer where SoCon users interact with the platform. It includes features like creating accounts, posting messages, and exploring content.
- **API:** Handles communication between the frontend and backend, ensuring a smooth exchange of data. The API processes user requests and interacts with the backend components.

## Backend

### [Hubs](/docs/hub/index.md)

- **Peer-to-Peer Network:** Comprised of decentralized nodes known as Hubs. Each Hub stores a copy of the entire network, facilitating the propagation of messages across the SoCon ecosystem.

### [Postgres Database](#)

- **Storage:** A PostgreSQL database stores essential information, including user profiles, messages, and other relevant data. It ensures efficient retrieval and management of content.

### [Sname Registry](#)

- **Username Resolution:** The Sname Registry manages human-readable usernames (snames) associated with Ethereum addresses. It enables users to easily connect and communicate within the SoCon network.

## Onchain Components

### [ID Registry](/docs/smart-contracts/id-registry.md)

- **Account Creation:** The ID Registry manages the creation of SoCon accounts by assigning unique Farcaster IDs (fids) to Ethereum addresses. It initiates the process of obtaining a username, renting storage, and adding keys.


### [Name Registry](/docs/smart-contracts/name-registry.md)

- **Username Management:** The Name Registry handles the registration and management of snames. Users can claim a username and associate it with their Ethereum address, enhancing user identification.

### [Bundle Registry](/docs/smart-contracts/bundle-registry.md)

- **Accessing Onchain Components:** The Bundle Registry serves as a gateway to access various onchain components, streamlining interactions with the ID Registry and Name Registry.
