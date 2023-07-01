import styled from 'styled-components';
import img from '../image/phone.png';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-color: #2f303a;
  background-image: url(${img});
  background-size: cover;
`;

export const Header = styled.header`
  padding-bottom: 10px;
  margin: 0 auto;
  border-bottom: 1px solid #787878;
`;

export const PageContainer = styled.div`
  max-width: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 85vh;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-top: 1px solid #787878;
  padding: 10px;
  }
`;
