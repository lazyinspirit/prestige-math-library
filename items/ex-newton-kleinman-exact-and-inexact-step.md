---
id: ex-newton-kleinman-exact-and-inexact-step
kind: example
title: "Exact Newton-Kleinman decreases the cost while an unchecked inexact step
  can lose stability"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - alg-finite-budget-newton-kleinman-policy-iteration
  - prop-inexact-newton-kleinman-safeguard
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 28–29, exact Newton-Kleinman iteration"
verification:
  precheck: pass
---

## Example

Take scalar CARE data $A=B=C=R=1$ and the stabilizing starting gain $K_0=2$.

## Facts & Assumptions

**Given:** The data above and the exact/inexact iteration conventions of [[alg-finite-budget-newton-kleinman-policy-iteration]] and [[prop-inexact-newton-kleinman-safeguard]].

[F1] [[alg-finite-budget-newton-kleinman-policy-iteration]]: exact mode solves $(A-BK_j)^*X_j+X_j(A-BK_j)=-(Q+K_j^*RK_j)$ and then sets $K_{j+1}=R^{-1}B^*X_j$.

[F2] [[alg-finite-budget-newton-kleinman-policy-iteration]]: inexact line-search trials are $K_j+\theta_\ell(\widetilde K_j-K_j)$ for the finite list $\theta_\ell=2^{-\ell}$.

[F3] [[prop-inexact-newton-kleinman-safeguard]]: an accepted inexact trial must have a certified Hurwitz closed loop and an exact cost matrix no greater than the current one.

## Proof

1.1 At $K_0=2$, the closed loop is $-1$ and the exact Lyapunov equation gives $-2X_0+5=0$, hence $X_0=5/2$ and $K_1=5/2$. The next closed loop is $-3/2$, and its policy equation gives $-3X_1+1+25/4=0$, hence $X_1=29/12<5/2$. [F1, given, algebra]

2.1 Consider instead an unchecked approximate policy value $\widetilde P=0$, which proposes $\widetilde K=0$. A full step gives closed loop $A-B\widetilde K=1$, which is unstable. More generally, a line-search trial between $K_0=2$ and $0$ has $K\in[0,2]$. If $K\le1$ its closed loop $1-K$ is not Hurwitz. If $1<K<2$, its exact cost matrix is $P(K)=(1+K^2)/(2(K-1))$, and $P(K)-\frac52=\frac{(K-2)(K-3)}{2(K-1)}>0.$ Thus every nonzero trial either loses stability or increases cost; the certified safeguard rejects it. [F2, F3, step 1.1, algebra] ∎
