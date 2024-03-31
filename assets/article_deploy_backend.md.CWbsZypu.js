import{_ as t,c as e,o as l,a4 as a}from"./chunks/framework.CI8or701.js";const x=JSON.parse('{"title":"后端部署","description":"","frontmatter":{},"headers":[],"relativePath":"article/deploy/backend.md","filePath":"article/deploy/backend.md"}'),i={name:"article/deploy/backend.md"},s=a('<h1 id="后端部署" tabindex="-1">后端部署 <a class="header-anchor" href="#后端部署" aria-label="Permalink to &quot;后端部署&quot;">​</a></h1><h2 id="_1-新建工作目录" tabindex="-1">1.新建工作目录 <a class="header-anchor" href="#_1-新建工作目录" aria-label="Permalink to &quot;1.新建工作目录&quot;">​</a></h2><p>于<code>/usr/local</code>路径下新建<code>stuTrack</code>目录</p><h2 id="_2-上传jar及模板文件" tabindex="-1">2.上传JAR及模板文件 <a class="header-anchor" href="#_2-上传jar及模板文件" aria-label="Permalink to &quot;2.上传JAR及模板文件&quot;">​</a></h2><p>进入<code>/usr/local/stuTrack</code>目录下，上传以下文件</p><ul><li>stuTrack-v1.0.0.jar</li><li>template.xlsx</li><li>templateScore.xlsx</li><li>templateScore2.xlsx</li><li>uploadModel.xlsx</li><li>uploadModel2.xlsx</li></ul><p>文件保存的位置可根据实际情况设定，也可以创建 circulation 目录供文件流转使用，目录设置见<code>3.上传后端配置文件并修改参数</code></p><h2 id="_3-上传后端配置文件并修改参数" tabindex="-1">3.上传后端配置文件并修改参数 <a class="header-anchor" href="#_3-上传后端配置文件并修改参数" aria-label="Permalink to &quot;3.上传后端配置文件并修改参数&quot;">​</a></h2><p>进入<code>/usr/local/stuTrack</code>目录下，上传以下文件</p><ul><li>application.yml</li></ul><p>使用 vim 编辑器打开文件。参考下表进行配置：</p><table><thead><tr><th style="text-align:center;">属性名</th><th style="text-align:center;">含义</th><th style="text-align:center;">配置提示</th></tr></thead><tbody><tr><td style="text-align:center;">spring.datasource.usern ame</td><td style="text-align:center;">MySQL 用户名</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">spring.datasource.pasw ord</td><td style="text-align:center;">MySQL 密码</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">spring.data.host</td><td style="text-align:center;">Redis 主机地址</td><td style="text-align:center;">若未更改则保持默认<br>（localhost）</td></tr><tr><td style="text-align:center;">spring.redis.port</td><td style="text-align:center;">Redis 端口号</td><td style="text-align:center;">若未更改则保持默认 <br>（6379）</td></tr><tr><td style="text-align:center;">files.savePath</td><td style="text-align:center;">文件保存路径</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr><tr><td style="text-align:center;">files.uploadPath</td><td style="text-align:center;">文件上传路径</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr><tr><td style="text-align:center;">files.stuTemplatePath</td><td style="text-align:center;">导出学生表模板</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr><tr><td style="text-align:center;">files.scoreTemplatePath</td><td style="text-align:center;">导出德育分分数表模板</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr><tr><td style="text-align:center;">files.score2TemplatePath</td><td style="text-align:center;">导出第二课堂积分表模板</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr><tr><td style="text-align:center;">files.exportPath</td><td style="text-align:center;">导出文件路径</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr><tr><td style="text-align:center;">files.modelPath</td><td style="text-align:center;">德育分批量操作表模板</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr><tr><td style="text-align:center;">files.modelPath2</td><td style="text-align:center;">第二课堂积分批量操作表模板</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr><tr><td style="text-align:center;">files.fileCirculationPath</td><td style="text-align:center;">文件流转功能存储路径</td><td style="text-align:center;"><code>见配置补充说明</code></td></tr></tbody></table><p>配置补充说明：</p><blockquote><p>若有已经上传的模板文件， 则指向对应的文件即可，若 为目录属性，则配置到 /usr/local/stuTrack/</p></blockquote><h2 id="_4-启动jar" tabindex="-1">4.启动JAR <a class="header-anchor" href="#_4-启动jar" aria-label="Permalink to &quot;4.启动JAR&quot;">​</a></h2><p>使用以下 Linux 命令可按照自定义 yml 文件启动 JAR 包：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/stuTrack/stuTrack-v1.0.0.jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> –</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> spring.config.location=/usr/local/stuTrack/application.yml</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /usr/local/stuTrack/run.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre></div><ul><li>nohup 可以确保代码在后台运行而不被停止。</li><li>-jar 参数为 JAR 包存储路径。</li><li>--spring.config.location 参数为 yml 配置文件存储路径。</li><li>&gt;后的路径为日志存储路径（可选）。</li></ul>',18),d=[s];function r(n,c,o,h,p,g){return l(),e("div",null,d)}const u=t(i,[["render",r]]);export{x as __pageData,u as default};