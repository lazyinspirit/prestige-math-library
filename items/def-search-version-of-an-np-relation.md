---
id: def-search-version-of-an-np-relation
kind: definition
title: "The search problem attached to an NP verifier"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-polynomially-balanced-verifier
  - def-np-by-verifiers
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $L\subseteq\{0,1\}^*$ be a language in $NP$, witnessed by a verifier
relation $R$ and a polynomial certificate bound $p$ as in
[[def-polynomially-balanced-verifier]]. The **search problem attached to
$R$** is:

- input: a word $x\in L$,
- output: any certificate $u\in\{0,1\}^*$ such that $|u|\le p(|x|)$ and
  $(x,u)\in R$.

Equivalently, it asks not merely whether a witness exists, but to produce one.

## Remarks

- On inputs $x\notin L$, no valid certificate exists, so the search problem has
  no required output there.

- The output need not be unique; any witnessing certificate is acceptable.
