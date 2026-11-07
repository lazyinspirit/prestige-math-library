---
id: def-dirichlet-l-zero-density-counting-functions
kind: definition
title: "Individual and aggregate Dirichlet L-zero counting functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-dirichlet-character-modulo-q
  - def-dirichlet-l-function
  - def-primitive-dirichlet-character-and-conductor
justified_by: []
aliases: []
forward_refs: []
dependency_level: 0
verification:
  precheck: n/a
sources:
  references:
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III, §28.1, zero-counting functions"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 184–185, equations (28.1)–(28.5)."
    - title: "D. R. Heath-Brown, The Density of Zeros of Dirichlet's L-Functions"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf"
      locator: "Printed pp. 231–232, definition of N(σ,T,χ) and the aggregate Σ(Q)."
---

## Definition

Let $q,Q$ be positive integers, let $T\ge1$, and let $1/2\le\sigma\le1$. If $\chi$ is a Dirichlet character modulo $q$ and $\chi^*$ is its unique primitive inducing character, define
$$N(\sigma,T,\chi):=\#\{\rho=\beta+i\gamma:L(\rho,\chi^*)=0,\ \beta\ge\sigma,\ |\gamma|\le T\},$$
where zeros are counted with multiplicity. Define
$$N_1(\sigma,q,T):=\sum_{\chi\ ({\rm mod}\ q)}N(\sigma,T,\chi)$$
with the sum over all characters modulo $q$, and define
$$N_2(\sigma,Q,T):=\sum_{1\le q\le Q}\ \sum_{\substack{\chi\ ({\rm mod}\ q)\\\chi\ {\rm primitive}}}N(\sigma,T,\chi).$$
Thus $N_1$ counts all characters at one modulus through their primitive ancestors, while $N_2$ sums only primitive characters of conductor at most $Q$. The primitive principal character modulo $1$ is included, so $N_2(\sigma,1,T)$ is the zero count of the Riemann zeta function in this region.

## Definition references

[Montgomery–Vaughan, Chapter 28 §28.1](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[Heath-Brown, §1](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf)
