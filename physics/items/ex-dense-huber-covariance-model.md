---
id: ex-dense-huber-covariance-model
kind: example
title: Dense Gaussian Huber covariance model
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-huber-covariance-model
  - def-bounded-spectrum-covariance-class
  - lem-huber-covariance-mixture-is-a-probability-measure
  - def-axiom-of-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
axiom_use: AC is inherited through the finite-dimensional Gaussian law; the explicit matrix checks use no further choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §2"
      url: "https://arxiv.org/pdf/1506.00691"
dependency_level: 4
---
## Example

Let $p=2$, $M=2$, $\epsilon=1/10$,
$$\Sigma=\begin{pmatrix}1&1/4\\1/4&1\end{pmatrix},\qquad Q=\delta_{(2,0)}.$$
Take independent observations with the Gaussian Huber law
$P_{\epsilon,\Sigma,Q}$ from [[def-huber-covariance-model]].

## Facts & Assumptions

**Given:** The matrix $\Sigma$, $M=2$, $\epsilon=1/10$, and the point-mass
contaminant $Q$ in the Example.

[F1] [[def-huber-covariance-model]] defines the mixture
$(1-\epsilon)N_p(0,\Sigma)+\epsilon Q$ for $0\le\epsilon\le1$.

[F2] [[def-bounded-spectrum-covariance-class]] defines $\mathcal F_p(M)$
by positive semidefiniteness and the operator-norm bound.

[F3] [[lem-huber-covariance-mixture-is-a-probability-measure]] proves the
displayed mixture is a probability law.

[F4] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: the
eigenvalues of a real symmetric matrix determine its positive
semidefiniteness and operator norm.

[F5] [[def-dirac-measure]] and
[[prop-dirac-measure-is-a-probability-measure]]: a point mass is a
probability measure on the Borel space.

## Verification

1.1 The eigenvalues of $\Sigma$ are $5/4$ and $3/4$, so $\Sigma$ is positive definite and $\|\Sigma\|_{\rm op}=5/4\le2$ by [F4]. Thus $\Sigma\in\mathcal F_2(2)$. [F2, F4, algebra]

2.1 The Dirac law $Q=\delta_{(2,0)}$ is a probability measure by [F5], and $0<\epsilon<1$. By [F1] and [F3], $P_{\epsilon,\Sigma,Q}$ is a well-defined Huber sampling law. The target remains the clean Gaussian covariance $\Sigma$, not the covariance of the mixture. [F1, F3, F5, algebra] ∎