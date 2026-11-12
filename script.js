// ===================== Uppgift 2 – Variabler och scope =====================

console.log("--- Uppgift 2: före blocket ---");
console.log(country); // undefined
console.log(typeof hobby); // "undefined"
console.log(typeof food); // "undefined"

{
  var country = "Sverige";
  let hobby = "Träning";
  const food = "Pasta";

  console.log("--- Uppgift 2: inuti blocket ---");
  console.log(country);
  console.log(hobby);
  console.log(food);
}

console.log("--- Uppgift 2: efter blocket ---");
console.log(country);
console.log(typeof hobby);
console.log(typeof food);

/*
Reflektion uppgift 2:

Skillnaden mellan var, let och const:
- var fungerar även utanför blocket där den deklareras.
- let och const fungerar bara inuti blocket där de deklareras.
- Med let kan man ändra värdet senare, medan const inte kan tilldelas ett nytt värde.

Vad som händer med console.log:
- Före blocket: var visar undefined eftersom variabeln är deklarerad men ännu inte fått sitt värde. let och const går inte att nå utanför blocket.
- Inuti blocket: alla tre variablerna skriver ut sina värden.
- Efter blocket: var fungerar fortfarande, men let och const går inte längre att komma åt.

Jag använde typeof för att kontrollera let och const utanför blocket.
Om jag hade försökt skriva ut variablerna direkt hade det blivit
ett ReferenceError eftersom de inte är tillgängliga utanför blocket.
Med typeof kan jag kontrollera dem utan att programmet kraschar.
*/

// ===================== Uppgift 3 & 4 – Funktionen add =====================

const add = (num1, num2) => {
  console.log("--- add anropas ---");
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  // Ternary operator
  console.log(num1 ? "truthy" : "falsy");

  // Kontrollerar att båda värdena är tal och inte null, undefined eller NaN.
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
Reflektion uppgift 3:

Om jag hade använt let istället för const hade funktionen fungerat på samma sätt.
Skillnaden är att jag hade kunnat tilldela variabeln add ett nytt värde senare.

Samma funktion med en funktionsdeklaration:

function add(num1, num2) {
    return num1 + num2;
}

Att en funktion returnerar något betyder att den skickar tillbaka
ett värde till den plats där funktionen anropades.
Exempel: add(2, 3) returnerar 5.
När return körs avslutas funktionen.
Om funktionen inte har någon return får man undefined tillbaka.
*/

/*
Reflektion uppgift 4:

En ternary operator är ett kortare sätt att skriva ett villkor.
Den skrivs med villkor ? värde om sant : värde om falskt.
En if-sats används istället för att styra vad programmet ska göra
och passar bättre när man har flera instruktioner.

Skillnaden mellan == och ===:
Två likhetstecken jämför värden och JavaScript kan ändra datatypen
vid jämförelsen. Tre likhetstecken jämför både värde och datatyp.
Exempelvis blir 0 == "0" true, medan 0 === "0" blir false.

NaN är speciellt eftersom det aldrig är lika med något, inte ens sig självt.
Därför blir num1 == NaN alltid false.

För att kontrollera null och undefined använde jag || för att kontrollera
om något av värdena har dessa värden.
Jag satte ! framför hela uttrycket för att vända resultatet.
Med && kontrollerar jag sedan att båda parametrarna är nummer
och inte NaN.
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
Reflektion uppgift 5:

Skillnaden mellan parameter, variabel och argument:
- En parameter är namnet som står inom parentesen när man skapar en funktion.
  I detta fall num1 och num2.
- Ett argument är värdet man skickar in när man anropar funktionen,
  exempelvis 3 och 5 i add(3, 5).
- En variabel används för att spara ett värde.

Det sista värdet på num1 blir 0 eftersom den globala variabeln
num1 aldrig ändras. Parametern num1 i funktionen är en separat variabel.

Sum blir -5 eftersom test 4 sparar resultatet från add(-5, num1)
i variabeln sum.

Förklaring av testerna:

Test 1:
sum har värdet false och 1 är ett nummer.
num1 == 0 blir true eftersom false == 0 är sant med ==.
num2 === "0" blir false eftersom 1 inte är texten "0".
num2 === 0 blir false eftersom 1 inte är 0.
num1 == NaN blir false eftersom NaN aldrig är lika med något.
Ternary operator skriver ut falsy eftersom false är falsy.
Funktionen returnerar "Felaktig input".

Test 2:
"0" är en sträng och 3 är ett nummer.
num1 == 0 blir true eftersom JavaScript omvandlar "0" till 0.
num2 === "0" blir false eftersom 3 inte är texten "0".
num2 === 0 blir false eftersom 3 inte är 0.
num1 == NaN blir false.
Ternary operator skriver ut truthy eftersom "0" är en sträng med innehåll.
Funktionen returnerar "Felaktig input".

Test 3:
3 är ett nummer och "num1" är text.
num1 == 0 blir false eftersom 3 inte är 0.
num2 === "0" blir false eftersom "num1" inte är "0".
num2 === 0 blir false eftersom "num1" är text.
num1 == NaN blir false.
Ternary operator skriver ut truthy eftersom 3 är truthy.
Funktionen returnerar "Felaktig input".

Test 4:
-5 och num1 (0) är båda nummer.
num1 == 0 blir false eftersom -5 inte är 0.
num2 === "0" blir false eftersom num2 är ett nummer och inte text.
num2 === 0 blir true eftersom num2 är 0.
num1 == NaN blir false.
Ternary operator skriver ut truthy eftersom -5 är truthy.
Funktionen returnerar -5 och sparar resultatet i sum.

Test 5:
arg1 saknar ett värde och är därför undefined.
num1 == 0 blir false eftersom undefined inte är 0.
num2 === "0" blir false eftersom 7 inte är texten "0".
num2 === 0 blir false eftersom 7 inte är 0.
num1 == NaN blir false.
Ternary operator skriver ut falsy eftersom undefined är falsy.
Funktionen returnerar "Felaktig input".

Test 6:
Inga argument skickas till funktionen.
Både num1 och num2 får därför värdet undefined.
Jämförelserna blir false och ternary operator skriver ut falsy.
Funktionen returnerar "Felaktig input".

num1 == NaN blir alltid false eftersom NaN aldrig är lika med något.
*/
