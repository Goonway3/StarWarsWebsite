function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    if (!menu.classList.contains('active')) {
    // Chowanie wszystkich podmenu jeśli menu się zwija
    hideAllSubmenus();
    }
}
function hideAllSubmenus() {
    const submenus = ['galaxy', 'characters', 'vehicles-starships', 'weapons', 'factions', 'history', 'trivia'];
    submenus.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
    });
}
function toggleGalaxyMenu() {
    hideAllSubmenus();
    document.getElementById('galaxy').classList.toggle('active');
}
function toggleCharactersMenu() {
    hideAllSubmenus();
    document.getElementById('characters').classList.toggle('active');
}
function toggleVehiclesStarshipsMenu() {
    hideAllSubmenus();
    document.getElementById('vehicles-starships').classList.toggle('active');
}
function toggleWeaponsMenu() {
    hideAllSubmenus();
    document.getElementById('weapons').classList.toggle('active');
}
function toggleFactionsMenu() {
    hideAllSubmenus();
    document.getElementById('factions').classList.toggle('active');
}
function toggleHistoryMenu() {
    hideAllSubmenus();
    document.getElementById('history').classList.toggle('active');
}