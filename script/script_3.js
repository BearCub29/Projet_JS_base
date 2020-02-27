let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu?")
for(n = 1; n <= floor; n++)  
{
  console.log(" ".repeat(floor - n) + "#".repeat(n));
}  
  


