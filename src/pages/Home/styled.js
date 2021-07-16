import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 5rem;
    color: #000;
    display: block;
    margin: 1% ;
    background: red;
    height: 15vh;
  width: 100vw;
  text-align: center;

 

    
`;

export const SubTitle = styled.h4`
    font-size: 2rem;
    color: #808090;
    margin: 0;
    margin: 0 4%;
    text-align: center;
    height: 10vh;
  width: 100vw;
    `;

export const HomeContainer = styled.div`
flex-direction: column;
  display: block;
  height: 10vh;
  width: 100vw;

  font-size: 2.5rem;
  text-align: center;
  font-family: Bradley Hand, cursive;
 
  background: -webkit-animation: colorchange 60s infinite; 
  animation: colorchange 60s infinite;
  }
  @-webkit-keyframes colorchange {
   0%  {background: #33FFF3;}
  25%  {background: #78281F;}
  50%  {background: #117A65;}
  75%  {background: #DC7633;}
  100% {background: #9B59B6;}
  }
  @keyframes colorchange {
   0%  {background: #33FFF3;}
  25%  {background: #78281F;}
  50%  {background: #117A65;}
  75%  {background: #DC7633;}
  100% {background: #9B59B6;};

  max-width: 100rem;
  margin-top: 0rem;
  flex: 1;

  


`;


export const Content = styled.li`
  width: 100vw;
  display: block;
  align-items: center;
  justify-content: center;

  background: #ffa500;
  max-width: 100rem;
  margin-top: 32.5rem;
  flex: 1;
  font-size: 2rem;
  text-align: center;

`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.7rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 2rem;
  text-align: center;
  height: auto;
  width: 100vw;
  background: #0000CD;
`;

export const Img = styled.img`
display: flex;



flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 4%;

@media(min-width: 769px) { 
  margin: 2%;
}

`;

export const Body = styled.body`

`;

export const SectionFooter = styled.section`
width: 100vw;
  
  align-items: center;
  justify-content: center;
  background-color: #1b262c;

  
  max-width: 100rem;
  
  flex: 1;
  font-size: 1rem;
  text-align: center;  


  width: 100vw;
  max-width: 100rem;
  height: auto;
  
  color: white;
  display: flex;
  flex-direction: column;
  
  
`;

export const Text = styled.span`
  a {
    color: #e8f0f2;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;


