const t=JSON.parse('{"key":"v-5ad6240c","path":"/posts/2018-06-10-koolproxy_https.html","title":"koolproxy 无法下载 https 证书？","lang":"zh-CN","frontmatter":{"title":"koolproxy 无法下载 https 证书？","date":"2018-06-10T00:00:00.000Z","category":["网络"],"tag":["koolproxy"],"order":-20,"description":"koolproxy 是可以运行在路由器上的广告屏蔽软件，跟其他最大的区别就是支持 https , 能有效屏蔽最新的视频应用广告（播个 10 分钟视频，广告 60 秒。。。） 为了屏蔽 https 广告，koolproxy 需要在每台设备上安装 https 证书。但我访问证书地址 110.110.110.110 时，却被提示无法访问。 这是我们需要进入路由器后台，对证书地址进行操作。 进入路由器后台，一般设置-Tools-Run Cmd ,运行命令 iptables -t nat -I PREROUTING -d 110.110.110.110 -p tcp --dport 80 -j REDIRECT --to 3000。重启后，该命令失效。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2018-06-10-koolproxy_https.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"koolproxy 无法下载 https 证书？"}],["meta",{"property":"og:description","content":"koolproxy 是可以运行在路由器上的广告屏蔽软件，跟其他最大的区别就是支持 https , 能有效屏蔽最新的视频应用广告（播个 10 分钟视频，广告 60 秒。。。） 为了屏蔽 https 广告，koolproxy 需要在每台设备上安装 https 证书。但我访问证书地址 110.110.110.110 时，却被提示无法访问。 这是我们需要进入路由器后台，对证书地址进行操作。 进入路由器后台，一般设置-Tools-Run Cmd ,运行命令 iptables -t nat -I PREROUTING -d 110.110.110.110 -p tcp --dport 80 -j REDIRECT --to 3000。重启后，该命令失效。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T14:56:32.000Z"}],["meta",{"property":"article:tag","content":"koolproxy"}],["meta",{"property":"article:published_time","content":"2018-06-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T14:56:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"koolproxy 无法下载 https 证书？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-06-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-17T14:56:32.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1676645792000,"updatedTime":1676645792000,"contributors":[{"name":"OminiQ","email":"qiuping.leer@outlook.com","commits":1}]},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"_posts/2018-06-10-koolproxy_https.md","localizedDate":"2018年6月10日","excerpt":"<p>koolproxy 是可以运行在路由器上的广告屏蔽软件，跟其他最大的区别就是支持 https , 能有效屏蔽最新的视频应用广告（播个 10 分钟视频，广告 60 秒。。。）</p>\\n<p>为了屏蔽 https 广告，koolproxy 需要在每台设备上安装 https 证书。但我访问证书地址 110.110.110.110 时，却被提示无法访问。</p>\\n<p>这是我们需要进入路由器后台，对证书地址进行操作。</p>\\n<p>进入路由器后台，一般设置-Tools-Run Cmd ,运行命令 <code>iptables -t nat -I PREROUTING -d 110.110.110.110 -p tcp --dport 80 -j REDIRECT --to 3000</code>。重启后，该命令失效。</p>","autoDesc":true}');export{t as data};
