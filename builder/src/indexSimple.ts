import Engine from "./components/Engine";
import Transmission from "./components/Transmission";
import VehicleType from "./components/VehicleType";
import Wheel from "./components/Wheel";
import VehicleSimple from "./products/VehicleSimple";



const sedan: VehicleSimple = new VehicleSimple().setVehicleType(VehicleType.SEDAN).setSeats(5).setTransmission(Transmission.AUTOMATIC).setEngine(new Engine(1600))
.addWheel(new Wheel(15)).addWheel(new Wheel(15)).addWheel(new Wheel(15)).addWheel(new Wheel(15));

console.log(`Criado um veículo do tipo: ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas`);