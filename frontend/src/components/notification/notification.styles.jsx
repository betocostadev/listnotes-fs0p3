import styled, { css } from 'styled-components';

const successStyles = css`
  color: green;
`
const errorStyles = css`
  color: red;
`

const getMessageStyle = props => {
  if(props.isSuccess) {
    return successStyles
  }
  if(props.isError) {
    return errorStyles
  }
}

export const ErrorMessage = styled.div`
  max-width: 50%;
  background: lightgrey;
  font-size: 18px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  ${getMessageStyle}
`

