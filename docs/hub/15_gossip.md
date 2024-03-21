# Gossip 

Hubs utilize gossiping mechanisms to synchronize data with other hubs in the network. Hub gossip for data sync with other hubs. A Hub serves as a server within the Socon network, tasked with storing and distributing Socon Messages. Users create messages and submit them to the Hub, which then disseminates them to other Hubs across the network. Through collaboration, these Hubs establish a causally consistent peer-to-peer network, facilitating the storage and retrieval of data generated by Socon users. 

```protobuf
message GossipAddressInfo {
  string address = 1;
  uint32 family = 2;
  uint32 port = 3;
  string dns_name = 4;
}
```

### GossipAddressInfo:
1. address (string): The IP address or hostname of the gossip or RPC endpoint.
2. family (number): The address family, typically represented as an integer (e.g., IPv4 or IPv6).
3. port (number): The port number associated with the address.
4. dnsName (string): The DNS name associated with the address, if available.


```protobuf
message ContactInfoContent {
  GossipAddressInfo gossip_address = 1;
  GossipAddressInfo rpc_address = 2;
  repeated string excluded_hashes = 3;
  uint32 count = 4;
  string hub_version = 5;
  SoconNetwork network = 6;
  string app_version = 7;
}
```
### ContactInfoContent:
1. gossipAddress (GossipAddressInfo | undefined): Information about the gossip endpoint, including its address, family, port, and DNS name. This field may be undefined if the information is not available.
3. rpcAddress (GossipAddressInfo | undefined): Information about the RPC (Remote Procedure Call) endpoint, including its address, family, port, and DNS name. This field may be undefined if the information is not available.
3. excludedHashes (string[]): An array of hashes representing excluded items.
4. count (number): The count of something (e.g., count of items, count of users).
5. hubVersion (string): The version of the hub software.
6. network (SoconNetwork): An enum representing the network type.
7. appVersion (string): The version of the application.

```protobuf
message GossipMessage {
  oneof content {
    Message message = 1;
    IdRegistryEvent id_registry_event = 2;
    ContactInfoContent contact_info_content = 3;
    NetworkLatencyMessage network_latency_message = 7;
  }
  repeated string topics = 4;
  bytes peer_id = 5;
  GossipVersion version = 6;
}
```
### GossipMessage:
1. message (Message | undefined): A message object, if available.
2. idRegistryEvent (IdRegistryEvent | undefined): An event related to ID registry, if available.
3. contactInfoContent (ContactInfoContent | undefined): Contact information content, including gossip and RPC addresses, excluded hashes, count, hub version, network, and app version. This field may be undefined if the information is not available.
4. networkLatencyMessage (NetworkLatencyMessage | undefined): A message containing network latency information, if available.
5. topics (string[]): An array of strings representing topics associated with the message.
6. peerId (Uint8Array): An array of bytes representing the peer ID.
7. version (GossipVersion): An enum representing the version of the gossip message.

Hubs are required to receive all messages on the messages topic, merge them, and subsequently rebroadpost the merged messages to other hubs. Additionally, hubs must share their contact information every 60 seconds on the contact_info topic.

<!-- <Add Code Snippet > -->