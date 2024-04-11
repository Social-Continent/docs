"use strict";(self.webpackChunksocon_docs=self.webpackChunksocon_docs||[]).push([[6017],{5745:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=t(4848),a=t(8453);const i={},o="Message",r={id:"hub/message",title:"Message",description:"A Message within the Socon network is a digitally signed binary data entity representing an operation. These Messages are defined and converted into binary format using proto3 protobufs. It's essential to serialize Messages using this method to ensure consistency across implementations. Each Message includes the payload data and necessary details for verifying its authenticity.",source:"@site/docs/09_hub/01_message.md",sourceDirName:"09_hub",slug:"/hub/message",permalink:"/hub/message",draft:!1,unlisted:!1,editUrl:"https://github.com/Social-Continent/docs/tree/main/docs/09_hub/01_message.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Socon Hub",permalink:"/hub/"},next:{title:"Hash Scheme",permalink:"/hub/hash"}},h={},d=[];function c(e){const s={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"message",children:"Message"}),"\n",(0,n.jsx)(s.p,{children:"A Message within the Socon network is a digitally signed binary data entity representing an operation. These Messages are defined and converted into binary format using proto3 protobufs. It's essential to serialize Messages using this method to ensure consistency across implementations. Each Message includes the payload data and necessary details for verifying its authenticity.\nMessage follow CRDT\nCRDTs are required to validate incoming messages according to predefined rules. They may also enforce additional validation criteria based on the state of other CRDTs or the blockchain. Conflict resolution mechanisms must be defined within CRDTs to handle conflicts between valid messages, typically employing a last-write-wins approach based on total message ordering, with some CRDTs incorporating remove-wins rules."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-protobuf",children:"message Message {\n MessageData data = 1; // Contents of the message\n bytes hash = 2; // Hash digest of data\n HashScheme hash_scheme = 3; // Hash scheme that produced the hash digest\n bytes signature = 4; // Signature of the hash digest\n SignatureScheme signature_scheme = 5; // Signature scheme that produced the signature\n bytes signer = 6; // Public key or address of the key pair that produced the signature\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"The validity of a message m hinges on the following criteria:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The data component must adhere to the standards of a valid MessageData object."}),"\n",(0,n.jsx)(s.li,{children:"The hash should be the result of serializing and hashing data according to the specified hash_scheme."}),"\n",(0,n.jsx)(s.li,{children:"The chosen hash_scheme must be currently recognized as valid."}),"\n",(0,n.jsx)(s.li,{children:"The signature must be the outcome of signing the hash with the designated signer using the prescribed signature_scheme."}),"\n",(0,n.jsx)(s.li,{children:"The signature_scheme must be permissible under the MessageType guidelines."}),"\n",(0,n.jsx)(s.li,{children:"The signer must be a valid public key or Ethereum address utilized for generating the signature."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In case the ts-proto serialization of data fails to produce the hash, data_bytes should contain the serialized form of a valid MessageData object. It's crucial to note that this field is mutually exclusive with data."})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>r});var n=t(6540);const a={},i=n.createContext(a);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);