import styled from "styled-components";

export const SpinnerContainer = styled.div`
  margin: 0 auto;
  align-self: center;
  justify-self: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    margin: auto;
    width: 70px;
    text-align: center;
    display: flex;
    gap: 1rem;
  }

  .spinner > div {
    width: 13px;
    height: 13px;
    background-color: #fff;
    border-radius: 100%;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
