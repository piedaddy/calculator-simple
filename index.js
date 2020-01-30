const equalClick = () => {
  const input = document.querySelector('.input');
  const result = document.querySelector('.result'); 

  result.value = Number(result.value) + Number(input.value);
  input.value = '';

}


