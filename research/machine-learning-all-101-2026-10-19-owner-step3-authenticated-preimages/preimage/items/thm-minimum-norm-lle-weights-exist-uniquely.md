---
id: thm-minimum-norm-lle-weights-exist-uniquely
kind: theorem
title: "Finite LLE affine least-squares weights have a unique minimum-norm minimizer"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lle-local-reconstruction-weights, prop-standard-coordinate-inner-products, thm-least-squares-solutions-and-normal-equation, thm-finite-dimensional-orthogonal-decomposition]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: pass
---

## Statement

Fix $x_i\in\mathbb R^p$ and a nonempty finite neighbor list $N_i=(j_1,\ldots,j_k)$ of distinct indices. The constrained problem

$$\min_{w\in\mathbb R^k}\left\|x_i-\sum_{s=1}^k w_sx_{j_s}\right\|_2^2\quad\text{subject to}\quad\sum_{s=1}^k w_s=1$$

has a nonempty affine set of minimizers, and exactly one member of that set has smallest Euclidean norm. Thus the minimum-norm rule in finite LLE defines one weight vector even when the local covariance matrix is singular. This conclusion uses no choice axiom.

## Statement references

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 573–575](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §7, PDF pp. 14–16](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** A fixed point $x_i\in\mathbb R^p$ and a nonempty finite ordered list $N_i=(j_1,\ldots,j_k)$.

[F1] The LLE weight problem minimizes the local reconstruction error under the affine constraint $\sum_s w_s=1$, then selects a minimizer of least Euclidean norm ([[def-lle-local-reconstruction-weights]]).

[F2] For a linear map between finite-dimensional inner-product spaces, least-squares minimizers exist and form an affine translate of the kernel ([[thm-least-squares-solutions-and-normal-equation]]).

[F3] The standard real coordinate pairing on $\mathbb R^k$ is a positive-definite inner product ([[prop-standard-coordinate-inner-products]]).

[F4] A subspace of a finite-dimensional inner-product space and its orthogonal complement give a direct-sum decomposition ([[thm-finite-dimensional-orthogonal-decomposition]]).

## Proof

1.1 Let $w^0=(1,0,\ldots,0)\in\mathbb R^k$, let $L=\{z\in\mathbb R^k:\sum_s z_s=0\}$, and define $T:L\to\mathbb R^p$ by $Tz=\sum_s z_sx_{j_s}$. Every feasible $w$ has a unique form $w=w^0+z$ with $z\in L$, and its residual is $x_i-x_{j_1}-Tz$. Thus the constrained problem is an ordinary finite-dimensional least-squares problem for $T$ on the inner-product subspace $L$. [given, F1, F3, algebra]

2.1 By [F2], choose a least-squares minimizer $z_0\in L$ and all minimizers are $z_0+N$, where $N=\ker T\subseteq L$. Therefore all feasible minimizing weights form the nonempty affine set $w^0+z_0+N$. In the degenerate case $T=0$, $z_0=0$ is a minimizer and $N=L$, so this set contains every feasible weight. [step 1.1, F2, choose, algebra]

3.1 Put $w_*=w^0+z_0$. By [F4], decompose $w_*=u+v$ with $u\in N$ and $v\in N^\perp$ in $\mathbb R^k$. Since $-u\in N$, $v=w_*-u$ remains in the affine minimizer set. For any other minimizer $v+h$ with $h\in N$, orthogonality gives $\|v+h\|_2^2=\|v\|_2^2+\|h\|_2^2$, which is at least $\|v\|_2^2$ with equality only if $h=0$. Hence $v$ is the unique minimum-norm minimizer. When $k=1$, $L=N=\{0\}$ and this gives the unique feasible weight $w^0=(1)$. [step 2.1, F3, F4, algebra]

4.1 The proof applies the least-squares existence result once to this fixed finite-dimensional problem and uses a finite orthogonal decomposition; it selects no sequence of approximate minimizers and uses no Countable Choice. [step 1.1, step 2.1, step 3.1] ∎
