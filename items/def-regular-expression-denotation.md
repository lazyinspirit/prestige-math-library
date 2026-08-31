---
id: def-regular-expression-denotation
kind: definition
title: "The language denoted by a regular expression"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-expression-syntax, def-language-over-an-alphabet, def-language-boolean-operations, def-language-concatenation-powers-and-kleene-star]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Definition

Fix an alphabet $\Sigma$. The **denotation** of a regular expression
$R\in\operatorname{Reg}(\Sigma)$ is the language $\mathcal L(R)\subseteq\Sigma^*$
defined recursively by

$$ \mathcal L(\varnothing)=\varnothing,\qquad \mathcal L(\varepsilon)=\{\varepsilon\},\qquad \mathcal L(a)=\{a\}\ \ (a\in\Sigma), $$

and by the recursive clauses

$$ \mathcal L(R+S)=\mathcal L(R)\cup\mathcal L(S), $$
$$ \mathcal L(RS)=\mathcal L(R)\mathcal L(S), $$
$$ \mathcal L(R^*)=\mathcal L(R)^*. $$

The operations on the right are the language union, concatenation, and Kleene
star from [[def-language-boolean-operations]] and
[[def-language-concatenation-powers-and-kleene-star]].

## Remarks

- The syntax $R$ and the language $\mathcal L(R)$ have different types: one is
  a formal expression, the other is a subset of $\Sigma^*$.

- The recursive clauses are meaningful only because the next lemma makes the
  denotation assignment structurally well-defined.
