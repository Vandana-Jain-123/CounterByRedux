import React from 'react'
import { Flex, Box } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>

            <Box p={5} boxShadow="10" >
                <Flex justify={"space-between"}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/todo">Todo</NavLink>
                </Flex>
            </Box>
        </div>
    )
}

export default Navbar
