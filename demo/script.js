"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const $tabBoxes = document.querySelectorAll(".tabs-box");
    for (const $tabBox of $tabBoxes) {
        const $tabs = $tabBox.querySelectorAll(".tabs a");
        for (let i = 0; i < $tabs.length; ++i) {
            const $tab = $tabs[i];
            $tab.addEventListener("click", (event) => {
                event.preventDefault();
                for (let $eventTab of $tabs) {
                    $eventTab.classList.remove('is-active');
                }
                event.target.classList.add('is-active');
                const $pages = $tabBox.querySelectorAll(".tabs-page");
                for (let $page of $pages) {
                    $page.classList.remove('is-active');
                }
                $pages[i].classList.add('is-active');
            });
        }
    }
});