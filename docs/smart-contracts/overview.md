# SoCon Contracts Overview

SoCon leverages a set of onchain contracts to manage and secure user accounts. This section provides a high-level overview of the key contracts in the SoCon ecosystem. For a more detailed understanding, refer to the contracts repository.

## Main Contracts on Sepolia

### 1. Id Registry

- **Address:** `0x00000000fc6c5f01fc30151999387bb99a9f489b`
- **Functionality:** The Id Registry is responsible for creating, transferring, and recovering SoCon accounts. Each account is uniquely identified by a Farcaster ID (fid) assigned to an Ethereum address during registration. Users can transfer their accounts freely, and a recovery address can be specified to transfer the account at any time.

### 2. Name Registry

- **Address:** `0x00000000fcce7f938e7ae6d3c335bd6a1a7c593d`
- **Functionality:** The Name Registry designed to manage the registration and recovery of unique names, referred to as "SoCon Names," using the ERC-721 standard.

### 3. Bundle Registry

- **Address:** `0x00000000fc1237824fb747abde0ff18990e59b7e`
- **Functionality:** The BundleRegistry smart contract facilitates the registration and management of bundles within the SoCon decentralized application ecosystem. It is designed to handle the registration of user identifiers (sid) and usernames (sname) in a secure and decentralized manner.
