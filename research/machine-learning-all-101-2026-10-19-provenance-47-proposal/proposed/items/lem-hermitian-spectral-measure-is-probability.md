---
id: lem-hermitian-spectral-measure-is-probability
kind: lemma
title: "A Hermitian directional spectral measure is a probability law"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-sample-covariance-directional-spectral-measure
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-probability-measure
  - def-dirac-measure
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
    - title: "Z. D. Bai and J. W. Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed."
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

For every Hermitian positive semidefinite $A\in\mathbb C^{d\times d}$, its empirical spectral distribution $\mu_A$ is a Borel probability measure supported on $[0,\infty)$. For every deterministic unit vector $x\in\mathbb C^d$, its directional spectral measure $\mu_A^x$ is also a Borel probability measure supported on $[0,\infty)$.

## Statement references

Bai, Miao, and Pan, §1, printed pp. 7–8 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Bai and Silverstein, Appendix B.2, printed pp. 514–523 ([full book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Directional and empirical spectral-measure definitions: [[def-sample-covariance-directional-spectral-measure|definition of the directional spectral measure]].

## Facts & Assumptions

**Given:** A Hermitian positive semidefinite matrix $A\in\mathbb C^{d\times d}$ and, for the directional measure, a deterministic vector $x\in\mathbb C^d$ with $\|x\|_2=1$.

[F1] A finite-dimensional Hermitian matrix has an orthonormal eigenbasis; its eigenvalues are real, and positive semidefiniteness makes them nonnegative ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] The empirical and directional measures are the finite Dirac sums stated in [[def-sample-covariance-directional-spectral-measure]].

[F3] A Borel probability measure is countably additive and has total mass one ([[def-probability-measure]]).

[F4] The Dirac measure $\delta_\lambda$ is the Borel unit point mass at $\lambda$ ([[def-dirac-measure]]).

## Proof

**Given:** $A$, $x$, and the definitions in the Statement.

1.1 By [F1], write $A=\sum_{j=1}^r\lambda_jP_j$ over its distinct eigenvalues, where the $P_j$ are mutually orthogonal projections, $\sum_jP_j=I$, and $\lambda_j\ge0$. Taking traces gives $\sum_j\operatorname{rank}(P_j)=d$. Thus the nonnegative weights $\operatorname{rank}(P_j)/d$ in [F2] sum to one; by [F3] and [F4], $\mu_A$ is a Borel probability measure supported on $[0,\infty)$. [given, F1, F2, F3, F4, algebra]

2.1 For the unit vector $x$, the directional weights in [F2] are $\|P_jx\|_2^2\ge0$, and orthogonality gives $\sum_j\|P_jx\|_2^2=\|\sum_jP_jx\|_2^2=\|x\|_2^2=1$. By [F3] and [F4], the finite Dirac sum is a Borel probability measure; its support is contained in the nonnegative spectrum of $A$ by [F1]. [given, F1, F2, F3, F4, step 1.1, algebra] ∎

## Proof references

Bai, Miao, and Pan, equation (1.8), printed p. 8 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).
