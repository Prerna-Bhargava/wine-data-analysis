import data from "./data/Wine-Data.json"
import { useEffect, useState } from "react";
import { getClasses, calculateGamma } from "./utils/Others";
import CustomTable from "./components/CustomTable";
import { Container, MantineProvider, Space, Text } from "@mantine/core";
import "@mantine/core/styles.css";
function App() {

  const [gammaData, setGammaData] = useState([])

  useEffect(() => {

    // calculating gamma for each data point
    const dataWithGamma = calculateGamma(data);
    setGammaData(dataWithGamma)

  }, [])

  return (
    <MantineProvider>
      <Container>

        <Text fw={500} ta="center">Wine-Data Analysis</Text>
        <Space h="lg" />

        {/* Calling custom table component to display both the tables */}
        <CustomTable data={data} measure="Flavanoids" classes={getClasses(data)} />
        <CustomTable data={gammaData} measure="Gamma" classes={getClasses(gammaData)} />

      </Container>
    </MantineProvider>
  );
}

export default App;
