---
id: thm-age-structured-renewal-semigroup-growth-and-data-stability
kind: theorem
title: Positive age-renewal evolution and L1 data stability
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-age-structured-renewal-transport-problem
  - thm-age-structured-renewal-characteristic-solution
  - thm-gronwall-integral-inequality
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; all estimates are scalar L1 inequalities.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, Theorem 2.2 and its complete proof, PDF pp. 14–23: existence, L1 growth and contraction for structured renewal transport."
---

## Statement

For [[def-age-structured-renewal-transport-problem]], let $\beta_\infty=\|\beta\|_\infty$. The solution map $S_{\mu,\beta}(t):n_0\mapsto n(t,\cdot)$ is linear and positive, and

$$\|S_{\mu,\beta}(t)n_0\|_1\le e^{\beta_\infty t}\|n_0\|_1.$$

If $n,\widetilde n$ use possibly different nonnegative bounded coefficients $(\mu,\beta)$ and $(\widetilde\mu,\widetilde\beta)$ and initial data $n_0,\widetilde n_0$, put $\delta=\|\mu-\widetilde\mu\|_\infty+\|\beta-\widetilde\beta\|_\infty$ and $\widetilde\beta_\infty=\|\widetilde\beta\|_\infty$. Then

$$\|n(t)-\widetilde n(t)\|_1\le e^{\beta_\infty t}\left(\|n_0-\widetilde n_0\|_1+\delta t e^{\widetilde\beta_\infty t}\|\widetilde n_0\|_1\right).$$

## Facts & Assumptions

**Given:** The two age-renewal models and the characteristic mild solutions supplied by [[thm-age-structured-renewal-characteristic-solution]].

[F1] [[def-age-structured-renewal-transport-problem]]: $\mu,\beta$ are nonnegative and bounded, the inflow is $B(t)=\int\beta(a)n(t,a)\,da$, and survival is the exponential along an age characteristic.

[F2] [[thm-age-structured-renewal-characteristic-solution]]: each nonnegative initial density has one nonnegative mild solution, given by the characteristic formula and Volterra birth equation.

[F3] [[thm-gronwall-integral-inequality]]: if $u(t)\le a(t)+\int_0^t b(s)u(s)\,ds$ with nonnegative continuous $u,b$ and nondecreasing $a$, then $u(t)\le a(t)e^{\int_0^t b}$.

## Proof

1.1 The formula in [F2] is linear in $n_0$, and uniqueness in [F2] implies that the solution for a sum of two initial data is the sum of their solutions and that scalar multiples are preserved. Nonnegative $n_0$ gives nonnegative $G$, Volterra kernel and density by [F1]–[F2], so the solution operator is positive. [F1, F2, algebra]

1.2 Integrating the two characteristic branches in [F2] gives $N(t)=\int_0^\infty n_0(x)S(x,t)\,dx+\int_0^t B(t-a)S(0,a)\,da$. Bounded $\mu$ and continuous $B$ permit differentiation under these integrals; using $\partial_tS(x,t)=-\mu(x+t)S(x,t)$ and $\partial_aS(0,a)=-\mu(a)S(0,a)$ yields $N'(t)=B(t)-\int_0^\infty\mu(a)n(t,a)\,da$ for almost every $t$. Since $0\le B(t)\le\beta_\infty N(t)$ and $\mu n\ge0$, we have $N'(t)\le\beta_\infty N(t)$. [F1, F2, algebra]

2.1 Integrating the differential inequality in step 1.2 gives $N(t)\le N(0)+\int_0^t\beta_\infty N(s)\,ds$. Apply [F3] with $a(t)=N(0)$ and $b=\beta_\infty$ to obtain the asserted positive-semigroup bound. [F3, step 1.2, algebra]

2.2 Subtract the two transport equations and write $w=n-\widetilde n$. Along characteristics, its interior forcing is $(\widetilde\mu-\mu)\widetilde n$ and its inflow forcing is $\int\beta w+\int(\beta-\widetilde\beta)\widetilde n$. Taking absolute values in the characteristic integral formula, integrating over age, and using nonnegative survival factors gives $E(t)\le E(0)+\int_0^t[\beta_\infty E(s)+\delta\widetilde N(s)]\,ds$, where $E=\|w\|_1$ and $\widetilde N=\|\widetilde n\|_1$. [F1, F2, step 1.2, algebra]

3.1 By step 2.1 applied to $\widetilde n$, $\widetilde N(s)\le e^{\widetilde\beta_\infty s}\|\widetilde n_0\|_1$. Thus the nondecreasing function $a(t)=E(0)+\delta t e^{\widetilde\beta_\infty t}\|\widetilde n_0\|_1$ bounds the forcing integral in step 2.2, and [F3] yields the claimed coefficient-and-initial-data stability estimate. [F3, step 2.1, step 2.2, algebra] ∎

