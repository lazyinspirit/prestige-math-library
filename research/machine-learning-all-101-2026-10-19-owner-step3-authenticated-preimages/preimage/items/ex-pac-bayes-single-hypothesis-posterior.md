---
id: ex-pac-bayes-single-hypothesis-posterior
kind: example
title: "A posterior concentrated on one hypothesis"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-pac-bayes-prior-and-posterior
  - thm-pac-bayes-kl-bound
  - def-probability-measure
  - def-natural-logarithm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Alquier, User-friendly Introduction to PAC-Bayes Bounds, Chapter 2, §2.1.1"
      url: "https://arxiv.org/pdf/2110.11216v4"
---

## Example

Let the hypothesis space be the two-point measurable space $\Theta=\{h_0,h_1\}$ with its full sigma-algebra, and let the prior be uniform on the two hypotheses. Let $\mathcal Z$ be any measurable observation space, let $D$ be a probability measure on $\mathcal Z$, and let $\ell:\Theta\times\mathcal Z\to[0,C]$ be product-measurable for a finite $C\ge0$. Define $R(h)=\int_{\mathcal Z}\ell(h,z)D(dz)$ and $\widehat R_S(h)=m^{-1}\sum_{i=1}^m\ell(h,Z_i)$. For an IID sample $S=(Z_1,\ldots,Z_m)$ of size $m\ge1$ with common law $D$, take the posterior $\rho=\delta_{h_0}$. Then $\mathrm{KL}(\rho\|\pi)=\log 2$, and for every fixed $\lambda>0$ and $\delta\in(0,1)$, with probability at least $1-\delta$,
$$R(h_0)\le\widehat R_S(h_0)+\frac{\lambda C^2}{8m}+\frac{\log 2+\log(1/\delta)}{\lambda}$$

## Example references

[[def-pac-bayes-prior-and-posterior]]: defines the sample-independent prior, absolutely continuous posterior, and finite-partition relative entropy used here.

[[thm-pac-bayes-kl-bound]]: gives the simultaneous posterior-average risk bound under the stated product-measurability and IID hypotheses.

[[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on positive reals.

[Alquier, *User-friendly Introduction to PAC-Bayes Bounds*, Chapter 2, §2.1.1](https://arxiv.org/pdf/2110.11216v4): discusses the PAC-Bayes bound with a posterior concentrated on an individual predictor.

## Facts & Assumptions

**Given:** The finite measurable hypothesis space, its uniform prior, the bounded jointly measurable loss, an IID sample with common law $D$, and the point-mass posterior $\delta_{h_0}$.

[F1] A prior and posterior are probability measures, and relative entropy is the supremum of finite-partition divergences using the natural logarithm. [[def-pac-bayes-prior-and-posterior]], [[def-probability-measure]], [[def-natural-logarithm]]

[F2] For the fixed prior and bounded product-measurable loss, with probability at least $1-\delta$ the PAC-Bayes inequality holds simultaneously for every posterior absolutely continuous with respect to the prior. [[thm-pac-bayes-kl-bound]]

## Verification

**Given:** The finite measurable hypothesis space, uniform sample-independent prior, bounded product-measurable loss, IID sample with common law $D$, and posterior $\delta_{h_0}$ in the Example.

1.1 The posterior $\delta_{h_0}$ is absolutely continuous with respect to the uniform prior because every prior-null subset of $\Theta$ is empty. For a finite measurable partition, if its cells keep $h_0,h_1$ together, its divergence is $0$; if it separates them, the cell containing $h_0$ contributes $1\cdot\log(1/(1/2))=\log2$ and the other cell contributes $0$. Hence every partition divergence is at most $\log2$, and the partition into singletons attains it, so [F1] gives $\mathrm{KL}(\delta_{h_0}\|\pi)=\log2$. [given, F1, cases, algebra]

2.1 Since $\rho$ is concentrated at $h_0$, its population and empirical risk averages are respectively $R(h_0)$ and $\widehat R_S(h_0)$. Applying [F2] to this posterior gives the displayed inequality with probability at least $1-\delta$. [given, F2, step 1.1, algebra] ∎
