function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CbXr058Tu5":
        Script1();
        break;
  }
}

function Script1()
{
  let person = prompt("Please enter your name:", "");
if (person == null || person == "") {
    let person = prompt("Please enter your name:", "");
  } else {
    var player = GetPlayer();
    player.SetVar("learner",person);
  }
}

