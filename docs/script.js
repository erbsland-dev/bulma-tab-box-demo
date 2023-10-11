"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const $tabBoxes = document.querySelectorAll(".tabs-box");

    for (const $tabBox of $tabBoxes) {
        $tabBox.addEventListener("click", (event) => {
            const $tabLink = event.target.closest(".tabs a");
            if (!$tabLink) return;
            event.preventDefault();

            // Deactivate current active tab and page
            const $activeTab = $tabBox.querySelector(".tabs li.is-active");
            if ($activeTab) {
                $activeTab.classList.remove('is-active');
            }

            const $activePage = $tabBox.querySelector(".tabs-page.is-active");
            if ($activePage) {
                $activePage.classList.remove('is-active');
            }

            // Activate clicked tab
            const $clickedLiElement = $tabLink.closest('li');
            $clickedLiElement.classList.add('is-active');

            // Activate corresponding page
            const $tabLinks = $tabBox.querySelectorAll(".tabs a");
            const index = Array.from($tabLinks).indexOf($tabLink);
            const $pages = $tabBox.querySelectorAll(".tabs-page");
            $pages[index].classList.add('is-active');
        });
    }
});
