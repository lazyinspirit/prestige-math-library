---
id: lem-real-vector-gaussian-maximum-differential-entropy
kind: lemma
title: Gaussian maximizes differential entropy at fixed positive-definite covariance
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-axiom-of-choice, thm-nondegenerate-multivariate-normal-law-has-density, thm-kullback-leibler-is-nonnegative]
aliases: []
proof_strategy: relative-entropy
axiom_use: AC is assumed through the Gaussian density and nonnegativity of KL divergence; the published Gaussian-law construction also inherits Countable Choice from AC. No further choice is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §V-A, proof of Theorem 4, Gaussian maximum-entropy step in the cut-set relaxation, PDF pp. 20–21.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Appendix B, differential entropy and Gaussian extremality, printed pp. 585–589.
---

## Statement

Assume the Axiom of Choice. If a random vector $X\in\mathbb R^d$ has a Lebesgue density, finite mean $m$, positive-definite covariance $K$, and finite differential entropy $h(X)=-\int f\ln f$, then
$$h(X)\le \frac12\ln\bigl((2\pi e)^d\det K\bigr).$$
Equality holds exactly when $X$ has the Gaussian law $N_d(m,K)$.

## Facts & Assumptions

**Given:** AC and a density $f$ of a random vector with finite mean $m$, positive-definite covariance $K$, and finite differential entropy.

[A1] [[def-axiom-of-choice]]: AC is the choice axiom assumed by the Gaussian-law and KL suppliers used below.

[F1] [[thm-nondegenerate-multivariate-normal-law-has-density]]: if $K$ is positive definite, the law $N_d(m,K)$ has an everywhere-positive Lebesgue density proportional to $\exp[-(x-m)^TK^{-1}(x-m)/2]$.

[F2] [[thm-kullback-leibler-is-nonnegative]]: $D(P\|Q)\ge0$, with equality only when $P=Q$, under AC.

## Proof







1.1 Let $g$ be the everywhere-positive Gaussian density in [F1] with mean $m$ and covariance $K$. Since $f$ is a Lebesgue density and $g>0$ everywhere, the law $P_f$ is absolutely continuous with respect to $P_g$. The log ratio is integrable: $\int f\ln f$ is finite by hypothesis, while $\ln g$ is a constant plus a quadratic form and $X$ has finite second moments. Hence $$D(P_f\|P_g)=\int f\ln(f/g)=-h(X)+\frac d2\ln(2\pi)+\frac12\ln\det K+\frac12\mathbb E[(X-m)^TK^{-1}(X-m)].$$ The last expectation is $\operatorname{tr}(K^{-1}K)=d$, by expanding the finite quadratic form and using the covariance entries. [A1, F1, given, algebra]

2.1 By [F2], the left side in step 1.1 is nonnegative, which rearranges to the displayed entropy bound. Equality holds exactly when $D(P_f\|P_g)=0$, which by [F2] is equivalent to equality of the laws; thus $X\sim N_d(m,K)$. Conversely, substituting the density $g$ into the entropy integral gives equality because its centered quadratic expectation is $d$. [F1, F2, step 1.1, algebra] ∎
