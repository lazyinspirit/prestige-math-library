---
id: thm-heath-brown-pairwise-dirichlet-polynomial-moment
kind: theorem
title: "Heath–Brown Pairwise Dirichlet-Polynomial Second Moment"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-natural-logarithm
  - def-real-power
  - def-complex-exponential
  - def-complex-numbers-and-arithmetic
  - def-finite-cardinality
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Guth and Maynard, New Large Value Estimates for Dirichlet Polynomials, Theorem 1.6"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
    - title: "Heath-Brown, A Large Values Estimate for Dirichlet Polynomials, cited source"
      url: "https://londmathsoc.onlinelibrary.wiley.com/doi/pdf/10.1112/jlms/s2-20.1.8"
---

## Statement

Let $T\ge2$, let $N\ge1$ be an integer, and let $\mathcal T$ be a finite subset of a real interval of length $T$ such that distinct $t,u\in\mathcal T$ satisfy $|t-u|\ge1$, with $R:=|\mathcal T|$. For complex coefficients $a_n$ indexed by the integers $N<n\le2N$, assume that for each $\eta>0$ there is a constant $A_\eta$ such that $|a_n|\le A_\eta T^\eta$ uniformly in $n,N,T$. In the sum, define $n^{i(t-u)}:=\exp(i(t-u)\log n)$. Then for each $\varepsilon>0$ there are constants $B_\varepsilon,T_\varepsilon>0$ such that, for $T\ge T_\varepsilon$,
$$\sum_{t,u\in\mathcal T}\left|\sum_{N<n\le2N}a_n n^{i(t-u)}\right|^2\le B_\varepsilon T^\varepsilon\left(R^2N+RN^2+R^{5/4}T^{1/2}N\right).$$

## Statement references

[Guth and Maynard, Theorem 1.6 and its use in §§6 and 11](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

[Heath-Brown, cited original article](https://londmathsoc.onlinelibrary.wiley.com/doi/pdf/10.1112/jlms/s2-20.1.8)
