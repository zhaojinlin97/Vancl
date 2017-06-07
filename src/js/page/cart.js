var $ = require('jquery');

$(function(){
var path={
    init:function(){
      this.cartpath();
    },
    cartpath:function(){
        $("input[type='checkbox']").click(function(){
          $(".cart_footer").show();
        })
        var that;
        $(".cart_del").click(function(){
          var a=$(":checked");
           $.each(a,function(i,k){
             $(this).parent().parent().remove();
           })
        })
    $(".cart_checked_noall").click(function(){
          $(":checked").prop("checked",false);
          $(".cart_checked_noall").hide();
          $(".cart_checked_all").show();
          $(".cart_footer").hide();
      });
    $(".cart_checked_all").click(function(){
            $("input[type='checkbox']").prop("checked",true);
            $(".cart_checked_noall").show();
            $(".cart_footer").show();
            $(".cart_checked_all").hide();
      })
        $(".jian-one").click(function(){
           count=parseInt($(".count-one").html());
              if(count>1){
                count--;
                $(".count-one").html(count);
              }

        })
      // 删除和遮罩层
      $(".jia-one").click(function(){
        count=parseInt($(".count-one").html());
        count++;
        $(".count-one").html(count);

      })

      // 数量-1
        $(".jian-two").click(function(){
           count=parseInt($(".count-two").html());
              if(count>1){
                count--;
                $(".count-two").html(count);
              }

        })
      // 删除和遮罩层
      $(".jia-two").click(function(){
        count=parseInt($(".count-two").html());
        count++;
        $(".count-two").html(count);

      })

      // 数量-1
        $(".jian-san").click(function(){
           count=parseInt($(".count-san").html());
              if(count>1){
                count--;
                $(".count-san").html(count);
              }

        })
      // 删除和遮罩层
      $(".jia-san").click(function(){
        count=parseInt($(".count-san").html());
        count++;
        $(".count-san").html(count);
      });
    var that;
    $('.shop-center-del').on('click',function(){
            $('.del-box').show();
            that = $(this);
    })
    $('.btn-no').on('click',function(){
        $('.del-box').hide();
    })
    $('.btn-ok').on('click',function(){
        that.parent().parent().parent().parent().remove();
        $('.del-box').hide();
    })
  }
}
path.init();
})
