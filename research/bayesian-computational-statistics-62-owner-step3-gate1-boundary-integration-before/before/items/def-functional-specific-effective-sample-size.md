---
id: def-functional-specific-effective-sample-size
kind: definition
title: Functional-specific effective sample size
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-stationary-process-and-canonical-shift
  - def-moments-variance-and-covariance
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §3.2"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11, §11.12"
      url: https://artowen.su.domains/mc/Ch-MCMC.pdf
verification:
  precheck: n/a
axiom_use: "The definition uses stationarity and covariance but no choice principle."
---

## Definition

Let $(Y_n)_{n\ge0}$ be a strictly stationary real process in the sense of
[[def-stationary-process-and-canonical-shift]], and suppose
$0<\sigma_h^2:=\operatorname{Var}(Y_0)<\infty$ using
[[def-moments-variance-and-covariance]]. For $k\ge1$, put

$$\rho_h(k):=\frac{\operatorname{Cov}(Y_0,Y_k)}{\sigma_h^2}.$$

If $\sum_{k\ge1}|\rho_h(k)|<\infty$ and
$\tau_h:=1+2\sum_{k\ge1}\rho_h(k)>0$, define the theoretical
**functional-specific effective sample size** for $n$ draws by
$\operatorname{ESS}_h(n):=n/\tau_h$. Here $Y_n=h(X_n)$ is the scalar
functional whose Monte Carlo average is being assessed. When a central limit
theorem for that average has asymptotic variance
$\sigma_h^2\tau_h$, this definition is the iid sample size with the same
asymptotic variance. It does not assert that such a central limit theorem holds.
If the covariance series is not absolutely summable or $\tau_h\le0$, this
definition does not assign a finite positive effective sample size.
