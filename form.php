<?php
  include('head.php');
?>

<body>

<?php
  include('navigation.php');
?>

<?php
  include('main_header.php');
?>
<div class="center jumbotron" style="width: 50%; align: center; margin: 10px auto; background-color: #C0C0C0; border: 2px solid #000; box-shadow: 10px 10px 15px #000; margin-bottom: 45px;">
  <h1 style="font-family: 'Lora', serif; font-size: 25px; text-shadow: 10px 10px 15px #000; text-align: center; margin-bottom: 30px;">
    Please Select Your Form:
  </h1>
  <table border="0" align="center">
    <tr>
      <td>
        <button type="button" class="btn btn-lg btn-outline-success" style="font-family: 'Cinzel', serif;" onclick="Form1Click()">Form 1</button>
      </td>
      <td>
        <button type="button" class="btn btn-lg btn-outline-success" style="font-family: 'Cinzel', serif;" onclick="Form2Click()">Form 2</button>
      </td>
      <td>
        <button type="button" class="btn btn-lg btn-outline-success" style="font-family: 'Cinzel', serif;" onclick="Form3Click()">Form 3</button>
      </td>
    </tr>
    <tr>
      <td>
        <button type="button" class="btn btn-lg btn-outline-primary" style="font-family: 'Cinzel', serif;" onclick="Form4Click()">Form 4</button>
      </td>
      <td>
        <button type="button" class="btn btn-lg btn-outline-primary" style="font-family: 'Cinzel', serif;" onclick="Form5Click()">Form 5</button>
      </td>
      <td>
        <button type="button" class="btn btn-lg btn-outline-primary" style="font-family: 'Cinzel', serif;" onclick="Form6Click()">Form 6</button>
      </td>
    </tr>
  </table>
</div>

<?php
  include('forms/form1.php');
?>

<?php
  include('forms/form2.php');
?>

<?php
  include('forms/form3.php');
?>

<?php
  include('forms/form4.php');
?>

<?php
  include('forms/form5.php');
?>

<?php
  include('forms/form6.php');
?>
