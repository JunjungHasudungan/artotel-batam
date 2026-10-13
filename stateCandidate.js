function stateCandidate() {
    return {
        open: false,
        listDepartement: [
            {id: 1, label: "Front Office"},
            {id: 2, label: "Engineering"},
            {id: 3, label: "Housekeeping"},
        ],
        candidates: [
            {id:1, name:"Kandidat 01", label:"Muhammad Ridho & Front office", photo:"assets/Ridho-1.jpeg"},
            {id:2, name:"Kandidat 02", label:"Margareth Delvia & Engineering", photo:"assets/Margareth-2.jpeg"},
            {id:3, name:"Kandidat 03", label:"Samsul Sinaga & Housekeeping", photo:"assets/Samsul-3.jpeg"}
        ],
        selectedDepartment: null,
        init() {
            console.log('test')
        },
        btnConfirmation() {
            console.log('testing')
        }
    }
}