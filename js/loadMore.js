 $(document).ready(function () {
            let initialItems = 3;
            let itemsToShow = 3;

            let $projects = $(".container-section-four-ul-project");
            $projects.hide();
            $projects.slice(0, initialItems).show();

            $("#loadMore").click(function () {
              let hiddenItems = $projects.filter(":hidden");
              hiddenItems.slice(0, itemsToShow).slideDown();

              if (hiddenItems.length <= itemsToShow) {
                $(this).fadeOut();
              }
            });
          });