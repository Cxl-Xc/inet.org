import{b as e,o,c,a as n,e as p,F as l,g as s,h as t}from"./app.b0f4bb5c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{align:"center"},"Vue.js + TypeScript + vite.js",-1),k={href:"https://github.com/hzpt-inet-club/Vue.js-Vite.js-TypeScript_course",target:"_blank",rel:"noopener noreferrer"},d=s("\u9879\u76EE\u5730\u5740"),b=t(`<h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h2><h3 id="\u5728vite\u4E2D\u521B\u5EFA\u4E00\u4E2Avue\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5728vite\u4E2D\u521B\u5EFA\u4E00\u4E2Avue\u9879\u76EE" aria-hidden="true">#</a> \u5728vite\u4E2D\u521B\u5EFA\u4E00\u4E2Avue\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">yarn</span> create vite my-vue-app --template vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u521D\u59CB\u5316\u8BE5\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u8BE5\u9879\u76EE" aria-hidden="true">#</a> \u521D\u59CB\u5316\u8BE5\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u76EE\u5F55\u4E3A" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u4E3A" aria-hidden="true">#</a> \u76EE\u5F55\u4E3A</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> \u9879\u76EE\u540D
  <span class="token list punctuation">-</span> node_modules
  <span class="token list punctuation">-</span> public
  <span class="token list punctuation">-</span> src
  <span class="token list punctuation">-</span> .gitignore
  <span class="token list punctuation">-</span> index.html
  <span class="token list punctuation">-</span> package.json
  <span class="token list punctuation">-</span> vite.config.js
  <span class="token list punctuation">-</span> yarn.lock
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u8FD0\u884C\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a> \u8FD0\u884C\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">yarn</span> dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u914D\u7F6E\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE</h2><h3 id="_1-\u4FEE\u6539\u6587\u4EF6\u540D" tabindex="-1"><a class="header-anchor" href="#_1-\u4FEE\u6539\u6587\u4EF6\u540D" aria-hidden="true">#</a> 1. \u4FEE\u6539\u6587\u4EF6\u540D</h3><blockquote><p><strong>\u5C06\u300Cmain.js\u300D\u4FEE\u6539\u6210\u4E3A \u300Cmain.ts\u300D</strong></p></blockquote><h3 id="_2-\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u521B\u5EFA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u521B\u5EFA\u6587\u4EF6" aria-hidden="true">#</a> 2. \u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u521B\u5EFA\u6587\u4EF6</h3><blockquote><p><strong>\u521B\u5EFAts\u914D\u7F6E\u6587\u4EF6\u300Ctsconfig.json\u300D,\u5E76\u4E14\u6DFB\u52A0\u4EE5\u4E0B\u7684\u5185\u5BB9</strong></p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8FD9\u6837\u5C31\u53EF\u4EE5\u5BF9 \`this\` \u4E0A\u7684\u6570\u636E\u5C5E\u6027\u8FDB\u884C\u66F4\u4E25\u683C\u7684\u63A8\u65AD</span>
      <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;src/**/*.ts&quot;</span>
        <span class="token punctuation">,</span><span class="token string">&quot;src/**/*.d.ts&quot;</span>
        <span class="token punctuation">,</span><span class="token string">&quot;src/**/*.vue&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_3-\u5728src\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u5728src\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6" aria-hidden="true">#</a> 3. \u5728src\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6</h3><blockquote><p><strong>\u5728\u300Esrc\u300F\u76EE\u5F55\u4E0B\u521B\u5EFA\u300Cshims_vue.d.ts\u300D\u6587\u4EF6,\u8FDB\u884C\u7C7B\u578B\u63A8\u5BFC</strong> \u4F8B\u5982</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// shims_vue.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.css&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> classes <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> classes
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.vue&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span>FunctionalComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">const</span> component<span class="token operator">:</span>ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> defineComponent<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4-\u4FEE\u6539\u300Cvite-config-js\u300D" tabindex="-1"><a class="header-anchor" href="#_4-\u4FEE\u6539\u300Cvite-config-js\u300D" aria-hidden="true">#</a> 4. \u4FEE\u6539\u300Cvite.config.js\u300D</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u57FA\u7840demo\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840demo\u4EE3\u7801" aria-hidden="true">#</a> \u57FA\u7840demo\u4EE3\u7801</h2><blockquote><p><strong>\u901A\u8FC7\u7B80\u5355\u4F8B\u5B50\u611F\u53D7\u4E00\u4E0Bvue3\u7684\u53D8\u5316\u3002</strong></p></blockquote><h3 id="\u7B80\u5355\u8FD0\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u8FD0\u7528" aria-hidden="true">#</a> \u7B80\u5355\u8FD0\u7528</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u9ED8\u8BA4\u503C\uFF1A{{a.count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{a.sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{b}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
type Result <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span>number<span class="token punctuation">,</span>
        <span class="token literal-property property">sum</span><span class="token operator">:</span>number
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token literal-property property">a</span><span class="token operator">:</span>Result <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sum</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
        b<span class="token punctuation">.</span>value<span class="token operator">++</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="\u7B80\u5355\u7684\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u7B80\u5355\u7684\u53CC\u5411\u7ED1\u5B9A</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;INet&quot;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u5728\u751F\u547D\u5468\u671F\u94A9\u5B50\u524D\u9762\u52A0\u4E0A \u201Con\u201D \u6765\u8BBF\u95EE\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u3002</p>`,28),m=s("\u4E0B\u8868\u5305\u542B\u5982\u4F55\u5728 "),g={href:"https://v3.cn.vuejs.org/guide/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},h=s("setup ()"),v=s(" \u5185\u90E8\u8C03\u7528\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF1A"),y=t(`<table><thead><tr><th>\u9009\u9879\u5F0F API</th><th>Hook inside <code>setup</code></th></tr></thead><tbody><tr><td><code>beforeCreate</code></td><td>Not needed*</td></tr><tr><td><code>created</code></td><td>Not needed*</td></tr><tr><td><code>beforeMount</code></td><td><code>onBeforeMount</code></td></tr><tr><td><code>mounted</code></td><td><code>onMounted</code></td></tr><tr><td><code>beforeUpdate</code></td><td><code>onBeforeUpdate</code></td></tr><tr><td><code>updated</code></td><td><code>onUpdated</code></td></tr><tr><td><code>beforeUnmount</code></td><td><code>onBeforeUnmount</code></td></tr><tr><td><code>unmounted</code></td><td><code>onUnmounted</code></td></tr><tr><td><code>errorCaptured</code></td><td><code>onErrorCaptured</code></td></tr><tr><td><code>renderTracked</code></td><td><code>onRenderTracked</code></td></tr><tr><td><code>renderTriggered</code></td><td><code>onRenderTriggered</code></td></tr><tr><td><code>activated</code></td><td><code>onActivated</code></td></tr><tr><td><code>deactivated</code></td><td><code>onDeactivated</code></td></tr></tbody></table><h2 id="\u5C01\u88C5\u6570\u636E\u8BF7\u6C42-hooks" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u6570\u636E\u8BF7\u6C42-hooks" aria-hidden="true">#</a> \u5C01\u88C5\u6570\u636E\u8BF7\u6C42 Hooks</h2><h3 id="\u521B\u5EFA\u6587\u4EF6\u548C\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6587\u4EF6\u548C\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u521B\u5EFA\u6587\u4EF6\u548C\u6587\u4EF6\u5939</h3><blockquote><ol><li>\u5728\u300Esrc\u300F\u76EE\u5F55\u4E0B\u521B\u5EFA\u300Chooks\u300D\u6587\u4EF6\u5939</li><li>\u5728\u300Ehooks\u300F\u76EE\u5F55\u4E0B\u521B\u5EFA\u300Cindex.ts\u300D\u548C\u300CuserApi.ts\u300D\u6587\u4EF6</li></ol></blockquote><h3 id="\u5B8C\u6210\u300Cuserapi-ts\u300D" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6210\u300Cuserapi-ts\u300D" aria-hidden="true">#</a> \u5B8C\u6210\u300CuserApi.ts\u300D</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span>userApi<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> userApi
