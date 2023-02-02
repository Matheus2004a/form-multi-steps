# Formulário MultiSteps

Este projeto trata - se de um formulário com múltiplas etapas, onde é possível manter o estado dos valores de cada entrada de dado ao avançar ou voltar as etapas.

Também foi utilizado um custom hook ```useForm``` com o objetivo de:

- Validar as etapas, seus avanços;
- Identificar em qual etapa o usuário se encontra;
- Retornar um componente (etapa) do form de acordo navegação do usuário pelas etapas.