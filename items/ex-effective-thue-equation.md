---
id: ex-effective-thue-equation
kind: example
title: "Effective Thue equation instance"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - lem-units-of-z
  - def-divides-in-z
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Theorem 5.13"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Example

The binary form $F(X,Y)=X(X-2Y)(X+2Y)=X^3-4XY^2$ has degree $3$, nonzero coefficient of $X^3$, and three distinct zeros of $F(X,1)$. The Thue equation $F(x,y)=1$ in integers has the unique solution $(x,y)=(1,0)$.

## Example references

[[lem-units-of-z]]

[[def-divides-in-z]]

[Evertse, *Diophantine Equations*, Chapter 5, §5.3, Theorem 5.13](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Facts & Assumptions

**Given:** The equation $x(x-2y)(x+2y)=1$ with $x,y\in\mathbb Z$.

[F1] An integer divides $1$ exactly when it is a unit in $\mathbb Z$, whose units are $1$ and $-1$. ([[def-divides-in-z]], [[lem-units-of-z]])

## Verification

1.1 Compute $F(X,1)=X(X-2)(X+2)$, whose distinct roots are $0,2,-2$. The equation gives $x(x^2-4y^2)=1$, so $x$ divides $1$ and [F1] yields $x=1$ or $x=-1$. [given, F1, algebra]

2.1 If $x=1$, the equation becomes $1-4y^2=1$, so $y=0$. If $x=-1$, it becomes $-1+4y^2=1$, hence $2y^2=1$; this would make $2$ divide $1$, contrary to [F1]. Therefore the only solution is $(1,0)$, and direct substitution verifies it. [given, F1, step 1.1, algebra] ∎
