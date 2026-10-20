---
id: cor-pac-bayes-risk-bound
kind: corollary
title: "A PAC-Bayes bound for a finite tuning grid"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - thm-pac-bayes-kl-bound
  - lem-probability-measure-basic-identities
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Alquier, User-friendly Introduction to PAC-Bayes Bounds, Chapter 2, Theorem 2.4 and proof"
      url: "https://arxiv.org/pdf/2110.11216v4"
---

## Statement

Let $(\Theta,\mathcal A,\pi)$ and $(\mathcal Z,\mathcal B,D)$ be probability spaces. Let $C\ge0$, and let $\ell:\Theta\times\mathcal Z\to[0,C]$ be $\mathcal A\otimes\mathcal B$-measurable. Draw $S=(Z_1,\ldots,Z_m)$ from the product law $D^m$, where $m\ge1$, and define $R(\theta)=\int\ell(\theta,z)D(dz)$ and $\widehat R_S(\theta)=m^{-1}\sum_{i=1}^m\ell(\theta,Z_i)$. Fix $\pi$ independently of $S$ and define $\mathrm{KL}(\rho\|\pi)$ as the supremum of $\sum_{A\in\mathcal P}\rho(A)\log(\rho(A)/\pi(A))$ over finite measurable partitions $\mathcal P$ of $\Theta$, with zero-numerator terms equal to $0$ and positive-numerator/zero-denominator terms equal to $+\infty$. Let $\Lambda=\{\lambda_1,\ldots,\lambda_N\}\subset(0,\infty)$ be a nonempty finite set fixed independently of the sample. For every $\delta\in(0,1)$, with probability at least $1-\delta$ over the sample, simultaneously for every probability measure $\rho$ satisfying $\pi(A)=0\Rightarrow\rho(A)=0$ for each $A\in\mathcal A$ and every $\lambda\in\Lambda$,
$$\mathbb E_{\theta\sim\rho}R(\theta)\le \mathbb E_{\theta\sim\rho}\widehat R_S(\theta)+\frac{\lambda C^2}{8m}+\frac{\mathrm{KL}(\rho\|\pi)+\log(N/\delta)}{\lambda}.$$

## Statement references

[[thm-pac-bayes-kl-bound]]: for each fixed $\lambda$ and confidence value, one event controls every posterior average.

[[def-natural-logarithm]]: $\log$ denotes the natural logarithm, inverse to the real exponential on positive reals.

[[def-pac-bayes-prior-and-posterior]]: a posterior is a probability measure absolutely continuous with respect to the sample-independent prior; relative entropy is the supremum over finite measurable partitions.

[Alquier, *User-friendly Introduction to PAC-Bayes Bounds*, Chapter 2, Theorem 2.4 and proof](https://arxiv.org/pdf/2110.11216v4): applies a union bound over a finite, sample-independent tuning grid.

## Facts & Assumptions

**Given:** The hypotheses of the PAC-Bayes KL theorem, a nonempty finite grid $\Lambda$ fixed independently of the sample, and $\delta\in(0,1)$.

[F1] For each fixed $\lambda>0$ and confidence $\eta\in(0,1)$, with probability at least $1-\eta$, the PAC-Bayes KL inequality holds simultaneously for all posterior probabilities. [[thm-pac-bayes-kl-bound]]

[F2] The probability of a finite union is at most the sum of the probabilities. [[lem-probability-measure-basic-identities]]

[F3] The natural logarithm is defined on positive reals, is increasing, and satisfies $\log(xy)=\log x+\log y$ for positive $x,y$. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For each $\lambda\in\Lambda$, apply [F1] with confidence $\eta=\delta/N$. Its event has probability at least $1-\delta/N$, and on it every posterior satisfies the bound with $\log(1/\eta)=\log(N/\delta)$ by [F3]. [given, F1, F3, algebra]

2.1 The intersection of these $N$ events has probability at least $1-N(\delta/N)=1-\delta$ by [F2]. On that single event the inequality holds for every $\lambda\in\Lambda$ and every posterior, which is the claim. [F1, F2, step 1.1, algebra] ∎
