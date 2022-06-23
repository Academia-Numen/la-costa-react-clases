import styled from "@emotion/styled/macro";
import { CardContainer, Text } from "../Card/card.styled";

export const CardsContainer = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
    ${CardContainer}:first-of-type {
        color: red;
        ${Text} {
            background: red;
        }
    }
`;