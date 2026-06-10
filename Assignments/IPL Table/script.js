async function getData() {
    try {
        const response = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
        const data = await response.json();

        // Sort by NRR (ascending order)
        data.sort((a, b) => a.NRR - b.NRR);

        let tableBody = document.getElementById("tableBody");

        data.forEach(team => {
            let row = `
                <tr>
                    <td>${team.Team}</td>
                    <td>${team.Matches}</td>
                    <td>${team.Won}</td>
                    <td>${team.Lost}</td>
                    <td>${team.Points}</td>
                    <td>${team.NRR}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getData();