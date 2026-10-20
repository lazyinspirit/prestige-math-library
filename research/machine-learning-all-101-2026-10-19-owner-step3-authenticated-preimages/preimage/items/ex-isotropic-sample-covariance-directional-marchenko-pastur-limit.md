---
id: ex-isotropic-sample-covariance-directional-marchenko-pastur-limit
kind: example
title: "An isotropic finite-fourth-moment design"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-dirac-measure
  - def-marchenko-pastur-measure
  - lem-deformed-mp-fixed-point-solution-is-unique
  - lem-marchenko-pastur-formula-defines-a-finite-measure
  - lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line
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
    - title: "Z. D. Bai and J. W. Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed."
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---
## Example

Assume the Axiom of Choice. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid complex array with mean zero, unit second absolute moment and finite fourth moment. Let $N_n$ be a positive integer with $n/N_n\to c\in(0,\infty)$, set $T_n=I_n$, and choose any deterministic unit vectors $x_n\in\mathbb C^n$. For $A_n=N_n^{-1}X_nX_n^*$ and $\mu_n^{x_n}(B)=x_n^*\mathbf1_B(A_n)x_n$, the directional measures converge almost surely to the Marchenko–Pastur probability law with aspect ratio $c$.

## Example references

[[thm-directional-sample-covariance-resolvent-limit]]

[[def-marchenko-pastur-measure]]

[[lem-marchenko-pastur-formula-defines-a-finite-measure]]

## Facts & Assumptions

**Given:** AC, the nested complex iid entry law, $T_n=I_n$, and deterministic unit directions.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The finite-fourth-moment directional resolvent limit theorem ([[thm-directional-sample-covariance-resolvent-limit]]).

[F2] At $T_n=I_n$, the population law is $\delta_1$ and every unit direction satisfies the population-resolvent condition exactly, with transform $(1-w)^{-1}$ ([[def-dirac-measure]]).

[F3] The Marchenko–Pastur law has a probability-density formula whose transform satisfies its fixed-point equation ([[def-marchenko-pastur-measure]], [[lem-marchenko-pastur-formula-defines-a-finite-measure]]).

[F4] The deformed fixed-point equation has at most one solution under its stated upper-half-plane conditions ([[lem-deformed-mp-fixed-point-solution-is-unique]]).

[F5] Equal Stieltjes transforms determine a probability measure on the real line ([[lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line]]).

## Verification

**Given:** The hypotheses in the Example.

1.1 The empirical eigenvalue law of $T_n=I_n$ is $H_n=\delta_1$, and for every $w\notin[0,\infty)$, $$x_n^*(T_n-wI)^{-1}x_n=(1-w)^{-1}=\int(t-w)^{-1}d\delta_1(t).$$ Thus [F1] applies and gives almost-sure convergence to $F_{c,\delta_1}$. [given, A1, F1, F2, algebra]

2.1 The transform of the Marchenko–Pastur law in [F3] satisfies the same fixed-point equation as $F_{c,\delta_1}$ in [F1]; [F4] makes the solution unique, and [F5] identifies the two probability laws from their equal transforms. Hence the limit is the stated Marchenko–Pastur law. [F1, F3, F4, F5, step 1.1, algebra] ∎

## Source notes

Theorem 1 of Bai, Miao, and Pan ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Chapter 3 of Bai and Silverstein ([full book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).
