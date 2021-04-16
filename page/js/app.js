const content = document.getElementById("defaultAssortment");

const data = {
    items: [
        {
            name: "NE555",
            description: "Classic timer IC",
            amount: 88,
            tags: ["analog", "timer", "oscillator"],
            datasheet: "NONE",
            sources: ["None"]
        },
        {
            name: "NE556",
            description: "Classic dual timer IC",
            amount: 88,
            tags: ["analog", "timer", "oscillator"],
            datasheet: "NONE",
            sources: ["None"]
        },
        {
            name: "MAX232",
            description: "Classic RS232 driver",
            amount: 88,
            tags: ["digital", "driver", "rs232"],
            datasheet: "NONE",
            sources: ["None"]
        },
        {
            name: "MAX485",
            description: "Classic RS485 driver",
            amount: 88,
            tags: ["digital", "driver", "rs485"],
            datasheet: "NONE",
            sources: ["None"]
        },
        {
            name: "L286",
            description: "Classic DC-Motor driver",
            amount: 88,
            tags: ["analog", "dirver", "motor"],
            datasheet: "NONE",
            sources: ["None"]
        }
    ]
};

function clearContent(content) {
    content.innerHTML = `<tr class="headline">
    <th class="empty"></th>
    <th>Name</th>
    <th>Beschreibung</th>
    <th>Menge</th>
    <th>Kategorien</th>
    <th>Datenblatt</th>
    <th>Bezugsquellen</th>
</tr>`;
}

function addRow(content, row, item) {
    content.innerHTML += 
    `<tr class="data">
     <th>${row}</th>
     <td>${item.name}</td>
     <td>${item.description}</td>
     <td>${item.amount}</td>
     <td>${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</td>
     <td>${item.datasheet}</td>
     <td>${item.sources.join("<br/>")}</td>
     </tr>`;
}

clearContent(content);
data.items.forEach((element, index) => {
    addRow(content, index + 1, element);
});