import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 99%;
  height: 100vh;
  border: 1px solid;
  margin: 5px;
`;

export const CalendarHead = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
`;

export const SevenColGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 27px;
`;

export const HeadDay = styled.span`
  text-align: center;
  background: darkkhaki;
  font-size: 1.2rem;
`;

export const CalendarBody = styled.div`
  height: calc(100% - 27px - 40px);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const StyledDay = styled.span`
  border: 1px solid;
  text-align: right;
  padding: 5px;
  ${({ active }) => active && 'background: pink'}
`;

export const StyledEvent = styled.span`
  display: grid;
  text-align: center;
  background: ${({ bgColor }) => bgColor || 'gray'};
  color: white;
  padding: 2px 7px;
  border-radius: 8px;
`;