import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import axios from "axios";
import Info from "./Inventory";

const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색};
`;

const Detail = (props) => {
  // const Timer = setTimeout(() => {
  //   setAlert(false);
  // }, 2000);

  // useEffect(async () => {
  //   await Timer();
  //   return () => {clearTimeout(Timer)};
  // }, []);
  const { id } = useParams();
  console.log(props.shoes[parseInt(id)]);
  const [inventory, setInventory] = useState(props.inventory[parseInt(id)]);
  const [alert, setAlert] = useState(true);
  const [inputData, setInputData] = useState("");

  const history = useHistory();

  const correctId = props.shoes.find((shoes) => {
    return shoes.id === parseInt(id);
  });

  useEffect(() => {
    const Timer = setTimeout(() => {
      axios.get();

      setAlert(false);
    }, 2000);
    console.log("안녕");
    return () => {
      clearTimeout(Timer);
    };
  }, []);

  // []가 비어있으면 처음에만 한 번 실행, [alert]면 alert가 변경될 때마다 실행
  // useEffect를 여러개 사용하고 싶다면 여러번 적으면 적은 순서대로 실행됨

  return (
    <div className="container">
      <Box>
        <Title 색={"blue"}>상세페이지</Title>
        <Title className="red">Detail</Title>
      </Box>

      {inputData}
      <input
        onChange={(event) => {
          setInputData(event.target.value);
        }}
      />

      {alert && (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      )}
      {/* {alert === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null} */}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(id) + 1
            }.jpg`}
            alt={`shoes${parseInt(id) + 1}`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{correctId.title}</h4>
          <p>{correctId.content}</p>
          <p>{correctId.price}</p>

          <Info inventory={inventory}></Info>

          <button
            className="btn btn-danger"
            onClick={() => setInventory((prev) => prev - 1)}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
              // 뒤로가기
              //   history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
