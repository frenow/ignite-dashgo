import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData=true}:ProfileProps) {
    return(
        <Flex align="center">
        {showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Emerson Duarte</Text>
                <Text color="gray.300" fontSize="small">emersonduarte@yahoo.com.br</Text>
            </Box>
        )}
        <Avatar size="md" name="Emerson Duarte" src="https://github.com/frenow.png"/>
    </Flex>        
    )
}