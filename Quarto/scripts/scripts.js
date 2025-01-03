<script src="scripts/jquery-3.6.4.min.js"></script>
<script src="scripts/LeaderLine/leader-line.min.js"></script>




<script>
function toggleBox(header) {
    $(header).next('.dd-box, .ddm-box').slideToggle("slow");
}
</script> 

<script>
    function showContent(clickedElement) {
        // Hide all content divs
        var allContents = document.getElementsByClassName('content');
        for (var i = 0; i < allContents.length; i++) {
            allContents[i].style.display = 'none';
        }

        // Deactivate all nav options
        var allNavOptions = document.getElementsByClassName('nav-option');
        for (var i = 0; i < allNavOptions.length; i++) {
            allNavOptions[i].classList.remove('active');
        }

        // Show the selected content
        var option = clickedElement.getAttribute('data-option');
        document.getElementById(option + 'Content').style.display = 'block';

        // Activate the selected nav option
        clickedElement.classList.add('active');
    }
</script>

<script>
  // Wait for the document to fully load
  document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the fragment class
    const fragments = document.querySelectorAll('.fragment');
    
    // Add an event listener to each fragment to change its color on click
    fragments.forEach(function(fragment, index) {
      fragment.addEventListener('click', function() {
        // Change the color to red on click
        fragment.style.color = 'red';
      });
    });
  });
</script>

<script>
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>