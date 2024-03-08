"use strict";(self.webpackChunksocon_docs=self.webpackChunksocon_docs||[]).push([[6013],{3555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(4848),s=t(8453);const o={},i="SoCon Contracts Overview",a={id:"smart-contracts/overview",title:"SoCon Contracts Overview",description:"SoCon leverages a set of onchain contracts to manage and secure user accounts. This section provides a high-level overview of the key contracts in the SoCon ecosystem. For a more detailed understanding, refer to the contracts repository.",source:"@site/docs/smart-contracts/overview.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/overview",permalink:"/docs/smart-contracts/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Social-Continent/docs/tree/main/docs/smart-contracts/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Name Registry",permalink:"/docs/smart-contracts/name-registry"},next:{title:"Storage",permalink:"/docs/storage/"}},c={},d=[{value:"Main Contracts on Sepolia",id:"main-contracts-on-sepolia",level:2},{value:"1. Id Registry",id:"1-id-registry",level:3},{value:"2. Name Registry",id:"2-name-registry",level:3},{value:"3. Bundle Registry",id:"3-bundle-registry",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"socon-contracts-overview",children:"SoCon Contracts Overview"}),"\n",(0,r.jsx)(n.p,{children:"SoCon leverages a set of onchain contracts to manage and secure user accounts. This section provides a high-level overview of the key contracts in the SoCon ecosystem. For a more detailed understanding, refer to the contracts repository."}),"\n",(0,r.jsx)(n.h2,{id:"main-contracts-on-sepolia",children:"Main Contracts on Sepolia"}),"\n",(0,r.jsx)(n.h3,{id:"1-id-registry",children:"1. Id Registry"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Address:"})," ",(0,r.jsx)(n.code,{children:"0x00000000fc6c5f01fc30151999387bb99a9f489b"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Functionality:"})," The Id Registry is responsible for creating, transferring, and recovering SoCon accounts. Each account is uniquely identified by a Farcaster ID (fid) assigned to an Ethereum address during registration. Users can transfer their accounts freely, and a recovery address can be specified to transfer the account at any time."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-name-registry",children:"2. Name Registry"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Address:"})," ",(0,r.jsx)(n.code,{children:"0x00000000fcce7f938e7ae6d3c335bd6a1a7c593d"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Functionality:"}),' The Name Registry designed to manage the registration and recovery of unique names, referred to as "SoCon Names," using the ERC-721 standard.']}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-bundle-registry",children:"3. Bundle Registry"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Address:"})," ",(0,r.jsx)(n.code,{children:"0x00000000fc1237824fb747abde0ff18990e59b7e"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Functionality:"})," The BundleRegistry smart contract facilitates the registration and management of bundles within the SoCon decentralized application ecosystem. It is designed to handle the registration of user identifiers (sid) and usernames (sname) in a secure and decentralized manner."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);