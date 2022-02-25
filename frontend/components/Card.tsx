import { Box, Divider, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Container,
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    extendTheme,
    Stack,
    Heading,
    Center
} from '@chakra-ui/react'
import { SetStateAction, useState } from "react";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
/**
function Card() {
    return  <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' p="4px">
        <Text fontSize='5xl'>Dear Blueno,</Text>
        <Button colorScheme='blue'>Help</Button>
        </Box>
    </div>
}
*/

const activeLabelStyles = {
    transform: 'scale(0.85) translateY(-24px) translateX(-10px)',
}
export const theme = extendTheme({
    components: {
        Form: {
            variants: {
                floating: {
                    container: {
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles,
                            },
                        },
                        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                        {
                            ...activeLabelStyles,
                        },
                        label: {
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            position: 'absolute',
                            backgroundColor: 'white',
                            pointerEvents: 'none',
                            mx: 3,
                            px: 1,
                            my: 2,
                        },
                    },
                },
            },
        },
    },
})

const theme2 = extendTheme({
    fonts: {
      heading: 'Open Sans, sans-serif',
      body: 'Raleway, sans-serif',
    },
  })

function Card() {
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const handleInputChange2 = (e) => setInput2(e.target.value)
    const handleInputChange3 = (e) => setInput3(e.target.value)
    const isError = input === ''
    const isError2 = input3 === ''
    return (
        <><>
        <ChakraProvider theme={theme2}></ChakraProvider>
        <Center>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' p="4px" borderColor='white'>
            <Heading fontSize='5xl'>Dear Blueno,</Heading>
            <Box m={[2, 3]} />
            <Text fontSize='1xl'>I want to tell you the struggles of my soul. Why? To be means to communicate. 
            To be means to be for another, and through the other, for oneself. 
            A person has no internal sovereign territory, he is wholly and always on the boundary; 
            looking inside himself, he looks into the eyes of another or with the eyes of another</Text>
        </Box>
        </Center>
        <ChakraProvider/>
        <ChakraProvider theme={theme}>
            <form>
                <Box p={8}>
                    <FormControl variant='floating' id='first-name'>
                        <Input placeholder=' ' id='first-name' type='first-name' value={input2}
                            onChange={handleInputChange2} />
                        <FormLabel htmlFor='first-name'>First name</FormLabel>
                    </FormControl>
                    <Box m={[2, 3]} />

                    <FormControl variant='floating' id='email' isRequired isInvalid={isError}>
                        <Input placeholder=' ' id='email' type='email' value={input}
                            onChange={handleInputChange} />
                        {/* It is important that the Label comes after the Control due to css selectors */}
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        {!isError ? (
                            <FormHelperText>
                                We'll never share your email.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <Box m={[2, 3]} />

                    <FormControl variant='floating' id='password' isRequired isInvalid={isError2}>
                        <Input placeholder=' ' id='password' type='password' value={input3}
                            onChange={handleInputChange3} />
                        {/* It is important that the Label comes after the Control due to css selectors */}
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        {!isError2 ? (
                            <FormHelperText>
                                Your password should have both upper and lower case letters.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Password is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <Box m={[2, 3]} />
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='teal' variant='solid' type="submit">
                            Submit
                        </Button>
                        <Button
                            isLoading
                            loadingText='Perpetually Loading Button of Doom'
                            colorScheme='teal'
                            variant='outline'
                        >
                        </Button>
                    </Stack>
                </Box>
                </form>
            </ChakraProvider>
        </></>
    )
}

export default Card;