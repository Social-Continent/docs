"use strict";(self.webpackChunksocon_docs=self.webpackChunksocon_docs||[]).push([[4063],{7467:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>m,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const o={},m="Community",r={id:"hub/community",title:"Community",description:"A community is like a digital gathering place where people come together online to connect, share interests, and communicate anonymously. It's like a place where users can join discussions, post content, and interact with each other.",source:"@site/docs/hub/14_community.md",sourceDirName:"hub",slug:"/hub/community",permalink:"/hub/community",draft:!1,unlisted:!1,editUrl:"https://github.com/Social-Continent/docs/tree/main/docs/hub/14_community.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Anonymous Profile",permalink:"/hub/anonymousProfile"},next:{title:"Gossip",permalink:"/hub/gossip"}},a={},c=[{value:"CommunityAddBody",id:"communityaddbody",level:3},{value:"PrivacyType",id:"privacytype",level:3},{value:"CommunityRemoveBody",id:"communityremovebody",level:3},{value:"CommunityMsgAddBody",id:"communitymsgaddbody",level:3},{value:"CommunityMsgRemoveBody",id:"communitymsgremovebody",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"community",children:"Community"}),"\n",(0,t.jsx)(n.p,{children:"A community is like a digital gathering place where people come together online to connect, share interests, and communicate anonymously. It's like a place where users can join discussions, post content, and interact with each other.\nEach community has its own name, description, and picture, and users can tag topics to help organize discussions. Depending on how it's set up, a community can be open to anyone, require an invitation, or be kept private.\nOverall, it's a space designed to bring people together and foster meaningful interactions in the digital world."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"/** community creation message*/\nmessage CommunityAddBody {\n string name = 1;\n string description = 2;\n string displayPicture = 3;\n repeated string tags = 4;\n PrivacyType privacy = 5;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"communityaddbody",children:"CommunityAddBody"}),"\n",(0,t.jsx)(n.p,{children:"This message represents the creation of a new community within the system. It includes the following fields:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"name (string): The name of the community."}),"\n",(0,t.jsx)(n.li,{children:"description (string): A description of the community."}),"\n",(0,t.jsx)(n.li,{children:"displayPicture (string): A URL or reference to the display picture of the community."}),"\n",(0,t.jsx)(n.li,{children:"tags (repeated string): A list of tags or keywords associated with the community."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"// type of privacy settings\nenum PrivacyType {\n PRIVACY_TYPE_NONE = 0;\n PRIVACY_TYPE_PUBLIC = 1; // public privacy\n PRIVACY_TYPE_PRIVATE = 2; // private privacy\n PRIVACY_TYPE_INVITE_ONLY = 3; // invite only privacy\n PRIVACY_TYPE_ANONYMOUS_AND_PUBLIC = 4; // anonymous privacy\n PRIVACY_TYPE_ANONYMOUS_AND_PRIVATE = 5; // anonymous privacy\n PRIVACY_TYPE_ANONYMOUS_AND_INVITE_ONLY = 6; // anonymous privacy\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"privacytype",children:"PrivacyType"}),"\n",(0,t.jsx)(n.p,{children:"The privacy setting for the community, which can be one of several predefined options defined in the PrivacyType enum.\nThis enum defines the different privacy settings available for communities. Here are the options:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"PRIVACY_TYPE_NONE: No privacy settings specified."}),"\n",(0,t.jsx)(n.li,{children:"PRIVACY_TYPE_PUBLIC: The community is public, meaning anyone can join and view its content."}),"\n",(0,t.jsx)(n.li,{children:"PRIVACY_TYPE_PRIVATE: The community is private, meaning it is visible only to its members."}),"\n",(0,t.jsx)(n.li,{children:"PRIVACY_TYPE_INVITE_ONLY: The community is invite-only, meaning users must be invited to join."}),"\n",(0,t.jsx)(n.li,{children:"PRIVACY_TYPE_ANONYMOUS_AND_PUBLIC: The community is public with anonymous users allowed."}),"\n",(0,t.jsx)(n.li,{children:"PRIVACY_TYPE_ANONYMOUS_AND_PRIVATE: The community is private with anonymous users allowed."}),"\n",(0,t.jsx)(n.li,{children:"PRIVACY_TYPE_ANONYMOUS_AND_INVITE_ONLY: The community is invite-only with anonymous users allowed."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"/** Remove community creation message*/\nmessage CommunityRemoveBody {\n bytes target_hash = 1; // Hash of the Community to remove\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"communityremovebody",children:"CommunityRemoveBody"}),"\n",(0,t.jsx)(n.p,{children:"This message represents the removal of a community. It includes a single field:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"target_hash (bytes): The hash of the community to be removed."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"message CommunityMsgAddBody {\n repeated string urls = 1; // URLs to be embedded in the post\n string msg = 2;\n repeated uint64 mention_sids = 3; // SoconIds mentioned in the post\n CommunityId community_id = 4; // CommunityId to react\n repeated Media medias = 5;  // add multiple media files\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"communitymsgaddbody",children:"CommunityMsgAddBody"}),"\n",(0,t.jsx)(n.p,{children:"This message represents the addition of a new message to a community. It includes the following fields:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"urls (repeated string): URLs to be embedded in the message."}),"\n",(0,t.jsx)(n.li,{children:"msg (string): The content of the message."}),"\n",(0,t.jsx)(n.li,{children:"mention_sids (repeated uint64): SoconIds mentioned in the message."}),"\n",(0,t.jsx)(n.li,{children:"community_id (CommunityId): The ID of the community to which the message belongs."}),"\n",(0,t.jsx)(n.li,{children:"medias (repeated Media): Multiple media files associated with the message."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"message CommunityMsgRemoveBody {\n bytes target_hash = 1; // Hash of the Community to remove\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"communitymsgremovebody",children:"CommunityMsgRemoveBody"}),"\n",(0,t.jsx)(n.p,{children:"This message represents the removal of a message from a community. It includes a single field:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"target_hash (bytes): The hash of the message to be removed.\nThese protocol buffer definitions define the structure of messages used for managing communities, adding and removing messages from communities, and specifying privacy settings for communities within the system."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>m,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function m(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:m(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);