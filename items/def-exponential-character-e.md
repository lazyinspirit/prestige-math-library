---
id: def-exponential-character-e
kind: definition
title: "The Additive Exponential Character e(t)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-complex-exponential
  - def-complex-numbers-and-arithmetic
  - def-pi-via-first-positive-cosine-zero
  - lem-integer-part
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "Opening convention on printed p. 1"
    - title: "Ramdinmawia Vanlalngaia, Hardy's functions of L-series and distribution of primes in arithmetic progressions"
      url: "https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf"
      locator: "Part I, Chapter 1 §1.10, printed pp. 39-41"
---

## Definition

Let $j:\mathbb R\to\mathbb C$ be the real embedding $j(t)=t+0i$, where
$i^2=-1$. For $t\in\mathbb R$, define the additive exponential character
$
e(t):=\exp\!\big(2\pi i\,j(t)\big).
$
Write
$
\|t\|_{\mathbb T}:=
\min\bigl(t-\lfloor t\rfloor,\ \lfloor t\rfloor+1-t\bigr),
$
where $\lfloor t\rfloor$ is the unique integer $m$ satisfying
$m\le t<m+1$. Thus $\|t\|_{\mathbb T}$ is the distance from $t$ to the
nearest integer and lies in $[0,\tfrac12]$.

## Definition references

[[def-complex-numbers-and-arithmetic]]

[[def-complex-exponential]]

[[def-pi-via-first-positive-cosine-zero]]

[[lem-integer-part]]

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

[Vanlalngaia, Chapter 1 §1.10, complete relevant thesis text](https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf)
