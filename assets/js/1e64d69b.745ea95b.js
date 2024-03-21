"use strict";(self.webpackChunksocon_docs=self.webpackChunksocon_docs||[]).push([[5996],{569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),s=t(8453);const r={},a="onChainEvent",o={id:"hub/onChainEvent",title:"onChainEvent",description:"These events are used in tracking and managing various actions and changes within the blockchain through smart contracts, particularly in the context of providing decentralised name and ID registries.",source:"@site/docs/hub/17_onChainEvent.md",sourceDirName:"hub",slug:"/hub/onChainEvent",permalink:"/hub/onChainEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/Social-Continent/docs/tree/main/docs/hub/17_onChainEvent.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"RPC Endpoints",permalink:"/hub/rpc"},next:{title:"SoCon Messages",permalink:"/messages"}},h={},c=[{value:"Name Registry Contract Events listening on Hub",id:"name-registry-contract-events-listening-on-hub",level:2},{value:"NameRegistryEventType Enum",id:"nameregistryeventtype-enum",level:3},{value:"NameRegistryEvent Message:",id:"nameregistryevent-message",level:3},{value:"ID Registry Contract Events listening on Hub",id:"id-registry-contract-events-listening-on-hub",level:2},{value:"IdRegistryEventType Enum",id:"idregistryeventtype-enum",level:3},{value:"IdRegistryEvent Message:",id:"idregistryevent-message",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"onchainevent",children:"onChainEvent"}),"\n",(0,i.jsx)(n.p,{children:"These events are used in tracking and managing various actions and changes within the blockchain through smart contracts, particularly in the context of providing decentralised name and ID registries."}),"\n",(0,i.jsx)(n.h2,{id:"name-registry-contract-events-listening-on-hub",children:"Name Registry Contract Events listening on Hub"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:"enum NameRegistryEventType {\n NAME_REGISTRY_EVENT_TYPE_NONE = 0;\n NAME_REGISTRY_EVENT_TYPE_TRANSFER = 1;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"nameregistryeventtype-enum",children:"NameRegistryEventType Enum"}),"\n",(0,i.jsx)(n.p,{children:"This enum defines different types of events that can occur in a name registry. Each option represents a specific type of event:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"NAME_REGISTRY_EVENT_TYPE_NONE = 0: Indicates that no specific event type is specified."}),"\n",(0,i.jsx)(n.li,{children:"NAME_REGISTRY_EVENT_TYPE_TRANSFER = 1: Represents a transfer event, indicating the transfer of ownership of a name."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:"message NameRegistryEvent {\n uint32 block_number = 1;\n bytes block_hash = 2;\n bytes transaction_hash = 3;\n uint32 log_index = 4;\n bytes soconName = 5;\n bytes from = 6;\n bytes to = 7;\n NameRegistryEventType type = 8;\n uint32 expiry = 9;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"nameregistryevent-message",children:"NameRegistryEvent Message:"}),"\n",(0,i.jsx)(n.p,{children:"This message represents an event that occurs in a name registry. It includes the following fields:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"block_number (uint32): The block number in which the event occurred."}),"\n",(0,i.jsx)(n.li,{children:"block_hash (bytes): The hash of the block in which the event occurred."}),"\n",(0,i.jsx)(n.li,{children:"transaction_hash (bytes): The hash of the transaction that triggered the event."}),"\n",(0,i.jsx)(n.li,{children:"log_index (uint32): The index of the event log."}),"\n",(0,i.jsx)(n.li,{children:"soconName (bytes): The name associated with the event, stored as bytes."}),"\n",(0,i.jsx)(n.li,{children:"from (bytes): The address or entity from which the event originates."}),"\n",(0,i.jsx)(n.li,{children:"to (bytes): The address or entity to which the event is directed."}),"\n",(0,i.jsx)(n.li,{children:"type (NameRegistryEventType): The type of the event, specified by the NameRegistryEventType enum."}),"\n",(0,i.jsx)(n.li,{children:"expiry (uint32): The expiry timestamp of the name registration, if applicable.\nThis Protocol Buffers definition allows for the representation of events related to a name registry, such as transfers and renewals of name registrations."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"id-registry-contract-events-listening-on-hub",children:"ID Registry Contract Events listening on Hub"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:"enum IdRegistryEventType {\n ID_REGISTRY_EVENT_TYPE_NONE = 0;\n ID_REGISTRY_EVENT_TYPE_REGISTER = 1;\n ID_REGISTRY_EVENT_TYPE_TRANSFER = 2;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"idregistryeventtype-enum",children:"IdRegistryEventType Enum"}),"\n",(0,i.jsx)(n.p,{children:"This enum defines different types of events that can occur in an ID registry. Each option represents a specific type of event:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"ID_REGISTRY_EVENT_TYPE_NONE = 0: Indicates that no specific event type is specified."}),"\n",(0,i.jsx)(n.li,{children:"ID_REGISTRY_EVENT_TYPE_REGISTER = 1: Represents a registration event, indicating the creation of a new ID."}),"\n",(0,i.jsx)(n.li,{children:"ID_REGISTRY_EVENT_TYPE_TRANSFER = 2: Represents a transfer event, indicating the transfer of ownership of an ID."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:"message IdRegistryEvent {\n uint32 block_number = 1;\n bytes block_hash = 2;\n bytes transaction_hash = 3;\n uint32 log_index = 4;\n uint64 soconId = 5;\n bytes to = 6;\n IdRegistryEventType type = 7;\n bytes from = 8;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"idregistryevent-message",children:"IdRegistryEvent Message:"}),"\n",(0,i.jsx)(n.p,{children:"This message represents an event that occurs in an ID registry. It includes the following fields:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"block_number (uint32): The block number in which the event occurred."}),"\n",(0,i.jsx)(n.li,{children:"block_hash (bytes): The hash of the block in which the event occurred."}),"\n",(0,i.jsx)(n.li,{children:"transaction_hash (bytes): The hash of the transaction that triggered the event."}),"\n",(0,i.jsx)(n.li,{children:"log_index (uint32): The index of the event log."}),"\n",(0,i.jsx)(n.li,{children:"soconId (uint64): The ID associated with the event."}),"\n",(0,i.jsx)(n.li,{children:"to (bytes): The address or entity to which the ID is being transferred, if applicable."}),"\n",(0,i.jsx)(n.li,{children:"type (IdRegistryEventType): The type of the event, specified by the IdRegistryEventType enum."}),"\n",(0,i.jsx)(n.li,{children:"from (bytes): The address or entity from which the ID is being transferred, if applicable."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This Protocol Buffers definition allows for the representation of events related to an ID registry, such as registrations and transfers of IDs."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);