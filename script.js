

var indexSlider=0;
var indexOpacity=1;
var indexMenu=false;
function slider()
{
    indexSlider+=1;
    if(indexSlider==1 || indexSlider==11 || indexSlider==21 || indexSlider==31)
    indexOpacity=1;
    var slid=document.querySelector('#slider_img img');
    if(indexSlider<=10)
    {   
        
        slid.src="images/slide_1.png";
        if(indexSlider>=5)
        {
            indexOpacity-=0.2;
            slid.style.opacity=indexOpacity.toString();
        }
        else
        slid.style.opacity="1";

    }
    else if(indexSlider>10 && indexSlider<=20)
    {
        slid.src="images/slide_2.png";
        if(indexSlider>=15)
        {
            indexOpacity-=0.2;
            slid.style.opacity=indexOpacity.toString();
        }
        else
        slid.style.opacity="1";
        
        
    }
    else if(indexSlider>20 && indexSlider<=30)
    {
        slid.src="images/slide_3.png";
        if(indexSlider>=25)
        {
            indexOpacity-=0.2;
            slid.style.opacity=indexOpacity.toString();
        }
        else
        slid.style.opacity="1";
        
    }
    else if(indexSlider>30 && indexSlider<=40)
    {
        slid.src="images/slide_4.png";
        if(indexSlider>=35)
        {
            indexOpacity-=0.2;
            slid.style.opacity=indexOpacity.toString();
        }
        else
        slid.style.opacity="1";
        if(indexSlider==40)
        {
            indexSlider=0;
        }
        
        
    }

    // btn menu 

   

}

function btnMenuAFF()
{
    var btnMenu=document.getElementById("button_menu_mobile");
    var menuMobile=document.querySelector("#menu_mobile");
    if(indexMenu==true)
    {
        indexMenu=false;
        menuMobile.style.display="none";
        
    }
    else
    { 
        menuMobile.style.display="inline-block";
        indexMenu=true;
    }

}


