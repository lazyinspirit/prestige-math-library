---
id: ex-4dvar-discrete-adjoint-gradient
kind: example
title: A two-observation 4DVAR objective has an exact reverse gradient
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-discrete-adjoint-gradient-recursion, alg-four-dimensional-variational-assimilation]
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

## Example

Take the scalar discrete model $x_0(\theta)=\theta$, $x_1=2x_0$, and $x_2=3x_1$. This is a two-time observation objective of the 4DVAR form in [[alg-four-dimensional-variational-assimilation]], with background value and both observations equal to zero and unit weights:
$$J(\theta)=\tfrac12x_0^2+\tfrac12x_1^2+\tfrac12x_2^2.$$

## Facts & Assumptions

**Given:** The finite scalar state-step graph, objective, and exact-real arithmetic.

[F1] The reverse recursion for a finite $C^1$ state-step objective is its exact gradient ([[thm-discrete-adjoint-gradient-recursion]]).

[F2] The variational assimilation objective contains a background penalty and observation-misfit terms along a model trajectory ([[alg-four-dimensional-variational-assimilation]]).

## Verification

1.1 Direct substitution gives $x_1=2\theta$ and $x_2=6\theta$, so $J(\theta)=\frac12(1+4+36)\theta^2=\frac{41}{2}\theta^2$ and $J'(\theta)=41\theta$. [given, F2, algebra]

2.1 The terminal adjoint seed is $p_2=x_2=6\theta$. The reverse recursion [F1] gives $p_1=x_1+3p_2=20\theta$ and $p_0=x_0+2p_1=41\theta$. Since $Dx_0/D\theta=1$, the adjoint gradient is $p_0=41\theta$, agreeing with the direct derivative. [F1, step 1.1, algebra] ∎ 