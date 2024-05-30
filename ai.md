---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# background: /bg/_f439bcb2-6acf-40cc-a79c-79a089635b76.jpeg
background: ./bg/_966fd0c7-591b-499e-b472-5cdfad5eed4d.jpeg
# some information about your slides, markdown enabled
title: take flight with AI大模型
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
canvasWidth: 1200
hideInToc: true
exportFilename: "flight-ai"
routerMode: history
---

<div class="pt-28"></div>

# Take Flight with AI大模型

#### AI大模型辅助编码

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer bg-gray bg-opacity-10" hover="bg-white bg-opacity-10">
    Start taking off <carbon:arrow-right class="inline"/>
  </span>
</div>

<!--
开始
-->

---
hideInToc: true
layout: image-right
image: ./bg/bg-toc.png
---

# 目录

<Toc v-click class="flex flex-grow mt-12px" columns="2" minDepth="1" maxDepth="2"/>

---

# 各AI辅助工具的时间线

<iframe width="100%" height="500" src="https://time.graphics/embed?v=1&id=899851" frameborder="0" allowfullscreen></iframe>

<div class="abs-bl left-3.5rem bottom-5">
数据来源：<a href="https://time.graphics/line/899851">https://time.graphics/line/899851</a>
</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 使用GitHub Copilot的目的&收益

<div grid="~ cols-2 gap-2" m="t-2">

<!-- ![purposese](/assets/img/purposes.png) -->
<img src="/assets/img/purposes.png" alt="purposes" style="width: 100%; height: 100%;"/>

<!-- ![benefits](/assets/img/benefits.png) -->
<img src="/assets/img/benefits.png" alt="benefits" style="width: 100%; height: auto; margin-top: -3px;"/>

<div class="ml-6" v-click>
<h4>最主要的目的：</h4>
<ul>
  <li>帮助<span v-mark.circle.orange="3">代码生成</span></li>
  <li>尝试Copilot的功能</li>
  <li>修复bug</li>
</ul>
</div>

<div class="ml-6" v-click>
<h4>最主要的收益：</h4>
<ul>
  <li>有用的<span v-mark.circle.orange="3">代码生成</span></li>
  <li>更快的开发</li>
  <li>更好的代码质量</li>
</ul>
</div>

</div>

<div class="abs-bl left-3.5rem bottom-5">
参考论文：<a href="https://arxiv.org/pdf/2309.05687.pdf">https://arxiv.org/pdf/2309.05687.pdf</a>
</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# AI工具在编码效率上的数据体现

<div class="grid grid-cols-[3fr_2fr] gap-6" m="t-2">

<img src="/assets/img/github-per.png" style="width: 100%; height: 100%;"/>

<img src="/assets/img/ai-char-per.png" style="width: 100%; height: 100%;"/>

<div>
在GitHub Copilot官网上，其宣传中的广告文案有提到，Copilot可以帮助用户提升55%的编码效率。
</div>

<div>
近期有进行过一次评测实验，以上是实验过程中，各个工具在代码采纳率上的表现。
</div>

</div>

<div class="abs-bl left-3.5rem bottom-5">
评测报告：<a href="https://iwiki.woa.com/p/4009688124">https://iwiki.woa.com/p/4009688124</a>
</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 针对AI辅助编码的测评实验

| 插件                   | <span v-mark.red="2">推荐频次</span><br/>（次/分） |                   时长<br/>（秒）                    |                 推荐次数                  | <span v-mark.red="2">次数采纳率</span><br/>（均值） |           次数采纳率<br/>（中值）            | <span v-mark.red="2">采纳字符率</span><br/>（均值） |           采纳字符率<br/>（中值）            |
| ---------------------- | :------------------------------------------------: | :--------------------------------------------------: | :---------------------------------------: | :-------------------------------------------------: | :------------------------------------------: | :-------------------------------------------------: | :------------------------------------------: |
| 工蜂（gf）             |                        3.42                        |     <span v-mark.underline.red="2">10944</span>      |                    624                    |                       49.85%                        |                    50.00%                    |                       49.28%                        |                    47.24%                    |
| 腾讯云AI代码助手（tc） |                        3.45                        |                         8472                         |                    487                    |    <span v-mark.underline.red="2">73.07%</span>     | <span v-mark.underline.red="2">66.35%</span> |                       67.98%                        |                    66.80%                    |
| QPilot（qp）           |                        3.40                        |                         9896                         |                    560                    |                       57.50%                        |                    59.00%                    |                       57.21%                        |                    65.00%                    |
| Github Copilot（gc）   |                        3.96                        |                         8084                         |                    534                    |                       65.82%                        |                    57.87%                    |    <span v-mark.underline.red="2">75.43%</span>     | <span v-mark.underline.red="2">80.65%</span> |
| 通义灵码（ty）         |     <span v-mark.underline.red="2">4.44</span>     |                         8707                         | <span v-mark.underline.red="2">645</span> |                       59.37%                        |                    51.82%                    |                       56.69%                        |                    51.25%                    |
| 总计                   |                                                    |                        46103                         |                   2850                    |                                                     |                                              |                                                     |                                              |
|                        |                                                    | <span v-mark.circle.orange="2">12小时48分23秒</span> |                                           |                                                     |                                              |                                                     |                                              |

