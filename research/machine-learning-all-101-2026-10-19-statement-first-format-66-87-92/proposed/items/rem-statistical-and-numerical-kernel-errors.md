---
id: rem-statistical-and-numerical-kernel-errors
kind: remark
title: Statistical and numerical limits of finite kernel solve guarantees
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-gaussian-process-regression-observation-model
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - def-standard-real-and-normalized-complex-gaussian-matrix-law
  - lem-regularized-gram-matrix-inverse-bound
  - thm-gp-regression-kernel-ridge-posterior-mean-equivalence
  - thm-gaussian-rangefinder-expected-spectral-error
  - alg-nystrom-kernel-ridge-fit
  - thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective
  - thm-kernel-ridge-gram-perturbation-bound
  - thm-kernel-ridge-residual-prediction-certificate
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: The optional Gaussian-process posterior comparison uses AC through the finite GP/KRR theorem. The cited Gaussian range-finder expectation results use Countable Choice for their finite Gaussian law. The deterministic kernel-system bounds are choice-free.
verification:
  precheck: n/a
sources:
  references:
    - title: 'Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapters 2 and 6'
      url: https://gaussianprocess.org/gpml/chapters/RW6.pdf
      locator: Chapter 6 §6.2.2, printed pp. 132–133; the finite KRR system and posterior-mean correspondence.
    - title: 'Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms'
      url: https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf
      locator: Theorem 11.5 and §14.2, printed pp. 47 and 62–63; Gaussian expected range-finder errors and Nyström compression.
---

## Scope

The Gram-perturbation and residual bounds are deterministic finite-training-vector statements. A statistical risk here would be expected loss under a data-generating probability law; these bounds contain no such law, expected loss, or generalization term, so they do not by themselves give a statistical risk guarantee.

For a test input $x_*$, the kernel prediction is $k_*^Ta_K$, where $k_*=(k(x_*,x_i))_{i=1}^n$. An approximation certificate for the training Gram matrix alone does not bound the test cross-kernel vector $k_*$; an out-of-sample error bound requires a separate cross-kernel certificate.

Under AC, suppose the finite real PSD kernel $k$ also has a real RKHS $\mathcal H$ with reproducing sections, use the zero mean $m=0$, and observe the canonical finite Gaussian process with independent noise covariance $\tau I_n$. The conditional expectation of the latent training vector given the observations equals $u_K$; the shifted observed covariance $K+\tau I_n$ is positive definite because $\tau>0$. This optional interpretation uses the GP/KRR supplier and is separate from the choice-free deterministic matrix bounds.

For a fixed finite matrix $A\in\mathbb R^{m\times n}$ or $\mathbb C^{m\times n}$, the cited range-finder results assume iid standard real or normalized complex Gaussian sketches, $k\ge2$, $p\ge2$, sketch width $\ell=k+p\le\min(m,n)$, exact arithmetic, and Countable Choice for the finite Gaussian probability law. They bound expected spectral error in those regimes. The theorem statements provide no per-draw bound or tail estimate for an arbitrary sketch supplied to the Nyström algorithm; a leverage-score or other sampling guarantee would require its own hypotheses and proof. The algorithm itself is specified in exact real arithmetic and includes residual statuses; no finite-precision rounding-error claim is made.

## Scope references

[[thm-kernel-ridge-gram-perturbation-bound|The deterministic Gram-perturbation bounds compare finite training coefficient and fitted vectors.]]

[[thm-kernel-ridge-residual-prediction-certificate|The residual certificate controls finite training coefficient and fitted-vector errors.]]

[[alg-nystrom-kernel-ridge-fit|The finite-budget algorithm returns actual residuals and an explicit status.]]

[[thm-gp-regression-kernel-ridge-posterior-mean-equivalence|Under AC, the finite zero-mean GP/KRR theorem identifies the training posterior mean with the kernel-ridge fitted vector.]]

[[def-gaussian-process-regression-observation-model|The finite GP model defines the observation vector as latent training values plus independent centered Gaussian noise with the stated covariance.]]

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]: A real RKHS with kernel $k$ contains its sections and satisfies the reproducing identity.

[[lem-regularized-gram-matrix-inverse-bound]]: For $K\succeq0$ and $\tau>0$, $K+\tau I_n$ is positive definite and invertible.

[[thm-gaussian-rangefinder-expected-spectral-error|The real and normalized-complex Gaussian range-finder results are expectation bounds under the stated rank, oversampling, exact-arithmetic, and Countable Choice hypotheses.]]

[[def-standard-real-and-normalized-complex-gaussian-matrix-law]]: A normalized complex Gaussian entry is $(X+iY)/\sqrt2$ for independent standard real Gaussian scalars, so its second absolute moment is one.

[[def-axiom-of-choice|AC asserts that every family of nonempty sets has a choice function.]]

[[def-countable-choice|Countable Choice asserts choice for countable families of nonempty sets and is the axiom used for the finite-dimensional Gaussian-law interface.]]
