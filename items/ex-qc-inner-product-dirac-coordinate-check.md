---
id: ex-qc-inner-product-dirac-coordinate-check
kind: example
title: Dirac and rank-one coordinate check
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - thm-qc-dirac-notation-coordinate-identity
  - prop-standard-coordinate-inner-products
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-linear-map
justified_by: []
proof_strategy: direct
axiom_use: None; all calculations are in the fixed finite-dimensional space $\mathbb C^2$.
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.3, A.5 and A.10"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Example

Let $H=K=\mathbb C^2$ with standard ordered orthonormal basis
$e_0=(1,0)$, $e_1=(0,1)$ and root pairing
$\langle z,w\rangle=z_0\overline{w_0}+z_1\overline{w_1}$. Set
$T=|e_0\rangle\langle e_1|$. The example checks its action, coordinate matrix,
and adjoint in the root linear-first convention.

## Facts & Assumptions
**Given:** The standard basis and pairing on $\mathbb C^2$ and the map
$T=|e_0\rangle\langle e_1|$.

[F1] In ordered orthonormal bases, the rank-one map has action
$|x\rangle\langle y|z=\langle z,y\rangle_{\mathrm{root}}x$ and coordinate
matrix $[x][y]^\dagger$
([[thm-qc-dirac-notation-coordinate-identity]]).

[F2] The standard complex coordinate pairing is
$\langle z,w\rangle=\sum_jz_j\overline{w_j}$
([[prop-standard-coordinate-inner-products]]).

[F3] $S$ is an adjoint of $T$ exactly when
$\langle Tz,w\rangle=\langle z,Sw\rangle$
([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F4] A finite-dimensional map has a unique adjoint
([[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

## Verification

1.1 For $z=(z_0,z_1)$, [F1]–[F2] give $Tz=\langle z,e_1\rangle e_0=z_1e_0=(z_1,0)$. The coordinate formula is linear in $z$. [given, F1, F2, algebra]

2.1 The matrix columns are $Te_0=(0,0)$ and $Te_1=(1,0)$, so $$[T]=\begin{pmatrix}0&1\\0&0\end{pmatrix}.$$ This agrees with $[e_0][e_1]^\dagger$ in [F1]. [F1, step 1.1, algebra]

2.2 Define $S:\mathbb C^2\to\mathbb C^2$ by $S(w_0,w_1)=(0,w_0)$. This is linear. By [F2], for all $z,w\in\mathbb C^2$, $\langle Tz,w\rangle=z_1\overline{w_0}=\langle z,Sw\rangle$. [F2, step 1.1, construct, algebra]

3.1 By [F3], step 2.2 makes $S$ an adjoint of $T$, and uniqueness [F4] gives $S=T^*$. Its columns are $(0,1)$ and $(0,0)$, so $$[T^*]=\begin{pmatrix}0&0\\1&0\end{pmatrix}=[T]^\dagger.$$ [F3, F4, step 2.2, algebra] ∎
