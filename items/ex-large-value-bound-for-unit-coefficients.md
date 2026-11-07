---
id: ex-large-value-bound-for-unit-coefficients
kind: example
title: "Large-Value Bound for Coefficients of Modulus at Most One"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-one-separated-dirichlet-polynomial-samples
  - thm-unconditional-large-values-for-dirichlet-polynomials
justified_by: []
aliases: []
forward_refs: []
dependency_level: 3
proof_strategy: direct
---

## Example

Let $N\ge1$ and $T\ge2$, and take the Dirichlet polynomial $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ with complex coefficients satisfying $|a_n|\le1$ for every $n$. Let $t_1,\ldots,t_R\in[0,T]$ be pairwise distinct and 1-separated, and suppose $|D(it_r)|\ge V>0$ for every $r$. Then
$$R\ll \frac{N^2}{V^2}+\frac{N^4T(\log T)^2}{V^6},$$
with an absolute implied constant.

## Example references

[[def-one-separated-dirichlet-polynomial-samples]]

[[thm-unconditional-large-values-for-dirichlet-polynomials]]

## Facts & Assumptions

**Given:** $N\ge1$, $T\ge2$, $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ with $a_n\in\mathbb C$ and $|a_n|\le1$, a finite 1-separated sample set in $[0,T]$, and $V>0$.

[F1] [[def-one-separated-dirichlet-polynomial-samples]]: the coefficient square norm is $G=\sum_{n=1}^{N}|a_n|^2$ and 1-separated means distinct sample points have distance at least one.

[F2] [[thm-unconditional-large-values-for-dirichlet-polynomials]]: if all sampled values have modulus at least $V$, then $R\ll NG/V^2+NTG^3(\log T)^2/V^6$.

## Verification

**Given:** $N\ge1$, $T\ge2$, $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ with $a_n\in\mathbb C$ and $|a_n|\le1$, a finite 1-separated sample set in $[0,T]$, and $V>0$.

[F1] [[def-one-separated-dirichlet-polynomial-samples]]: the coefficient square norm is $G=\sum_{n=1}^{N}|a_n|^2$ and 1-separated means distinct sample points have distance at least one.

[F2] [[thm-unconditional-large-values-for-dirichlet-polynomials]]: if all sampled values have modulus at least $V$, then $R\ll NG/V^2+NTG^3(\log T)^2/V^6$.



1.1 The coefficient bound gives $0\le G=\sum_{n=1}^{N}|a_n|^2\le\sum_{n=1}^{N}1=N$. [given, F1, algebra]

2.1 By [F2], $R\ll NG/V^2+NTG^3(\log T)^2/V^6$. Since $0\le G\le N$ and both terms are nondecreasing in $G$, this is at most a constant times $N^2/V^2+N^4T(\log T)^2/V^6$, as claimed. [F2, step 1.1, algebra] ∎
