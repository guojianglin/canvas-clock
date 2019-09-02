(function (){
    var drawing = document.getElementById('drawing');
    if (drawing.getContext) {
        var context = drawing.getContext('2d');
        // 外圆
        context.beginPath();
        context.strokeStyle = '#1CA8E0';
        context.arc(250, 250, 198, 0, 2 * Math.PI, false);
        context.stroke();

        // 内圆
        context.moveTo(438, 250);
        context.arc(250, 250, 188, 0, 2 * Math.PI, false);
        context.stroke();

        // 指针
        context.beginPath();
        context.moveTo(250, 250);
        context.lineTo(250, 90);
        
        context.moveTo(250, 250);
        context.lineTo(110, 250);
        
        context.strokeStyle = '#000';
        context.stroke();

        // 时间数字
        context.font = 'bold 20px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('12', 250, 80);
        context.fillText('3', 420, 250);
        context.fillText('6', 250, 420);
        context.fillText('9', 80, 250);
    }
})();