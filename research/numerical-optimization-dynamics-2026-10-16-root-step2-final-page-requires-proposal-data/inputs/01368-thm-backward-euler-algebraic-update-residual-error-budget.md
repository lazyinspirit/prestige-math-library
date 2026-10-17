---
id: thm-backward-euler-algebraic-update-residual-error-budget
title: "Backward Euler propagates unscaled algebraic update residuals"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-backward-euler-dissipative-resolvent-contraction
  - def-implicit-residual-and-algebraic-error-units
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
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
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.9, PDF pp. 78–79 / printed pp. 76–77: implicit Euler on stiff dissipative scalar equations."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 11: Stiffness"
      url: "https://fncbook.com/stiffness/"
      locator: "§11.4: stiffness, the scalar test equation, and A-stability of backward Euler; the algebraic residual-to-discrete-error distinction is proved locally."
---

## Statement

Assume the hypotheses of [[thm-backward-euler-dissipative-resolvent-contraction]] with a common $\mu\ge0$, let $N\in\mathbb N_0$, and use a constant $h>0$ grid $t_n=t_0+nh$ for $0\le n\le N$. Let $u_0\in\mathbb R^d$ and let $u_{n+1}$ be the exact backward Euler sequence, $u_{n+1}=R_{t_{n+1},h}(u_n)$. For any approximate sequence $\widetilde u_n\in\mathbb R^d$, define its update residual
$$\eta_n=\widetilde u_{n+1}-\widetilde u_n-hf(t_{n+1},\widetilde u_{n+1}).$$
With $q=(1+h\mu)^{-1}\le1$, for $0\le n\le N$,
$$\|\widetilde u_N-u_N\|_2\le q^N\|\widetilde u_0-u_0\|_2+\sum_{j=0}^{N-1}q^{N-j}\|\eta_j\|_2.$$
This bound uses the unscaled update residual. If $r_n=\eta_n/h$ is the derivative residual, its contribution is $h q^{N-j}\|r_j\|_2$. The result compares to the exact discrete BE sequence, not directly to the continuous solution.

## Facts & Assumptions

**Given:** A continuous globally dissipative field with constant $\mu\ge0$, a constant positive step $h$, the exact BE sequence, and approximate endpoints as in the statement.

[F1] [[thm-backward-euler-dissipative-resolvent-contraction]]: the BE resolvent $R_{t,h}$ is defined on all $\mathbb R^d$ and satisfies $\|R_{t,h}(a)-R_{t,h}(b)\|_2\le q\|a-b\|_2$, where $q=(1+h\mu)^{-1}$.

[F2] [[def-implicit-residual-and-algebraic-error-units]]: the BE update residual is endpoint minus input minus $hf$; the derivative residual is this vector divided by $h$.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality.

[A1] The same dissipativity constant works at every grid time and $f$ is continuous on the full state space, so each exact BE endpoint in the recurrence exists uniquely.

## Proof


1.1 Write $H_{n+1}(z)=z-hf(t_{n+1},z)$. By [F2], $H_{n+1}(\widetilde u_{n+1})=\widetilde u_n+\eta_n$, while the exact update satisfies $H_{n+1}(u_{n+1})=u_n$. [A1, F1, F2, algebra]

2.1 Apply the inverse Lipschitz estimate [F1] to these two right-hand sides. With $e_n=\|\widetilde u_n-u_n\|_2$, it gives $e_{n+1}\le q\|\widetilde u_n+\eta_n-u_n\|_2\le q e_n+q\|\eta_n\|_2$ by the Euclidean triangle inequality [F3]. [F1, F3, step 1.1, algebra]

3.1 Induction in the recurrence of step 2.1 gives $e_N\le q^N e_0+\sum_{j=0}^{N-1}q^{N-j}\|\eta_j\|_2$: for $N=0$ this is equality, and multiplying the bound at $N$ by $q$ and appending $q\|\eta_N\|_2$ proves the next case. The derivative-residual form follows from $\eta_j=h r_j$ in [F2]. [F2, step 2.1, induction, algebra] ∎
