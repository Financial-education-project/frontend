import './FormInvestment.css';
import React from 'react';
import {
  Flex,
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  HStack,
  Button
} from "@chakra-ui/react";

export default function FormInvestment() {

  return (
    <Box h="100vh">

      <Center as="header" h={150} bg="teal.500" color="white" fontWeight="bold" fontSize="4xl" pb="8">
        Simule seu investimento 
      </Center>

      <Flex align="center" justify="center" bg="blackAlpha.200" h="calc(100vh - 150px)">

        <Center w="100%" maxW={840} bg="white" top={100} position="absolute" borderRadius={5} p="6" boxShadow="0 1px 2px #ccc">

          <FormControl display="flex" flexDir="column" gap="4">

            <HStack spacing="4">

              <Box w="100%">

                <FormLabel htmlFor="nome">Valor Inicial Investimento</FormLabel>

                <Input id="nome" type='number' placeholder='R$ 0,00' />

              </Box>

              <Box w="100%">

                <FormLabel htmlFor="email">Valor Aporte Mensal</FormLabel>

                <Input id="email" type="number" placeholder='R$0,00'/>

              </Box>

            </HStack>

            <HStack spacing="4">

              <Box w="100%">

                <FormLabel htmlFor="natural">Escolha seu título</FormLabel>

                <Select id="natural" placeholder='Selecione seu título'>
                  <option value='Titulo 1'>Titulo 1</option>
                  <option value='Titulo 2'>Titulo 2</option>
                  <option value='Titulo 3'>Titulo 3</option>
                </Select>

              </Box>

            </HStack>

            <HStack spacing="4">
              
              <Box w="100%">

                <FormLabel htmlFor="nasc">Data de Vencimento</FormLabel>

                <Input id="nasc" type="date" />

              </Box>

              <Box w="100%">

                <FormLabel htmlFor="Tefone">Rentabilidade</FormLabel>

                <Input id="Tefone" type="number" placeholder='Rentabilidade'/>

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
