// Function that always throws based on unreachable code
const throwError = (): never => {
    throw new Error('Something went wrong');
}

// Infinite loop with condition that never becomes false
const infiniteLoop = (): never => {
    while (true) { }
}

// The default should never be reached if all cases are handled
type conditionType = "dog" | "cat";

const switchFunction = (condition: conditionType): string => {
    switch (condition) {
        case "dog": return "Pug";
        case "cat": return "Meow";
        default: const givenCondition: never = condition;
            throw new Error(`Error occured due to condition: ${givenCondition}`);
    }
}