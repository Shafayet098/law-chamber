export const getItemFormLocalStorage =()=>{
    const bookings = localStorage.getItem('booking')
    if(bookings){
        const parseBookings = JSON.parse(bookings)
        return parseBookings;
    }
    else{
        return [];
    }
}

export const setItemIntoLocalStorage = (id)=>{
    const bookings = getItemFormLocalStorage();
    if(bookings.includes(id)){
        console.log("This id is already existed")
    }
    else{
        console.log(typeof id)
        bookings.push(id)
        console.log("OK Done")
        console.log(bookings);
        const newBookings = JSON.stringify(bookings);
        localStorage.setItem('booking', newBookings)
        // console.log(newBookings)
    }
}

export const removeItemFromLocalStorage=(removeId)=>{
    const storedId = getItemFormLocalStorage();
    // console.log(typeof removeId)
    const intID = storedId.map(id=>parseInt(id));
    // console.log(intID)
    const newID = intID.filter(id=>id!==removeId )
    // console.log(newID)
    const stringID = newID.map(String)
    // console.log(stringID)
    const stringifyID = JSON.stringify(stringID);
     localStorage.setItem('booking', stringifyID)
    //  window.location.reload()
}