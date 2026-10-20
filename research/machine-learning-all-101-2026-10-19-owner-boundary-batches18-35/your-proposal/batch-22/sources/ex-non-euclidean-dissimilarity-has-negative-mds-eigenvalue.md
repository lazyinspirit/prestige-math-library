---
id: ex-non-euclidean-dissimilarity-has-negative-mds-eigenvalue
kind: example
title: "A non-Euclidean three-point dissimilarity produces a negative MDS eigenvalue"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [alg-classical-multidimensional-scaling, thm-classical-mds-recovers-euclidean-distances]
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

## Example

Take the symmetric dissimilarity matrix

$$D=\begin{pmatrix}0&1&1\\1&0&3\\1&3&0\end{pmatrix}.$$

It is nonnegative with zero diagonal and is not Euclidean because $D_{13}+D_{12}=2<D_{23}=3$. Its classical-MDS matrix $B=-\frac12H_3D^{\circ2}H_3$ has a negative eigenvalue, so positive-eigenvalue truncation is not exact distance recovery.

## Example references

[Hastie, Tibshirani, and Friedman, ESL II, §14.8, printed pp. 570–572](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §3, PDF pp. 4–6](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** The stated dissimilarity matrix $D$ and the classical-MDS construction.

[F1] Classical MDS squares the entries of $D$ and forms $B=-\frac12H_nD^{\circ2}H_n$ ([[alg-classical-multidimensional-scaling]]).

[F2] A Euclidean distance matrix yields a positive-semidefinite classical-MDS matrix; the general symmetric matrix has a real orthonormal eigendecomposition ([[thm-classical-mds-recovers-euclidean-distances]]).

## Verification

1.1 Put $u=(1,1,-2)^T$ and $v=(1,-1,0)^T$. Both are zero-sum, so $H_3u=u$ and $H_3v=v$. Here $D^{\circ2}=\begin{pmatrix}0&1&1\\1&0&9\\1&9&0\end{pmatrix}$, so direct multiplication gives $u^TBu=-\tfrac12u^TD^{\circ2}u=19$, $v^TBv=1$, and $u^TBv=-\tfrac12u^TD^{\circ2}v=-8$. Thus $w=u+8v$ satisfies $w^TBw=19+16(-8)+64=-45<0$. [given, F1, algebra]

2.1 By [F2], $B$ is symmetric and has an orthonormal eigenbasis. If every eigenvalue were nonnegative, expressing $w$ in that eigenbasis would give $w^TBw\ge0$, contradicting step 1.1. Therefore $B$ has a negative eigenvalue. [step 1.1, F2, algebra]

3.1 The stated triangle inequality fails, since $D_{13}+D_{12}=2<D_{23}=3$, so no Euclidean point configuration realizes $D$. This matches the negative eigenvalue and the Euclidean-only exactness hypothesis of [F2]. [given, step 2.1, F2] ∎
