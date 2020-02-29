
$(document).ready(function(){
  var input = "";
  var len = 0;
  var curr="";
  var lastinput = "";
  var flag = 0;
  $("button").on('click',function(){
      curr = $(this).attr("value");
        lastinput = input.charAt(len-1);
      
      if(curr == 'ac'){
        input = '';
        len = 0;
        $("#input-output-box").val('0');
        flag = 0;
      }


      else if(curr == 'del'){
        if(lastinput =='.'){
        	flag = 0;
        }
        if(len <= 1)
        {
          input = '';
          len = 0;
          $("#input-output-box").val('0');
        }
        else{
        input = input.slice(0,(len-1));
        len--;
        $("#input-output-box").val(input);
        }
      }

      else if(curr == '*' || curr == '/'){
        if(len!=0){
          if(lastinput =='*' || lastinput =='/' || lastinput =='+' || lastinput =='-'){
            input = input.slice(0,len-1);
            len--; 
          }
          input+= curr;
          len++;
          flag = 0;
          $("#input-output-box").val(input);
        }
      }

      else if(curr =='+' || curr=='-'){
      	if(len!=0){
          if(lastinput =='+' || lastinput =='-'){
            input = input.slice(0,len-1);
            len--; 
          }
          input+= curr;
          len++;
          flag = 0;
          $("#input-output-box").val(input);
        }
      }
      else if(curr === '='){
      	var ans = parseFloat(eval(input)).toFixed(3);
        $("#input-output-box").val(ans);
        input = ans.toString();
        len = input.length;
        lastinput = input.charAt(len-1);
      }

      else if(curr == '.'){
      	if(flag == 0){
      		input +=curr;
      		len++;
      		flag = 1;	
      	}
      	$("#input-output-box").val(input);
      }
      else if(curr =='0'){
      	if(len != 0){
      		input += curr;
      		len++;
      		$("#input-output-box").val(input);
      	}
      	else
      	$("#input-output-box").val('0');
      }
      else{
        input +=curr; 
        len++;
        $("#input-output-box").val(input);
    }
   });
});
    