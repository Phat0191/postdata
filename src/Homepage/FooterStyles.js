import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const About = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
  margin-top: 0px;
`;
export const Contact = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  margin-top: 0px;
`;

export const About_styles = styled.p`
  color: #fff;
  margin-top:0px;
  font-size: 18px;
  width:150%
  height: auto;
  display: -webkit-box;
  -webkit-line-clamp:8;               // so dong hien thi toi da
  -webkit-box-orient: vertical;
  overflow: hidden;
 
`;
export const Contact_styles = styled.p`
  color: #fff;
  margin-top:-20px;
  font-size: 18px;
  width:100%
  height: auto;
  display: -webkit-box;
  -webkit-line-clamp:8;               // so dong hien thi toi da
  -webkit-box-orient: vertical;
  overflow: hidden;
 
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  border-bottom: 2.5px solid red;
  width: 150px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Box = styled.div`
  padding: 80px 60px;
  background: #292928;
  bottom: 0;
  width: 100%;
  @media (max-width: 1200px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  /* background: red; */
`;