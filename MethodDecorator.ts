// Method decorator
function Log(classPrototype: any, methodName: string, methodDescriptor: PropertyDescriptor) {
    const originalMethod = methodDescriptor.value;
    methodDescriptor.value = function (...args: any[]) {
        console.log(`Calling ${methodName} with ${args}`);
        return originalMethod.apply(this, args);
    };
}

class Calculation {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}

const object = new Calculation();
let sum = object.add(2, 4);
console.log("Sum:", sum);