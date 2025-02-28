<script src="scripts/jquery-3.6.4.min.js"></script>
<script src="scripts/LeaderLine/leader-line.min.js"></script>




<script>
function toggleBox(header) {
    $(header).next('.dd-box, .ddm-box, .ddm-box-2border').slideToggle("slow");
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
// When the user clicks on div, open the popup
function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
</script>



<script>
document.querySelector('.ddm-box').classList.add('show-arrow'); // Adds downward arrow
document.querySelector('.ddm-box').classList.add('show-up-arrow'); // Adds upward arrow
</script>


<script>
function flip(element) {
  element.classList.toggle("flip-active");
}

</script>