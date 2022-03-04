import{b as t,o,c,a as n,e as p,F as l,h as e,g as s}from"./app.b0f4bb5c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=e('<h1 id="easypoi-\u7684\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#easypoi-\u7684\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> EasyPOI \u7684\u4F7F\u7528\u8BF4\u660E</h1><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><p><strong><em>easypoi\u529F\u80FD\u5982\u540C\u540D\u5B57easy,\u4E3B\u6253\u7684\u529F\u80FD\u5C31\u662F\u5BB9\u6613,\u8BA9\u4E00\u4E2A\u6CA1\u89C1\u63A5\u89E6\u8FC7poi\u7684\u4EBA\u5458 \u5C31\u53EF\u4EE5\u65B9\u4FBF\u7684\u5199\u51FAExcel\u5BFC\u51FA,Excel\u6A21\u677F\u5BFC\u51FA,Excel\u5BFC\u5165,Word\u6A21\u677F\u5BFC\u51FA,\u901A\u8FC7\u7B80\u5355\u7684\u6CE8\u89E3\u548C\u6A21\u677F \u8BED\u8A00(\u719F\u6089\u7684\u8868\u8FBE\u5F0F\u8BED\u6CD5),\u5B8C\u6210\u4EE5\u524D\u590D\u6742\u7684\u5199\u6CD5</em></strong></p><h2 id="\u6559\u7A0B\u6240\u4F7F\u7528\u7684\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u6559\u7A0B\u6240\u4F7F\u7528\u7684\u5DE5\u5177" aria-hidden="true">#</a> \u6559\u7A0B\u6240\u4F7F\u7528\u7684\u5DE5\u5177</h2><p><strong>\u524D\u7AEF : <a href="null">\u65E0</a></strong></p>',5),k=s("\u540E\u7AEF :"),m={href:"https://spring.io/",target:"_blank",rel:"noopener noreferrer"},b=s("SpringBoot"),d=s(" + "),h={href:"http://www.wupaas.com/",target:"_blank",rel:"noopener noreferrer"},_=s("easyPOI"),g=s(" + "),y={href:"https://mybatis.org/mybatis-3/",target:"_blank",rel:"noopener noreferrer"},x=s("MyBatis"),w=s(" + "),f={href:"https://baomidou.com/",target:"_blank",rel:"noopener noreferrer"},E=s("MyBatis-Plus"),v=s(" + "),q={href:"https://projectlombok.org/",target:"_blank",rel:"noopener noreferrer"},S=s("Lombok"),T=s("\u6570\u636E\u5E93 : "),I={href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"},j=s("MySQL"),P=s("\u5DE5\u5177 : "),O={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},D=s("IDEA"),H=s(" + "),U={href:"http://www.navicat.com.cn/",target:"_blank",rel:"noopener noreferrer"},F=s("Navicat"),L=e(`<h3 id="\u67E5\u770B\u5B9E\u4F53\u7C7B\u7684\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5B9E\u4F53\u7C7B\u7684\u6A21\u578B" aria-hidden="true">#</a> \u67E5\u770B\u5B9E\u4F53\u7C7B\u7684\u6A21\u578B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>inet<span class="token punctuation">.</span>codebase<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">cn<span class="token punctuation">.</span>afterturn<span class="token punctuation">.</span>easypoi<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Excel</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">cn<span class="token punctuation">.</span>afterturn<span class="token punctuation">.</span>easypoi<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ExcelTarget</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableName</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">IdType</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableId</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonFormat</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">EqualsAndHashCode</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span>experimental<span class="token punctuation">.</span></span><span class="token class-name">Accessors</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * \u7528\u6237\u5B9E\u4F53\u7C7B
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 *
 * <span class="token keyword">@author</span> HCY
 * <span class="token keyword">@since</span> 2020-10-13
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;tbl_user&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ExcelTarget</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u5E8F\u53F7
     */</span>

    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;user_id&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span>AUTO<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> userId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u59D3\u540D
     */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u751F\u65E5
     */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u751F\u65E5&quot;</span> <span class="token punctuation">,</span> importFormat <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">,</span> timezone <span class="token operator">=</span> <span class="token string">&quot;GMT+8&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> userBirthday<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u7231\u597D
     */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u7231\u597D&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userHabby<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u8EAB\u4EFD\u8BC1
     */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u8EAB\u4EFD\u8BC1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userIdentity<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u4F4F\u5740
     */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u4F4F\u5740&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userAddress<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h3 id="\u5173\u4E8E\u5B9E\u4F53\u7C7B\u7684\u7EE7\u627F-serializable-\u7684\u95EE\u9898-\u79FB\u6B65\u81F3" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u5B9E\u4F53\u7C7B\u7684\u7EE7\u627F-serializable-\u7684\u95EE\u9898-\u79FB\u6B65\u81F3" aria-hidden="true">#</a> \u5173\u4E8E\u5B9E\u4F53\u7C7B\u7684\u7EE7\u627F <code>Serializable</code> \u7684\u95EE\u9898,\u79FB\u6B65\u81F3</h3>`,3),A={href:"https://github.com/xiaoxunyao/Serializable",target:"_blank",rel:"noopener noreferrer"},C=s("\u5B9E\u4F53\u7C7B\u4E3A\u4EC0\u4E48\u9700\u8981\u7EE7\u627F\u5E8F\u5217\u5316 "),z=n("code",null,"Serializable",-1),B=e('<h2 id="\u5173\u4E8Eeasypoi\u7684\u6CE8\u89E3\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Eeasypoi\u7684\u6CE8\u89E3\u8BF4\u660E" aria-hidden="true">#</a> \u5173\u4E8EEasyPOI\u7684\u6CE8\u89E3\u8BF4\u660E</h2><p><strong><em>@Excel \u4F5C\u7528\u5230filed\u4E0A\u9762,\u662F\u5BF9Excel\u4E00\u5217\u7684\u4E00\u4E2A\u63CF\u8FF0</em></strong></p><p><strong><em>@ExcelCollection\u8868\u793A\u4E00\u4E2A\u96C6\u5408,\u4E3B\u8981\u9488\u5BF9\u4E00\u5BF9\u591A\u7684\u5BFC\u51FA,\u6BD4\u5982\u4E00\u4E2A\u8001\u5E08\u5BF9\u5E94\u591A\u4E2A\u79D1\u76EE,\u79D1\u76EE\u5C31\u53EF\u4EE5\u7528\u96C6\u5408\u8868\u793A</em></strong></p><p><strong><em>@ExcelEntity \u8868\u793A\u4E00\u4E2A\u7EE7\u7EED\u6DF1\u5165\u5BFC\u51FA\u7684\u5B9E\u4F53,\u4F46\u4ED6\u6CA1\u6709\u592A\u591A\u7684\u5B9E\u9645\u610F\u4E49,\u53EA\u662F\u544A\u8BC9\u7CFB\u7EDF\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762\u540C\u6837\u6709\u5BFC\u51FA\u7684\u5B57\u6BB5</em></strong></p><p><strong><em>@ExcelIgnore \u548C\u540D\u5B57\u4E00\u6837\u8868\u793A\u8FD9\u4E2A\u5B57\u6BB5\u88AB\u5FFD\u7565\u8DF3\u8FC7\u8FD9\u4E2A\u5BFC\u51FA</em></strong></p><p><strong><em>@ExcelTarget \u8FD9\u4E2A\u662F\u4F5C\u7528\u4E8E\u6700\u5916\u5C42\u7684\u5BF9\u8C61,\u63CF\u8FF0\u8FD9\u4E2A\u5BF9\u8C61\u7684id,\u4EE5\u4FBF\u652F\u6301\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u5BFC\u51FA\u505A\u51FA\u4E0D\u540C\u5904\u7406</em></strong></p><h4 id="\u5173\u4E8E\u6CE8\u89E3\u7684\u5927\u591A\u6570\u7684\u53C2\u6570-\u8FD8\u662F\u79FB\u6B65\u53BB\u81F3" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u6CE8\u89E3\u7684\u5927\u591A\u6570\u7684\u53C2\u6570-\u8FD8\u662F\u79FB\u6B65\u53BB\u81F3" aria-hidden="true">#</a> \u5173\u4E8E\u6CE8\u89E3\u7684\u5927\u591A\u6570\u7684\u53C2\u6570,\u8FD8\u662F\u79FB\u6B65\u53BB\u81F3</h4>',7),M={href:"http://doc.wupaas.com/docs/easypoi/easypoi-1c0u96flii98v",target:"_blank",rel:"noopener noreferrer"},N=s("\u5B98\u7F51"),V=e(`<h2 id="\u5BFC\u5165\u7684\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u7684\u5B9E\u4F8B" aria-hidden="true">#</a> \u5BFC\u5165\u7684\u5B9E\u4F8B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * \u5BFC\u5165Excel
     * <span class="token keyword">@author</span> HCY
     * <span class="token keyword">@since</span> 2020-10-14
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6587\u4EF6\u7684\u4F4D\u7F6E,Excel\u6587\u4EF6\u7684\u8BF4\u660E\u9700\u8981\u548C\u5B9E\u4F53\u7C7B\u6240\u5BF9\u5E94</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\Administrator.DESKTOP-TSJVEJ5\\\\Desktop\\\\test\\\\test.xlsx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5BFC\u5165\u7684\u6807\u9898\u548C\u8BF4\u660E\u7684\u8BBE\u7F6E</span>
        <span class="token class-name">ImportParams</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImportParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8BBE\u7F6E\u6807\u9898</span>
        params<span class="token punctuation">.</span><span class="token function">setTitleRows</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8BBE\u7F6E\u8BF4\u660E</span>
        params<span class="token punctuation">.</span><span class="token function">setHeadRows</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5BFC\u5165\u83B7\u53D6\u96C6\u5408</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> <span class="token class-name">ExcelImportUtil</span><span class="token punctuation">.</span><span class="token function">importExcel</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u904D\u5386\u96C6\u5408</span>
        users<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out <span class="token operator">::</span> <span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8FDB\u884C\u6279\u91CF\u6DFB\u52A0</span>
        <span class="token keyword">boolean</span> batch <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">saveBatch</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8F93\u51FA\u7ED3\u679C</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>batch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u5BFC\u5165\u7684xlsx\u6587\u4EF6\u7684\u5B9E\u4F8B\u6837\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u7684xlsx\u6587\u4EF6\u7684\u5B9E\u4F8B\u6837\u5B50" aria-hidden="true">#</a> \u5BFC\u5165\u7684xlsx\u6587\u4EF6\u7684\u5B9E\u4F8B\u6837\u5B50</h3><p><img src="https://ss.im5i.com/2020/10/14/Snipaste_2020-10-14_14-41-43.png" alt="\u5BFC\u5165\u7684excel\u5B9E\u4F8B"></p><h2 id="\u5BFC\u51FA\u7684\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u7684\u5B9E\u4F8B" aria-hidden="true">#</a> \u5BFC\u51FA\u7684\u5B9E\u4F8B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>	<span class="token doc-comment comment">/**
     * \u5BFC\u51FAExcel
     * <span class="token keyword">@author</span> HCY
     * <span class="token keyword">@since</span> 2020-10-14
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u67E5\u8BE2\u5168\u90E8</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8BBE\u7F6EExcel\u7684\u63CF\u8FF0\u6587\u4EF6</span>
        <span class="token class-name">ExportParams</span> exportParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExportParams</span><span class="token punctuation">(</span><span class="token string">&quot;\u7528\u6237\u5217\u8868\u7684\u6240\u6709\u6570\u636E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7528\u6237\u4FE1\u606F&quot;</span> <span class="token punctuation">,</span> <span class="token class-name">ExcelType</span><span class="token punctuation">.</span>XSSF<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8FDB\u884C\u5BFC\u51FA\u7684\u57FA\u672C\u64CD\u4F5C</span>
        <span class="token class-name">Workbook</span> workbook <span class="token operator">=</span> <span class="token class-name">ExcelExportUtil</span><span class="token punctuation">.</span><span class="token function">exportExcel</span><span class="token punctuation">(</span>exportParams<span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8F93\u5165\u8F93\u51FA\u6D41\u5730\u5740</span>
        <span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\Administrator.DESKTOP-TSJVEJ5\\\\Desktop\\\\test\\\\users.xlsx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8FDB\u884C\u8F93\u51FA\u6D41</span>
        workbook<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>fileOutputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5173\u6D41</span>
        fileOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        workbook<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u5BFC\u51FA\u7684excel\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u7684excel\u5B9E\u4F8B" aria-hidden="true">#</a> \u5BFC\u51FA\u7684Excel\u5B9E\u4F8B</h3><p><img src="https://ss.im5i.com/2020/10/14/Snipaste_2020-10-14_14-47-49.png" alt="\u5BFC\u51FA\u7684xlsx\u6587\u4EF6"></p>`,8);function J(Y,K){const a=t("ExternalLinkIcon");return o(),c(l,null,[i,n("p",null,[n("strong",null,[k,n("a",m,[b,p(a)]),d,n("a",h,[_,p(a)]),g,n("a",y,[x,p(a)]),w,n("a",f,[E,p(a)]),v,n("a",q,[S,p(a)])])]),n("p",null,[n("strong",null,[T,n("a",I,[j,p(a)])])]),n("p",null,[n("strong",null,[P,n("a",O,[D,p(a)]),H,n("a",U,[F,p(a)])])]),L,n("p",null,[n("strong",null,[n("em",null,[n("a",A,[C,z,p(a)])])])]),B,n("p",null,[n("strong",null,[n("em",null,[n("a",M,[N,p(a)])])])]),V],64)}var G=r(u,[["render",J]]);export{G as default};