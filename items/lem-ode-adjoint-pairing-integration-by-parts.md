---
id: lem-ode-adjoint-pairing-integration-by-parts
kind: lemma
title: A tangent and adjoint pairing gives the ODE gradient boundary identity
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-euclidean-inner-product, thm-algebra-of-derivatives, thm-ftc-second-part]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Let $T>0$, let $S\in C^1([0,T];\mathbb R^{d\times m})$ and $p\in C^1([0,T];\mathbb R^d)$ satisfy $S'=A S+B$ and $p'=-A^T p-g$, where $A,B,g$ are continuous and have compatible dimensions. Then
$$p(T)^T S(T)-p(0)^T S(0)=\int_0^T\bigl(-g(t)^T S(t)+p(t)^T B(t)\bigr)\,dt.$$

## Facts & Assumptions

**Given:** $T>0$, the continuously differentiable matrix and vector functions and their differential equations in the Statement.

[F1] The Euclidean pairing is the finite coordinate sum $x^Ty=\sum_i x_i y_i$ ([[def-euclidean-inner-product]]).

[F2] The derivative of a product is $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]).

[F3] If $G'=q$ and $q$ is integrable on $[0,T]$, then $\int_0^Tq=G(T)-G(0)$ ([[thm-ftc-second-part]]).

## Proof

1.1 For each column $j$, write $(p^TS)_j=\sum_{i=1}^d p_i S_{ij}$. By [F2] coordinatewise, $((p^TS)_j)'=\sum_i p_i'S_{ij}+p_iS_{ij}'$. Substituting the two equations and collecting the columns gives $(p^TS)'=(-A^Tp-g)^TS+p^T(AS+B)=-g^TS+p^TB$, because $(A^Tp)^TS=p^TAS$. [given, F1, F2, algebra]

2.1 For each column $j$, the scalar function $(p^TS)_j$ is $C^1$, and the $j$th component of the right-hand side in step 1.1 is continuous and hence integrable. Apply [F3] to each scalar component on $[0,T]$; collecting these identities gives the stated row-vector endpoint identity. [F3, step 1.1] ∎

