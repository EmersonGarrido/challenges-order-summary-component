import React from "react";
import Button from "./components/Button";

import Background from "./public/images/illustration-hero.svg";
import Icon from "./public/images/icon-music.svg";
import * as S from "./styles/app";

const src: React.FC = () => {
  return (
    <S.Container>
      <S.Header style={{ backgroundImage: `url(${Background})` }}></S.Header>
      <S.Card>
        <S.Title>
          <span>Order Summary</span>
        </S.Title>
        <S.Description>
          <span>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </span>
        </S.Description>
        <S.Box>
          <S.CardPayments>
            <S.Infomartions>
              <S.Icon>
                <img src={Icon} alt="Icone" />
              </S.Icon>
              <S.InfoPrices>
                <S.TitlePrice>Annual Plan</S.TitlePrice>
                <S.Value>$59.99/year</S.Value>
              </S.InfoPrices>
            </S.Infomartions>
            <S.Details>
              <a href="#">Change</a>
            </S.Details>
          </S.CardPayments>
        </S.Box>
        <S.Action>
          <Button title="Proceed to Payment" />
        </S.Action>
        <S.Action>
          <S.Button>Cancel Order</S.Button>
        </S.Action>
      </S.Card>
    </S.Container>
  );
};

export default src;
