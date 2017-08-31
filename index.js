
var vueElementDialogDraggable = {}
vueElementDialogDraggable.install = function (Vue, options) {
	
	Vue.directive('draggable', {
		
		bind : function(el, binding, vnode) {

			var dlg = el.getElementsByClassName("el-dialog")[0];
			var title = el.getElementsByClassName("el-dialog__title")[0];
			title.style.userSelect="none";
			title.style["-ms-user-select"] = "none";
			title.style["-moz-user-select"] = "none";
			title.style.cursor="default";

			var offsetX = 0;
			var offsetY = 0;

			var move = function(e){
				dlg.style.left = (e.pageX - offsetX) + 'px';
				dlg.style.top = (e.pageY - offsetY) + 'px';
			}

			var up = function() {
				removeEventListener('mousemove', move);
				removeEventListener('mouseup', up);
			}

			var down = function(e){
				offsetX = (e.pageX - dlg.offsetLeft);
				offsetY = (e.pageY - dlg.offsetTop );

				addEventListener('mousemove', move);
				addEventListener('mouseup', up);
			}

			var header = el.getElementsByClassName("el-dialog__header")[0];
			header.addEventListener('mousedown', down);
        }
	}
	
	
}