infoBtn = document.querySelectorAll('.info');
targetDiv = document.querySelectorAll('.projectDetail');





      for(let i =0 ; i<targetDiv.length ; i++)
      { 
        
        infoBtn[i].addEventListener("click", function() {
          if(targetDiv[i].style.display == 'block'){
            targetDiv[i].style.display = 'none';
          }
          else{
            targetDiv[i].style.display = 'block';

            }
          }
          );
          
        }

