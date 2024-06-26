---
sidebar_position: 11
---
# Security

## Security in Socon

### Recovering Wallet Address from Verification Payload
Recovering the wallet address from the verification payload is executed with meticulous attention to security parameters within Socon's ecosystem. The process initiates by securely extracting the received public key of the wallet from the verification payload, employing cryptographic procedures that safeguard sensitive information. Once the public key is retrieved, Socon implements stringent cryptographic algorithms and procedures, such as hash functions and cryptographic hashing, to compute and validate the wallet address. This multilayered security approach ensures the integrity and confidentiality of the data involved in the wallet address recovery process. By adhering to best practices in cryptography and data protection, Socon maintains a robust and secure environment, guaranteeing that only authorized and authenticated wallet addresses are successfully recovered and integrated into its decentralized network.

### Ed25519 Signer Creation
Socon utilizes the Ed25519 digital signature scheme to create signers tailored for individual users, ensuring robust cryptographic security. With the Ed25519 scheme, Socon generates a pair of cryptographic keys – a private key for signing messages and a public key for message verification. Notably, to fortify security measures, the signer generated for each user is encrypted with a unique secret, exclusive to that user. This encryption process enhances the protection of the signer, adding an additional layer of security to the cryptographic keys. Each user within Socon is equipped with this encrypted Ed25519 signer, ensuring the authenticity and integrity of their interactions and user-generated content within the platform. This setup guarantees heightened security and confidentiality, safeguarding the user's cryptographic keys and enhancing overall platform security.

### API Rate Limiting
Socon implements API rate limiting to control and manage the number of requests that can be made to its APIs within a specified time frame. This measure prevents potential abuse, brute-force attacks, or overwhelming the system with a large number of requests from a single user or source. By setting predefined thresholds for request rates, Socon maintains system stability and security, reducing the risk of unauthorized access or system overload.

### Usage of JWTs for Quick Authentication
Socon utilizes JSON Web Tokens (JWTs) for efficient and secure authentication purposes. JWTs contain verifiable information about a user's identity and permissions, providing a quick and secure method for authentication during subsequent user requests within the platform. These tokens enable swift and reliable authentication, allowing users seamless access to various features and functionalities while maintaining security standards.