import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 320px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1280px;
  }
`;