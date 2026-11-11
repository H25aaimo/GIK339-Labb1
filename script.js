// ===================== Uppgift 2 – Variabler och scope =====================

console.log("--- Uppgift 2: före blocket ---");
console.log(varVariabel); // undefined
console.log(typeof letVariabel); // "undefined"
console.log(typeof constVariabel); // "undefined"

{
  var varVariabel = "Jag är en var";
  let letVariabel = "Jag är en let";
  const constVariabel = "Jag är en const";

  console.log("--- Uppgift 2: inuti blocket ---");
  console.log(varVariabel);
  console.log(letVariabel);
  console.log(constVariabel);
}

console.log("--- Uppgift 2: efter blocket ---");
console.log(varVariabel);
console.log(typeof letVariabel);
console.log(typeof constVariabel);

/*
Reflektion uppgift 2

Skillnad mellan var, let och const när det gäller block:
- var bryr sig inte om block. Även om jag deklarerar den inuti { } går den
  att använda utanför blocket också.
- let och const fungerar bara inuti blocket där de är deklarerade. Utanför
  blocket finns de inte, och om man försöker skriva ut dem får man ett
  ReferenceError. Därför använde jag typeof, då kraschar inte koden.
- Skillnaden mellan let och const är att värdet i en const inte går att ändra
  efteråt.

Vad som händer med console.log på olika ställen:
- Före blocket: var skriver ut undefined eftersom variabeln finns men inte
  har fått sitt värde än. let och const finns inte alls än.
- I blocket: alla tre skriver ut sina värden.
- Efter blocket: bara var skriver ut sitt värde. let och const finns inte
  längre utanför blocket.
*/

// ===================== Uppgift 3 & 4 – Funktionen add =====================

const add = (num1, num2) => {
  console.log("--- add anropas ---");
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  // ternary operator
  console.log(num1 ? "truthy" : "falsy");

  // kollar att båda är tal och inte null/undefined
  if (
    !(
      num1 === null ||
      num1 === undefined ||
      num2 === null ||
      num2 === undefined
    ) &&
    typeof num1 === "number" &&
    !Number.isNaN(num1) &&
    typeof num2 === "number" &&
    !Number.isNaN(num2)
  ) {
    return num1 + num2;
  } else {
    console.log("Felaktig input, båda måste vara tal.");
    return "Felaktig input";
  }
};

/*
Reflektion uppgift 3

Om jag hade använt let istället för const:
Då hade funktionen fungerat likadant, men man hade kunnat skriva över
add med ett annat värde senare. Med const går inte det.

Samma funktion med funktionsdeklaration:

    function add(num1, num2) {
        return num1 + num2;
    }

Att en funktion returnerar något:
Det betyder att funktionen skickar tillbaka ett värde dit där den anropades,
till exempel const svar = add(2, 3); då blir svar 5. När return körs
avslutas funktionen. Om man inte har någon return får man undefined tillbaka.
*/

/*
Reflektion uppgift 4

Ternary operator:
Det är en kortare variant av if/else som skrivs villkor ? om sant : om falskt.
Den ger tillbaka ett värde som man kan skriva ut eller spara i en variabel.
En if-sats ger inget värde utan används för att styra vad programmet gör,
och passar bättre när det är mycket kod eller flera villkor.

Skillnad mellan == och ===:
Med == jämförs bara värdet och JavaScript försöker göra om typerna så att de
stämmer, så 0 == '0' blir true. Med === måste både värde och typ vara samma,
så 0 === '0' blir false. Därför är === säkrare att använda. NaN är aldrig
lika med något, inte ens NaN, så num1 == NaN blir alltid false.

Så löste jag kontrollen av null:
Jag skrev num1 === null || num1 === undefined (och samma för num2) och satte
! framför hela uttrycket så att det bara går vidare om ingen av dem är
null eller undefined. Sedan la jag till typeof === "number" med && för att
kontrollera att båda är tal.
*/

// ===================== Uppgift 5 – Anropa funktioner =====================

const num1 = 0;
let arg1;
let sum = false;

console.log("===== Test 1 =====");
console.log(add(sum, 1));

console.log("===== Test 2 =====");
console.log(add("0", 3));

console.log("===== Test 3 =====");
console.log(add(3, "num1"));

console.log("===== Test 4 =====");
sum = add(-5, num1);
console.log(sum);

console.log("===== Test 5 =====");
console.log(add(arg1, 7));

console.log("===== Test 6 =====");
console.log(add());

console.log("===== Slutligen =====");
console.log(num1);
console.log(sum);

/*
Reflektion uppgift 5

Parameter, variabel och argument:
- Parameter är namnen som står inom parentesen när man skapar funktionen
  (num1 och num2).
- Argument är värdena man skickar in när man anropar funktionen, till
  exempel 3 och 5 i add(3, 5).
- Variabel är något man skapar med let, const eller var för att spara ett värde.

Sista outputen (num1):
Den blir 0. Den globala num1 har värdet 0 och ändras aldrig. Parametern num1
inne i funktionen är en annan, lokal variabel som bara finns i funktionen.
Sist skrivs även sum ut, och den är -5 från test 4.

Vad varje test ger (varje anrop skriver först ut jämförelserna och
truthy/falsy):
- Test 1: sum är false, alltså en boolean och inte ett tal. Den går in i else
  och ger "Felaktig input". Ternary ger "falsy".
- Test 2: "0" är en sträng. Else körs. Ternary ger "truthy" eftersom en sträng
  med innehåll är truthy.
- Test 3: "num1" med citattecken är bara text och inte variabeln num1, så num2
  är inte ett tal. Else körs.
- Test 4: -5 och num1 (som är 0) är båda tal, så summan -5 returneras och
  sparas i sum.
- Test 5: arg1 har inget värde och är undefined, så else körs. Ternary ger
  "falsy".
- Test 6: inga argument, så båda är undefined. Else körs.
Överallt blir num1 == NaN false.
*/
