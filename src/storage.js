const STORAGE_KEY = 'expenses_v1';

export function loadExpenses() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error('Failed to load expenses', e);
        return [];
    }
}

export function saveExpenses(expenses) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (e) {
        console.error('Failed to save expenses', e);
    }
}

export function clearAllExpenses() {
    localStorage.removeItem(STORAGE_KEY);
}

export function importExpensesFromJson(json) {
    try {
        const parsed = JSON.parse(json);
        if (!Array.isArray(parsed)) throw new Error('Invalid format');
        // basic validation & normalization
        const normalized = parsed.map(e => ({
            id: e.id || (Date.now() + Math.random()).toString(36),
            title: String(e.title || 'Untitled'),
            amount: Number(e.amount || 0),
            category: e.category || 'Other',
            date: e.date ? new Date(e.date).toISOString() : new Date().toISOString()
        }));
        saveExpenses(normalized);
        return normalized;
    } catch (err) {
        throw err;
    }
}
