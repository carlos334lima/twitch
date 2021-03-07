//importação para verificar a platarforma do usuário => IOS, Androide...
import { Platform } from 'react-native'
import styled from 'styled-components/native';
import Constants from 'expo-constants'

import colors from '../../styles/colors'


//O objetivo SafeAreaViewé renderizar conteúdo dentro dos 
//limites da área segura de um dispositivo
//verificando o S.O do usuário
const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0; 

export const Wrapper = styled.SafeAreaView`

  background: ${colors.primary};
  flex: 1;
  padding-top: ${ statusBarHeight + 'px' };

`;

export const Container = styled.View`

  padding-left: 14px;

`;

export const Main = styled.View`

  

`
