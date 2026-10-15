---
id: thm-repeated-leading-eigenvalue-identifies-subspace
kind: theorem
title: "A repeated leading PCA eigenvalue identifies a subspace, not a vector"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-covariance-and-correlation-principal-component-analysis
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-pca-leading-direction-maximizes-variance
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Online Bayesian Data Analysis, Lecture Notes 8: Learning Signal Representations (11 April 2016)"
      url: "https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis, Lecture 8: Principal Component Analysis"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf"
---

## Statement

Let $\Sigma$ be a covariance matrix in the PCA definition of
[[def-covariance-and-correlation-principal-component-analysis]], with ordered
eigenvalues $\lambda_1\ge\lambda_2\ge\cdots$. If
$\lambda_1=\lambda_2$, then the leading eigenspace
$E_1=\ker(\Sigma-\lambda_1 I)$ is a uniquely specified subspace of dimension
at least two. Every unit vector in $E_1$ is a leading principal direction,
so the covariance matrix determines this subspace but does not single out a
unit vector in it.

## Facts & Assumptions

**Given:** A real symmetric covariance matrix $\Sigma\in\mathbb R^{p\times p}$
with $p\ge2$ and $\lambda_1=\lambda_2$.

[F1] [[def-covariance-and-correlation-principal-component-analysis]]:
covariance-PCA uses the ordered eigenspaces of the symmetric covariance
matrix; a component direction is a unit vector in its eigenspace.

[F2] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: $\Sigma$
has an orthonormal eigenbasis, so the eigenspace dimension of an eigenvalue is
its multiplicity in the ordered list.

[F3] [[thm-pca-leading-direction-maximizes-variance]]: the unit leading
directions are exactly the unit vectors in the leading eigenspace.

## Proof

**Proof technique:** direct.

1.1 In the orthonormal eigenbasis supplied by [F2], the equality $\lambda_1=\lambda_2$ gives at least two linearly independent eigenvectors with eigenvalue $\lambda_1$. The full eigenspace $E_1=\ker(\Sigma-\lambda_1I)$ contains these vectors, is specified by $\Sigma$ itself, and therefore has dimension at least two. [F1, F2, given, algebra]

2.1 Every unit vector in $E_1$ is a leading principal direction by [F3]. Because a space of dimension at least two contains noncollinear unit vectors, there is no single unit vector selected by $\Sigma$ alone. The canonical object is the whole leading eigenspace $E_1$. [F1, F3, step 1.1, algebra] ∎
