document.write(topBarDom);
function copyText(id) {
	var target = document.querySelector('#' + id);
	var range = document.createRange();
	try {
		range.selectNode(target);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		// 复制成功
	} catch (e) {
		// 复制失败
	}
};

function clickHandler(elId, cb) {
	document.getElementById(elId)
		.addEventListener('click', function () {
			if (cb) {
				cb();
			}
		})
};
var topBarDialog = document.getElementById('top-bar-dialog');
clickHandler('show-dialog', function () {
	topBarDialog.style.display = 'flex';
	copyText('wechat-num');
});
clickHandler('close-dialog', function () {
	topBarDialog.style.display = 'none';
});