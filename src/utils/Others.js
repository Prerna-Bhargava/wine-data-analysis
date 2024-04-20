
export const getClasses=(data) => {
    const alcoholClasses = [...new Set(data.map(item => item.Alcohol))];
    return alcoholClasses
}

export const calculateGamma = (data) => {
    return data.map(item => {
      const gamma = (item.Ash * item.Hue) / item.Magnesium;
      return { ...item, Gamma: gamma };
    });
  };
