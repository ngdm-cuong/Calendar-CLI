
var join = require('lodash.join');
var chunk = require('lodash.chunk');

//Momentrange
var Moment = require('moment');
const MomentRange = require('moment-range');
const moment1 = MomentRange.extendMoment(Moment); // I am using moment1
num0 = "2017-01-01";
var num= "2017-01-00";
// var check = moment('date/utc format');


// moment
var moment = require('moment');
moment().format();

// Birthday 
const chalk = require('chalk');
var bday = ["05","30"]; // Birday in form ["MM","DD"]
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

                //Birthday Highlight section
                if ("0"+i.toString()== bday[1])
                {
                    for (let k=0; k<=Cronk.length;k++)
                    {
                        if(bday[2]== Cronk[k])
                        console.log(chalk.bgGreen(Cronk[k]));
                    }
                        
                }

    // const r2 = r1.snapTo('day');
    // Array.from(r2.by('days')).map(m => m.format('DD')); 

        jnt = join(Cronk);
        chnk = chunk(Cronk,7);
        //  console.log('num0: '+num0);
        //  console.log('num: '+num);

        var formattedMonth = moment(num).format('MMMM');
        console.log(formattedMonth); // Print out Month name
        console.log(chnk);
    }
    else{
        num= "2017-"+i.toString()+"-"+daysOfMonth.toString();
        var start = moment1(num0);
        var end = moment1(num);
        var r1 = moment1.range(start, end);
        var Cronk =Array.from(r1.by('days')).map(m => m.format('DD'));

                //Birthday Highlight section
                if (bday[1] ==i.toString())
                {
                    for (let k=0; k<=Cronk.length;k++)
                    {
                        if(bday[2]== Cronk[k])
                        console.log(chalk.bgGreen(Cronk[k]));
                    }
                        
                }
    
        chnk = chunk(Cronk,7);
        jnt = join(chnk,' ');

        // month = check.format(num);
        // console.log(month);
        var formattedMonth = moment(num).format('MMMM');
        console.log(formattedMonth); // Print out Month name
        console.log(chnk);
    
        //Testing section
        // console.log('num0: '+num0);
        // console.log('num: '+num);
     
    }

    num0=num; // make start date = ended date
}