<span class="token keyword">import</span> <span class="token punctuation">{</span>Ref<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">userApi</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> RequestInfo <span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span>RequestInit<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> response<span class="token operator">:</span>Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>options<span class="token punctuation">)</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        response<span class="token punctuation">.</span>value <span class="token operator">=</span> data
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        response<span class="token punctuation">,</span>
        request
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ApiRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UsableApi<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
    response<span class="token operator">:</span>Ref<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>
    request<span class="token operator">:</span>ApiRequest
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u5F15\u5165\u7EC4\u4EF6\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a> \u5F15\u5165\u7EC4\u4EF6\u5E93</h2><p>\u8FD9\u8FB9\u4F7F\u7528\u300CNaive UI\u300D\u4E3E\u4F8B</p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">yarn</span> <span class="token function">add</span> naive-ui
<span class="token operator">&gt;</span> <span class="token function">yarn</span> <span class="token function">add</span> vfonts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5728\u300Cmain-ts\u300D\u4E2D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5728\u300Cmain-ts\u300D\u4E2D\u914D\u7F6E" aria-hidden="true">#</a> \u5728\u300Cmain.ts\u300D\u4E2D\u914D\u7F6E</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    <span class="token comment">// create naive ui</span>
    create<span class="token punctuation">,</span>
    <span class="token comment">// component</span>
    NButton
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;naive-ui&#39;</span>
<span class="token keyword">const</span> naive <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    components<span class="token operator">:</span> <span class="token punctuation">[</span>NButton<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>naive<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,12);function f(q,w){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,n("blockquote",null,[n("p",null,[n("a",k,[d,p(a)])])]),b,n("p",null,[m,n("a",g,[h,p(a)]),v]),y],64)}var j=r(u,[["render",f]]);export{j as default};
