---
id: lem-mlmc-estimator-moments-and-mse
kind: lemma
title: "Expectation, variance, and MSE of a finite MLMC estimator"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
  - thm-iid-monte-carlo-mean-moments
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-error-ledger-mse-covariance-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §2"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
    - title: "Christoph Reisinger, Stochastic Simulation: Lecture 9a, Multilevel Monte Carlo Theory, slides 4–9"
      url: "https://courses.maths.ox.ac.uk/mod/resource/view.php?id=8613"
---

## Statement

Use the finite hierarchy and estimator of [[def-mlmc-hierarchy-and-coupled-corrections]]. Put $V_\ell=\operatorname{Var}(\Delta_\ell)$. Then
$$\mathbb E\widehat\mu_{L,\mathbf N}=\mathbb E P_L,\qquad \operatorname{Var}(\widehat\mu_{L,\mathbf N})=\sum_{\ell=0}^L\frac{V_\ell}{N_\ell},$$
and the mean square error for the target $\mathbb E P$ is exactly
$$\mathbb E\left[(\widehat\mu_{L,\mathbf N}-\mathbb E P)^2\right] =\sum_{\ell=0}^L\frac{V_\ell}{N_\ell}+(\mathbb E P_L-\mathbb E P)^2.$$

## Facts & Assumptions

**Given:** A finite MLMC hierarchy with square-integrable level corrections, independent identically distributed samples within each level, and independent sample blocks at distinct levels.

[F1] [[def-mlmc-hierarchy-and-coupled-corrections]]: each level uses independent identically distributed copies of its correction, and complete sample blocks from distinct levels are independent.

[F2] [[def-mlmc-hierarchy-and-coupled-corrections]]: every correction has finite second moment because its two level approximations do.

[F3] [[thm-iid-monte-carlo-mean-moments]]: for an IID real sample with finite second moment, its mean is unbiased and has variance equal to the single-draw variance divided by the sample size.

[F4] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear for finite sums of integrable random variables.

[F5] [[thm-error-ledger-mse-covariance-identity]]: for square-integrable errors, the MSE of their sum is the squared total bias plus the sum of variances and pairwise covariance terms; pairwise-independent centered errors have zero covariance correction.

## Proof

**Given:** The hypotheses above.

1.1 For each level $\ell$, the sample $\Delta_{\ell,1},\ldots,\Delta_{\ell,N_\ell}$ is IID by [F1] and square-integrable by [F2]. Applying [F3] to its sample mean gives $\mathbb E\bar\Delta_\ell=\mathbb E\Delta_\ell$ and $\operatorname{Var}(\bar\Delta_\ell)=V_\ell/N_\ell$. [F1, F2, F3]

2.1 The level-zero mean is $\mathbb E\Delta_0=\mathbb E P_0$. For $\ell\ge1$, the coupling marginals in [F1] give $\mathbb E\Delta_\ell=\mathbb E P_\ell-\mathbb E P_{\ell-1}$. Finite linearity [F4] and telescoping therefore yield $\mathbb E\widehat\mu_{L,\mathbf N}=\sum_{\ell=0}^L\mathbb E\bar\Delta_\ell=\mathbb E P_L$. [F1, F4, step 1.1, algebra]

2.2 Set $\xi_\ell=\bar\Delta_\ell-\mathbb E\bar\Delta_\ell$. Each $\xi_\ell$ is square-integrable, centered, and measurable with respect to its own level sample block. The blocks are independent by [F1], so the $\xi_\ell$ are pairwise independent. Applying [F5] to their finite sum gives $\operatorname{Var}(\widehat\mu_{L,\mathbf N})=\sum_{\ell=0}^L\operatorname{Var}(\bar\Delta_\ell)=\sum_{\ell=0}^L V_\ell/N_\ell$, using step 1.1. [F1, F5, step 1.1]

3.1 The single error $E=\widehat\mu_{L,\mathbf N}-\mathbb E P$ is square-integrable. By step 2.1 its mean is $\mathbb E P_L-\mathbb E P$, and by step 2.2 its variance is $\sum_{\ell=0}^L V_\ell/N_\ell$. The one-variable case of [F5] gives $\mathbb E[E^2]=\operatorname{Var}(E)+(\mathbb E E)^2$, which is the asserted MSE identity. [F5, step 2.1, step 2.2] ∎
