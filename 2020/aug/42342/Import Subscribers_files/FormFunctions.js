    //checks all DataGrid CheckBoxes with the given name with the given

    function CheckAllDataGridCheckBoxes(aspCheckBoxID, checkVal) {

        re = new RegExp(aspCheckBoxID)  //generated control

        for(i = 0; i < document.forms[0].elements.length; i++) {

            elm = document.forms[0].elements[i]

            if (elm.type == 'checkbox') {

                if (re.test(elm.name)) {

                    elm.checked = checkVal

                }
            }
        }
    }
    
    
    function CheckValue(component,text) {

	if(component.value == text)

		component.value = "";

	else if(component.value == "")

		component.value = text;
	}
	
    function CheckValue2(component,text) {

	if(component.value == text)

		component.value = "";

	else if(component.value == "")

		component.value = text;
	else if(component.value != text)
	
	    checkdate(component);

	}	


    /**--------------------------
    //* Validate Date Field script- By JavaScriptKit.com
    //* For this script and 100s more, visit http://www.javascriptkit.com
    //* This notice must stay intact for usage
    ---------------------------**/

    function checkdate(input){
        //var validformat=/^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
        var validformat=/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/;
        var returnval=false
        if (!validformat.test(input.value))
            alert("Invalid Date Format. Please correct and submit again in format MM/DD/YYYY..")
        else{ //Detailed check for valid date ranges
            var monthfield=input.value.split("/")[0]
            var dayfield=input.value.split("/")[1]
            var yearfield=input.value.split("/")[2]
            var dayobj = new Date(yearfield, monthfield-1, dayfield)
        if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield))
        alert("Invalid Day, Month, or Year range detected. Please correct and submit again in format MM/DD/YYYY.")
        else
        returnval=true
        }
        if (returnval==false) input.select()
        return returnval
    }
     
     
    function CheckIfIsNumeric(input)
       //  check for valid numeric strings	
       {
       var strValidChars = "0123456789.-";
       var strChar;
       var blnResult = true;

       if (input.value.length == 0) return false;

       //  test strString consists of valid characters listed above
       for (i = 0; i < input.value.length && blnResult == true; i++)
          {
          strChar = input.value.charAt(i);
          if (strValidChars.indexOf(strChar) == -1)
             {
             blnResult = false;
             }
          }
          
       if (blnResult == false) 
          {
          alert("Please enter a valid number.");
          }
        
       return blnResult;
       }
     