---
id: ex-riemannian-stiefel-nonconvex-saddle
kind: example
title: A strict saddle of a quadratic Stiefel objective
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-stiefel-grassmann-optimization-conventions
  - thm-stiefel-grassmann-tangent-projections
  - prop-stiefel-grassmann-riemannian-gradient-formulas
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
    locator: "Complete 37-page chapter, §§3.3.2, 3.4.4, 3.5.7, 3.6.2 and 3.6.4: Stiefel/Grassmann structures, tangent and horizontal spaces, Frobenius projections and gradients."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.6–3.8, 7.3 and 9.16: embedded metrics, gradients, Stiefel frames and Grassmann quotient geometry."
verification:
  precheck: n/a
---

## Example

For $A=\operatorname{diag}(0,1,2)$, minimize $f(x)=x^{\mathsf T}Ax$ on
$\operatorname{St}(3,1)=S^2$. The point $e_2$ is critical, but one unit-speed
tangent curve decreases $f$ and another increases it. Thus it is a strict
saddle, not a local minimum.

## Facts & Assumptions

**Given:** The unit sphere, the symmetric matrix $A$ and the objective in the Example.

[F1] The Riemannian gradient of a smooth ambient objective is its Euclidean gradient projected onto the Stiefel tangent ([[prop-stiefel-grassmann-riemannian-gradient-formulas]]).

[F2] At a unit frame $x$, the tangent space is $\{z:x^{\mathsf T}z=0\}$ ([[thm-stiefel-grassmann-tangent-projections]]).

## Proof

**Proof technique:** compute the projected gradient and the objective along two feasible curves.

1.1 The ambient gradient is $\nabla f(x)=2Ax$, so $\nabla f(e_2)=2e_2$. Its Stiefel projection is $2e_2-e_2(e_2^{\mathsf T}2e_2)=0$ by [F1]; hence $e_2$ is critical. [F1, given, algebra]

2.1 Both $e_1$ and $e_3$ are tangent at $e_2$ by [F2]. The curves $x_-(t)=\cos(t)e_2+\sin(t)e_1$ and $x_+(t)=\cos(t)e_2+\sin(t)e_3$ stay on the unit sphere and have initial velocities $e_1,e_3$. Their objective values are $f(x_-(t))=\cos^2t<1$ and $f(x_+(t))=\cos^2t+2\sin^2t=1+\sin^2t>1$ for all sufficiently small nonzero $t$. Thus arbitrarily nearby feasible points have smaller and larger values, proving strict saddle behavior. [F2, given, algebra] ∎