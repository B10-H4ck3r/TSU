<!-- Start Div Block for Form 1 -->
<div class="form_div" id="Form1Div" style="display: none;">
  <h1 style="font-family: 'Crimson Text', serif; font-size: 20px; color: #000; text-shadow: 10px 10px 15px #000;">
    Please Feel Free To Fill Out This Form, Or Download It.
  </h1><br/>
  <button type="button" class="btn btn-lg btn-success" style="font-family: 'Cinzel', serif;">Download Form 1</button><br/>
  <br/>
  <form method="" action="POST">
    <label style="font-family: 'Cinzel', serif; font-size: 15px;">First Name:</label><br/>
    <input type="text" id="fname" style="font-family: 'Nanum Myeongjo', serif;"><br/>
    <label style="font-family: 'Cinzel', serif; font-size: 15px;">Last Name:</label><br/>
    <input type="text" id="lname" style="font-family: 'Nanum Myeongjo', serif"><br/>
    <label style="font-family: 'Cinzel', serif; font-size: 15px;">Insured Already:</label><br/>
    <select style="font-family: 'Nanum Myeongjo', serif;" id="insured" name="insured">
      <option value="Yes" onclick="InsuredAlreadyYes()">Yes</option>
      <option value="No" onclick="InsuredAlreadyNo()">No</option>
    </select><br/>
    <div id="InsuredYes" style="display: none">
      <label style="font-family: 'Cinzel', serif; font-size: 15px;">Insurance Agent Name:</label><br/>
      <input type="text" id="insagntName" style="font-family: 'Nanum Myeongjo', serif;">
    </div>
    <div id="InsuredNo" style="display: none">
      <label style="font-family: 'Cinzel', serif; font-size: 15px;">Time of Lapse:</label><br/>
      <input type="text" id="inslapseTime" style="font-family: 'Nanum Myeongjo', serif">
    </div>
    <br/>
    <button type="submit" class="btn btn-lg btn-success">Submit Form</button>
  </form>
</div>
<!-- End Div Block for Form 1 -->
