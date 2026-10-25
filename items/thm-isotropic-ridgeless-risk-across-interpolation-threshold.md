---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-isotropic-ridgeless-risk-across-interpolation-threshold.json
  precheck: pass
id: thm-isotropic-ridgeless-risk-across-interpolation-threshold
kind: theorem
title: Isotropic ridgeless least-squares risk on both sides of interpolation
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 9
deps:
  - def-ridgeless-minimum-norm-regression
  - cor-isotropic-minimum-norm-risk-closure-under-edge-gap
  - lem-zero-signal-isotropic-risk-limit
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hastie, Montanari, Rosset, and Tibshirani, Surprises in High-Dimensional Ridgeless Least Squares Interpolation"
      url: "https://arxiv.org/pdf/1903.08560"
      locator: "Section 2.1, Theorem 1, and Appendix C.2."
---

## Statement

Assume the Axiom of Choice. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid
array of real random variables with mean zero, variance one, and finite fourth
moment. Let $p_n\ge1$ with $p_n/n\to\gamma\in(0,\infty)\setminus\{1\}$, and
let $X_n=(\xi_{ij})_{1\le i\le n,\,1\le j\le p_n}$ be its upper-left block.
Let $\beta_n\in\mathbb R^{p_n}$ be deterministic with
$\|\beta_n\|_2=r$ for a fixed $r\ge0$. Let $\varepsilon_n$ have independent
centered components of variance $\sigma^2$, independent of $X_n$, and let
$z_{0,n}$ be independent of $(X_n,\varepsilon_n)$, centered, and have
covariance $I_{p_n}$. Set $y_n=X_n\beta_n+\varepsilon_n$,
$\widehat\beta_n=X_n^+y_n$, and define the design-conditional prediction risk

$$\mathcal R_n:=\mathbb E_{\varepsilon_n,z_{0,n}} \left[(z_{0,n}^{\mathsf T}(\widehat\beta_n-\beta_n))^2\mid X_n\right].$$

Then almost surely

$$\mathcal R_n\longrightarrow \begin{cases} \displaystyle\frac{\sigma^2\gamma}{1-\gamma},&0<\gamma<1,\\[5pt] \displaystyle r^2\left(1-\frac1\gamma\right)+\frac{\sigma^2}{\gamma-1},&\gamma>1. \end{cases}$$

This result gives no limit assertion for sequences with $p_n/n\to1$.

## Statement references

[[def-ridgeless-minimum-norm-regression]]

[[lem-zero-signal-isotropic-risk-limit]]

[[cor-isotropic-minimum-norm-risk-closure-under-edge-gap]]

[Hastie, Montanari, Rosset, and Tibshirani, Theorem 1](https://arxiv.org/pdf/1903.08560)

## Facts & Assumptions

**Given:** The nested real iid design, $p_n/n\to\gamma\ne1$, fixed signal
norm $r\ge0$, independent centered noise with covariance $\sigma^2I_n$,
centered test features with covariance $I_{p_n}$, and the Axiom of Choice.

[A1] The Axiom of Choice permits a choice function for every family of
nonempty sets ([[def-axiom-of-choice]]).

[F1] For the nested real iid finite-fourth-moment model with fixed signal norm
$r>0$ and the same noise and test-feature assumptions, the almost-sure risk
limits are $\sigma^2\gamma/(1-\gamma)$ for $\gamma<1$ and
$r^2(1-1/\gamma)+\sigma^2/(\gamma-1)$ for $\gamma>1$
([[cor-isotropic-minimum-norm-risk-closure-under-edge-gap]]).

[F2] When $r=0$, the same model has almost-sure risk limits
$\sigma^2\gamma/(1-\gamma)$ for $\gamma<1$ and $\sigma^2/(\gamma-1)$ for
$\gamma>1$ ([[lem-zero-signal-isotropic-risk-limit]]).

[F3] The estimator $X_n^+y_n$ is the ridgeless minimum-norm least-squares
estimator ([[def-ridgeless-minimum-norm-regression]]).

[F4] Iid entries are independent and share one common distribution
([[def-identically-distributed-and-iid-random-variables]]).

## Proof

1.1 If $r>0$, the design, signal, noise, and test-feature hypotheses in the Statement are exactly those of [F1]; [F4] fixes the iid convention and [A1] supplies its choice assumption, so the two limits apply. [given, A1, F1, F4]

1.2 If $r=0$, then $\beta_n=0$ for every $n$, and [F2] gives the limits in the Statement under [A1] and the iid convention [F4]. [given, A1, F2, F4, algebra]

2.1 Since $r\ge0$, the cases in steps 1.1 and 1.2 exhaust the signal norms. The estimator and conditional risk are those defined in [F3], so the resulting limits are precisely the displayed formula. [given, F3, step 1.1, step 1.2, algebra] ∎ 