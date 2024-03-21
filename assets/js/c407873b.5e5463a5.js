"use strict";(self.webpackChunksocon_docs=self.webpackChunksocon_docs||[]).push([[6201],{161:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(4848),s=i(8453);const a={},r="Signing",o={id:"hub/signing",title:"Signing",description:"Messages are required to be signed by taking the hash and applying a signature using one of the approved signing schemes. The permissible signature scheme is dictated by the MessageType. Valid options include:",source:"@site/docs/hub/03_signing.md",sourceDirName:"hub",slug:"/hub/signing",permalink:"/hub/signing",draft:!1,unlisted:!1,editUrl:"https://github.com/Social-Continent/docs/tree/main/docs/hub/03_signing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Hash Scheme",permalink:"/hub/hash"},next:{title:"messageData",permalink:"/hub/messageData"}},d={},c=[{value:"Signers",id:"signers",level:2}];function g(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"signing",children:"Signing"}),"\n",(0,t.jsx)(n.p,{children:"Messages are required to be signed by taking the hash and applying a signature using one of the approved signing schemes. The permissible signature scheme is dictated by the MessageType. Valid options include:\nED25519: A 512-bit signature for the edwards 25519 curve.\nEIP712: A 512-bit typed data with a Socon domain separator."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"enum SignatureScheme {\n SIGNATURE_SCHEME_NONE = 0;\n SIGNATURE_SCHEME_ED25519 = 1; // Ed25519 signature (default)\n SIGNATURE_SCHEME_EIP712 = 2; // ECDSA signature using EIP-712 scheme\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"signers",children:"Signers"}),"\n",(0,t.jsx)(n.p,{children:"A Signer, which consists of an Ed25519 key pair, enables applications to validate messages. Users grant authorization to an application's Signer by providing a signature from their custody address, which currently holds their sid. Once authorized, the application can utilize the Signer to validate Posts, Reactions, and Verifications on behalf of the user. Users retain the ability to revoke a Signer at any point by providing a signature from their custody address.\nAdding or removing a Signer involves registering the public key of the signer to a sid using a smart contract located at a predefined address. Signers can only be added to the sid owned by the caller of the contract."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);