// Pricing Data
const pricingData = {
  "Mexico": {
    "Cancun": {
      "Oct": 1519,
      "Nov": 1635,
      "Dec": 1605,
      "Jan": 1559,
      "Feb": 1449,
      "Mar": 1399,
      "Apr": 1641,
      "May": 1581,
      "Jun": 1611,
      "Jul": 1929,
      "Aug": 1929,
      "Sep": 2005
    },
    "Cozumel": {
      "Oct": 1439,
      "Nov": 1699,
      "Dec": 1689,
      "Jan": 2239,
      "Feb": 2089,
      "Mar": 1999,
      "Apr": 1918,
      "May": 1912,
      "Jun": 1899,
      "Jul": 1975,
      "Aug": 1950,
      "Sep": 1880
    },
    "Huatulco": {
      "Oct": 1808,
      "Nov": 1798,
      "Dec": 1808,
      "Jan": 1918,
      "Feb": 2008,
      "Mar": 1918,
      "Apr": 1768,
      "May": 1912,
      "Jun": 1845,
      "Jul": 1920,
      "Aug": 1950,
      "Sep": 1750
    },
    "Ixtapa/Zihuatanejo": {
      "Oct": 1614,
      "Nov": 1374,
      "Dec": 1394,
      "Jan": 1624,
      "Feb": 1884,
      "Mar": 1614,
      "Apr": 1654,
      "May": 1700,
      "Jun": 1800,
      "Jul": 1850,
      "Aug": 1900,
      "Sep": 1650
    },
    "Los Cabos": {
      "Oct": 1340,
      "Nov": 1350,
      "Dec": 1360,
      "Jan": 1540,
      "Feb": 1591,
      "Mar": 1540,
      "Apr": 1540,
      "May": 1730,
      "Jun": 1590,
      "Jul": 1920,
      "Aug": 1980,
      "Sep": 1750
    },
    "Mayan Riviera": {
      "Oct": 1349,
      "Nov": 1439,
      "Dec": 1419,
      "Jan": 1369,
      "Feb": 1389,
      "Mar": 1479,
      "Apr": 1521,
      "May": 1561,
      "Jun": 1920,
      "Jul": 1909,
      "Aug": 1975,
      "Sep": 1890
    },
    "Mazatlan": {
      "Oct": 1606,
      "Nov": 1336,
      "Dec": 1346,
      "Jan": 1466,
      "Feb": 1436,
      "Mar": 1576,
      "Apr": 1675,
      "May": 1700,
      "Jun": 1750,
      "Jul": 1850,
      "Aug": 1950,
      "Sep": 1700
    },
    "Puerto Vallarta": {
      "Oct": 1250,
      "Nov": 1180,
      "Dec": 1180,
      "Jan": 1411,
      "Feb": 1440,
      "Mar": 1470,
      "Apr": 1430,
      "May": 1490,
      "Jun": 1600,
      "Jul": 1820,
      "Aug": 1820,
      "Sep": 1700
    }
  },
  "Dominican Republic": {
    "La Romana": {
      "Oct": 1497,
      "Nov": 1527,
      "Dec": 1525,
      "Jan": 1553,
      "Feb": 1705,
      "Mar": 1665,
      "Apr": 1525,
      "May": 1513,
      "Jun": 1523,
      "Jul": 1963,
      "Aug": 2153,
      "Sep": 2000
    },
    "Puerto Plata": {
      "Oct": 1441,
      "Nov": 1383,
      "Dec": 1243,
      "Jan": 1413,
      "Feb": 1273,
      "Mar": 1273,
      "Apr": 1400,
      "May": 1300,
      "Jun": 1375,
      "Jul": 1973,
      "Aug": 1945,
      "Sep": 1800
    },
    "Punta Cana": {
      "Oct": 1517,
      "Nov": 1547,
      "Dec": 1545,
      "Jan": 1633,
      "Feb": 1635,
      "Mar": 1673,
      "Apr": 1543,
      "May": 1533,
      "Jun": 1543,
      "Jul": 2013,
      "Aug": 2213,
      "Sep": 1973
    },
    "Samana": {
      "Oct": 1891,
      "Nov": 1903,
      "Dec": 1773,
      "Jan": 2043,
      "Feb": 2103,
      "Mar": 2133,
      "Apr": 1713,
      "May": 1833,
      "Jun": 1863,
      "Jul": 2283,
      "Aug": 2563,
      "Sep": 2150
    },
    "Santo Domingo": {
      "Oct": 1519,
      "Nov": 1725,
      "Dec": 1645,
      "Jan": 1545,
      "Feb": 1545,
      "Mar": 1635,
      "Apr": 1855,
      "May": 1969,
      "Jun": 1820,
      "Jul": 2100,
      "Aug": 2074,
      "Sep": 1900
    }
  },
  "Cuba": {
    "Cayo Coco": {
      "Oct": 1029,
      "Nov": 1069,
      "Dec": 1029,
      "Jan": 1219,
      "Feb": 1359,
      "Mar": 1309,
      "Apr": 1349,
      "May": 1499,
      "Jun": 1400,
      "Jul": 1500,
      "Aug": 1550,
      "Sep": 1450
    },
    "Havana": {
      "Oct": 1269,
      "Nov": 1359,
      "Dec": 1379,
      "Jan": 1525,
      "Feb": 1505,
      "Mar": 1525,
      "Apr": 1545,
      "May": 1709,
      "Jun": 1550,
      "Jul": 1650,
      "Aug": 1750,
      "Sep": 1600
    },
    "Varadero": {
      "Oct": 989,
      "Nov": 1023,
      "Dec": 1000,
      "Jan": 1113,
      "Feb": 1193,
      "Mar": 1193,
      "Apr": 1063,
      "May": 1063,
      "Jun": 1140,
      "Jul": 1140,
      "Aug": 1445,
      "Sep": 1445,
    }
  }
};

// Function to Calculate Cost
function calculateCost() {
  const month = document.getElementById('month').value;
  const country = document.getElementById('country').value;
  const location = document.getElementById('location').value;
  const adults = parseInt(document.getElementById('travelers').value);
  const children = parseInt(document.getElementById('children').value);
  const childDiscount = 0.4; // Children 5-12 pay 60% of adult price

  if (pricingData[country] && pricingData[country][location] && pricingData[country][location][month]) {
    const costPerAdult = pricingData[country][location][month];
    if (costPerAdult) {
      const costPerChild = costPerAdult * (1 - childDiscount);
      const totalCost = (costPerAdult * adults) + (costPerChild * children);
      
      // Displaying result
      document.getElementById('result').innerHTML = `
        <p>Average Cost per Adult Traveler: $${costPerAdult.toFixed(2)}</p>
        <p>Average Cost per Child (0-4 years): Free</p>
        <p>Average Cost per Child (5-12 years): $${costPerChild.toFixed(2)}</p>
        <p>Total Estimated Cost: $${totalCost.toFixed(2)}</p>
      `;
    } else {
      document.getElementById('result').innerText = 'Cost information not available for the selected month.';
    }
  } else {
    document.getElementById('result').innerText = 'Cost information not available for the selected options.';
  }
}
