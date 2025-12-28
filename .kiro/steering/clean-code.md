# Clean Code Guidelines

Sempre aplique os princípios de Clean Code em todo código produzido neste projeto.

## Naming Conventions

- Use nomes descritivos e significativos para variáveis, funções e classes
- Nomes devem revelar a intenção do código
- Evite abreviações obscuras ou nomes genéricos como `data`, `info`, `temp`
- Use camelCase para variáveis e funções em JavaScript
- Use kebab-case para classes CSS e IDs HTML
- Use SCREAMING_SNAKE_CASE para constantes

## Functions

- Funções devem fazer apenas uma coisa e fazê-la bem
- Mantenha funções pequenas (idealmente menos de 20 linhas)
- Use no máximo 3 parâmetros por função
- Evite efeitos colaterais - funções devem ser previsíveis
- Prefira funções puras quando possível
- Nomes de funções devem ser verbos ou frases verbais descritivas

## Comments

- Código bem escrito é auto-documentado
- Use comentários apenas quando necessário explicar o "porquê", não o "o quê"
- Evite comentários redundantes que apenas repetem o código
- Mantenha comentários atualizados ou remova-os
- Use JSDoc para documentar APIs públicas

## Code Organization

- Agrupe código relacionado junto
- Separe conceitos diferentes com linhas em branco
- Declare variáveis próximo ao seu uso
- Mantenha arquivos focados em uma única responsabilidade
- Organize imports de forma lógica (externos primeiro, depois internos)

## Error Handling

- Trate erros de forma explícita e informativa
- Use try-catch apenas quando necessário
- Forneça mensagens de erro úteis para debugging
- Nunca silencie erros sem tratamento adequado

## DRY (Don't Repeat Yourself)

- Extraia código duplicado em funções reutilizáveis
- Use constantes para valores mágicos
- Crie componentes reutilizáveis para padrões repetidos

## KISS (Keep It Simple, Stupid)

- Prefira soluções simples sobre complexas
- Evite over-engineering
- Código legível é mais importante que código "inteligente"

## CSS Clean Code

- Use variáveis CSS para valores reutilizáveis
- Organize propriedades de forma consistente (posicionamento, box model, tipografia, visual)
- Evite seletores muito específicos ou aninhamento excessivo
- Use classes semânticas que descrevam o propósito, não a aparência

## HTML Clean Code

- Use elementos semânticos apropriados (header, nav, main, section, article, footer)
- Mantenha a estrutura limpa e bem indentada
- Use atributos data-* para dados customizados
- Inclua atributos de acessibilidade (aria-*, alt, role)

## JavaScript Clean Code

- Use const por padrão, let quando necessário, nunca var
- Prefira arrow functions para callbacks
- Use destructuring para extrair valores de objetos/arrays
- Use template literals para strings com interpolação
- Evite callbacks aninhados - use async/await ou Promises
- Use early returns para reduzir aninhamento
