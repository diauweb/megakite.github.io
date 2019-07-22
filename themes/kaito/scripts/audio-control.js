const url = require('url')

hexo.extend.tag.register('audcontrol', function(a) {
	if(a[0] == undefined) return "<p>Invaild Audio Path</p>"
	const asset = hexo.model('PostAsset').findOne({post: this._id, slug: a[0]})

    return `
<div class="aud">
	<audio controls="controls">
	    <source src="${url.resolve(hexo.config.root, asset.path)}" type="audio/mpeg" />
	</audio>
</div>
    `;
});
