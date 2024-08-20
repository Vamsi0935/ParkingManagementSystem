class ParkingLot {
  constructor(id, floors, slotsPerFloor) {
    this.id = id;
    this.floors = floors;
    this.slotsPerFloor = slotsPerFloor;
    this.slots = this.initializeSlots();
  }

  initializeSlots() {
    const slots = [];
    for (let floor = 0; floor < this.floors; floor++) {
      slots[floor] = [];
      for (let slot = 0; slot < this.slotsPerFloor; slot++) {
        if (slot === 0) slots[floor][slot] = "truck";
        else if (slot < 3) slots[floor][slot] = "bike";
        else slots[floor][slot] = "car";
      }
    }
    return slots;
  }

  getAvailableSlots(type) {
    const availableSlots = [];
    for (let floor = 0; floor < this.floors; floor++) {
      for (let slot = 0; slot < this.slotsPerFloor; slot++) {
        if (this.slots[floor][slot] === type) {
          availableSlots.push({ floor, slot });
        }
      }
    }
    return availableSlots;
  }

  parkVehicle(vehicle) {
    const availableSlots = this.getAvailableSlots(vehicle.type);
    if (availableSlots.length === 0) return null;

    const { floor, slot } = availableSlots[0];
    const ticket = `${this.id}_${floor + 1}_${slot + 1}`;
    this.slots[floor][slot] = { ...vehicle, ticket };
    return ticket;
  }

  unparkVehicle(ticket) {
    for (let floor = 0; floor < this.slots.length; floor++) {
      for (let slot = 0; slot < this.slots[floor].length; slot++) {
        if (
          this.slots[floor][slot] &&
          this.slots[floor][slot].ticket === ticket
        ) {
          this.slots[floor][slot] = this.initialType(floor, slot);
          return true;
        }
      }
    }
    return false;
  }

  initialType(floor, slot) {
    if (slot === 0) return "truck";
    if (slot < 3) return "bike";
    return "car";
  }

  getSlotStatus() {
    const status = [];
    for (let floor = 0; floor < this.floors; floor++) {
      status[floor] = [];
      for (let slot = 0; slot < this.slotsPerFloor; slot++) {
        const slotContent = this.slots[floor][slot];
        status[floor][slot] = {
          type:
            slotContent === "truck" ||
            slotContent === "bike" ||
            slotContent === "car"
              ? slotContent
              : "unknown",
          vehicle: typeof slotContent === "object" ? slotContent : null,
        };
      }
    }
    return status;
  }
}

export default ParkingLot;
