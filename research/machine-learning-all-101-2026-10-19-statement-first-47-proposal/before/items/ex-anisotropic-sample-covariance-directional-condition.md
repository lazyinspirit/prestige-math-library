---
id: ex-anisotropic-sample-covariance-directional-condition
kind: example
title: "An anisotropic population with a balanced deterministic direction"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-sample-covariance-directional-spectral-measure
  - def-stieltjes-transform-of-a-real-probability-measure
  - thm-directional-sample-covariance-resolvent-limit
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
    - title: "J. W. Silverstein, Strong Convergence of the Empirical Distribution of Eigenvalues of Large Dimensional Random Matrices"
      url: "https://jack.math.ncsu.edu/strong.pdf"
---
## Example

Assume the Axiom of Choice. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid complex array with mean zero, unit second absolute moment and finite fourth moment. Let $N_n$ be a positive integer with $n/N_n\to c\in(0,\infty)$. For each $n$, let $T_n$ be diagonal with $\lceil n/2\rceil$ diagonal entries equal to $1$ and the remaining entries equal to $2$, and let $x_n=n^{-1/2}(1,\ldots,1)^{\mathsf T}$. For $A_n=N_n^{-1}T_n^{1/2}X_nX_n^*T_n^{1/2}$, the directional spectral measure in direction $x_n$ converges almost surely to the deformed Marchenko–Pastur law $F_{c,H}$ with $H=(\delta_1+\delta_2)/2$.

## Example references

[[thm-directional-sample-covariance-resolvent-limit]]

[[def-sample-covariance-directional-spectral-measure]]

## Facts & Assumptions

**Given:** AC, the nested complex iid entry law, the stated diagonal populations, and the deterministic directions.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The directional theorem requires convergence of the population directional resolvent to the transform of the limiting population law ([[thm-directional-sample-covariance-resolvent-limit]]).

[F2] The directional spectral measure assigns mass $\|P_\lambda x\|_2^2$ to each eigenvalue $\lambda$ ([[def-sample-covariance-directional-spectral-measure]]).

[F3] The population Stieltjes transform is $m_H(w)=\int(t-w)^{-1}dH(t)$ off the nonnegative real axis ([[def-stieltjes-transform-of-a-real-probability-measure]]).

## Verification

**Given:** The matrices and directions in the Example.

1.1 The empirical eigenvalue measures $H_n$ of $T_n$ converge to $H=(\delta_1+\delta_2)/2$, since the proportions of diagonal entries equal to $1$ and $2$ both tend to $1/2$. For every $w\in\mathbb C\setminus[0,\infty)$, direct diagonal multiplication gives $$x_n^*(T_n-wI)^{-1}x_n=\frac{\lceil n/2\rceil}{n(1-w)}+\frac{\lfloor n/2\rfloor}{n(2-w)}\longrightarrow\frac12\frac1{1-w}+\frac12\frac1{2-w}=m_H(w).$$ The vectors have norm one, so all hypotheses of [F1] hold with the transform convention [F3]. [given, F1, F3, algebra]

2.1 Applying [F1] to the calculation in step 1.1 proves almost-sure weak convergence of the directional spectral measures to the asserted $F_{c,H}$. [given, A1, F1, F2, step 1.1] ∎

## Verification references

Theorem 1 of Bai, Miao, and Pan ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Theorem 1.1 of Silverstein ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)).
