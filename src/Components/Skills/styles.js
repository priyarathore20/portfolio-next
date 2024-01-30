import styled from "styled-components";

export const ClientWrapper = styled.div`
overflow:hidden;
width: 100vw;
/* min-height: calc(100vh - 4rem); */
max-width: 65rem;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
margin: 0 auto;
text-align: center;
`
export const ClientHeader = styled.div`
font-size: 3rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 1.25rem;
`
export const ClientDescription = styled.div`
font-size: 1rem;
font-weight: 300;
max-width: 50rem;
padding: 0 2rem;
margin-bottom: 1rem;
`
export const ClientCards = styled.div`
display: grid;
width: 100vw;
max-width: 80%;
grid-template-columns: 1fr 1fr;
gap: 2rem;
margin-bottom: 2rem;

@media screen and (max-width: 584px) {
    grid-template-columns: 1fr;
}
@media screen and (max-width: 768px) {
   gap : 1rem;
}
`
export const ClientCard = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 16px;
padding: 1.75rem 2rem;
justify-content: space-between;
border: 1px solid rgb(50, 50, 50);


p{
    font-size: 1.25rem;
font-weight: 400;
text-align: center;
flex: 1;

@media screen and (max-width: 768px) {
   font-size: 1rem;
}
}

img{
    height: 64px;
    object-fit: contain;

    @media screen and (max-width: 768px) {
   height: 50px;
}
}
@media screen and (max-width: 768px) {
   padding: 1rem 1.5rem;
}
`

// div{
//     max-width: 12rem;
//     /* object-fit: cover; */

//     @media screen and (max-width:640px) {
//         max-width: 40vw;
//     }
// }