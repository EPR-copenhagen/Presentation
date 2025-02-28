<script>
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("collapsible")) {
      e.target.classList.toggle("open");
      const nextContent = e.target.nextElementSibling;
      if (nextContent && nextContent.classList.contains("content")) {
          nextContent.style.display =
              nextContent.style.display === "block" ? "none" : "block";
      }
  }
}

);

</script>