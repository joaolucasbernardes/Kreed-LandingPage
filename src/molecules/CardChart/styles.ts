import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  left: 30px;
  border-radius: 18px;
  background-color: #FFF;
  box-shadow: 0px 17.5px 28px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  animation: showOnPage 0.5s linear forwards;
  opacity: 0;
  bottom: -50px;


  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  strong {
    font-weight: 500;
  }

  @keyframes showOnPage {
    from {
      opacity: 0;

    }

    to {
      opacity: 1;
      bottom: 0px;

    }
  }
`;


function generateSpan() {
  const amountBars = [...Array(12).keys()];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styleSpan: any = [];

  amountBars.forEach((item) => {
    styleSpan.push(`
      div:nth-child(${item + 1}) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        div {
          background-color: #EFF3FE;
          height: 91px;
          width: 2.1px;
          border-radius: 5px;
          display: flex;
          justify-content: flex-end;
      
          span {
            background-color: #5236FF;
            display: block;
            height: 0px;
            max-height: ${Math.ceil(Math.random() * 100)}px;
            width: 3.5px;
            border-radius: 5px;

            animation: animationHeight 1s linear forwards;
          }
        }

        small {
          color: #BACCFD;
          font-size: 10px;
          margin-top: 10px;
        }
      }    
    `);
  });

  return styleSpan.join("");
}

export const Chart = styled.div`
  margin-top: 28px;

  ${generateSpan()}

  @keyframes animationHeight {
    from {
      height: 0px;
    }

    to {
      height: 91px;
    }
  }
`;
