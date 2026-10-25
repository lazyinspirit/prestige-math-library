---
id: ex-block-sparse-huber-covariance-model
kind: example
title: A covariance matrix with one correlated block
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-huber-covariance-model
  - def-block-sparse-covariance-class
  - def-bounded-spectrum-covariance-class
  - lem-huber-covariance-mixture-is-a-probability-measure
  - def-axiom-of-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
axiom_use: AC is inherited through the finite-dimensional Gaussian law; the block-support and mixture checks use no further choice.
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §3.4"
      url: "https://arxiv.org/pdf/1506.00691"
dependency_level: 4
---
## Example

Let $p=4$, $s=2$, $M=2$, $\epsilon=1/10$, and
$$\Sigma=I_4+\frac14(e_1e_2^T+e_2e_1^T),\qquad Q=\delta_0.$$
The observations have law $P_{\epsilon,\Sigma,Q}$.

## Facts & Assumptions

**Given:** The matrix $\Sigma$, block size $s=2$, bound $M=2$, and
contamination law in the Example.

[F1] [[def-bounded-spectrum-covariance-class]] defines $\mathcal F_p(M)$
by symmetry, positive semidefiniteness and operator norm at most $M$.
[[def-block-sparse-covariance-class]] additionally requires all
off-diagonal entries to lie in one common coordinate block of size at most
$s$ and defines $\mathcal F_{p,s}(M)$.

[F2] [[def-huber-covariance-model]] defines the Gaussian Huber mixture.

[F3] [[lem-huber-covariance-mixture-is-a-probability-measure]] proves the
mixture's probability-measure property.

[F4] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: the
eigenvalues of a real symmetric matrix determine its positive
semidefiniteness and operator norm.

[F5] [[def-dirac-measure]] and
[[prop-dirac-measure-is-a-probability-measure]]: a point mass is a
probability measure on the Borel space.

## Verification

1.1 The only nonzero off-diagonal entries of $\Sigma$ are $\Sigma_{12}=\Sigma_{21}=1/4$, both supported in $S=\{1,2\}$. Its eigenvalues are $5/4,3/4,1,1$, so $\Sigma\succeq0$ and $\|\Sigma\|_{\rm op}=5/4\le M$ by [F4]. Since $\Sigma$ is symmetric, these checks give $\Sigma\in\mathcal F_4(2)$ and, with the support check, $\Sigma\in\mathcal F_{4,2}(2)$ by [F1]. [F1, F4, algebra]

2.1 The contaminant $Q=\delta_0$ is a probability measure by [F5], and $\epsilon\in[0,1]$. The mixture is a well-defined Huber model by [F2] and [F3]. The structure is one correlated block; it does not assert the column-wise weak-$\ell_q$ sparsity condition from the separate sparse covariance model. [F2, F3, F5, algebra] ∎
