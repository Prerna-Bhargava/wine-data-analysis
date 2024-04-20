export const calculateMean = (data, property, classValue) => {
     // filter data based on the alcohol class
    const filteredData = data.filter(item => item.Alcohol === classValue);
    if (filteredData.length === 0) return null; // Return null if no data points are found for the class
  
    const sum = filteredData.reduce((total, curr) => {
      let value = parseFloat(curr[property]);
     
      return total + (isNaN(value) ? 0 : value); // Replace undefined, NaN, or invalid values with 0
    }, 0);
  
    return (sum / filteredData.length).toFixed(3);
};
  
export const calculateMedian = (data, property, classValue) => {
    const filteredData = data.filter(item => item.Alcohol === classValue);
    if (filteredData.length === 0) return null; // Return null if no data points are found for the class
  
    const sortedData = filteredData
      .map(item => {
        let value = parseFloat(item[property]);
        return value;
      }) 
      .filter(value => !isNaN(value)) // Filter out undefined, NaN, or invalid values
      .sort((a, b) => a - b);
  
    const middleIndex = Math.floor(sortedData.length / 2);
    if (sortedData.length === 0) return null; 
  
    if (sortedData.length % 2 === 0) {
      return ((sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2).toFixed(3);
    } else {
      return sortedData[middleIndex].toFixed(3);
    }
};
  
export const calculateMode = (data, property, classValue) => {
    const filteredData = data.filter(item => item.Alcohol === classValue);
    if (filteredData.length === 0) return null; // Return null if no data points are found for the class
  
    const frequencyMap = {};
    filteredData.forEach(item => {
      let value = parseFloat(item[property]);
      if (!isNaN(value)) { // Exclude undefined, NaN, or invalid values
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      }
    });
  
    if (Object.keys(frequencyMap).length === 0) return null; // Return null if no valid data points are found after filtering
  
    let mode = null;
    let maxFrequency = 0;
    // finding the frequency of each entry to find mode
    Object.entries(frequencyMap).forEach(([value, frequency]) => {
      if (frequency > maxFrequency) {
        mode = parseFloat(value); 
        maxFrequency = frequency;
      }
    });
  
    return mode.toFixed(3);
};


