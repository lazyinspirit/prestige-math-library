---
id: lem-ode-adjoint-pairing-integration-by-parts
kind: lemma
title: A tangent and adjoint pairing gives the ODE gradient boundary identity
status: draft
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
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Let $S\in C^1([0,T];\mathbb R^{d\times m})$ and $p\in C^1([0,T];\mathbb R^d)$ satisfy $S'=A S+B$ and $p'=-A^T p-g$, where $A,B,g$ are continuous and have compatible dimensions. Then
$$p(T)^T S(T)-p(0)^T S(0)=\int_0^T\bigl(-g(t)^T S(t)+p(t)^T B(t)\bigr)\,dt.$$

## Facts & Assumptions

**Given:** The continuously differentiable matrix and vector functions and their differential equations in the Statement.

[F1] The Euclidean pairing is the finite coordinate sum $x^Ty=\sum_i x_i y_i$ ([[def-euclidean-inner-product]]).

[F2] The derivative of a product is $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]).

[F3] If $G'=q$ and $q$ is integrable on $[0,T]$, then $\int_0^Tq=G(T)-G(0)$ ([[thm-ftc-second-part]]).

## Proof

1.1 Write $p^T S=\sum_{i=1}^d p_i S_{i,\cdot}$. By [F2] coordinatewise, $(p^TS)'=(p')^TS+p^TS'$. Substituting the two equations yields $(-A^Tp-g)^TS+p^T(AS+B)=-g^TS+p^TB$, because $(A^Tp)^TS=p^TAS$. [given, F1, F2, algebra]

2.1 The right-hand side in step 1.1 is continuous and hence integrable. Apply [F3] to the scalar function $p^TS$ and integrate step 1.1 over $[0,T]$. This gives the stated endpoint identity. [F3, step 1.1] ∎

