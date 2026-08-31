---
id: def-regular-expression-syntax
kind: definition
title: "Regular expression syntax over an alphabet"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-computation-alphabet-and-word-convention]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Definition

Let $\Sigma$ be an alphabet. The set of **regular expressions over $\Sigma$**
is the smallest class $\operatorname{Reg}(\Sigma)$ such that:

- $\varnothing$, $\varepsilon$, and every letter $a\in\Sigma$ belong to
  $\operatorname{Reg}(\Sigma)$;
- whenever $R,S\in\operatorname{Reg}(\Sigma)$, the formal expressions
  $(R+S)$, $(RS)$, and $(R^*)$ also belong to $\operatorname{Reg}(\Sigma)$.

Thus a regular expression is a finite formal expression tree built from the
three base symbols $\varnothing,\varepsilon,a$ and the three constructors
union, concatenation, and star.

## Remarks

- The definition is syntactic: two different expression trees may still denote
  the same language.

- Parentheses are part of the formal syntax, even when ordinary mathematical
  notation later suppresses some of them.
