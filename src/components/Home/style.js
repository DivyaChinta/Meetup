import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const HomeHeading = styled.h1`
  color: #334155;
  font-size: 52px;
  font-family: 'Roboto';
`
export const HomePara = styled.p`
  color: #475569;
  font-size: 22px;
  font-family: 'Roboto';
`

export const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
`

export const Image = styled.img`
  height: 350px;
  width: 90%;
  margin-top: 30px;
`

export const Name = styled.h1`
  color: #2563eb;
  font-size: 45px;
  font-family: 'Roboto';
`

export const Topic = styled.p`
  color: #334155;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
`

export default HomeContainer
