---
id: thm-bounded-kernel-continuous-coagulation-fragmentation-global-wellposedness
kind: theorem
title: Bounded binary coagulation-fragmentation is globally well posed in weighted total variation
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - lem-continuous-coagulation-fragmentation-local-positive-wellposedness
  - thm-continuous-coagulation-fragmentation-moment-bounds
  - lem-continuous-coagulation-fragmentation-vector-field-locally-lipschitz
  - lem-weighted-total-variation-space-is-complete
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; global continuation is by a norm limit at each finite endpoint.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§3.1–3.4
      url: https://arxiv.org/pdf/1801.08312
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

Under the hypotheses of [[def-continuous-size-coagulation-fragmentation-weak-model]], every positive initial measure $\mu_0\in\mathcal M_w(E)$ has a unique positive weak solution on every finite time interval. For $T<\infty$ its norm is bounded by

$$\sup_{0\le t\le T}\|\mu_t\|_w\le M_0(\mu_0)e^{\beta_*DT}+M_2(\mu_0)+K_*M_1(\mu_0)^2T.$$

## Facts & Assumptions

**Given:** The weighted measure space, local positive solution construction, and number, mass, and second-moment estimates.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: the bounded kernels and daughter measures specify the weak equation and its vector field $F(\mu)=\mathcal C(\mu,\mu)+\mathcal F\mu$ on $\mathcal M_w(E)$.

[F2] [[lem-continuous-coagulation-fragmentation-local-positive-wellposedness]]: every positive initial measure admits a unique local positive solution.

[F3] [[thm-continuous-coagulation-fragmentation-moment-bounds]]: $M_0(t)\le M_0(0)e^{\beta_*Dt}$, $M_1(t)=M_1(0)$, and $M_2(t)\le M_2(0)+K_*M_1(0)^2t$.

[F4] [[lem-weighted-total-variation-space-is-complete]]: $\mathcal M_w(E)$ is complete in its weighted norm.

[F5] [[lem-continuous-coagulation-fragmentation-vector-field-locally-lipschitz]]: $F$ is Lipschitz on every bounded ball and $F(0)=0$.

## Proof

1.1 Since $\mu_t$ is positive, $\|\mu_t\|_w=M_0(\mu_t)+M_2(\mu_t)$. Applying [F3] for $0\le t\le T$ gives the displayed finite bound. [given, F3, algebra]

2.1 Suppose a maximal solution had a finite endpoint $T_*$. The model definition [F1] identifies its vector field, and the bound in step 1.1 places it in a fixed weighted-norm ball. By [F5], $\|F(\mu_t)\|_w\le C$ there, so $\|\mu_t-\mu_s\|_w\le C|t-s|$; hence $\mu_t$ is Cauchy as $t\uparrow T_*$. Completeness [F4] gives a limit $\mu_*$. Positivity is closed: if $\mu_n\ge0$ and $\mu_n\to\mu_*$ in weighted total variation, then $\mu_*^-(E)\le\|\mu_* -\mu_n\|_{TV}\to0$. [step 1.1, F1, F4, F5, algebra]

3.1 Restart the local construction [F2] at $\mu_*$. Its solution agrees on the overlap by local uniqueness and extends the original solution beyond $T_*$, a contradiction. Repeating this continuation excludes every finite right endpoint. If two global solutions have the same initial measure, local uniqueness in [F2] makes them agree successively on each compact time interval. [step 2.1, F2, algebra] ∎

