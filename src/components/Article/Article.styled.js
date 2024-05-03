import styled from "styled-components";

export const StyledArticle = styled.div`
    display: flex;
    align-items: flex-start;

    width: 100vw;
    height: 100vh;
    background-color: red;

    .nav-img {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: blue;

        nav {
            background-color: red;
            
            #backToHome {
                text-decoration: none;
                color: black;

                h2 {
                    display: flex;
                    align-items: center;
                    height: 50px;
                    width: 100%;
                    
                    font-size: 30px;
                    font-weight: 800;
        
                    margin: 0 0 0 10px;
                
                    &:hover {
                        color: white;
                    }
                }
            }
        }
        
        img {
            height: 100%;
            width: 300px;
            filter: invert();
        }
    }

    .text-field {
        display: flex;
        height: 100%;

        h1 {
            font-size: 60px;
            margin: 0;
        }

        p {
            background-color: yellow;
            margin: 0;
        }

        article {
            height: auto;
            overflow-y: auto;

            padding: 20px;

            background-color: blue;
            color: white;
        }
    }
`