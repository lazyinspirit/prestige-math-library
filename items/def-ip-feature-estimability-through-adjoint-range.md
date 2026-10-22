---
id: def-ip-feature-estimability-through-adjoint-range
kind: definition
title: Exact linear feature estimability through the adjoint range
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-isonormal-white-noise-experiment
  - def-countable-choice
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - thm-riesz-representation-for-hilbert-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is inherited from the Hilbert adjoint and Riesz representation interfaces. The range characterization itself uses no further choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Remo Kretschmann and Frank Werner, Maximum a posteriori testing in statistical inverse problems, §1.1 and §1.2"
      url: https://arxiv.org/pdf/2402.00686
    - title: "Remo Kretschmann, Daniel Wachsmuth, and Frank Werner, Optimal regularized hypothesis testing in statistical inverse problems, §1.1"
      url: https://arxiv.org/pdf/2212.12897
---

## Definition

Assume Countable Choice. Let $X$ be a real Hilbert space and let $H$ be a separable real Hilbert space. Let $K:X\to H$ be bounded and linear, let $\epsilon>0$, and let $Z$ be a jointly Gaussian centered family indexed by $H$, linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$. For each $x\in X$ define $Y_x(g)=\langle Kx,g\rangle_H+\epsilon Z(g)$. A continuous linear feature is a map $\phi\in X^*$, where $X^*$ is the continuous dual of $X$. By the Riesz representation theorem there is a unique $h_\phi\in X$ with $\phi(x)=\langle x,h_\phi\rangle_X$ for every $x\in X$. The feature is **exactly linearly estimable by one probe** if some $\Phi\in H$ makes the statistic $Y_x(\Phi)$ unbiased for $\phi(x)$ for every $x\in X$. Writing $R(K^*)=\{K^*\Phi:\Phi\in H\}$ for the adjoint range, this holds exactly when $h_\phi\in R(K^*)$. Every such probe has variance $\epsilon^2\|\Phi\|_H^2$. This definition concerns one-probe unbiased linear estimators; it does not identify membership in $\overline{R(K^*)}$ with exact estimability.

## Definition references

[[def-ip-isonormal-white-noise-experiment|Isonormal white-noise inverse experiment]]

[[def-hilbert-space-adjoint|Hilbert-space adjoint]]

[[thm-riesz-representation-for-hilbert-space|Riesz representation theorem for Hilbert spaces]]

[Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, §1.1 and §1.2](https://arxiv.org/pdf/2402.00686)

[Kretschmann, Wachsmuth, and Werner, *Optimal regularized hypothesis testing in statistical inverse problems*, §1.1](https://arxiv.org/pdf/2212.12897)

## Facts & Assumptions

**Given:** Real Hilbert spaces $X,H$, a bounded linear map $K:X\to H$, an isonormal white-noise experiment with $\epsilon>0$, and a continuous linear feature $\phi(x)=\langle x,h_\phi\rangle_X$.

[F1] In the isonormal experiment, $\mathbb E_xY_x(\Phi)=\langle Kx,\Phi\rangle_H$ and $\operatorname{Var}_x(Y_x(\Phi))=\epsilon^2\|\Phi\|_H^2$ for every fixed $x\in X$ and $\Phi\in H$. [[def-ip-isonormal-white-noise-experiment]]

[F2] The adjoint satisfies $\langle Kx,\Phi\rangle_H=\langle x,K^*\Phi\rangle_X$. [[def-hilbert-space-adjoint]]

[F3] Every continuous linear functional on a real Hilbert space has a unique representing vector $h_\phi$ with $\phi(x)=\langle x,h_\phi\rangle_X$. [[thm-riesz-representation-for-hilbert-space]]

[A1] Countable Choice is assumed by [F2] and [F3]. [[def-countable-choice]]

## Proof

1.1 Fix a probe $\Phi\in H$. By [F1] and [F2], whose supplier hypotheses are recorded in [A1], its mean at parameter $x$ is $\langle x,K^*\Phi\rangle_X$ and its variance is finite, equal to $\epsilon^2\|\Phi\|_H^2$. If it is unbiased for every $x$, then $\langle x,K^*\Phi-h_\phi\rangle_X=0$ for every $x\in X$. Taking $x=K^*\Phi-h_\phi$ gives $K^*\Phi=h_\phi$, so $h_\phi\in R(K^*)$. [given, A1, F1, F2, F3, algebra]

2.1 Conversely, if $h_\phi\in R(K^*)$, use [A1] to choose $\Phi\in H$ with $K^*\Phi=h_\phi$. Equations [F1] and [F2] then give $\mathbb E_xY_x(\Phi)=\langle x,h_\phi\rangle_X=\phi(x)$ for every $x$, and [F1] gives its finite variance $\epsilon^2\|\Phi\|_H^2$. Hence this probe is an exact one-probe estimator, proving both directions and the variance assertion. [given, A1, F1, F2, F3, step 1.1, choose, algebra] ∎
