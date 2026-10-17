---
id: ex-index-two-dae-algebraic-residual-does-not-control-state
title: "An index-two DAE can have zero algebraic residual and an arbitrary algebraic variable"
kind: example
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - def-regular-differentiation-index
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §§10.0–10.3"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 163–166 and 169–171: the general DAE form, differentiated consistency constraints, and high-index systems."
---

## Example

Consider the scalar semi-explicit system

$$
x'=z,\qquad 0=g(x,z):=x.
$$

Its algebraic Jacobian is $g_z=0$, so it is not regular index one. In the convention of [[def-regular-differentiation-index]], differentiating $x=0$ once gives $z=0$, and differentiating again gives $z'=0$; the system has differentiation index two. The algebraic residual is $g(x,z)=x$: at every candidate $(0,M)$, it is zero for any $M$, although the algebraic variable of a solution must be $z=0$. Thus no residual-to-$z$-error bound holds near $(0,0)$. The initial pair $(0,1)$ satisfies the algebraic equation but is not consistent with a solution, while $(1,0)$ violates the algebraic equation and cannot be an initial value.

## Facts & Assumptions

**Given:** The displayed DAE on $\mathbb R^2$.

[F1] [[def-semi-explicit-index-one-dae-and-consistent-initial-data]]: a semi-explicit DAE has differential equation $x'=f(t,x,z)$ and algebraic equation $g(t,x,z)=0$; algebraic consistency means $g=0$.

[F2] [[def-regular-differentiation-index]]: differentiate the algebraic constraint along the differential equation; the index is the least positive differentiation count at which the regular prolonged equation determines the algebraic variables and their first derivatives.

[A1] For the index calculation, $x\in C^2$ and $z\in C^1$ on a nondegenerate interval, and the constraint holds at every time in that interval.



## Verification

1.1 Here $f(t,x,z)=z$ and $g(t,x,z)=x$, so $g_z=0$ at every point. The regular index-one hypothesis $g_z$ invertible therefore fails. [given, F1, algebra]

2.1 Along any solution, differentiating $g(x(t),z(t))=x(t)=0$ and substituting $x'=z$ gives $z=0$. Differentiating this relation gives $z'=0$. The original constraint does not involve $z$; the first differentiated relation determines $z$, and the second determines its first derivative. By [F2] the differentiation index is two. [A1, F2, step 1.1, algebra]

3.1 For every real $M$, the candidate $(x,z)=(0,M)$ has algebraic residual $g(0,M)=0$, while step 2.1 shows that a solution has $z=0$. Taking arbitrarily small $M\ne0$ rules out any finite constant $C$ for which $|z|\le C|g(x,z)|$ throughout a neighborhood of $(0,0)$. [step 2.1, algebra]

3.2 The pair $(0,1)$ satisfies $g(0,1)=0$, but a solution would require $z(0)=0$ by step 2.1, so it is not a consistent initial pair for a solution. The pair $(1,0)$ has $g(1,0)=1\ne0$, so it fails even algebraic consistency. [F1, A1, step 2.1, algebra]

4.1 The constant functions $x(t)=0,z(t)=0$ satisfy both equations, so the system has a solution with the consistent initial pair $(0,0)$. The three boundary calculations above concern only this fixed index-two system and imply no index-one numerical guarantee. [given, step 2.1, algebra] ∎
