import React from 'react';

import {
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  List,
  RightSide,
  WhiteCircle,
  

} from './styles'

const ChannelList: React.FC = () => {

  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
        <Username> carlos_lima 🚀🚀</Username>
        <Info>1.264 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>

    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
