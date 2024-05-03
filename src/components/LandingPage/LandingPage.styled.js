import styled from 'styled-components';

export const StyledLandingPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    overflow-y: auto;


    width: 100vw;
    height: 100vh;
    background-color: red;

    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100px;
        width: 100%;

        margin-bottom: 10px;
        
        
        h1 {
            font-weight: 800;
            font-size: 50px;
            padding: 0;
            margin: 0 0 10px 0;
            
            &:hover {
                color: white;
            }
        }

        input {
            border: none;
            width: 50%;
            height: 20px;
            background-color: yellow;

            font-weight: 800;
            text-align: center;

            &:focus {
                outline: none;
                background-color: white;
            }
        }

        #link {
            width: 100px
        }
    }
`