"use strict";(self.webpackChunksocon_docs=self.webpackChunksocon_docs||[]).push([[3889],{9377:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(4848),s=i(8453);const o={},d="Story",a={id:"hub/story",title:"Story",description:"The incorporation of the StoryBody message empowers users to seamlessly add and remove stories within the system. With dedicated fields for story content and metadata, it facilitates dynamic storytelling functionalities. This feature enhances user engagement by enabling easy creation and management of narrative content.",source:"@site/docs/09_hub/10_story.md",sourceDirName:"09_hub",slug:"/hub/story",permalink:"/hub/story",draft:!1,unlisted:!1,editUrl:"https://github.com/Social-Continent/docs/tree/main/docs/09_hub/10_story.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Location",permalink:"/hub/location"},next:{title:"Highlight",permalink:"/hub/highlight"}},r={},l=[{value:"StoryAddBody",id:"storyaddbody",level:3},{value:"Media",id:"media",level:3},{value:"UrlType",id:"urltype",level:3},{value:"StoryRemoveBody",id:"storyremovebody",level:3}];function h(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"story",children:"Story"}),"\n",(0,n.jsx)(t.p,{children:"The incorporation of the StoryBody message empowers users to seamlessly add and remove stories within the system. With dedicated fields for story content and metadata, it facilitates dynamic storytelling functionalities. This feature enhances user engagement by enabling easy creation and management of narrative content."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"/** Adds a new Story */\nmessage StoryAddBody {\n repeated string embeds_deprecated = 1; // URLs to be embedded in the post\n repeated uint64 mentions = 2; // SoconIds mentioned in the post\n PostId post_id = 3; // Parent postId of the post\n string text = 4; // Text of the post\n uint64 x =5;  // x-axis of image\n uint64 y =6;  // y-axis of image\n uint64 height =7;  // hight of image\n uint64 width=8;    // width of image\n repeated Media medias = 9;  // add multiple media files\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"storyaddbody",children:"StoryAddBody"}),"\n",(0,n.jsx)(t.p,{children:"This message is used to add a new story. Here are the fields it contains:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"embeds_deprecated (repeated string): This field is deprecated, suggesting it was previously used to include URLs that would be embedded in the post. Deprecated fields are often retained for backward compatibility but are no longer actively used."}),"\n",(0,n.jsx)(t.li,{children:"mentions (repeated uint64): This field contains the IDs of SoconIds mentioned in the post. It allows for referencing other users or entities within the story."}),"\n",(0,n.jsx)(t.li,{children:"post_id (PostId): This field specifies the parent PostId of the post, indicating its relationship to other posts or stories. It likely serves as a reference to the parent story or thread.\ntext (string): This field contains the text content of the post, providing the narrative or message of the story."}),"\n",(0,n.jsx)(t.li,{children:"x, y, height, width (uint64): These fields represent the coordinates and dimensions of an image associated with the story. They define the position and size of the image within the story."}),"\n",(0,n.jsx)(t.li,{children:"medias (repeated Media): This field allows for the inclusion of multiple media files (such as images, videos, etc.) in the post. Each media item includes a URL, a caption, and a type."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"message Media {\n   string url = 1;\n   string caption = 2;\n   UrlType type = 3;\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"media",children:"Media"}),"\n",(0,n.jsx)(t.p,{children:"This message defines the structure of media files. It contains the following fields:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"url (string): This field specifies the URL of the media file.\ncaption (string): This field contains a caption or description for the media file."}),"\n",(0,n.jsx)(t.li,{children:"type (UrlType): This field indicates the type of URL, which could be used to distinguish between different types of media (e.g., image, video, audio)."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"/** Type of UrlType */\nenum UrlType {\n URL_TYPE_IMAGE = 0; // image type url\n URL_TYPE_VIDEO = 1; // video type url\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"urltype",children:"UrlType"}),"\n",(0,n.jsx)(t.p,{children:"The UrlType enum defines the different types of URLs that can be associated with media files in the system. Here are the types defined within the enum:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"URL_TYPE_IMAGE: This value indicates that the URL points to an image file. Image URLs are typically used for pictures or graphics."}),"\n",(0,n.jsx)(t.li,{children:"URL_TYPE_VIDEO: This value indicates that the URL points to a video file. Video URLs are used for multimedia content that includes moving images and possibly sound."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"/** Removes an existing Story */\nmessage StoryRemoveBody {\n bytes target_hash = 1; // Hash of the post to remove\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"storyremovebody",children:"StoryRemoveBody"}),"\n",(0,n.jsx)(t.p,{children:"This message is used to remove an existing story. It contains only one field:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"target_hash (bytes): This field holds the hash of the post to be removed. Hashes are often used to uniquely identify data items, and in this case, it identifies the specific story or post that is to be deleted."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>a});var n=i(6540);const s={},o=n.createContext(s);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);