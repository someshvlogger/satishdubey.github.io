function AlerMsg(data,Id,Message)
{
  // overlay = $('<div></div>').prependTo('body').attr('id', 'overlay');

             if(data.msg != '')
             {
                if(data.msgsuc == 'bg-success')
                { 
                   $.notify(data.msg, {
                      className: 'success',
                      hideDuration: '10',
                      showAnimation: 'fadeIn',
                      hideAnimation: 'fadeOut',
                      position: 'top right'
                    });
                   
                    /*if(data.TargetURL != '')
                    {
                        setTimeout(function(){ 
                        location.href = data.TargetURL;
                    }, 1000);

                    }else
                    {
                       setTimeout(function(){ 
                        location.reload(true);
                    }, 1000); 
                    }*/
                    
                    
                }
                else if(data.msgfail == 'bg-danger')
                {
                   $.notify(data.msg, {
                  className: 'danger',
                  hideDuration: '10',
                  showAnimation: 'fadeIn',
                  hideAnimation: 'fadeOut',
                  position: 'top right'
                });

                //     if(data.TargetURL != '')
                //     {
                //         setTimeout(function(){ 
                //         location.href = data.TargetURL;
                //     }, 1000);

                //     }else
                //     {
                //        setTimeout(function(){ 
                //         location.reload(true);
                //     }, 1000);         

                // }
                
                    $(Id).val(Message);  
                    $(Id).prop('disabled',false);

             }
}

}
// function DisableScreen() {
//     // creates <div class="overlay"></div> and 
//     // adds it to the DOM
//     var div= document.createElement("body");
//     div.className += "overlay";
//     document.body.appendChild(div);
// }
