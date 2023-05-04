import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/header";
import { getMemos, MemoRecord } from "../indexeddb/memos";

const { useState, useEffect } = React;

const HeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
`;

const Memo = styled.button`
display: block;
background-color: white;
border: 1px solid gray;
width: 100%;
padding: 1rem;
margin 1rem;
text-align: left;
`;

const MemoTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const MemoText = styled.div`
  font-size: 0.85rem;
  overflos: hidden;
  text-overflow: ellipsis;
  wite-space: nowra;
`;

export const History: React.FC = () => {
  const [memos, setMemos] = useState<MemoRecord[]>([]);

  useEffect(() => {
    getMemos().then(setMemos);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <HeaderArea>
        <Header title="履歴">
          <Link to="/editor">エディタに戻る</Link>
        </Header>
      </HeaderArea>
      <Wrapper>
        {memos.map((memo) => (
          <Memo key={memo.datetime}>
            <MemoTitle>{memo.title}</MemoTitle>
            <MemoText>{memo.text}</MemoText>
          </Memo>
        ))}
      </Wrapper>
    </>
  );
};
