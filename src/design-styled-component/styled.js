import styled from 'styled-components'

export const HeaderBar = styled.div`
background-color: darkslategrey;
min-height: 80px;
display: flex;
flex-direction: row-reverse;
align-items: center;
padding: 0 0.6rem;
justify-content: space-between;
`
export const Menu = styled.div`
    background-color: rgb(59, 91, 91);
    align-self: stretch;
    min-width: 80px;
`
export const Logo = styled.div`
width: 60px;
height: 60px;
background-color: rgb(134, 145, 143);
border-radius: 100%;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
`
export const Content = styled.div`
background-color: rgb(213, 213, 213);
    flex-grow: 2;
    padding: .8rem;
    box-sizing: border-box;

`
export const CardItem=styled.div`
background-color: rgb(224, 224, 224);
padding: .6rem;
margin-bottom: .6rem;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
min-height: 80px;
`
export const CardNotif = styled.div`
background-color: rgba(201, 201, 201, 0.5);
border-radius: 100%;
width: 20px;
height: 20px;
position: absolute;
bottom: 5px;
right: 5px;
box-shadow: inset 0px 0px 5px rgba(0, 0, 0, .2);

`
export const Card = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
border-radius: 5px;
background-color: aliceblue;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
margin-bottom: .8rem;
min-height: 120px;
position: relative;

`
export const FooterBar = styled.div`
background-color: darkslategrey;
min-height: 215px;
display: flex;
flex-direction: row-reverse;
align-items: flex-end;
padding: .6rem;

`
export const FooterMenu = styled.div`
flex-grow: 2;
  background-color: rgb(59, 91, 91);
  align-self: stretch;
  min-height: 100%;
`