const trasladar = () => {
    const inputName = document.getElementById('name-input').value;
    const inputDate = document.getElementById('date-input').value;
    const rowInput = document.getElementById('row-input').value
    const seatInput = document.getElementById('seat-input').value;

    const ticketName = document.getElementById('ticket-name');
    const ticketDate = document.getElementById('ticket-date');
    const ticketSeat = document.getElementById('ticket-seat');

    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    ticketName.textContent = `Nombre: ${inputName}`;
    ticketDate.textContent = `Fecha: ${formattedDate}`;
    ticketSeat.textContent = `Butaca: Fila ${rowInput}, Asiento ${seatInput}`;
}
