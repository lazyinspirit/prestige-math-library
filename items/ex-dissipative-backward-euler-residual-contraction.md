---
id: ex-dissipative-backward-euler-residual-contraction
title: "A dissipative backward Euler solve with a controlled update residual"
kind: example
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-backward-euler-algebraic-update-residual-error-budget
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 11: Stiffness"
      url: "https://fncbook.com/stiffness/"
      locator: "§11.4: stiffness and A-stability context for backward Euler; the residual-to-error bound is proved locally."
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.9: implicit Euler."
---

## Facts & Assumptions

**Given:** The scalar field $f(x)=-x-x^3$, input $\widetilde u_0=u_0=1$, step $h=2$, and approximate endpoint $\widetilde u_1=1/3$.

[F1] [[thm-backward-euler-dissipative-resolvent-contraction]]: strong dissipativity with constant $\mu$ makes the BE resolvent globally defined and $1/(1+h\mu)$-Lipschitz.

[F2] [[thm-backward-euler-algebraic-update-residual-error-budget]]: for one BE update from the exact input, endpoint error from an approximate update is at most $q|\eta|$, where $q=(1+h\mu)^{-1}$ and $\eta$ is its unscaled update residual.

[F3] [[def-backward-euler-step-equation]]: the BE root satisfies $z=u_0+h f(z)$ and its update residual is $z-u_0-hf(z)$.

## Proof


1.1 The scalar field is strongly dissipative with $\mu=1$, since for all $x,y$, $(f(x)-f(y))(x-y)=-(x-y)^2(1+x^2+xy+y^2)\le-(x-y)^2,$ where $x^2+xy+y^2\ge0$. Hence [F1] gives a unique BE root on all of $\mathbb R$. The root equation is $z+2z+2z^3=1$, or $3z+2z^3=1$. [F1, F3, algebra]

2.1 At $\widetilde u_1=1/3$, the left side of the root equation is $1+2/27$, so the update residual is $\eta_0=2/27$ and the derivative residual is $\eta_0/h=1/27$. Here $q=1/(1+2)=1/3$. Applying [F2] gives $|\widetilde u_1-u_1|\le q|\eta_0|=\frac13\frac{2}{27}=\frac{2}{81}.$ [F2, step 1.1, algebra] ∎
