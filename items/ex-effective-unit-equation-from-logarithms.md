---
id: ex-effective-unit-equation-from-logarithms
kind: example
title: "Effective solution bound for a two-variable unit equation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - cor-rational-algebraic-integers-are-integers
  - lem-units-of-z
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Chapter 5"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. In the number field $\mathbb Q$, the unit equation $2x+y=1$ with $x,y\in\mathcal O_{\mathbb Q}^{\times}$ has the unique solution $(x,y)=(1,-1)$. As a concrete instance of the homogeneous logarithmic bound, the fixed algebraic number $2$ and exponent $b=1$ also give a positive lower bound for the nonzero multiplicative difference $|2^b-1|$.

## Example references

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[cor-rational-algebraic-integers-are-integers]]

[[lem-units-of-z]]

[Evertse, *Diophantine Equations*, Chapter 5, §§5.1 and 5.3](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, $K=\mathbb Q$, and $x,y\in\mathcal O_K^\times$ with $2x+y=1$.

[A1] The Example explicitly assumes the Axiom of Choice. ([[def-axiom-of-choice]])

[F1] The rational algebraic integers are exactly $\mathbb Z$, so $\mathcal O_{\mathbb Q}=\mathbb Z$. ([[cor-rational-algebraic-integers-are-integers]], [[def-ring-of-integers-of-a-number-field]])

[F2] The units of $\mathbb Z$ are exactly $1$ and $-1$. ([[lem-units-of-z]])

## Verification

1.1 By [F1] and [F2], each of $x,y$ is either $1$ or $-1$. If $x=1$, the equation forces $y=-1$. If $x=-1$, it forces $y=3$, which is not a unit. Thus the unique solution is $(1,-1)$. [given, F1, F2, algebra]

2.1 For the fixed exponent $b=1$, one has $|2^b-1|=1$. The explicit positive bound $1>\exp(-[\log 3]^2)>0$ is an instance of the displayed logarithmic shape, with the effective constant $C=1$. [given, algebra] ∎