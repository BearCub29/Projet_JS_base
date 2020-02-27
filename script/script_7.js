let myVar = " ";
while(myVar !== "q"){
  myVar = prompt("Qu'esct qu'il y a encore ? ( q pour quitter)");
  if(myVar.endsWith("?")){
    console.log("Ouais Ouais...");
  }else if( myVar.toUpperCase() === myVar && myVar.length > 0){
    console.log("Pwa, calme-toi...");
  }else if( myVar.toLowerCase().includes("fortnite")){
    console.log("on s'fait une partie soum-soum ?");
  }else if( myVar.length === 0 ){
    console.log("t'es en PLS ?");
  }else{
    console.log("balek.");
  };
};