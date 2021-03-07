
import React from 'react';
import colors from '../../styles/colors';

import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Container, Button, Avatar, RightSide, OnlineStatus } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
    {/* button 01 */}
        <Button>
          <MaterialIcons 
          
          name="notifications-none"
          size={26}
          color={colors.black}
          
          />
        </Button>

{/* button 02 */}
        <Button>
          <MaterialCommunityIcons
          
          name="message-outline"
          size={26}
          color={colors.black}
          
          />
        </Button>

    {/* button 03 */}
        <Button>
          <Feather 
          
          name="search"
          size={26}
          color={colors.black}
          
          />
        </Button>


      </RightSide>
    </Container>
  );
};

export default Header;
