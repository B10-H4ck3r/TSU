// Start Form 1 Button Click Hide/Show Form 1 //
function Form1Click()
{
  var f1 = document.getElementById("Form1Div");
  if (f1.style.display === "none")
  {
    f1.style.display = "block";
    document.getElementById("Form2Div").style.display = "none";
    document.getElementById("Form3Div").style.display = "none";
    document.getElementById("Form4Div").style.display = "none";
    document.getElementById("Form5Div").style.display = "none";
    document.getElementById("Form6Div").style.display = "none";
  }
  else
  {
    f1.style.display = "none";
  }
}

  // Start Form 1 -> Insured Already Options //
  function InsuredAlreadyYes()
  {
    var insYes = document.getElementById("InsuredYes");
    if (insYes.style.display === "none")
    {
      insYes.style.display = "block";
      document.getElementById("InsuredNo").style.display = "none";
    }
    else
    {
      insYes.style.display = "none";
    }
  }
  function InsuredAlreadyNo()
  {
    var insNo = document.getElementById("InsuredNo");
    if (insNo.style.display === "none")
    {
      insNo.style.display = "block";
      document.getElementById("InsuredYes").style.display = "none";
    }
    else
    {
      insNo.style.display = "none";
    }
  }
  // End Form 1 -> Insured Already Options //
// Start Form 1 Button Click Hide/Show Form 1 //

// Start Form 2 Button Click Hide/Show Form 2 //
function Form2Click()
{
  var f2 = document.getElementById("Form2Div");
  if (f2.style.display === "none")
  {
    f2.style.display = "block";
    document.getElementById("Form1Div").style.display = "none";
    document.getElementById("Form3Div").style.display = "none";
    document.getElementById("Form4Div").style.display = "none";
    document.getElementById("Form5Div").style.display = "none";
    document.getElementById("Form6Div").style.display = "none";
  }
  else
  {
    f2.style.display = "none";
  }
}
// End Form 2 Button Click Hide/Show Form 2 //

// Start Form 3 Button Click Hide/Show Form 3 //
function Form3Click()
{
  var f3 = document.getElementById("Form3Div");
  if (f3.style.display === "none")
  {
    f3.style.display = "block";
    document.getElementById("Form1Div").style.display = "none";
    document.getElementById("Form2Div").style.display = "none";
    document.getElementById("Form4Div").style.display = "none";
    document.getElementById("Form5Div").style.display = "none";
    document.getElementById("Form6Div").style.display = "none";
  }
  else
  {
    f3.style.display = "none";
  }
}
// End Form 3 Button Click Hide/Show Form 3 //

// Start Form 4 Button Click Hide/Show Form 4 //
function Form4Click()
{
  var f4 = document.getElementById("Form4Div");
  if (f4.style.display === "none")
  {
    f4.style.display = "block";
    document.getElementById("Form3Div").style.display = "none";
    document.getElementById("Form2Div").style.display = "none";
    document.getElementById("Form1Div").style.display = "none";
    document.getElementById("Form5Div").style.display = "none";
    document.getElementById("Form6Div").style.display = "none";
  }
  else
  {
    f4.style.display = "none";
  }
}
// End Form 4 Button Click Hide/Show Form 4 //

// Start Form 5 Button Click Hide/Show Form 5 //
function Form5Click()
{
  var f5 = document.getElementById("Form5Div");
  if (f5.style.display === "none")
  {
    f5.style.display = "block";
    document.getElementById("Form4Div").style.display = "none";
    document.getElementById("Form3Div").style.display = "none";
    document.getElementById("Form2Div").style.display = "none";
    document.getElementById("Form1Div").style.display = "none";
    document.getElementById("Form6Div").style.display = "none";
  }
  else
  {
    f5.style.display = "none";
  }
}
// End Form 5 Button Click Hide/Show Form 5 //

// Start Form 6 Button Click Hide/Show Form 6 //
function Form6Click()
{
  var f6 = document.getElementById("Form6Div");
  if (f6.style.display === "none")
  {
    f6.style.display = "block";
    document.getElementById("Form1Div").style.display = "none";
    document.getElementById("Form2Div").style.display = "none";
    document.getElementById("Form3Div").style.display = "none";
    document.getElementById("Form4Div").style.display = "none";
    document.getElementById("Form5Div").style.display = "none";
  }
  else
  {
    f6.style.display = "none";
  }
}
