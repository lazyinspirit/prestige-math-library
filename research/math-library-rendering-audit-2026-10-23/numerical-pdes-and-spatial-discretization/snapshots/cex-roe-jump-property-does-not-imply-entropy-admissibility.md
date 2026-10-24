---
id: cex-roe-jump-property-does-not-imply-entropy-admissibility
kind: counterexample
title: "A Roe jump property does not imply entropy admissibility"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-roe-linearization-and-flux
  - def-rankine-hugoniot-and-lax-shocks
  - def-scalar-convex-entropy-admissibility
  - lem-rankine-hugoniot-jump-is-a-weak-solution
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 14 §14.2.2, printed pp. 151–152: Roe's sonic expansion-shock entropy failure"
---

## Statement refuted

For a scalar conservation law, the Roe exact flux-jump identity by itself
guarantees entropy admissibility.

## Facts & Assumptions

**Given:** Burgers' scalar conservation law, its Roe matrix, the Riemann step data $u_0(x)=-1$ for $x<0$ and $u_0(x)=1$ for $x>0$, and the convex entropy pair below.

[F1] [[def-roe-linearization-and-flux]]: the Roe jump property is the identity $\widetilde a(u_L,u_R)(u_R-u_L)=f(u_R)-f(u_L)$, which does not itself impose an entropy inequality.

[F2] [[def-scalar-convex-entropy-admissibility]]: for an entropy pair $(\eta,q)$, a moving jump of speed $s$ is entropy-admissible only if $[q]-s[\eta]\le0$.

[F3] [[def-rankine-hugoniot-and-lax-shocks]]: a Rankine–Hugoniot jump of speed $s$ is defined by $[f]=s[u]$.

[F4] [[lem-rankine-hugoniot-jump-is-a-weak-solution]]: a Rankine–Hugoniot jump with the corresponding Riemann step data is a distributional weak solution and has the required local $L^1$ initial trace.

[A1] For Burgers' flux, $\eta(u)=u^2/2$ and $q(u)=u^3/3$ satisfy $\eta''=1>0$ and $q'=\eta'f'$.

## Counterexample

1.1 For Burgers' flux $f(u)=u^2/2$ with $u_L=-1,u_R=1$, the Roe scalar $\widetilde a(u_L,u_R)=(u_L+u_R)/2$ is continuous at each diagonal pair, has equal-state value $\widetilde a(u,u)=u=f'(u)$, and satisfies the jump identity for every pair because $f(u_R)-f(u_L)=\frac12(u_L+u_R)(u_R-u_L)$. At $(-1,1)$ the speed is zero and $f(1)-f(-1)=0=s(u_R-u_L)$, so the stationary jump satisfies the Roe identity [F1] and, by [F4], is a weak solution with the Riemann data in the Given clause. [given, F1, F3, F4, algebra]

2.1 For [A1], the entropy production coefficient is $[q]-s[\eta]=(1/3-(-1/3))-0\cdot(1/2-1/2)=2/3>0$. This violates the necessary entropy inequality [F2]. Thus the Roe jump property and weak Rankine–Hugoniot balance do not guarantee entropy admissibility. [given, A1, F2, step 1.1, algebra] ∎
