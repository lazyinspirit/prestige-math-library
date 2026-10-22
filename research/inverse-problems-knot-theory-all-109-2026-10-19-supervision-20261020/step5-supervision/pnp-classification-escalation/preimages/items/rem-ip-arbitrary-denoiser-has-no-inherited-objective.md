---
id: rem-ip-arbitrary-denoiser-has-no-inherited-objective
kind: remark
title: "An arbitrary denoiser does not inherit the exact-MMSE objective"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - lem-ip-tweedie-mmse-jacobian-and-prox-potential
  - def-ip-pnp-ista-with-denoiser
  - thm-ip-exact-mmse-pnp-ista-stationarity
  - def-euclidean-inner-product
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "The scalar proximal-selection comparison uses no choice axiom. Its exact-MMSE comparison refers to the locally constructed analytic conditional-mean map."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Xiaojian Xu, Yu Sun, Jiaming Liu, Brendt Wohlberg, and Ulugbek S. Kamilov, Provable Convergence of Plug-and-Play Priors with MMSE Denoisers, IEEE Signal Processing Letters 27 (2020), arXiv:2005.07685"
      url: "https://arxiv.org/pdf/2005.07685"
      locator: "§1, pp. 1–2; §3 and Conclusion, pp. 3–5: exact versus approximate MMSE denoisers and the stated iterative-AWGN modeling limitation."
    - title: "Rémi Gribonval and Mila Nikolova, On Bayesian Estimation and Proximity Operators, Applied and Computational Harmonic Analysis 50 (2021), 49–72, arXiv:1807.04021"
      url: "https://arxiv.org/pdf/1807.04021"
      locator: "§1.3 and §2.1: a posterior mean may have a specifically constructed proximity penalty; this is a property to establish, not a consequence of an arbitrary map."
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1(3) (2014)"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
      locator: "§1.1, p. 124: standard convex proximal-map definition and its convexity scope."
---

## Remark

For $\gamma>0$, a global proximal selection of an extended-real penalty $h:\mathbb R\to\mathbb R\cup\{+\infty\}$ is a map $P:\mathbb R\to\mathbb R$ such that, for every $z\in\mathbb R$, $P(z)$ is a global minimizer of $x\mapsto\frac12|x-z|^2+\gamma h(x)$. The potential $h_{\sigma,\gamma}$ in the exact-MMSE stationarity result is constructed from the conditional-mean map $D_\sigma$. Replacing $D_\sigma$ in PnP-ISTA by an arbitrary map $\widetilde D_\sigma$ does not in general give a global proximal representation or inherit that stationarity conclusion: for every $\gamma>0$, the map $z\mapsto-z$ is not a global proximal selection of any such $h$ that is finite somewhere and nowhere $-\infty$. This does not assert that a particular other denoiser has no different objective.

## Remark references

[[lem-ip-tweedie-mmse-jacobian-and-prox-potential]]

[[def-ip-pnp-ista-with-denoiser]]

[[thm-ip-exact-mmse-pnp-ista-stationarity]]

## Facts & Assumptions

**Given:** The exact-MMSE potential construction, the general PnP-ISTA input-map convention, and the global-proximal-selection counterexample claimed in the Remark.

[F1] [[lem-ip-tweedie-mmse-jacobian-and-prox-potential]]: for the exact Gaussian posterior-mean map, the constructed extended-real potential has that map as its unique global proximal minimizer.

[F2] [[def-ip-pnp-ista-with-denoiser]]: PnP-ISTA permits a deterministic map $\widetilde D_\sigma$ in the denoising step.

[F3] [[def-euclidean-inner-product]]: on $\mathbb R$, the norm is the absolute value and the squared Euclidean distance is the square of the scalar difference.

## Verification

**Given:** A step parameter $\gamma>0$ and the global-proximal-selection definition in the Remark.

1.1 Suppose an extended-real penalty $h$ that is finite somewhere and nowhere $-\infty$ had $P(z)=-z$ as a global minimizer of $\frac12|x-z|^2+\gamma h(x)$ for every $z$. Its objective has a finite competitor for every input, so each claimed global minimizer has finite value. For distinct $s,t\in\mathbb R$, compare the minimizer at input $s$ with competitor $P(t)$ and the minimizer at input $t$ with competitor $P(s)$, then add the inequalities. The finite penalty values cancel and expansion gives $(P(s)-P(t))(s-t)\ge0$. [given, F3, algebra]

2.1 Substituting $P(s)-P(t)=-(s-t)$ into step 1.1 yields $-(s-t)^2\ge0$, which is false for $s\ne t$. Thus no such $h$ exists for this map, so the exact-MMSE construction and stationarity result cannot be transferred to an arbitrary denoiser without a separate proof. [F1, F2, step 1.1, algebra] ∎