<v-click>
实验前提：

1. 实验人员主动使用相应工具；
2. 实验case侧，同一case由同一实验人员使用不同工具进行评测，保持人员因素的一致性；

<div class="abs-bl left-3.5rem bottom-5">
数据详情：<a href="https://doc.weixin.qq.com/sheet/e3_AL8ACAapAAs5zVWb0l3RqSFl63YHR?scode=AJEAIQdfAAoJmy1F3dAL8ACAapAAs">https://doc.weixin.qq.com/sheet/e3_AL8ACAapAAs5zVWb0l3RqSFl63YHR?scode=AJEAIQdfAAoJmy1F3dAL8ACAapAAs</a>
</div>

</v-click>
<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# AI在编码中是【辅助】还是【干扰】？

AI工具使用过程中，一部分人认为AI工具是【辅助】，另一部分人认为AI工具是【干扰】，那么，AI工具在编码中是【辅助】还是【干扰】？

| 插件           |         推荐频次<br/>（次/分）          | 时长<br/>（秒） | 推荐次数 | 次数采纳率<br/>（均值） |          次数采纳率<br/>（中值）          | 采纳字符率<br/>（均值） |          采纳字符率<br/>（中值）          |
| -------------- | :-------------------------------------: | :-------------: | :------: | :---------------------: | :---------------------------------------: | :---------------------: | :---------------------------------------: |
| 通义灵码（ty） | <span v-mark.circle.red="1">4.44</span> |      8707       |   645    |         59.37%          | <span v-mark.circle.red="1">51.82%</span> |         56.69%          | <span v-mark.circle.red="1">51.25%</span> |

<v-click>

从数据表现上看，通义灵码的表现是：推荐频次最高，次数采纳率和采纳字符率则是倒数第二，如何理解这一数据表现。

其实从实测者角度反馈来说，其表现代表的是，通义灵码有很高的推荐次数，且几乎是一直不停的推荐，但推荐结果对于开发者而言，可采用程度不高，因此整体导致采纳率表现靠后。

这一倒挂的数据表现，其实代表的是，推荐结果不优。

</v-click>

<v-click>
<h3 class="text-red-500">📝 推荐频次与采纳率之间数据倒挂存在一个临界范围，如果突破这一范围，AI插件的补全行为，不但不会给开发者带来帮助，反而会影响开发者的编码节奏及思路，从而成为干扰。</h3>
</v-click>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 优秀的代码补全在编码效率上的实例表现

<div class="grid grid-cols-[3fr_2fr] gap-6" m="t-2">

<div>
<video controls>
  <source src="/assets/videos/test-gc-19-28.mp4" type="video/mp4">
</video>

<p>边界良好的补全生成</p>
<ol>
<li>先生成函数体的注释</li>
<li>再生成函数体</li>
</ol>

</div>

````md magic-move
```js {*|1-5|6-23|7,14,21|*}
/**
 * 是否展示广告: docid 维度
 * @param {adType} 广告类型：pop | hover
 * @return {Boolean} 是否展示广告
 */
checkDocid(adType) {
  // 1. docid黑名单过滤
  if (
    this.adConfig[`${adType}AdConfig`].docidBlackList.length &&
    this.adConfig[`${adType}AdConfig`].docidBlackList.includes(this.docid)
  ) {
    return false;
  }
  // 2. docid白名单过滤
  if (
    this.adConfig[`${adType}AdConfig`].docidWhiteList.length &&
    !this.adConfig[`${adType}AdConfig`].docidWhiteList.includes(this.docid)
  ) {
    return true;
  }
  // 3. 黑白名单都没命中
  return true;
},
```
````

</div>

