function switchTab(button) {
    // Get all tabs and panels
    const tabs = document.querySelectorAll('menu[role="tablist"] button');
    const panels = document.querySelectorAll('article[role="tabpanel"]');
    
    // Hide all panels and deselect all tabs
    panels.forEach(panel => {
        panel.style.display = 'none';
    });
    tabs.forEach(tab => {
        tab.setAttribute('aria-selected', 'false');
    });
    
    // Show selected panel and select the tab
    const panelId = button.getAttribute('aria-controls');
    const selectedPanel = document.getElementById(panelId);
    if (selectedPanel) {
        selectedPanel.style.display = 'block';
        button.setAttribute('aria-selected', 'true');
    }
}

function navigateTo(panelId) {
    // Find the corresponding tab button
    const tabButtons = document.querySelectorAll('[role="tablist"] button');
    const targetButton = Array.from(tabButtons).find(button => 
        button.getAttribute('aria-controls') === panelId
    );
    
    if (targetButton) {
        switchTab(targetButton);
    } else {
        // If no tab button exists, just show the panel
        const panels = document.querySelectorAll('[role="tabpanel"]');
        panels.forEach(panel => panel.hidden = true);
        document.getElementById(panelId).hidden = false;
    }
}

function toggleTree() {
    const treeView = document.querySelector('.tree-view');
    const contentArea = document.querySelector('.content-area');
    
    if (treeView.style.display === 'none') {
        treeView.style.display = 'block';
        contentArea.style.paddingLeft = '220px';
    } else {
        treeView.style.display = 'none';
        contentArea.style.paddingLeft = '20px';
    }
}

// Add click handlers to all tree view links
document.addEventListener('DOMContentLoaded', function() {
    const treeLinks = document.querySelectorAll('.tree-view a');
    treeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the # from href
            navigateTo(targetId);
        });
    });
});

// Initialize tabs on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active tab
    const defaultTab = document.querySelector('menu[role="tablist"] button[aria-selected="true"]');
    if (defaultTab) {
        switchTab(defaultTab);
    }
});

function openTopster() {
    window.location.href = 'topster.html';
} 
