document.addEventListener('DOMContentLoaded', () => {
    fetch('csv/CSV-Hall-of-fame-train.csv')
      .then(response => response.text())
      .then(data => {
        const parsedData = Papa.parse(data, { header: true }).data;
        const tableContainer = document.getElementById('csvTableContainer');
        const table = document.createElement('table');
        table.className = 'csv-table';
  
        if (parsedData.length > 0) {
          // Create table header row
          const headerRow = document.createElement('tr');
          for (const header of Object.keys(parsedData[0])) {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
          }
          table.appendChild(headerRow);
  
          // Create table data rows
          for (const rowData of parsedData) {
            const dataRow = document.createElement('tr');
            for (const value of Object.values(rowData)) {
              const td = document.createElement('td');
              td.textContent = value;
              dataRow.appendChild(td);
            }
            table.appendChild(dataRow);
          }
  
          tableContainer.appendChild(table);
        }
      });
  });
  