<div class="abs-bl left-3.5rem bottom-5">
录屏（19:25）：<a href="https://drive.weixin.qq.com/s?k=AJEAIQdfAAot9hXjpTAL8ACAapAAs">https://drive.weixin.qq.com/s?k=AJEAIQdfAAot9hXjpTAL8ACAapAAs</a>
</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 优秀的代码补全协同技能：注释先行

<div class="grid grid-cols-[3fr_4fr] gap-6" m="t-2">

<div>
<img src="/assets/img/code-comment-2.png" style="width: 100%; height: auto;"/>
<p>在页面上方对整体文件的逻辑进行注释说明，这将给AI提供一个全局知识背景。</p>
</div>

<div>
<img src="/assets/img/code-comment-1.png" style="width: 100%; height: auto;"/>
<p>实现的函数体内部，会有清晰的注释说明，并分步骤的给出相应段的注释，从注释的结构上，就有一个非常清晰的整理。</p>
</div>

</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# AI助手协同补全的详细拆解

<div class="grid grid-cols-[450px_1fr] gap-6" m="t-2">

<div>

<video controls m="b-10px">
  <source src="/assets/videos/test-gc-12-12.mp4" type="video/mp4">
</video>

```js {*|4-5,9-11,14-16,19-21}{maxHeight:'275px'}
/**
 * 广告组件业务逻辑说明：
 * 页面参数说明：
 * 1. adTag：广告标签，只会传一个值，为字符串，有可能不传值，如: 'gd.sz'
 *    格式上，以.分隔，如：'gd.sz'，为二级广告标签，'gd.sz.1'，为三级广告标签
 * 2. docid: 文章id，一定会传值，为字符串，如：'txa3423123456'
 *
 * 广告过滤展示逻辑：
 * 1. 有两个维度的过滤规则：广告标签 & 文章id， adTag & docid
 * 2. 每一个维度都对应配置有黑名单 & 白名单，黑名单优先级高于白名单
 * 3. 只有当两个维度的黑白名单都通过了过滤规则，才会展示广告
 *
 * 黑白名单配置说明：
 * 1. 弹窗广告：popAdConfig
 *    1. adTagBlackList：广告标签黑名单，数组，如：['gd.sz', 'gd.sz.1']
 *    2. adTagWhiteList：广告标签白名单，数组，如：['gd.sz', 'gd.sz.1']
 *    3. docidBlackList：文章id黑名单，数组，如：['txa3423123456', 'txa3423123457']
 *    4. docidWhiteList：文章id白名单，数组，如：['txa3423123456', 'txa3423123457']
 * 2. 浮窗广告：hoverAdConfig
 *    1. adTagBlackList：广告标签黑名单，数组，如：['gd.sz', 'gd.sz.1']
 *    2. adTagWhiteList：广告标签白名单，数组，如：['gd.sz', 'gd.sz.1']
 *    3. docidBlackList：文章id黑名单，数组，如：['txa3423123456', 'txa3423123457']
 *    4. docidWhiteList：文章id白名单，数组，如：['txa3423123456', 'txa3423123457']
 * 配置数据来源于后端接口
 */
```

</div>

<div>

````md magic-move
```js {*|2-4|7-12|*}
/**
 * 是否展示广告: adTag 维度
 * @param {adType} 广告类型：pop | hover
 * @return {Boolean} 是否展示广告
 */
checkAdTag(adType) {
  const adConfig = this.adConfig[`${adType}AdConfig`];
  const { adTagBlackList, adTagWhiteList } = adConfig;
  // adTag黑名单过滤
  if (adTagBlackList.includes(this.adTag)) {
    return false;
  }
},
```

```js
/**
 * 是否展示广告: adTag 维度
 * @param {adType} 广告类型：pop | hover
 * @return {Boolean} 是否展示广告
 */
checkAdTag(adType) {
},
```

```js {*|7-18|11,15|*}
/**
 * 是否展示广告: adTag 维度
 * @param {adType} 广告类型：pop | hover
 * @return {Boolean} 是否展示广告
 */
checkAdTag(adType) {
  // 对adTag判空
  // 1. adTag不为空
  if (this.adTag) {
    // 1.1 adTag黑名单过滤
    if (this.adConfig[`${adType}AdConfig`].adTagBlackList.includes(this.adTag)) {
      return false;
    }
    // 1.2 adTag白名单过滤
    if (this.adConfig[`${adType}AdConfig`].adTagWhiteList.includes(this.adTag)) {
      return true;
    }
  }
},
```

