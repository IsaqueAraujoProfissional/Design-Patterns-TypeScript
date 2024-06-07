import VehicleType from "../components/VehicleType";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import Wheel from "../components/Wheel";

export default class VehicleSimple {

    private _vehicleType: VehicleType;
    private _seats: number;
    private _engine: Engine;
    private _transmission: Transmission;
    private _wheels: Wheel[] = [];

    addWheel(wheel: Wheel) {
        this._wheels.push(wheel);
        return this;
    }

    get wheels(): Wheel[] {
        return this._wheels;
    }

    get wheelsTotal(): number {
        return this._wheels.length;
    }

    get vehicleType(): VehicleType {
        return this._vehicleType;
    }

    setVehicleType(vehicleType: VehicleType) {
        this._vehicleType = vehicleType;
        return this;
    }

    get seats(): number {
        return this._seats;
    }

    setSeats(seats: number) {
        this._seats = seats;
        return this;
    }

    get engine(): Engine {
        return this._engine;
    }

    setEngine(engine: Engine) {
        this._engine = engine;
        return this;
    }

    get transmission(): Transmission {
        return this._transmission;
    }

    setTransmission(transmission: Transmission) {
        this._transmission = transmission;
        return this;
    }

}