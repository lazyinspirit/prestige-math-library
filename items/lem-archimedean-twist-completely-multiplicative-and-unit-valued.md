---
dependency_level: 0
id: lem-archimedean-twist-completely-multiplicative-and-unit-valued
kind: lemma
title: "Archimedean twists are completely multiplicative and unit-valued"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
proof_strategy: direct
aliases: []
sources:
  scraped: []
  references:
    - title: "Andrew Granville and K. Soundararajan, Pretentious Multiplicative Number Theory (author manuscript, 2011)"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
---

## Statement

For each real $t$, define $\chi_t(n):=\exp(it\log n)$ for positive integers
$n$. Then $\chi_t(1)=1$, $\chi_t(mn)=\chi_t(m)\chi_t(n)$ for all positive
integers $m,n$, and $|\chi_t(n)|=1$ for every positive integer $n$.

## Statement references

[[def-natural-logarithm]]

[[def-complex-exponential]]

[Granville and Soundararajan, *Pretentious Multiplicative Number Theory*, §4.1, PDF pp. 31–33](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)

## Facts & Assumptions

**Given:** A real number $t$.

[F1] For positive reals $m,n$, $\log(mn)=\log m+\log n$ ([[thm-natural-logarithm-laws]]).

[F2] For complex $z,w$, $\exp(z+w)=\exp z\,\exp w$ ([[thm-complex-exponential-addition-and-real-extension]]).

[F3] For real $y$, $|\exp(iy)|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

1.1 For every positive integer $n$, [F3] gives $|\chi_t(n)|=|\exp(i(t\log n))|=1$. [given, F3]

2.1 For positive integers $m,n$, [F1] and [F2] give $\chi_t(mn)=\exp(it\log m+it\log n)=\chi_t(m)\chi_t(n)$. Taking $m=n=1$ yields $\chi_t(1)=\chi_t(1)^2$; step 1.1 gives $|\chi_t(1)|=1$, so $\chi_t(1)\ne0$ and division yields $\chi_t(1)=1$. These identities establish complete multiplicativity. [given, F1, F2, step 1.1, algebra] ∎

## Proof references

[[thm-natural-logarithm-laws]]

[[thm-complex-exponential-addition-and-real-extension]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]
