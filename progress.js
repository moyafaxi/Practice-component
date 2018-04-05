(function(w){
    function Progress(params){
       this.id = params.id;
       this.bgColor = params.bgColor;
       this.barColor = params.barColor;
       this.textColor = params.textColor;
       this.radius = params.radius;
       this.percent = params.percent;
       this.width = params.width;
       this.height = params.height;
    } 

    Progress.prototype.init=function(){
        html = "<canvas id=canvas_"+this.id+"></canvas>";
        document.getElementById(this.id).innerHTML = html;
        var ctx = document.getElementById("canvas_"+this.id).getContext('2d');


        ctx.fillStyle=this.bgColor;
        ctx.strokeStyle=this.bgColor;
        roundedRect(ctx,0,20,this.width,this.height,this.radius);

        ctx.fillStyle=params.barColor;
        ctx.strokeStyle=params.barColor;
        roundedRect(ctx,0,20,this.width*(this.percent/100),this.height,this.radius);

        ctx.fillStyle = "#fa6505";
        ctx.font = "12px 微软雅黑";
        ctx.fillText(this.percent+"%", this.width*(this.percent/100),15);

        
        // 封装的一个用于绘制圆角矩形的函数.
        function roundedRect(ctx,x,y,width,height,radius){
            ctx.beginPath();
            ctx.moveTo(x,y+radius);
            ctx.lineTo(x,y+height-radius);
            ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
            ctx.lineTo(x+width-radius,y+height);
            ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
            ctx.lineTo(x+width,y+radius);
            ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
            ctx.lineTo(x+radius,y);
            ctx.quadraticCurveTo(x,y,x,y+radius);
            ctx.fill();
        }


    }

    w.Progress=Progress;
}(window))