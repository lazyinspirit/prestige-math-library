---
id: ex-newton-budget-exhaustion-with-a-unique-backward-euler-root
title: "Newton can exhaust its budget although the dissipative backward Euler root is unique"
kind: example
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-newton-chord-implicit-residual-with-factorization-reuse
  - thm-backward-euler-dissipative-resolvent-contraction
  - def-backward-euler-step-equation
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §4.5.2 Newton for nonlinear systems"
      url: "https://fncbook.com/newtonsys/"
      locator: "§4.5.2: finite residual tests and the limitation of local convergence claims."
    - title: "Ernst Hairer, Introduction à l’Analyse Numérique, Chapter III"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.9: implicit Euler for stiff equations."
---

## Facts & Assumptions

**Given:** The scalar field $f(x)=-x^3$, step $h=1$, input $y_0=1$, initial Newton iterate $x_0=0$, residual tolerance $\varepsilon=0.1$, and correction budget $N=0$.

[F1] [[thm-backward-euler-dissipative-resolvent-contraction]]: if $\langle f(x)-f(y),x-y\rangle\le0$ on $\mathbb R$, the BE equation has exactly one root for every input and every $h>0$.

[F2] [[alg-newton-chord-implicit-residual-with-factorization-reuse]]: the finite solve tests the current residual; if it exceeds tolerance when the correction budget is exhausted, it returns iteration-budget-exhausted with the last valid iterate and residual.

[F3] [[def-backward-euler-step-equation]]: the BE residual is $G(z)=z-y_0-hf(z)$.

## Proof


1.1 For all $x,y\in\mathbb R$, $(f(x)-f(y))(x-y)=-(x-y)^2(x^2+xy+y^2)\le0,$ because $x^2+xy+y^2=(x+y/2)^2+3y^2/4\ge0$. Thus the field is globally dissipative with $\mu=0$. [F1, algebra]

2.1 By [F1], the equation $z=1-z^3$, equivalently $z+z^3=1$, has exactly one real root. At the supplied initial iterate $x_0=0$, [F3] gives $G(0)=0-1-(-0)=-1$, so $\|G(0)\|=1>0.1$. [F1, F3, step 1.1, algebra]

3.1 Since the current residual exceeds tolerance and the correction budget is already zero, the finite solver returns iteration-budget-exhausted, despite the unique BE root proved in step 2.1. No forward-error statement follows from this status. [F2, step 2.1, cases] ∎
