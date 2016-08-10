var drag = function() {
    var __this = this,
        dragObject = {};

    document.addEventListener('mousedown', function(event) {
        if (event.which != 1) return;

        var elem = event.target.closest('.draggable');
        if (!elem) return;

        dragObject.elem = elem;

        dragObject.downX = event.pageX;
        dragObject.downY = event.pageY;

        __this.container.classList.add('isDragging');

        return false;
    });

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();

        if (!dragObject.elem) return;

        if (!dragObject.avatar) {

            var moveX = event.pageX - dragObject.downX;
            var moveY = event.pageY - dragObject.downY;
            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {

                return;

            }

            dragObject.avatar = createAvatar(event);
            if (!dragObject.avatar) {

                dragObject = {};
                return;

            }

            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(event);
        }

        var left = event.pageX - dragObject.shiftX;
        var top = event.pageY - dragObject.shiftY;

        dragObject.avatar.style.left = event.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = event.pageY - dragObject.shiftY + 'px';

        // dragObject.avatar.style.transform = 'translate3d('+ left +'px, '+ top +'px, 0px)';

        return false;
    });

    document.addEventListener('mouseup', function(event) {
        if (dragObject.avatar) {
            finishDrag(event);
        }

        dragObject = {};

        __this.container.classList.remove('isDragging');
    });

    function createAvatar(event) {
        var avatar = dragObject.elem;
        var old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };

        avatar.rollback = function() {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.zIndex = old.zIndex
        };

        return avatar;
    }

    function startDrag(event) {
        var avatar = dragObject.avatar,
            avatarWidth = avatar.offsetWidth;

        document.body.appendChild(avatar);
        avatar.style.width = avatarWidth + 'px';
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
        avatar.classList.add('active');
    }

    function finishDrag(event) {
        var dropElem = findDroppable(event);

        if (dropElem) {
            console.log('... успешный перенос ...');
        } else {
            console.log('... отмена переноса ...');
        }
    }

    function findDroppable(event) {
        dragObject.avatar.style.pointerEvents = "none";

        var elem = document.elementFromPoint(event.clientX, event.clientY);

        dragObject.avatar.style.pointerEvents = "auto";

        if (elem == null) {
            return null;
        }

        return elem.closest('.droppable');
    }

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
};

module.exports = drag;