```js {*|12-15|*}
/**
 * 是否展示广告: adTag 维度
 * @param {adType} 广告类型：pop | hover
 * @return {Boolean} 是否展示广告
 */
checkAdTag(adType) {
  // 对adTag判空
  // 1. adTag不为空
  if (this.adTag) {
    // 1.1 adTag黑名单过滤
    if (
      // 黑名单不为空
      this.adConfig[`${adType}AdConfig`].adTagBlackList.length &&
      // adTag在黑名单中, 二级广告标签能过滤掉三级广告标签
      this.adConfig[`${adType}AdConfig`].adTagBlackList.some((item) => this.adTag.startsWith(item))
    ) {
      return false;
    }
    // 1.2 adTag白名单过滤
    if (this.adConfig[`${adType}AdConfig`].adTagWhiteList.includes(this.adTag)) {
      return true;
    }
  }
},
```

```js {*|21-23|8,10,19,27|*}
/**
 * 是否展示广告: adTag 维度
 * @param {adType} 广告类型：pop | hover
 * @return {Boolean} 是否展示广告
 */
checkAdTag(adType) {
  // 对adTag判空
  // 1. adTag不为空
  if (this.adTag) {
    // 1.1 adTag黑名单过滤
    if (
      // 黑名单不为空
      this.adConfig[`${adType}AdConfig`].adTagBlackList.length &&
      // adTag在黑名单中, 二级广告标签能过滤掉三级广告标签
      this.adConfig[`${adType}AdConfig`].adTagBlackList.some((item) => this.adTag.startsWith(item))
    ) {
      return false;
    }
    // 1.2 adTag白名单过滤
    if (
      this.adConfig[`${adType}AdConfig`].adTagWhiteList.length &&
      // adTag不在白名单中, 二级广告标签能过滤掉三级广告标签
      !this.adConfig[`${adType}AdConfig`].adTagWhiteList.some((item) => this.adTag.startsWith(item))
    ) {
      return true;
    }
    // 1.3 黑白名单都没命中
    return true;
  }
},
```
````

</div>

</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 不足分析：补全内容向后关联不足

<div class="grid grid-cols-[1fr_1fr] gap-6" m="t-2">

<video controls>
  <source src="/assets/videos/test-gf-23-00.mp4" type="video/mp4">
</video>

<video controls>
  <source src="/assets/videos/test-tc-21-00.mp4" type="video/mp4">
</video>

<p>其中的返回逻辑段，在后向代码中已实现，补全的结果中不应再次包含。</p>

<p>同样出现重复的返回逻辑段。</p>

<p>工蜂录屏（23:00）：<a href="https://drive.weixin.qq.com/s?k=AJEAIQdfAAonyqWesEAL8ACAapAAs">https://drive.weixin.qq.com/s?k=AJEAIQdfAAonyqWesEAL8ACAapAAs</a></p>

<p>腾讯云AI助手录屏（21:00）：<a href="https://drive.weixin.qq.com/s?k=AJEAIQdfAAo8ppmXQGAL8ACAapAAs">https://drive.weixin.qq.com/s?k=AJEAIQdfAAo8ppmXQGAL8ACAapAAs</a></p>

</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 不足分析：补全结果不精简，相同逻辑块生硬搬迁

<video controls m="t-2">
  <source src="/assets/videos/test-tc-27-00.mp4" type="video/mp4">
</video>

isShowPopAd逻辑可以通过一行代码直接返回（AI后面在53行是有能力给出正确答案），但实际推出了近10行的代码结果（期间有尝试在多个结果中切换，但未发现最优解），注释再次推荐才给出。（有能力，但未优先）

腾讯云AI助手录屏（27:00）：https://drive.weixin.qq.com/s?k=AJEAIQdfAAo8ppmXQGAL8ACAapAAs

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 不足分析：补全结果不完整的断句

<video controls m="t-2">
  <source src="/assets/videos/test-qp-15-00.mp4" type="video/mp4">
</video>

