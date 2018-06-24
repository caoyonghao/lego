$('.simple').each(function(idx, el) {
    var $el = $(el);
    var length = $el.data('length');
    $el.attr('value', ' '.repeat(length));
    $el.css('width', length * 4 + 'px');
});

$('#submit').click(function() {
    var inputMsg = '你输入了如下信息： \n';
    $('.simple').each(function(idx, el) {
        inputMsg += $.trim($(el).val());
        inputMsg += '\n';
    });
    alert(inputMsg);
});