const sidebarFunction = () => {

  $( document ).ready(function() {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
  });

}

sidebarFunction();

