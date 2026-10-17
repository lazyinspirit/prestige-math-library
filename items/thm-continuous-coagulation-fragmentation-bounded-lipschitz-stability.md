---
id: thm-continuous-coagulation-fragmentation-bounded-lipschitz-stability
kind: theorem
title: Bounded-kernel measure solutions are stable in bounded-Lipschitz discrepancy
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - def-bounded-lipschitz-discrepancy-for-measures
  - thm-continuous-coagulation-fragmentation-moment-bounds
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the proof compares each bounded-Lipschitz test before taking its supremum.
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
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §3.4
      url: https://arxiv.org/pdf/1801.08312
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§2–4
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

Let $\mu_t,\nu_t$ be positive weak solutions of [[def-continuous-size-coagulation-fragmentation-weak-model]] on $[0,T]$, with $\sup_{t\le T}(M_0(\mu_t)+M_0(\nu_t))\le N_T$. Then for a constant $C_T$ depending only on $N_T,K_*,L_K,\beta_*,L_\beta,D,L_B$,

$$d_{BL}(\mu_t,\nu_t)\le e^{C_Tt}d_{BL}(\mu_0,\nu_0)\qquad(0\le t\le T).$$

## Facts & Assumptions

**Given:** Two positive weak solutions, the bounded-Lipschitz test class, symmetric bounded Lipschitz $K$, and bounded Lipschitz fragmentation data.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: the coagulation test increment is $\varphi(x+y)-\varphi(x)-\varphi(y)$, and the fragmentation increment is $\int\varphi\,dB_x-\varphi(x)$.

[F2] [[def-bounded-lipschitz-discrepancy-for-measures]]: $d_{BL}$ is the supremum over tests with $\|\varphi\|_\infty\le1$ and $\operatorname{Lip}(\varphi)\le1$.

[F3] [[thm-continuous-coagulation-fragmentation-moment-bounds]]: the number moments of both solutions are bounded by their initial number times $e^{\beta_*Dt}$.

## Proof

1.1 Fix an admissible test $\varphi$ in [F2]. The coagulation integrand $H_\varphi(x,y)=\frac12K(x,y)[\varphi(x+y)-\varphi(x)-\varphi(y)]$ has a uniform supremum bound and uniform Lipschitz bounds in each variable: the bracket is bounded by $3$ and changes by at most $2|x-x'|$ when only $x$ changes, so the product rule for differences gives a bound depending only on $K_*,L_K$. [given, F1, F2, algebra]

1.2 The function $J_\varphi(x)=\beta(x)[\int\varphi\,dB_x-\varphi(x)]$ is bounded by $\beta_*(D+1)$ and Lipschitz with constant at most $L_\beta(D+1)+\beta_*(L_B+1)$, by the assumed boundedness and $d_{BL}(B_x,B_y)\le L_B|x-y|$. Thus its fragmentation derivative difference is bounded by a constant times $d_{BL}(\mu_t,\nu_t)$. [given, F1, F2, algebra]

2.1 Write $\mu\otimes\mu-\nu\otimes\nu=(\mu-\nu)\otimes\mu+\nu\otimes(\mu-\nu)$. For each fixed value of the other variable, the section of $H_\varphi$ is a bounded-Lipschitz function with the constants from step 1.1. Scaling that section into the unit test class [F2] and integrating the other variable gives a coagulation derivative difference bounded by $C_K(M_0(\mu_t)+M_0(\nu_t))d_{BL}(\mu_t,\nu_t)$. [step 1.1, F2, algebra]

3.1 Integrating the weak equations, steps 2.1 and 1.2 give for every admissible $\varphi$ the bound $|\langle\varphi,\mu_t-\nu_t\rangle|\le d_{BL}(\mu_0,\nu_0)+C_T\int_0^t d_{BL}(\mu_s,\nu_s)\,ds$, where [F3] makes $C_T$ uniform on $[0,T]$. Taking the supremum gives $d(t)\le d(0)+C_T\int_0^t d(s)\,ds$. Put $g(t)=d(0)+C_T\int_0^t d(s)\,ds$; then $d\le g$ and $g'\le C_Tg$ almost everywhere, so $(e^{-C_Tt}g(t))'\le0$ and $d(t)\le g(t)\le e^{C_Tt}d(0)$. [F1, F2, F3, step 2.1, step 1.2, algebra] ∎

