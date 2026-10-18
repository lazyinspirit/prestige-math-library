---
page: f-divergences-renyi-and-hypothesis-testing
title: F-Divergences, Rényi Information, and Hypothesis Testing
status: published
requires: [measure-theoretic-information-and-conditioning, finite-sample-tests-neyman-pearson-and-valid-p-values]
items:
  - def-finite-probability-vector
  - lem-convex-generator-boundary-limits-exist
  - lem-finite-kl-generator-is-admissible
  - lem-finite-renyi-generators-are-convex
  - def-finite-f-divergence
  - def-finite-hypothesis-testing-beta
  - def-finite-stochastic-kernel
  - def-finite-kullback-leibler-divergence
  - lem-convex-perspective-is-subadditive
  - def-finite-renyi-divergence
  - lem-finite-iid-log-likelihood-concentrates
  - thm-finite-f-divergence-data-processing
  - thm-finite-kullback-leibler-data-processing
  - thm-finite-renyi-data-processing
  - thm-finite-renyi-limit-is-kullback-leibler
  - thm-kl-is-iid-type-ii-error-exponent
examples: []
---

This finite-alphabet development defines probability vectors, stochastic
kernels, support-aware f-divergences, KL divergence, and positive-order
Rényi divergence using natural logarithms. It proves data processing for
f-divergences, KL, and Rényi orders other than one, then proves the
two-sided finite Rényi limit at order one, including the singular-support
case. The type-II testing function explicitly takes P as null and Q as
alternative, constrains rejection under P, and minimizes acceptance under Q;
the final theorem proves that its iid exponent is the directional quantity
$D(P\|Q)$.

Applying a channel K to both laws is represented below. Each row is one
probability law passed through the same row-stochastic kernel; the diagram
records the operation, while the written proofs establish contraction.

```tikzcd
\begin{tikzcd}
P \arrow[r, "K"] & PK \\
Q \arrow[r, "K"'] & QK
\end{tikzcd}
```

The declarations and arguments are finite-alphabet statements. Support
mismatch is retained explicitly in every divergence convention.

