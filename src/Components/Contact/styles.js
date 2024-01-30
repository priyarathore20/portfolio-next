import styled from "styled-components";

export const ContactFormWrapper = styled.div`
overflow:hidden;
width: 100vw;
min-height: 100%;
max-width: 65rem;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
margin: 0 auto 2rem;
text-align: center;

button{
    padding: 0.5rem 2.5rem;
    border: none;
    background-color: white;
    border-radius: 1.5rem;
    margin: 2rem 0;
    font-size: 1rem;
    font-weight: 300;
}
`
export const ContactHead = styled.header`
font-size: 3rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 1.25rem;
`
export const ContactText = styled.p`
font-size: 1rem;
font-weight: 300;
max-width: 50rem;
padding: 0 2rem;
margin-bottom: 1rem;
`

export const ContactForm = styled.form`
display: flex;
width: 100%;
max-width: 25rem;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 1rem;

input, textarea{
    background-color: rgb(50,50,50);
    resize: none;
    outline: none;
    border: none;
    width: 100%;
    padding: 0.5rem 1rem;
    font-family: "Poppins", sans-serif;
    border-radius: .5rem;
    font-size: small;
    font-weight: 300;
    text-align: start;
    color: white;

}

@media screen and (max-width: 585px) {
    width: 80%;
}
`

export const SuccessMsg = styled.p`
font-size: 1.5rem;
margin: 40px 0;
`
