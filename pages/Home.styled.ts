import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  min-height: 100vh;
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;
