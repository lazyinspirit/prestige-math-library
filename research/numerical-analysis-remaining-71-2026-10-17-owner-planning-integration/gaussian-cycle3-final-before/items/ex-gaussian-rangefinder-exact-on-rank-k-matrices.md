---
id: ex-gaussian-rangefinder-exact-on-rank-k-matrices
kind: example
title: Exact range recovery on a rank-k matrix
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-gaussian-randomized-range-finder, lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence, lem-wide-gaussian-matrix-has-full-row-rank-almost-surely, thm-singular-value-decomposition]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, §10.2"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.4.2"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Example

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $A=\operatorname{diag}(4,1,0,0)\in\mathbb R^{4\times4}$, take target
rank $k=2$, oversampling $p=2$, and draw $\Omega\in\mathbb R^{4\times4}$
with iid standard real Gaussian entries. The randomized range finder returns
$QQ^*A=A$ almost surely, so its spectral error is zero.

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and the fixed diagonal matrix and the Gaussian range-finder draw.

[F1] The algorithm returns an orthonormal basis of $\operatorname{Ran}(A\Omega)$ and then $QQ^*A$ ([[alg-gaussian-randomized-range-finder]]).

[F2] Orthogonal SVD coordinates preserve the iid Gaussian law ([[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F3] A wide Gaussian matrix has full row rank almost surely ([[lem-wide-gaussian-matrix-has-full-row-rank-almost-surely]]).

## Verification

1.1 The displayed diagonal matrix has rank $2$ and SVD $A=U\Sigma V^*$ with $U=V=I$ and $\Sigma_2=0$. Write $\Omega_1$ for its first two rows. By [F2]–[F3], $\Omega_1$ has row rank $2$ almost surely. [given, F2, F3, algebra]

2.1 For every such draw, $A\Omega=\begin{bmatrix}4&0\\0&1\\0&0\\0&0\end{bmatrix}\Omega_1$ has range exactly $\operatorname{span}(e_1,e_2)$, since the first two rows of $\Omega$ have rank $2$ and multiplication by $\operatorname{diag}(4,1)$ preserves rank. Thus $QQ^*$ is the projector onto this span and $QQ^*A=A$. [step 1.1, F1, given, algebra] ∎
