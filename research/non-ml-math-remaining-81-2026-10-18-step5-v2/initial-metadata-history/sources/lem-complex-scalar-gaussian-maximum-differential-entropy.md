---
id: lem-complex-scalar-gaussian-maximum-differential-entropy
kind: lemma
title: Circular complex Gaussian maximizes differential entropy at fixed second moment
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-axiom-of-choice, lem-real-vector-gaussian-maximum-differential-entropy]
aliases: []
proof_strategy: realification-and-determinant-bound
axiom_use: AC is inherited from the real-vector Gaussian maximum-entropy supplier.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 2, §2.3, Theorem 2.8, Gaussian maximum differential entropy at fixed covariance.
    - title: John Duchi, Lecture Notes on Statistics and Information Theory
      url: https://web.stanford.edu/class/stats311/lecture-notes.pdf
      locator: Chapter 2, §2.1.2, Proposition 2.1.8, printed pp. 16–17, Gaussian maximum differential entropy at fixed covariance.
---

## Statement

Assume AC. Let $Z\in\mathbb C$ have a Lebesgue density, finite mean $\mu$, finite differential entropy, and positive-definite real covariance matrix $K$ for $(\operatorname{Re}Z,\operatorname{Im}Z)$. Put $\sigma^2=\mathbb E|Z-\mu|^2=\operatorname{tr}K$. Then
$$h(Z)\le\ln(\pi e\sigma^2).$$
Equality holds exactly for the circular complex Gaussian law $\mathcal{CN}(\mu,\sigma^2)$ with density $(\pi\sigma^2)^{-1}\exp(-|z-\mu|^2/\sigma^2)$.

## Facts & Assumptions

**Given:** AC and the density, mean, entropy, and positive-definite real covariance hypotheses in the Statement.

[A1] [[def-axiom-of-choice]]: AC is required by the Gaussian-law and entropy supplier.

[F1] [[lem-real-vector-gaussian-maximum-differential-entropy]]: a real vector with positive-definite covariance $K$ and finite differential entropy satisfies $h\le\frac12\ln((2\pi e)^d\det K)$, with equality exactly for the matching real Gaussian law.

## Proof







1.1 Identify $Z$ with the real vector $(\operatorname{Re}Z,\operatorname{Im}Z)$. This identification preserves Lebesgue measure and the differential-entropy integral, so [F1] with $d=2$ gives $$h(Z)\le\frac12\ln((2\pi e)^2\det K).$$ [A1, F1, given, algebra]

2.1 Let $\lambda_1,\lambda_2>0$ be the eigenvalues of $K$. Then $\det K=\lambda_1\lambda_2\le((\lambda_1+\lambda_2)/2)^2=(\sigma^2/2)^2$, because $(\lambda_1-\lambda_2)^2\ge0$. Substitution into step 1.1 gives $h(Z)\le\ln(\pi e\sigma^2)$. Equality requires equality in [F1] and $\lambda_1=\lambda_2$, so $Z$ is Gaussian with real covariance $(\sigma^2/2)I_2$, exactly $\mathcal{CN}(\mu,\sigma^2)$. Conversely, substituting that circular Gaussian density gives entropy $\ln(\pi e\sigma^2)$. [F1, step 1.1, algebra] ∎
