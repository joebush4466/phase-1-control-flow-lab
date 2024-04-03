function scuberGreetingForFeet(value){
  let greeting;
  if (value <= 400){ greeting = 'This one is on me!';}
    else if (value > 400 && value < 2000){greeting = 'That will be twenty bucks.'}
      else if (value > 2000 && value <= 2500){ greeting = 'I will gladly take your thirty bucks.'}
      else if (value > 2500) { greeting = 'No can do.'}
return greeting;
}

function ternaryCheckCity(city){
  let response 
  city === 'NYC' ? response = "Ok, sounds good.": response = "No go.";
  return response
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let response;
  switch(tip){
    case 'generous' :
      response = "Thank you so much.";
    break;
    case 'not as generous' : 
      response = 'Thank you.';
      break;
    default : response = 'Bye.';
    break;}
  return response}