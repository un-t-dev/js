function Timecount() {
  let ms = $("#m_second").text();
  let se = $("#second").text();
  let mi = $("#minute").text();
  let ho = $("#hour").text();
  ms++
  $("#m_second").text(ms);
  if ($("#m_second").text == 10) {
    se++;
     $("#m_second").text(0);
     $("#second").text(se);
  }
  if ($("#second").text == 60) {
    mi++;
    $("#second").text(0);
    $("#minutu").text(mi);
  }
  if ($("#second").text()==60) {
    ho++;
    $("#minutu").text(0);
    $("#hour").text(ho);
  }
}
  let start = 0;
  let time_count = "null";
  $(document).ready(function() {
    $("#start").click (function() {
      start += 1
      if (start == 1) {
        time_count = setInterval(TimeCount, 100);
      };
    });
    $("#stop").click(function() {
      clearInterval(time_count);
      start = 0;
    });
    $("#reset").click(function() {
      clearInterval(time_count);
      start=0;
      $("#hour").text(0);
      $("#minutu").text(0);
      $("#second").text(0);
      $("#m_second").text(0);
    });
  });

 