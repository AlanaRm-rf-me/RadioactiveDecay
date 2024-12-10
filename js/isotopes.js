export const ISOTOPE_DATA = {
    "Actinium (Ac)": [
        { id: 'Ac-225', name: 'Ac-225', halfLife: 10.0, unit: 'days' },
        { id: 'Ac-227', name: 'Ac-227', halfLife: 21.772, unit: 'years' },
        { id: 'Ac-228', name: 'Ac-228', halfLife: 6.15, unit: 'hours' }
    ],
    "Americium (Am)": [
        { id: 'Am-241', name: 'Am-241', halfLife: 432.2, unit: 'years' },
        { id: 'Am-243', name: 'Am-243', halfLife: 7370, unit: 'years' }
    ],
    "Antimony (Sb)": [
        { id: 'Sb-122', name: 'Sb-122', halfLife: 2.7238, unit: 'days' },
        { id: 'Sb-124', name: 'Sb-124', halfLife: 60.20, unit: 'days' },
        { id: 'Sb-125', name: 'Sb-125', halfLife: 2.75856, unit: 'years' }
    ],
    "Beryllium (Be)": [
        { id: 'Be-7', name: 'Be-7', halfLife: 53.22, unit: 'days' },
        { id: 'Be-10', name: 'Be-10', halfLife: 1.387e6, unit: 'years' }
    ]
};

// Helper function to convert all half-lives to days for calculations
export function getHalfLifeInDays(halfLife, unit) {
    switch (unit.toLowerCase()) {
        case 'years':
            return halfLife * 365.25; // Account for leap years
        case 'days':
            return halfLife;
        case 'hours':
            return halfLife / 24;
        case 'minutes':
            return halfLife / (24 * 60);
        case 'seconds':
            return halfLife / (24 * 60 * 60);
        default:
            throw new Error(`Unknown unit: ${unit}`);
    }
}

// Helper function to get all elements
export function getAllElements() {
    return Object.keys(ISOTOPE_DATA);
}

// Helper function to get isotopes for an element
export function getIsotopesForElement(element) {
    return ISOTOPE_DATA[element] || [];
}

// Helper function to get isotope by ID
export function getIsotopeById(element, isotopeId) {
    const isotopes = getIsotopesForElement(element);
    return isotopes.find(isotope => isotope.id === isotopeId);
}

// Helper function to format half-life for display
export function formatHalfLife(halfLife, unit) {
    return `${halfLife} ${unit}`;
} 