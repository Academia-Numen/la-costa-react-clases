import styled from "@emotion/styled";

export const BooksContainer = styled.div`
    ${({ themeStyles }) => themeStyles}; 
    padding: 0;
    border-top: solid 1px #fff;
    border-bottom: solid 1px #fff;
`;

export const BooksUnorderedList = styled.ul`
    padding: 0;
    list-style-type: none;
`;
