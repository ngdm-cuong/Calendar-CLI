var month=[];
let daysOfMonth;


// Creating an array
month[0]=0;
for (let i=1 ; i <= 12; i++)
    {
        if (i==1 || i==3 ||i==5||i==7||i==8||i==10||i==12)
        {
            month[i]=[];
            daysOfMonth = 31;
            // daysOfMonth = 5;
            monthCreating(i,daysOfMonth);

        }
        else if (i==2)
        {
            month[i]=[];
            daysOfMonth = 28;
            // daysOfMonth = 7;
            monthCreating(i,daysOfMonth);
        }
        else
        {
            month[i]=[];
            daysOfMonth = 30;
            // daysOfMonth = 6;
            monthCreating(i,daysOfMonth);
        }
    }//End of loop




//Testing

    console.log(month);
//End Testing



function monthCreating(monthName,daysOfMonth){
    for (let cnt = 0; cnt<daysOfMonth;cnt++)
    {        
        month[monthName][cnt]=cnt+1;
    }
}//End of MonthCreating