export function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 1: return 4;
        case 2: return 8;
        default: return 0;
    }
}

export function calculateWage() {
    const empCheck = Math.floor(Math.random() * 3);
    const wagePerHour = 20;
    const wage = getWorkingHours(empCheck) * wagePerHour;
    console.log(`Employee Daily Wage : $${wage}`);
}

// calculateWage();