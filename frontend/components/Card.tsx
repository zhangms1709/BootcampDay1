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
    Heading
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
    const handleInputChange = (e) => setInput(e.target.value)
    const handleInputChange2 = (e) => setInput2(e.target.value)
    const isError = input === ''
    return (
        <><>
        <ChakraProvider theme={theme2}></ChakraProvider>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' p="4px">
            <Heading fontSize='5xl'>Dear Blueno,</Heading>
            <Text fontSize='1xl'>I want to tell you the struggles of my soul</Text>
        </Box>
        <ChakraProvider/>
        <ChakraProvider theme={theme}>
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
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='teal' variant='solid'>
                            Submit
                        </Button>
                        <Button
                            isLoading
                            loadingText='Perpetually Loading Button of Doom'
                            colorScheme='teal'
                            variant='outline'
                        >
                            submit
                        </Button>
                    </Stack>
                </Box>
            </ChakraProvider>
        </></>
    )
}

export default Card;