import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import mypic from '../assets/mypic.jpg';

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About us</Text>
          <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>We are the Best Crypto Trading App in India, We provide our guidance at very reasonable price </Text>
        </VStack>

        <VStack>
          <Avatar src={mypic} boxSize={"28"} mt={["4", "0"]} />

          <a href="https://anandfitdev.netlify.app/" rel="noreferrer"  target="_blank"><Text color={'blue.100'}>
            Our Founder</Text></a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
