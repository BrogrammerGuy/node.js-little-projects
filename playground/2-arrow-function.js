// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x //- Shorthand is only used when function is one line

// console.log(square(4))

const event = {
    name: 'Birthday Party',
    guestList: ['Afandy', 'Hossam', 'X'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()