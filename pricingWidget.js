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
    // Add other locations...
  },
  "Dominican Republic": {
    "Punta Cana": {
      "Oct": 1517,
      "Nov": 1547,
      // Add other months...
    },
    // Add other locations...
  },
  "Cuba": {
    "Varadero": {
      "Oct": 989,
      "Nov": 1023,
      // Add other months...
    },
    // Add other locations...
  }
};

// Function to Calculate Cost
function calculateCost() {
  const month = document.getElementById('month').value;
  const country = document.getElementById('country').value;
  const location = document.getElementById('location').value;
  const adults = parseInt(document.getElementById('travelers').value);
  const children = parseInt(document.getElementById('children').value);
  const childDiscount0To4 = 1.0; // Children 0-4 stay free
  const childDiscount5To12 = 0.4; // Children 5-12 pay 60% of adult price

  if (pricingData[country] && pricingData[country][location] && pricingData[country][location][month]) {
    const costPerAdult = pricingData[country][location][month];
    if (costPerAdult) {
      // Calculations for different age groups
      const numChildren0To4 = Math.min(children, 2); // Assuming max 2 children can stay free (0-4 years)
      const numChildren5To12 = Math.max(0, children - numChildren0To4); // Remaining children are 5-12

      const costPerChild0To4 = 0; // Free for children 0-4
      const costPerChild5To12 = costPerAdult * (1 - childDiscount5To12);

      // Total Costs
      const totalCostAdults = costPerAdult * adults;
      const totalCostChildren0To4 = costPerChild0To4 * numChildren0To4;
      const totalCostChildren5To12 = costPerChild5To12 * numChildren5To12;

      const totalCost = totalCostAdults + totalCostChildren0To4 + totalCostChildren5To12;

      // Output details
      document.getElementById('result').innerHTML = `
        <p>Average Cost per Adult Traveler: $${costPerAdult.toFixed(2)}</p>
        <p>Average Cost per Child (0-4 years): Free</p>
        <p>Average Cost per Child (5-12 years): $${costPerChild5To12.toFixed(2)}</p>
        <p>Total Estimated Cost: $${totalCost.toFixed(2)}</p>
      `;
    } else {
      document.getElementById('result').innerText = 'Cost information not available for the selected month.';
    }
  } else {
    document.getElementById('result').innerText = 'Cost information not available for the selected options.';
  }
}
