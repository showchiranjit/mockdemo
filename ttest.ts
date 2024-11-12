function createPayloadFromTrip(trip: Trip): any {
    const tripsArray = Object.keys(trip.deliveryTasksByTenantId).map(tenantId => {
        const deliveryTasks = trip.deliveryTasksByTenantId[tenantId];
        
        return {
            tripId: trip.tripId,
            orderIds: deliveryTasks.map(task => task.orderId),
            taskAttributes: deliveryTasks.map(task => ({
                taskId: task.id,
                orderId: task.orderId
            }))
        };
    });

    const payload = {
        trips: tripsArray,
        reasonCode: "LMD618", // Example reason code
        carrier: "FLEX" // Example carrier
    };

    return payload;
}
