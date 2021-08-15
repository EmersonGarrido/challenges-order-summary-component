import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Header = styled.div`
  height: 450px;
  border-radius: 10px 10px 0px 0px;
  background-color: blue;
  width: 350px;
  height: 150px;
  background-size: cover;
`;

export const Card = styled.div`
  background-color: white;
  width: 350px;
  border-radius: 0px 0px 10px 10px;
`;

export const Action = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  text-align: center;
  width: 80%;
  padding: 15px;
  color: #7280A7;
  font-weight: bold;
  border-radius: 5px;
  padding-bottom: 50px;
  cursor: pointer;
  &:hover{
    color: #1F3055;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding: 20px;
  span{
    font-weight: bold;
    font-size: 1.7em;
  }
`;

export const Description = styled.div`
  text-align: center;
  padding-bottom: 25px;
  span{
    color: #7280A7;
  }
`;

export const Infos = styled.div``;

export const CardPayments = styled.div`
  background-color: #F5F7FE;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const Icon = styled.div`
  margin-right: 5px;
`;

export const Infomartions = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoPrices = styled.div``;

export const TitlePrice = styled.div`
  font-size: 14px;
  color: #1F3055;
  font-weight: bold;
`;

export const Value = styled.div`
 font-size: 14px;
 color: #7280A7;
`;

export const Details = styled.div`
 font-weight: bold;
 font-size: 14px;
 margin-right: 5px;
`;