---
id: ex-canonical-height-of-the-identity-is-zero
kind: example
title: The identity has canonical height zero
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-neron-tate-canonical-height
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§10.2, canonical-height limit definition and scaling."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.4.4, canonical-height limit in the height-descent argument."
---

## Example

Let $K$ be a number field, $A/K$ an abelian variety, and $L$ a symmetric ample line bundle with canonical height defined by the quadratic limit. The identity point $0\in A(K)$ has canonical height $\widehat h_L(0)=0$.

## Example references

[[def-neron-tate-canonical-height|canonical-height definition]]

## Facts & Assumptions

**Given:** A number field $K$; an abelian variety $A/K$; a symmetric ample line bundle $L$; a representative $h_L$; and the identity $0\in A(K)$.

[F1] The canonical height is $\lim_{j\to\infty}4^{-j}h_L([2]^jP)$ ([[def-neron-tate-canonical-height]]).

## Proof

**Proof technique:** substitute the identity into the defining limit.

1.1 Multiplication fixes the identity, so $[2]^j0=0$ for every $j\ge0$. [given, algebra]

2.1 The real number $h_L(0)$ is fixed, and $4^{-j}h_L([2]^j0)=4^{-j}h_L(0)\to0$. By [F1], this limit is $\widehat h_L(0)$. [F1, step 1.1, algebra] ∎
