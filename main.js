// Load saved search engine on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedEngine = localStorage.getItem('quellSearchEngine');
    if (savedEngine) {
        document.getElementById('searchEngineSelector').value = savedEngine;
    }

    // Add Enter key event listener to search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Autofocus on search input
    searchInput.focus();
});

// Save selected search engine to local storage
function saveSearchEngine() {
    const selector = document.getElementById('searchEngineSelector');
    localStorage.setItem('quellSearchEngine', selector.value);
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchEngineSelector = document.getElementById('searchEngineSelector');
    
    // Trim and encode the search query
    const query = encodeURIComponent(searchInput.value.trim());
    
    // If query is not empty, open search in new tab
    if (query) {
        const searchUrl = searchEngineSelector.value + query;
        window.open(searchUrl, '_blank');
        
        // Clear the search input
        searchInput.value = '';
    }
}

// Toggle settings modal
function toggleSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.toggle('show');
};