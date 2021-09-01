"use strict";(self.webpackChunkinteractions_styled_docs=self.webpackChunkinteractions_styled_docs||[]).push([[313],{6521:(n,s,t)=>{t.r(s),t.d(s,{data:()=>a});const a={key:"v-5c70a032",path:"/latest/buttons.html",title:"Buttons",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Creating a button",slug:"creating-a-button",children:[{level:3,title:"Basic button",slug:"basic-button",children:[]},{level:3,title:"Link buttons",slug:"link-buttons",children:[]},{level:3,title:"More complex",slug:"more-complex",children:[]},{level:3,title:"Sending the message",slug:"sending-the-message",children:[]}]},{level:2,title:"Responding",slug:"responding",children:[{level:3,title:"Wait for interaction",slug:"wait-for-interaction",children:[]}]},{level:2,title:"Reference",slug:"reference",children:[]},{level:2,title:"More about buttons",slug:"more-about-buttons",children:[]}],filePathRelative:"latest/buttons.md",git:{updatedTime:1629072854e3}}},7679:(n,s,t)=>{t.r(s),t.d(s,{default:()=>R});var a=t(6252);const e=(0,a.uE)('<h1 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h1><p>Here we&#39;re gonna learn how to use buttons in the styled way <em>hell yeah</em></p><h2 id="creating-a-button" tabindex="-1"><a class="header-anchor" href="#creating-a-button" aria-hidden="true">#</a> Creating a button</h2><h3 id="basic-button" tabindex="-1"><a class="header-anchor" href="#basic-button" aria-hidden="true">#</a> Basic button</h3><p>I just want a simple blue button with a message saying &quot;Hi!&quot;, watch:</p>',5),o=(0,a._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,a._)("pre",{class:"language-python"},[(0,a._)("code",null,[(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_styled"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("buttons "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" buttons"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" button\n\nmy_buttons "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(" buttons"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("\n    button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Hi!"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br")])],-1),l=(0,a._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,a._)("pre",{class:"language-python"},[(0,a._)("code",null,[(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_slash"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("utils"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("manage_components "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" create_button"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" create_actionrow\n"),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_slash"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("model "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" ButtonStyle\n\nmy_buttons "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(" create_actionrow"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("\n    create_button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("style"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("ButtonStyle"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("primary"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Hi!"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br")])],-1),c={id:"link-buttons",tabindex:"-1"},p=(0,a._)("a",{class:"header-anchor",href:"#link-buttons","aria-hidden":"true"},"#",-1),u=(0,a.Uk)(" Link buttons "),r=(0,a._)("p",null,"Link buttons are a type of component button that redirects to a url direction on a browser:",-1),i=(0,a._)("blockquote",null,[(0,a._)("p",null,[(0,a._)("code",null,"v0.3.2"),(0,a.Uk)(" auto-detect link buttons, so you don't have to define "),(0,a._)("code",null,"style"),(0,a.Uk)(" anymore.")])],-1),_=(0,a._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,a._)("pre",{class:"language-python"},[(0,a._)("code",null,[(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_styled"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("buttons "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" button\n\n"),(0,a._)("span",{class:"token comment"},"# NOW"),(0,a.Uk)("\nbutton"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Go to GitHub"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" url"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"https://github.com/discord-styled"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"# BEFORE"),(0,a.Uk)("\nbutton"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("style"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"URL"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Go to GitHub"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" url"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"https://github.com/discord-styled"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br")])],-1),k=(0,a._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,a._)("pre",{class:"language-python"},[(0,a._)("code",null,[(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_slash"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("utils"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("manage_components "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" create_button\n"),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_slash"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("model "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" ButtonStyle\n\ncreate_button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("style"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("ButtonStyle"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("URL"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Go to GitHub"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" url"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"https://github.com/discord-styled"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br")])],-1),d=(0,a._)("h3",{id:"more-complex",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#more-complex","aria-hidden":"true"},"#"),(0,a.Uk)(" More complex")],-1),b=(0,a._)("p",null,"Let's create three buttons, different colors, custom ids and labels",-1),m=(0,a._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,a._)("pre",{class:"language-python"},[(0,a._)("code",null,[(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_styled"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("buttons "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" buttons"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" button\n\nmy_buttons "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(" buttons"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("\n    button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Blue button!"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" custom_id"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"blue"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("style"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"green"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Green!"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" custom_id"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"green"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("style"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"red"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"And Red!"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" custom_id"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"red"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br")])],-1),U=(0,a._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,a._)("pre",{class:"language-python"},[(0,a._)("code",null,[(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_slash"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("utils"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("manage_components "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" create_button"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" create_actionrow\n"),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_slash"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("model "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" ButtonStyle\n\nmy_buttons "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(" create_actionrow"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("\n    create_button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("style"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("ButtonStyle"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("primary"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Blue button!"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" custom_id"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"blue"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    create_button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("style"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("ButtonStyle"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("green"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Green!"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" custom_id"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"green"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    create_button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("style"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("ButtonStyle"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("red"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" label"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"And Red!"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" custom_id"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"red"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br")])],-1),h=(0,a.uE)('<h3 id="sending-the-message" tabindex="-1"><a class="header-anchor" href="#sending-the-message" aria-hidden="true">#</a> Sending the message</h3><p>If you&#39;ve already read the <code>discord-interactions</code> documentation, you should know we just have to do the following:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">await</span> ctx<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">&quot;My message&quot;</span><span class="token punctuation">,</span> components<span class="token operator">=</span><span class="token punctuation">[</span>my_buttons<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="responding" tabindex="-1"><a class="header-anchor" href="#responding" aria-hidden="true">#</a> Responding</h2><p>When responding, you have 3 choices in how you handle interactions, BUT, <code>discord_styled</code> only supports styled solutions for the <code>wait_for</code> way</p><blockquote><p>I&#39;m pretty sure Global event and Component callbacks (I love this one) are really, really well-made so, let&#39;s leave these functions in peace for now...</p></blockquote><h3 id="wait-for-interaction" tabindex="-1"><a class="header-anchor" href="#wait-for-interaction" aria-hidden="true">#</a> Wait for interaction</h3><p>This is the way how we do it:</p>',8),y=(0,a._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,a._)("pre",{class:"language-python"},[(0,a._)("code",null,[(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_styled"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("buttons "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" wait_button\n\n"),(0,a._)("span",{class:"token keyword"},"await"),(0,a.Uk)(" ctx"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("send"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},'"My message"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" components"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("my_buttons"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n\nbutton_ctx "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"await"),(0,a.Uk)(" wait_button"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("bot"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" my_buttons"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"await"),(0,a.Uk)(" button_ctx"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("edit_origin"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("content"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Let\'s gooo!"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br")])],-1),g=(0,a._)("div",{class:"language-python ext-py line-numbers-mode"},[(0,a._)("pre",{class:"language-python"},[(0,a._)("code",null,[(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(" discord_slash"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("utils"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("manage_components "),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(" wait_for_component\n\n"),(0,a._)("span",{class:"token keyword"},"await"),(0,a.Uk)(" ctx"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("send"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},'"My message"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" components"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token punctuation"},"["),(0,a.Uk)("my_buttons"),(0,a._)("span",{class:"token punctuation"},"]"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n\nbutton_ctx "),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"await"),(0,a.Uk)(" wait_for_component"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("bot"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(" components"),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)("my_buttons"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"await"),(0,a.Uk)(" button_ctx"),(0,a._)("span",{class:"token punctuation"},"."),(0,a.Uk)("edit_origin"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("content"),(0,a._)("span",{class:"token operator"},"="),(0,a._)("span",{class:"token string"},'"Let\'s gooo!"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br")])],-1),w=(0,a._)("h2",{id:"reference",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),(0,a.Uk)(" Reference")],-1),f=(0,a.Uk)("To know all about "),v=(0,a._)("code",null,"discord_styled.buttons",-1),x=(0,a.Uk)(" functions, parameters, types, go to the "),B=(0,a.Uk)("API Reference"),W=(0,a._)("h2",{id:"more-about-buttons",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#more-about-buttons","aria-hidden":"true"},"#"),(0,a.Uk)(" More about buttons")],-1),S=(0,a.Uk)("If you want to know more about button components, I mean, you should've already read this documentation, BUT as a reminder, read "),L={href:"https://discord-py-slash-command.readthedocs.io/en/latest/components.html",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("discord-interactions docs"),R={render:function(n,s){const t=(0,a.up)("CodeGroupItem"),R=(0,a.up)("CodeGroup"),G=(0,a.up)("Badge"),T=(0,a.up)("RouterLink"),H=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e,(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(t,{title:"STYLED"},{default:(0,a.w5)((()=>[o])),_:1}),(0,a.Wm)(t,{title:"BASE"},{default:(0,a.w5)((()=>[l])),_:1})])),_:1}),(0,a._)("h3",c,[p,u,(0,a.Wm)(G,{type:"tip",text:"NEW ✨",vertical:"middle"})]),r,i,(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(t,{title:"STYLED"},{default:(0,a.w5)((()=>[_])),_:1}),(0,a.Wm)(t,{title:"BASE"},{default:(0,a.w5)((()=>[k])),_:1})])),_:1}),d,b,(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(t,{title:"STYLED"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(t,{title:"BASE"},{default:(0,a.w5)((()=>[U])),_:1})])),_:1}),h,(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(t,{title:"STYLED"},{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(t,{title:"BASE"},{default:(0,a.w5)((()=>[g])),_:1})])),_:1}),w,(0,a._)("p",null,[f,v,x,(0,a.Wm)(T,{to:"/latest/api/buttons.html"},{default:(0,a.w5)((()=>[B])),_:1})]),W,(0,a._)("p",null,[S,(0,a._)("a",L,[E,(0,a.Wm)(H)])])],64)}}}}]);