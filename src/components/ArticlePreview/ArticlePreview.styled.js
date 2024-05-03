import styled from "styled-components";

export const StyledArticlePreview = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 200px;
    background-color: blue;
    color: white;

    margin: 0 0 10px 0;

    h1 {
        width: 80%;
    }

    .desc {
        width: 50%;
        margin: 0 10px 0 10px;
    }

    .time-readmore {
        display: flex;
        align-items: center;

        #link {
            width: 100%;
            padding-right: 20px;

            button {
                border: none;
                background-color: yellow;
                height: 25px;
                width: 100% ;
                font-weight: 800;
                
                margin-left: 10px;
                
                &:hover {
                    background-color: white;
                    cursor: pointer;
                }
            }
        }
    }

    img {
        width: 20%;
        height: 100%;
        margin-right: 10px;
        filter: invert();

        &:hover {
            filter: none;
            width: 40%;
        }
    }

`