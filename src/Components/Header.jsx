import { HStack ,Button} from '@chakra-ui/react'
import React from 'react'
import {Link }from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} display={"flex"} alignItems={"center"} justifyContent={'center'}>

      <Button mr={'5'} variant={'unstyled'} color={'white'}>
        <Link to='/'>Home</Link>
      </Button>

      <Button mr={'5'} variant={'unstyled'} color={'white'}>
        <Link to='/coins'>Coins</Link>
      </Button>

      {/* <Button mr={'5'} variant={'unstyled'} color={'white'}>
        <Link to='/coins/:id'>CoinsDetail</Link>
      </Button> */}

      <Button variant={'unstyled'} color={'white'}>
        <Link to='/exchange'>Exchange</Link>
      </Button>

    </HStack>
  )
}

export default Header