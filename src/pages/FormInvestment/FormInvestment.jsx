import './FormInvestment.css';
import React from 'react';
import { Flex, Box, Center, FormControl, FormLabel, Input, Select, HStack, Button, extendTheme } from "@chakra-ui/react";



export default function FormInvestment() {

  return (
    <Box h="100vh">

      <Center as="header" h={150} bg="teal.500" color="white" fontWeight="bold" fontSize="4xl" pb="8">
        Simule seu investimento 
      </Center>

      <Flex align="center" justify="center" bg="black" h="calc(100vh - 150px)">

        <Center w="100%" maxW={840} bg="black" top={100} position="absolute" borderRadius={5} p="6" boxShadow="0 1px 2px #ccc">

          <FormControl display="flex" flexDir="column" gap="4">

            <HStack spacing="4">

              <Box w="100%">

                <FormLabel htmlFor="nome" color={"white"}>Valor Inicial Investimento</FormLabel>

                <Input id="nome" type='number' placeholder='R$ 0,00' />

              </Box>

              <Box w="100%">

                <FormLabel htmlFor="email" color={"white"}>Valor Aporte Mensal</FormLabel>

                <Input id="email" type="number" placeholder='R$0,00'/>

              </Box>

            </HStack>

            <HStack spacing="4">

              <Box w="100%">

                <FormLabel htmlFor="natural" color={"white"}>Escolha seu título</FormLabel>

                <Select id="natural" style={{ backgroundColor: "black", color: "white" }}>
                  <option value="" style={{ backgroundColor: "black", color: "white" }} disabled hidden>Selecione seu título</option>
                  <option value='Titulo 1' style={{ backgroundColor: "black", color: "white" }}>Titulo 1</option>
                  <option value='Titulo 2' style={{ backgroundColor: "black", color: "white" }}>Titulo 2</option>
                  <option value='Titulo 3' style={{ backgroundColor: "black", color: "white" }}>Titulo 3</option>
                </Select>

              </Box>

            </HStack>

            <HStack spacing="4">
              
              <Box w="100%">

                <FormLabel htmlFor="nasc" color={"white"}>Data de Vencimento</FormLabel>

                <Input id="nasc" type="date" color={"white"}/>

              </Box>

              <Box w="100%">

                <FormLabel htmlFor="Tefone" color={"white"}>Rentabilidade</FormLabel>

                <Input id="Tefone" type="number" placeholder='Rentabilidade' _placeholder={{ color: "white" }} />

              </Box>

            </HStack>

            <HStack justify="center">

              <Button w={240} p="6" type="submit" bg="teal.600" color="white" fontWeight="bold" fontSize="xl" mt="2" _hover={{ bg: "teal.800" }}>
                Enviar
              </Button>

            </HStack>

          </FormControl>

        </Center>

      </Flex>

    </Box>
  )
}
