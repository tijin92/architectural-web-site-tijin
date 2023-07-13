$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });
    $(window).on('scroll land',function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    $('.count').each(function(){
        var $this= $(this),
        countTo =$this.attr('data-count');
        $({countNum : $this.text()}).animate({
            countNum : countTo
        },
         {
            duration:5000,
            step: function(){
                $this.text(Math.floor(this.countNum));
            },
            complete: function(){
                $this.text(this.countNum + '+')
            }
         }
        
        )
    });

    $('.project').magnificpopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    })


});
      // Example starter JavaScript for disabling form submissions if there are invalid fields
      (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()

