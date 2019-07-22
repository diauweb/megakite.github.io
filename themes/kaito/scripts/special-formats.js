hexo.extend.tag.register('fsmall', function(_,content) {
    return `<p class="sml">${content}</p>`
}, {ends: true})

hexo.extend.tag.register('fcomment', function(_,content) {
    return `<p class="cmt">${content}</p>`
}, {ends: true})
