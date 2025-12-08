import styled from "styled-components";

export const ItemContainer = styled.div`
  border: 1px solid #ecf842ff;
    padding: 16px;
    margin: 16px 0;
    border-radius: 8px;
    background-color: #063336ff;
    max-width: 500px;
`;

export const ArticlesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
`;

export const ArticleTitle = styled.a`
    font-size: 1.5em;
    margin-bottom: 8px;
    color: #f0f0f0ff;
`;
