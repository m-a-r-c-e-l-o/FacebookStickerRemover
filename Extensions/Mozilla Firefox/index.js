function noSticker(){
    var stickers = document.querySelectorAll('div');
    for(ii = 0; ii < stickers.length; ii++){
        if (stickers[ii].hasAttribute('data-testid') && stickers[ii].getAttribute('data-testid') == 'ufi_comment_sticker'){
            stickers[ii].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }
    }
    setTimeout(noSticker, 500);
}
noSticker();