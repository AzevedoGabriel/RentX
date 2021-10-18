import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import ArrowSvg from '../../assets/arrow.svg';

import {
   Container,
   Header,
   Title,
   RentalPeriod,
   DateTitle,
   DateInfo,
   DateValue,
   Content,
   Footer,
} from './styles';
import { Button } from '../../components/Button';


export function Scheduling(){
    const theme = useTheme();
  return (
    <Container>
        <Header>.
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <BackButton 
                onPress={() => {}}
                color={theme.colors.shape}
            />

            <Title>
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
            </Title>

            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue selected={false}>25/03/2021</DateValue>
                </DateInfo>

                <DateInfo>
                    <DateTitle>Até</DateTitle>
                    <DateValue selected={false}>27/03/2021</DateValue>
                </DateInfo>

                <ArrowSvg />
            </RentalPeriod>

        </Header>

        <Content>

        </Content>

        <Footer>
            <Button 
                title="Confirmar"
            />
        </Footer>

    </Container>
  );
}