import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

interface isStyledLink {}

export const PageLogin = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  font-family: "Inter", sans-serif;

  .DivIntroduction {
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin: 20px 10px;
    position: relative;
    top: -380px;
    font-family: "Inter", sans-serif;
  }
  .divText {
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 90px;
    font-size: 14px;
    text-align: left;
  }
  .vector {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  .divImg {
    width: 120px;
    height: 50px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
  }

  .inputBox input {
    width: 95%;
    height: 50px;
    background: #f5f5f5;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    padding-left: 10px;
    outline: none;
  }
  .inputBox {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5px;
  }
  .inputBox span {
    position: absolute;
    left: 0;
    padding: 15px;
    pointer-events: none;
    font-size: 18px;
    color: #999999;
  }
  .inputBox input:valid ~ span,
  .inputBox input:focus ~ span {
    color: #168821;
    transform: translateX(10px) translateY(-7px);
    font-size: 14px;
    padding: 0 10px;
    background-color: #ffffff;
    /*    border-left: 1px solid black;
    border-right: 1px solid black; */
  }

  .inputBox input:valid,
  .inputBox input:focus {
    border: 1px solid #168821;
    background-color: #ffffff;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 10px 10px 0 10px;
    align-items: flex-start;
    width: 94%;
    font-size: 18px;
    border: 2px solid #f5f5f5;
    border-radius: 5px;
    padding: 15px 10px 10px 20px;
    position: relative;
    top: 160px;
    gap: 15px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
  }
  div h2 {
    font-size: 20px;
  }
  input {
    width: 92%;
    height: 50px;
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
    border-radius: 8px;
    font-size: 14px;
    padding-left: 10px;
  }
  input:hover {
    border: 2px solid #168821;
  }
  button {
    border: 2px solid #f5f5f5;
    height: 50px;
    width: 98%;
    border-radius: 8px;
    background: #219653;
    color: white;
  }

  form p {
    color: #999999;
    font-size: 14px;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;

    .logo {
      width: 240px;
      height: 40px;
    }

    .DivIntroduction {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 180px;
      max-width: 400px;
      position: relative;
      top: 100px;
    }

    form {
      max-width: 500px;
      height: 400px;
      margin-top: 50px;
      gap: 20px;
    }
  }
`;

export const Link = styled(LinkRouter)<isStyledLink>`
  width: 98%;
  height: 50px;
  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  text-align: center;
  border-radius: 8px;
  padding-top: 15px;
  color: #999999;
  text-decoration: none;
`;
