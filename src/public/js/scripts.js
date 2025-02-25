/*=============== FILTERS TABS ===============*/
$('[data-target]').each(function() {
    $(this).on('click', function() {
        const target = $($(this).data('target'));
        $('[data-content]').removeClass('filters-active');
        target.addClass('filters-active');
        $('[data-target]').removeClass('filter-tab-active');
        $(this).addClass('filter-tab-active');
    });
});


/*=============== DARK LIGHT THEME ===============*/
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const getCurrentTheme = () => $('body').hasClass(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => $('#theme-button').hasClass(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We obtain the current OS theme
const osTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// We obtain the theme that user previously chose or the OS theme
const selectedTheme = localStorage.getItem('selected-theme') || osTheme;
const selectedIcon = localStorage.getItem('selected-icon') || (osTheme === 'dark' ? 'ri-moon-line' : 'ri-sun-line');

if (selectedTheme) {
    $('body').toggleClass(darkTheme, selectedTheme === 'dark');
    $('#theme-button').toggleClass(iconTheme, selectedIcon === 'ri-moon-line');
}

$('#theme-button').on('click', function() {
    $('body').toggleClass(darkTheme);
    $(this).toggleClass(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.profile-border`);
sr.reveal(`.profile-name`, { delay: 500 });
sr.reveal(`.profile-profession`, { delay: 600 });
sr.reveal(`.profile-social`, { delay: 700 });
sr.reveal(`.profile-info-group`, { interval: 100, delay: 700 });
sr.reveal(`.profile-buttons`, { delay: 800 });
sr.reveal(`.filters-content`, { delay: 900 });
sr.reveal(`.filters`, { delay: 1000 });
