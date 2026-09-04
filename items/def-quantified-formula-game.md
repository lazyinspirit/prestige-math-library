---
id: def-quantified-formula-game
kind: definition
title: "The quantified formula game for a quantified Boolean formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quantified-boolean-formula-and-tqbf]
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
---

## Definition

Let

$$\Phi=Q_1x_1\,Q_2x_2\cdots Q_mx_m\ \psi(x_1,\dots,x_m)$$

be a quantified Boolean formula. Its **quantified formula game** is the
two-player perfect-information game in which:

- whenever $Q_i=\exists$, Player E chooses the value of $x_i$;
- whenever $Q_i=\forall$, Player A chooses the value of $x_i$.

After all variables are assigned, the quantifier-free matrix $\psi$ is
evaluated. Player E wins if $\psi$ is true under the chosen assignment, and
Player A wins otherwise.

## Remarks

- The existential player tries to force truth of the formula.
- The universal player tries to force falsity.
