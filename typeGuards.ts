// 1️⃣ Custom Type Guards for Complex Objects
type Car1 = { model: string, wheels: number };
type Bike1 = { brand: string, hasPedals: boolean };

function isCar1(vehicle: Car1 | Bike1): boolean {
    return (vehicle as Car1).wheels !== undefined;
}

const myVehicle1: Car1 | Bike1 = { model: "Tesla", wheels: 4 };
const myVehicle2: Car1 | Bike1 = { brand: "Honda", hasPedals: false };

if (isCar1(myVehicle1)) {
    console.log(myVehicle1.model);  // ✅ TypeScript knows it's a Car
}

if (isCar1(myVehicle2)) {
    console.log(myVehicle2.brand);  // ✅ TypeScript knows it's a Car
}