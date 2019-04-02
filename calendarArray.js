
var join = require('lodash.join');
var chunk = require('lodash.chunk');

//Momentrange
var Moment = require('moment');
const MomentRange = require('moment-range');
const moment1 = MomentRange.extendMoment(Moment); // I am using moment1
var num0 = "2017-01-01";
var num= "2017-01-00";
var space =0;
// var check = moment('date/utc format');

// moment
var moment = require('moment');
moment().format();

// Birthday 
const chalk = require('chalk');

var bday = ["05","29"];
var m = "05";
var d = "29"; // Birday in form ["MM","DD"]

// console.log(bday1);

for (let i=1 ; i <= 12; i++)
    {

        //Carlendar CLI section
        if (i==1 || i==3 ||i==5||i==7||i==8||i==10||i==12)
        {           
            daysOfMonth = 31;            
            monthCreating(i,daysOfMonth)    
        }
        else if (i==2)
        {       
            daysOfMonth = 28;          
            monthCreating(i,daysOfMonth);
        }
        else
        {      
            daysOfMonth = 30;
            monthCreating(i,daysOfMonth);
        }
    }//End of loop


function  monthCreating(i,daysOfMonth)

// if the month number from 1 to 9 add 0 to become 01 , 02, ...
{
    if (i<10)

    {
        num= "2017-0"+i.toString()+"-"+daysOfMonth.toString();
        var start = moment1(num0);
        var end = moment1(num);
        var r1 = moment1.range(start, end);
        var Cronk =Array.from(r1.by('days')).map(m => m.format('DD'));         
    // const r2 = r1.snapTo('day');
    // Array.from(r2.by('days')).map(m => m.format('DD'));      
        //  console.log('num0: '+num0);
        //  console.log('num: '+num);

        // get the first day of month at the right day of week
        
       
        
        for (let a = 0 ; a < space ; a++)
        Cronk.unshift('  ');
        

        chnk = chunk(Cronk,7);
        var formattedMonth = moment(num).format('MMMM');
        console.log(chalk.green(formattedMonth)); // Print out Month name 
        console.log('Mo Tu We Th Fi Sa Su');

        for (j=0 ; j < chnk.length; j++) // Print each row of month
        {               
            jnt = join(chnk[j],' ');
            console.log(chalk.blue(jnt));
        }

        space =(Cronk.length-1)%7+1;
        // This section is for if the month that just printed is the 9th month  then the next month will be 10 instead of 010
        if (i==9)
        num0="2017-"+(i+1).toString()+"-01"; // Set start day of month 
        else
        num0="2017-0"+(i+1).toString()+"-01"; // Set start day of month
    }
    else{
        num= "2017-"+i.toString()+"-"+daysOfMonth.toString();
        var start = moment1(num0);
        var end = moment1(num);
        var r1 = moment1.range(start, end);
        var Cronk =Array.from(r1.by('days')).map(m => m.format('DD'));
        // get the first day of month at the right day of week

        for (let a = 0 ; a < space ; a++)
        Cronk.unshift('  ');
        



        chnk = chunk(Cronk,7);
        var formattedMonth = moment(num).format('MMMM');
        console.log(chalk.green(formattedMonth)); // Print out Month name
        console.log('Mo Tu We Th Fi Sa Su');

        for (j=0 ; j < chnk.length; j++)
        {   
            jnt = join(chnk[j],' ');
            console.log(chalk.blue(jnt));
        }

        
        // num0=num; // Set start day of month
        space =(Cronk.length-1)%7+1;
        num0="2017-"+(i+1).toString()+"-01"; // Set start day of month
    }
    
      
}

    // //Birthday Highlight section
    // if ("0"+i.toString() === bday[1])
    // {
    //     for (let k=0; k<Cronk.length;k++)
    //     {
    //         if(bday[2] == Cronk[k])
    //         {
    //             console.log(chalk.bgMagenta(Cronk[k]));
    //             console.log('TEST');
    //         }
                
    //     }
            
    // }
