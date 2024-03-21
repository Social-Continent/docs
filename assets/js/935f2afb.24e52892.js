"use strict";(self.webpackChunksocon_docs=self.webpackChunksocon_docs||[]).push([[8581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"link","label":"Introduction","href":"/","docId":"intro","unlisted":false},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create an Account","href":"/getting-started/account-creation","docId":"getting-started/account-creation","unlisted":false},{"type":"link","label":"Run a Hub","href":"/getting-started/run-a-hub","docId":"getting-started/run-a-hub","unlisted":false}],"href":"/getting-started/"},{"type":"link","label":"FAQ","href":"/FAQ","docId":"FAQ","unlisted":false},{"type":"link","label":"SoCon Accounts","href":"/accounts","docId":"accounts","unlisted":false},{"type":"category","label":"SoCon Hub","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Message","href":"/hub/message","docId":"hub/message","unlisted":false},{"type":"link","label":"Hash Scheme","href":"/hub/hash","docId":"hub/hash","unlisted":false},{"type":"link","label":"Signing","href":"/hub/signing","docId":"hub/signing","unlisted":false},{"type":"link","label":"messageData","href":"/hub/messageData","docId":"hub/messageData","unlisted":false},{"type":"link","label":"User Data","href":"/hub/userData","docId":"hub/userData","unlisted":false},{"type":"link","label":"Post","href":"/hub/post","docId":"hub/post","unlisted":false},{"type":"link","label":"Reactions","href":"/hub/reactions","docId":"hub/reactions","unlisted":false},{"type":"link","label":"Link","href":"/hub/links","docId":"hub/links","unlisted":false},{"type":"link","label":"Location","href":"/hub/location","docId":"hub/location","unlisted":false},{"type":"link","label":"Story","href":"/hub/story","docId":"hub/story","unlisted":false},{"type":"link","label":"Highlight","href":"/hub/highlight","docId":"hub/highlight","unlisted":false},{"type":"link","label":"Collection","href":"/hub/collection","docId":"hub/collection","unlisted":false},{"type":"link","label":"Anonymous Profile","href":"/hub/anonymousProfile","docId":"hub/anonymousProfile","unlisted":false},{"type":"link","label":"Community","href":"/hub/community","docId":"hub/community","unlisted":false},{"type":"link","label":"Gossip","href":"/hub/gossip","docId":"hub/gossip","unlisted":false},{"type":"link","label":"RPC Endpoints","href":"/hub/rpc","docId":"hub/rpc","unlisted":false},{"type":"link","label":"onChainEvent","href":"/hub/onChainEvent","docId":"hub/onChainEvent","unlisted":false}],"href":"/hub/"},{"type":"link","label":"SoCon Messages","href":"/messages","docId":"messages","unlisted":false},{"type":"link","label":"Network","href":"/network/","docId":"network/index","unlisted":false},{"type":"link","label":"Architecture","href":"/overview","docId":"overview","unlisted":false},{"type":"link","label":"Security","href":"/security/","docId":"security/index","unlisted":false},{"type":"category","label":"Smart Contract Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Bundle Registry","href":"/smart-contracts/bundle-registry","docId":"smart-contracts/bundle-registry","unlisted":false},{"type":"link","label":"Id Registry","href":"/smart-contracts/id-registry","docId":"smart-contracts/id-registry","unlisted":false},{"type":"link","label":"Name Registry","href":"/smart-contracts/name-registry","docId":"smart-contracts/name-registry","unlisted":false},{"type":"link","label":"SoCon Contracts Overview","href":"/smart-contracts/overview","docId":"smart-contracts/overview","unlisted":false}],"href":"/smart-contracts/"},{"type":"category","label":"Storage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Delta Graphs","href":"/storage/delta-graphs","docId":"storage/delta-graphs","unlisted":false}],"href":"/storage/"},{"type":"link","label":"System Overview","href":"/system","docId":"system","unlisted":false},{"type":"category","label":"User Flows","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SoCon Authentication","href":"/user-flows/authentication","docId":"user-flows/authentication","unlisted":false},{"type":"link","label":"SoCon Identities","href":"/user-flows/identities","docId":"user-flows/identities","unlisted":false}],"href":"/user-flows/"}]},"docs":{"accounts":{"id":"accounts","title":"SoCon Accounts","description":"Unlock the full potential of your SoCon experience by creating and managing your SoCon account. Here\'s a guide to help you navigate the process seamlessly:","sidebar":"defaultSidebar"},"FAQ":{"id":"FAQ","title":"FAQ","description":"What is SoCon?","sidebar":"defaultSidebar"},"getting-started/account-creation":{"id":"getting-started/account-creation","title":"Create an Account","description":"Welcome to SoCon, your gateway to a seamless social experience on the blockchain. To get started, we recommend creating your account using the Socon mobile wallet + app. Socon client apps are designed to provide the best experience of the Socon protocol, ensuring a smooth and secure interaction with the SoCon platform.","sidebar":"defaultSidebar"},"getting-started/index":{"id":"getting-started/index","title":"Getting Started","description":"","sidebar":"defaultSidebar"},"getting-started/run-a-hub":{"id":"getting-started/run-a-hub","title":"Run a Hub","description":"","sidebar":"defaultSidebar"},"hub/anonymousProfile":{"id":"hub/anonymousProfile","title":"Anonymous Profile","description":"This allow to create anonymous profile of user for Spin Buzz Feature","sidebar":"defaultSidebar"},"hub/collection":{"id":"hub/collection","title":"Collection","description":"This defines the collection of users posts. User can enable collection and add their posts in the collection","sidebar":"defaultSidebar"},"hub/community":{"id":"hub/community","title":"Community","description":"A community is like a digital gathering place where people come together online to connect, share interests, and communicate anonymously. It\'s like a place where users can join discussions, post content, and interact with each other.","sidebar":"defaultSidebar"},"hub/gossip":{"id":"hub/gossip","title":"Gossip","description":"Hubs utilize gossiping mechanisms to synchronize data with other hubs in the network. Hub gossip for data sync with other hubs. A Hub serves as a server within the Socon network, tasked with storing and distributing Socon Messages. Users create messages and submit them to the Hub, which then disseminates them to other Hubs across the network. Through collaboration, these Hubs establish a causally consistent peer-to-peer network, facilitating the storage and retrieval of data generated by Socon users.","sidebar":"defaultSidebar"},"hub/hash":{"id":"hub/hash","title":"Hash Scheme","description":"Messages should undergo hashing by first serializing the data protobuf into bytes using ts-proto. Subsequently, these bytes are passed through a hashing function to generate a digest. The acceptable hashing scheme available is BLAKE3, which produces a 160-bit hash digest.","sidebar":"defaultSidebar"},"hub/highlight":{"id":"hub/highlight","title":"Highlight","description":"The HighlightBody message enables the addition of new highlights, comprising essential details such as title, cover photo URL, associated story IDs, and a timestamp for updates. Each highlight is characterized by a descriptive title and a visually appealing cover photo, along with a list of stories contributing to its content.","sidebar":"defaultSidebar"},"hub/index":{"id":"hub/index","title":"SoCon Hub","description":"Hubs play a central role in the SoCon ecosystem, forming a distributed network of servers designed to store and validate SoCon data. Here\'s an overview of the key concepts related to SoCon Hubs:","sidebar":"defaultSidebar"},"hub/links":{"id":"hub/links","title":"Link","description":"A Link denotes a connection between two users, featuring various types of relationships. These connections are established through a LinkAdd message and dissolved via a LinkRemove","sidebar":"defaultSidebar"},"hub/location":{"id":"hub/location","title":"Location","description":"The inclusion of the location message facilitates the seamless addition of user geographical coordinates within the system. With fields for latitude and longitude, it enables precise positioning, essential for location-based functionalities.","sidebar":"defaultSidebar"},"hub/message":{"id":"hub/message","title":"Message","description":"A Message within the Socon network is a digitally signed binary data entity representing an operation. These Messages are defined and converted into binary format using proto3 protobufs. It\'s essential to serialize Messages using this method to ensure consistency across implementations. Each Message includes the payload data and necessary details for verifying its authenticity.","sidebar":"defaultSidebar"},"hub/messageData":{"id":"hub/messageData","title":"messageData","description":"2.1 Message Data","sidebar":"defaultSidebar"},"hub/onChainEvent":{"id":"hub/onChainEvent","title":"onChainEvent","description":"These events are used in tracking and managing various actions and changes within the blockchain through smart contracts, particularly in the context of providing decentralised name and ID registries.","sidebar":"defaultSidebar"},"hub/post":{"id":"hub/post","title":"Post","description":"A Post  refers to a public message generated by a user, typically comprising text or Uniform Resource Identifiers (URIs) linking to other resources. Posts have the option to designate another post as their parent, thereby establishing a threaded conversation. In such a threaded conversation, a root post  serves as the initial message with no parent, while reply posts are linked to either the root or its subsequent descendants. Each thread adheres and ensuring that replies can only be generated after their parent post has been hashed and signed.","sidebar":"defaultSidebar"},"hub/reactions":{"id":"hub/reactions","title":"Reactions","description":"A Reaction signifies a connection between a user and a post, categorized into various types.","sidebar":"defaultSidebar"},"hub/rpc":{"id":"hub/rpc","title":"RPC Endpoints","description":"HubService:","sidebar":"defaultSidebar"},"hub/signing":{"id":"hub/signing","title":"Signing","description":"Messages are required to be signed by taking the hash and applying a signature using one of the approved signing schemes. The permissible signature scheme is dictated by the MessageType. Valid options include:","sidebar":"defaultSidebar"},"hub/story":{"id":"hub/story","title":"Story","description":"The incorporation of the StoryBody message empowers users to seamlessly add and remove stories within the system. With dedicated fields for story content and metadata, it facilitates dynamic storytelling functionalities. This feature enhances user engagement by enabling easy creation and management of narrative content.","sidebar":"defaultSidebar"},"hub/userData":{"id":"hub/userData","title":"User Data","description":"A UserData message encompasses public metadata pertaining to a user, such as their display name or profile picture.","sidebar":"defaultSidebar"},"intro":{"id":"intro","title":"Introduction","description":"What is Socon?","sidebar":"defaultSidebar"},"messages":{"id":"messages","title":"SoCon Messages","description":"Unlock the power of interaction within the SoCon community by signing and publishing messages. Whether you\'re expressing thoughts, forming connections, or providing proofs of ownership, messages are at the heart of the SoCon experience. Here\'s an overview to guide you through the intricacies of SoCon messages:","sidebar":"defaultSidebar"},"network/index":{"id":"network/index","title":"Network","description":"Availability and Reliability","sidebar":"defaultSidebar"},"overview":{"id":"overview","title":"Architecture","description":"SoCon\'s architecture is designed to provide a decentralized, secure, and scalable social networking platform. The system is composed of several layers that work in tandem to deliver a seamless and engaging user experience.","sidebar":"defaultSidebar"},"security/index":{"id":"security/index","title":"Security","description":"Security in Socon","sidebar":"defaultSidebar"},"smart-contracts/bundle-registry":{"id":"smart-contracts/bundle-registry","title":"Bundle Registry","description":"The BundleRegistry smart contract facilitates the registration and management of bundles within the SoCon decentralized application ecosystem. It is designed to handle the registration of user identifiers (sid) and usernames (sname) in a secure and decentralized manner. The contract is divided into distinct phases, each catering to specific registration scenarios.","sidebar":"defaultSidebar"},"smart-contracts/id-registry":{"id":"smart-contracts/id-registry","title":"Id Registry","description":"The IdRegistry smart contract serves as a decentralized identity (sid) registration system within the SoCon ecosystem. It allows users to register, transfer, and recover ownership of SoCon IDs securely. The contract employs the ERC2771 meta-transaction standard to enable relayer-supported transactions. Additionally, the contract implements an ownership transfer mechanism and recovery functionalities.","sidebar":"defaultSidebar"},"smart-contracts/index":{"id":"smart-contracts/index","title":"Smart Contract Architecture","description":"hub architecture","sidebar":"defaultSidebar"},"smart-contracts/name-registry":{"id":"smart-contracts/name-registry","title":"Name Registry","description":"The NameRegistry contract is an Ethereum smart contract designed to manage the registration and recovery of unique names, referred to as \\"SoCon Names,\\" using the ERC-721 standard. Additionally, the contract supports meta-transactions through ERC-2771, enabling relayers to interact on behalf of users.","sidebar":"defaultSidebar"},"smart-contracts/overview":{"id":"smart-contracts/overview","title":"SoCon Contracts Overview","description":"SoCon leverages a set of onchain contracts to manage and secure user accounts. This section provides a high-level overview of the key contracts in the SoCon ecosystem. For a more detailed understanding, refer to the contracts repository.","sidebar":"defaultSidebar"},"storage/delta-graphs":{"id":"storage/delta-graphs","title":"Delta Graphs","description":"Types of deltas used in Socon","sidebar":"defaultSidebar"},"storage/index":{"id":"storage/index","title":"Storage","description":"At the heart of Socon\'s operational essence lies the innovative concept of \\"Delta Graphs.\\" These dynamic structures serve as agile representations, capturing and depicting user interactions in a flexible and efficient manner. Within these structures, hubs act as pivotal repositories, housing all user-generated content and information. As hubs expand, the platform introduces storage limits to maintain operational efficiency. Socon employs delta pruning to manage the evolving data landscape. Older messages are systematically archived, ensuring platform efficiency and a clutter-free environment. Notably, Socon meticulously manages these limits to safeguard each user\'s storage allocation. For those seeking extended storage beyond these boundaries, Socon provides the option to acquire additional storage, catering to diverse user needs and preferences.","sidebar":"defaultSidebar"},"system":{"id":"system","title":"System Overview","description":"SoCon is split into three main elements: applications, on-chain registries, off-chain hubs.","sidebar":"defaultSidebar"},"user-flows/authentication":{"id":"user-flows/authentication","title":"SoCon Authentication","description":"SoCon introduces a novel approach to message signing by creating a separate signer public-private key pair. This method enhances security and privacy by eliminating the need to use the sender\'s private key for signing messages.","sidebar":"defaultSidebar"},"user-flows/identities":{"id":"user-flows/identities","title":"SoCon Identities","description":"Remembering lengthy wallet addresses can be challenging and hence, SoCon introduces a solution by adopting a naming system similar to domain names and IP addresses. However, this approach brings its own challenge \u2013 the risk of identity squatting and impersonation.","sidebar":"defaultSidebar"},"user-flows/index":{"id":"user-flows/index","title":"User Flows","description":"","sidebar":"defaultSidebar"}}}')}}]);