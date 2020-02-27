let chain1 = prompt("Donnes moi ton ARN à traduire en protéine :")

    let codons = chain1.match(/(.{3})/g);
    codons = codons.map( codon => {
      if (codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG" || codon === "AGU" || codon === "AGC"){
        return "Sérine";
      }else if( codon === "CCU" || codon === "CCC" || codon === "CCA" || codon === "CCG"){
        return "Proline";
      }else if( codon === "UUA" || codon === "UUG"){
        return "Leucine";
      }else if( codon === "UUU" || codon === "UUC"){
        return "Phénylalanine";
      }else if( codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG"){
        return "Arginine";
      }else if( codon === "UAU" || codon === "UAC"){
        return "Tyrosine";
      }else{
        return "inconnu à THP";
      }
    });
console.log(`Voici la traduction en protéines : ${codons.join('-')}`);

