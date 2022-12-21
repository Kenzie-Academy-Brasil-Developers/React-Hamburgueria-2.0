import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  width: 100vw;
  background: #f2f2f2;
  display: flex;
  justify-content: center;

  .divContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1250px;
    width: 100%;
    height: 100%;
  }
  .divIcons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .logo {
    height: 24px;
    width: 160px;
    margin-top: 10px;
    display: none;
  }
  .search {
    width: 25px;
    height: 25px;
    z-index: 2;
  }
  .search:hover {
  }
  .spanCart {
    background: #27ae60;
    width: 20px;
    height: 20px;
    color: white;
    position: absolute;
    top: -8px;
    right: -8px;
    border-radius: 4px;
  }
  .buttonCart {
    position: relative;
  }
  .cart {
    width: 25px;
    height: 25px;
  }
  .logout {
    width: 35px;
    height: 35px;
  }
  form {
    position: relative;
    width: 70%;
    height: 50px;
  }
  .inputSearch {
    width: 100%;
    height: 100%;
    position: relative;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding-left: 10px;
    z-index: 1;
    display: block;
  }
  input::placeholder {
    font-size: 14px;
    color: #e0e0e0;
    position: relative;
  }
  .hidden {
    display: none;
  }
  .buttonFilter {
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    width: 50px;
    height: 40px;
    color: white;
    font-size: 14px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
  .buttonFilter:hover input.hidden {
    display: block;
  }

  button {
    border: none;
    cursor: pointer;
  }
  button img {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 700px) {
    .logo {
      display: block;
    }
    .divIcons {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 90%;
  min-height: 260px;
  background-color: white;
  z-index: 10;
  position: absolute;
  background: #f5f5f5;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #f8f9fa;
  margin: 10% auto;

  .divTitle {
    width: 100%;
    height: 50px;
    background-color: #27ae60;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    font-size: 18px;
    margin-left: 20px;
  }
  .buttonClose {
    color: white;
    margin-right: 20px;
  }
  li {
    width: 90%;
    height: 80px;
    display: flex;
    margin: 15px;
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .divImg {
    width: 80px;
    height: 80px;
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
  .trash {
    position: absolute;
    right: 0;
    top: 5px;
  }
  h3 {
    font-size: 18px;
    color: black;
    margin-left: 15px;
    margin-top: 5px;
  }
  .divNamePrice {
    display: flex;
    flex-direction: column;
  }
  .buttonValue {
    display: flex;
    margin: 15px 15px;
    width: 100px;
    height: 35px;
    background-color: #e0e0e0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .buttonValue p {
    color: black;
    background-color: white;
    height: 92%;
    width: 40px;
    padding: 5px 14px;
    font-size: 18px;
  }
  .buttonValue button {
    color: #eb5757;
    font-size: 24px;
    margin: 0 5px;
    cursor: pointer;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .ButtonRemoveAll {
    width: 90%;
    height: 60px;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    margin: 0 0 20px 20px;
  }
  .divTotal {
    color: black;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    margin: 10px 30px 20px 20px;
    padding-top: 20px;
    border-top: 2px solid #e0e0e0;
  }
  .divNoCard {
    color: black;
    font-size: 18px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .divNoCard h2 {
    font-size: 22px;
  }

  @media (min-width: 700px) {
    width: 500px;
    min-height: 260px;
    z-index: 10;
    position: absolute;
    background: #f5f5f5;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #f8f9fa;
    margin: 5% auto;

    .divTitle {
      width: 100%;
      height: 50px;
      background-color: #27ae60;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h2 {
      font-size: 18px;
      margin-left: 20px;
    }
    .buttonClose {
      color: white;
      margin-right: 20px;
    }
    li {
      width: 450px;
      height: 80px;
      display: flex;
      margin: 15px;
      display: flex;
      align-items: flex-start;
      position: relative;
    }
    .divImg {
      width: 80px;
      height: 80px;
      background-color: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }
    .trash {
      position: absolute;
      right: 0;
      top: 5px;
    }
    h3 {
      font-size: 18px;
      color: black;
      margin-left: 15px;
      margin-top: 5px;
    }
    img {
      width: 50px;
      height: 50px;
    }
    .ButtonRemoveAll {
      width: 90%;
      height: 60px;
      background: #e0e0e0;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      margin: 0 0 20px 20px;
    }
    .divTotal {
      color: black;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      margin: 10px 30px 20px 20px;
    }
    .divNoCard {
      color: black;
      font-size: 18px;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    .divNoCard h2 {
      font-size: 22px;
    }
  }
`;
