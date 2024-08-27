//C hərfi
let strC = "*";

for (let i = 1; i <= 5; i++) {
  if (i == 1 || i == 5) {  
    console.log(strC + "* * * * * " + strC);
  } else {  
    console.log(strC + "*         " );
    console.log(strC + "*         " );
    console.log(strC + "*         " );

  }
}
 console.log("--------------------------")

// H hərfi
let strH = "*";

for (let i = 1; i <= 5; i++) {
  if (i == 3) { 
    console.log(strH + "* * * * * " + strH);
    console.log(strH + "* * * * * " + strH);
  } else { 
    console.log(strH + "*        *" + strH);
    console.log(strH + "*        *" + strH);
  }
}
