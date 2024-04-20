import React from 'react';
import { Space, Table, Text } from '@mantine/core';
import { calculateMean, calculateMedian, calculateMode } from "../utils/Stats";

function CustomTable({ data,classes,measure }) {
   
  const renderTableHeader = () => {
    return (
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Measure</Table.Th>
          {classes.map(classValue => (
            <Table.Th key={classValue}>Class {classValue}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
    );
  };

  const renderTableBody = () => {
    return (
      <Table.Tbody>
        <Table.Tr>
          <Table.Th>{measure} Mean</Table.Th>
          {classes.map(classValue => (
            <Table.Td key={classValue}>{calculateMean(data, measure, classValue)}</Table.Td>
          ))}
        </Table.Tr>
        <Table.Tr>
          <Table.Th>{measure} Median</Table.Th>
          {classes.map(classValue => (
            <Table.Td key={classValue}>{calculateMedian(data, measure, classValue)}</Table.Td>
          ))}
        </Table.Tr>
        <Table.Tr>
        <Table.Th>{measure} Mode</Table.Th>
          {classes.map(classValue => (
            <Table.Td key={classValue}>{calculateMode(data, measure, classValue)}</Table.Td>
          ))}
        </Table.Tr>
      </Table.Tbody>
    );
  };

  return (
    <>
    
    <Text fw={500}>{measure} Analysis</Text>
    <Space h="md" />

    <Table highlightOnHover withTableBorder withColumnBorders>
      {renderTableHeader()}
      {renderTableBody()}
    </Table>

    <Space h="md" />

    </>
  );
}

export default CustomTable;
