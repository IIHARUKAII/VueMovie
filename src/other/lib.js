const pushToArray = (seat, arr) => {
    const ids = arr.map(s => s.id )
    const idx = ids.indexOf(seat.id)
    if(idx === -1 ){
         this.selectSeats.push(seat)
    }else{
        this.selectSeats.splice(idx, 1)
    }
}

export { pushToArray }