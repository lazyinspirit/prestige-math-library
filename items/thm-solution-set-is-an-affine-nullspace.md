---
id: thm-solution-set-is-an-affine-nullspace
kind: theorem
title: "If $Ax=b$ has one solution $x_p$, then its full solution set is the affine subspace $x_p+N(A)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-matrix-equation-augmented-matrix-and-linear-system, def-row-space-column-space-nullspace-and-matrix-ranks, cor-matrix-rank-equals-the-rank-of-its-linear-map, thm-linear-kernel-image-and-injectivity, def-affine-subspace-of-a-vector-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §2.4"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

If $x_p$ is one solution of $Ax=b$, then
$$S(A,b)=x_p+N(A).$$
Thus every nonempty solution set of a finite linear system is an affine subspace parallel to the nullspace.

## Facts & Assumptions

**Given:** $A\in M_{m\times n}(F)$, $b\in F^m$ and $x_p\in F^n$ with $Ax_p=b$.

[L1] $S(A,b)=\{x:Ax=b\}$ ([[def-matrix-equation-augmented-matrix-and-linear-system]]).

[L2] $N(A)=\{z:Az=0\}$ ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[L3] The multiplication map $L_A:x\mapsto Ax$ is linear ([[cor-matrix-rank-equals-the-rank-of-its-linear-map]]).

[L4] The kernel of a linear map is a linear subspace ([[thm-linear-kernel-image-and-injectivity]]).

[L5] An affine subspace is a translate $x+U$ of a linear subspace ([[def-affine-subspace-of-a-vector-space]]).

## Proof

**Proof technique:** direct.

1.1 If $z\in N(A)$, then $A(x_p+z)=Ax_p+Az=b+0=b$, so $x_p+z\in S(A,b)$. [L1, L2, L3, algebra]

2.1 Conversely, if $x\in S(A,b)$, then $A(x-x_p)=Ax-Ax_p=b-b=0$, so $x-x_p\in N(A)$ and $x=x_p+(x-x_p)\in x_p+N(A)$. Thus $S(A,b)=x_p+N(A)$. [step 1.1, L1, L2, L3, algebra]

3.1 Since $N(A)=\ker L_A$, facts [L3] and [L4] make it a linear subspace. Its translate $x_p+N(A)$ is therefore an affine subspace by [L5]. [step 2.1, L2, L3, L4, L5] ∎