补全内容的最后一行逻辑不完整，从行中 <code>this.adConfig\[`</code> 被断开。

QPilot录屏（15:00）：https://drive.weixin.qq.com/s?k=AJEAIQdfAAog6kl3tKAL8ACAapAAs

---

# 不足分析：重复推荐删除内容 & 跨逻辑块补全

<video controls m="t-2">
  <source src="/assets/videos/test-qp-29-40.mp4" type="video/mp4">
</video>

其中的methods部分，被多次的推出。而这部分的推荐结果曾被多次的删除，即表示开发者的选择，但AI助手仍然会在后续的推荐中，再次推出，这样将给编码工作带来干扰。

另外当前补全的逻辑场景本身就在一个methods的函数中，而其补全的结果中，不但再次出现了methods，重要的是，其已跨出一个大的逻辑块，在上下文的处理过程中，函数这种明确的逻辑边界，最好能分辨并保持在这一逻辑区块下，这样有助于开发者决策判断。

QPilot录屏（29:40）：https://drive.weixin.qq.com/s?k=AJEAIQdfAAog6kl3tKAL8ACAapAAs

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---
hideInToc: true
---

# 补充：AI辅助代码解读对比

<div class="grid grid-cols-[80fr_70fr] gap-6" m="t-2">

<img src="/assets/img/read-code-tc.png" style="width: auto; height: auto;"/>

<img src="/assets/img/read-code-gf.png" style="width: auto; height: auto;"/>

GitHub Copilot在代码解读上，对于代码的理解能力，当前实验的case表现上，还是有更好一些的表现，交互上也更为合理。

工蜂的代码解读功能，从当前的测试case来看，其表现上，还有一定的提升空间，交互上也可以向多轮对话，以及与编辑器中代码交互的方向靠拢。

</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---
layout: two-cols
layoutClass: gap-6
hideInToc: true
---

# 补充：AI提供代码review的能力

<div m-t="2"></div>

- 能力要求：
  - 充足的代码规范、漏洞、安全、编程最佳实践等知识，最好能具备一定的业务知识（独立微调，或是外挂）
- 切入角度：
  - 集成到相关的review流水线，实现自动化
- 最佳工具：
  - 目前还没有发现非常合意的工具，原因：
    review带有很强的业务特色，需要嵌入到业务内部来review，这样才有深度

review会因各自工程的规范，而产生差异，无法全面的能用
使用过的是工蜂的AI评审，eg.: [示例MR](https://git.woa.com/MedicalBaiKe/medpedia_common_mini/merge_requests/2128)

::right::

# &nbsp;

<img src="/assets/img/review.png" style="width: auto; height: auto;"/>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 基于AI大模型的CLI应用

<img src="/assets/img/cli.png" style="width: 100%; height: auto;" m="t-2"/>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# 基于AI编码的安全研究

<div class="grid grid-cols-[9fr_10fr] gap-6" m="t-2">

<div>
<img src="/assets/img/ai-work-flow.png" style="width: 100%; height: auto;"/>
<img src="/assets/img/code-with-prompt.png" style="width: 100%; height: auto;"/>
</div>

<div>
<img src="/assets/img/experiment-scheme.png" style="width: 100%; height: auto;"/>
<img src="/assets/img/count-data.png" style="width: 100%; height: auto;"/>

<blockquote m="t-5">
<p>The best method for reducing the number of insecure solutions was the <span v-mark.underline.red="1">scenario-specific method</span>, decreasing the number of insecure samples by <span v-mark.circle.orange="1">16%</span>.</p>
</blockquote>
</div>

</div>

<div class="abs-bl left-3.5rem bottom-5">
参考论文：<a href="https://arxiv.org/pdf/2403.12671.pdf">https://arxiv.org/pdf/2403.12671.pdf</a>
</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# AutoDev：AI趋动的全自动化编码

<img src="/assets/img/autodev.png" style="width: 100%; height: auto;"/>

> 用户通过定义要实现的目标来启动流程，Conversation Manager初始化对话和设置，Agent Scheduler协调AI代理共同完成任务，并将它们的命令转发给Conversation Manager。Conversation Manager解析这些命令并调用Tools Library，该库提供可在存储库上执行的各种操作。代理的操作在安全的Docker环境中执行，并将输出返回给Conversation Manager，后者将其整合到正在进行的对话中。这个迭代过程持续进行，直到成功完成任务。

<div class="abs-bl left-3.5rem bottom-5">
参考论文：<a href="https://arxiv.org/pdf/2403.08299.pdf">https://arxiv.org/pdf/2403.08299.pdf</a>
</div>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---

# AI辅助编码的可期待能力

<div m="t-2"></div>

> 具有微调能力的AI代码助手产品即将推出。

<img src="/assets/img/fine-tune.png" style="width: 100%; height: auto;" m="t-10px"/>

<div class="abs-br right-3.5rem bottom-5">{{ $page }}</div>

---
layout: center
class: text-center
hideInToc: true
---

# 感谢观看

## Thank you for watching
