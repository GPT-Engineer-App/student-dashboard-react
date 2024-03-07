import React from "react";
import { Box, Flex, Text, Heading, VStack, HStack, Image, Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";
import { FaUserGraduate, FaPhone, FaUserTie, FaChartBar } from "react-icons/fa";

const Index = () => {
  // Dummy data for the student
  const student = {
    name: "John Doe",
    rollNumber: "22",
    section: "A",
    fatherName: "Richard Roe",
    contactInfo: "+123456789",
    class: "10th Grade",
  };

  // Dummy data for attendance and marks graphs
  const attendance = 85; // in percentage
  const marks = 76; // in percentage

  return (
    <Box p={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          Student Dashboard
        </Heading>
        {/* Student Information */}
        <Box p={5} shadow="md" borderWidth="1px">
          <HStack spacing={8} align="center">
            <Box>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5ODAzMjM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Student Portrait" />
            </Box>
            <VStack align="stretch">
              <Text fontSize="2xl">
                <FaUserGraduate /> {student.name}
              </Text>
              <Text fontSize="lg">Roll Number: {student.rollNumber}</Text>
              <Text fontSize="lg">
                Class & Section: {student.class} - {student.section}
              </Text>
              <Text fontSize="lg">
                <FaUserTie /> Father's Name: {student.fatherName}
              </Text>
              <Text fontSize="lg">
                <FaPhone /> Contact Information: {student.contactInfo}
              </Text>
            </VStack>
          </HStack>
        </Box>
        {/* Graphs for Attendance and Marks */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg" mb={4}>
            Performance Overview
          </Heading>
          <StatGroup>
            <Stat>
              <StatLabel>Attendance</StatLabel>
              <StatNumber>{attendance}%</StatNumber>
              <Box>
                <FaChartBar />
                {/* Placeholder for Attendance Graph */}
              </Box>
            </Stat>
            <Stat>
              <StatLabel>Marks</StatLabel>
              <StatNumber>{marks}%</StatNumber>
              <Box>
                <FaChartBar />
                {/* Placeholder for Marks Graph */}
              </Box>
            </Stat>
          </StatGroup>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
