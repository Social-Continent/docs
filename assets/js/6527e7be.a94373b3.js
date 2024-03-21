"use strict";(self.webpackChunksocon_docs=self.webpackChunksocon_docs||[]).push([[8606],{3494:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var n=i(4848),s=i(8453);const a={},o="SoCon Authentication",r={id:"user-flows/authentication",title:"SoCon Authentication",description:"SoCon introduces a novel approach to message signing by creating a separate signer public-private key pair. This method enhances security and privacy by eliminating the need to use the sender's private key for signing messages.",source:"@site/docs/user-flows/authentication.md",sourceDirName:"user-flows",slug:"/user-flows/authentication",permalink:"/user-flows/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/Social-Continent/docs/tree/main/docs/user-flows/authentication.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"User Flows",permalink:"/user-flows/"},next:{title:"SoCon Identities",permalink:"/user-flows/identities"}},c={},u=[{value:"Role of web3auth in Socon auth",id:"role-of-web3auth-in-socon-auth",level:2}];function h(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"socon-authentication",children:"SoCon Authentication"}),"\n",(0,n.jsx)(t.p,{children:"SoCon introduces a novel approach to message signing by creating a separate signer public-private key pair. This method enhances security and privacy by eliminating the need to use the sender's private key for signing messages.\nWhen a user logs into any messaging app built on the SoCon platform, the app generates a unique SCID and SCName for the user. Simultaneously, a new signer is created on the App Layer, serving as a cryptographic key pair securely stored locally on the user's device. This signer signs messages on behalf of the user, ensuring secure authentication without compromising the user's custody address's private key."}),"\n",(0,n.jsx)(t.h2,{id:"role-of-web3auth-in-socon-auth",children:"Role of web3auth in Socon auth"}),"\n",(0,n.jsx)(t.p,{children:"the login and signup process is seamlessly handled through Web3Auth, a user-friendly authentication method. Web3Auth simplifies the authentication experience for users by abstracting the complexities of key handling, offering a hassle-free and secure login mechanism. Users can enjoy a seamless authentication journey without needing to worry about managing cryptographic keys, ensuring a smooth and intuitive user experience.\nAfter initiating the social login via email, users are directed through the Web3Auth process for authentication. An OTP (One-Time Password) is sent to the user's registered email address for verification purposes. Users receive the OTP in their email inbox, which they must enter into the application to successfully complete the verification process.\nBy combining the convenience of Web3Auth for seamless login and signup processes with the added security of OTP verification via email, our application aims to provide users with both a user-friendly experience and robust identity authentication, enhancing overall security and trust in our platform."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Authentication Flow",src:i(3127).A+"",width:"2734",height:"1332"})}),"\n",(0,n.jsx)(t.p,{children:"Upon a successful login through Web3Auth, users receive their detailed account information and the creation of a wallet specific to their account. Web3Auth facilitates a streamlined login process, ensuring users' authentication details are securely managed without burdening them with cryptographic complexities. As users complete the authentication process, a wallet associated with their account is automatically generated.\nIn addition to providing user details and creating the wallet, Web3Auth returns an ID token. This token serves as a form of identification and verification, encapsulating essential user information. The ID token acts as a secure credential, allowing the backend system to verify the legitimacy of users during registration or subsequent interactions.\nThe payload received post-verification includes vital information such as the wallet's public address and the user's email along with other necessary details. Upon receipt, the system checks if the email is whitelisted, indicating that the user has been invited to use the app by another user.\nNext, utilizing the received public key of the wallet, the system computes the wallet address. This calculated wallet address is then registered on Socon's smart contract, enabling seamless integration and authentication within the platform's ecosystem.\nThis process ensures that verified users with whitelisted emails and associated wallet information are securely onboarded and integrated into Socon's network, fostering a trusted and connected community within the platform."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3127:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/authentication-flow-ba1d99457001f4f9e05de3be3637bf4c.png"},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(6540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);