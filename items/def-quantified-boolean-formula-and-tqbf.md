---
id: def-quantified-boolean-formula-and-tqbf
kind: definition
title: "Quantified Boolean formulas and the language TQBF"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Definition

A **quantified Boolean formula** is a formula of the form

$$Q_1x_1\,Q_2x_2\cdots Q_mx_m\ \psi(x_1,\dots,x_m),$$

where each $Q_i$ is either $\exists$ or $\forall$, and $\psi$ is a
quantifier-free Boolean formula built from the variables
$x_1,\dots,x_m$, the constants $0,1$, and the connectives
$\neg,\wedge,\vee$.

Such a formula is **true** when its usual recursive Boolean semantics evaluates
to true. The language **TQBF** consists of all true quantified Boolean formulas
under any fixed effective encoding of these strings.

## Remarks

- The page uses prenex form so that the quantifier prefix can be read from left
  to right.
- TQBF is a decision problem about truth, not satisfiability of only the
  quantifier-free matrix.
