import React from "react";

import { Text } from "react-native";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import { StreamContainer, 
         StreamThumbnail, 
         StreamColumn, 
         StreamRow,
         StreamDescription,
         StreamCategory,
         StreamHeader,
         StreamAvatar,
         StreamUsername,
         TagRow,
         TagView,
         TagText,
         List
        } from "./styles";

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Carlos_lima👽🚀</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
              Front-end com React Native
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

          <TagRow>

            <TagView>
              <TagText>Português</TagText>
            </TagView>
            <TagView>
              <TagText>Web Development</TagText>
            </TagView>

          </TagRow>

      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
