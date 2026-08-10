---
id: thm-solution-set-is-an-affine-nullspace
kind: theorem
title: "If $Ax=b$ has one solution $x_p$, then its full solution set is the affine subspace $x_p+N(A)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-matrix-equation-augmented-matrix-and-linear-system, def-row-space-column-space-nullspace-and-matrix-ranks, def-affine-subspace-of-a-vector-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

[L3] An affine subspace is a translate $x+U$ of a linear subspace ([[def-affine-subspace-of-a-vector-space]]).

## Proof

**Proof technique:** direct.

1.1 If $z\in N(A)$, then $A(x_p+z)=Ax_p+Az=b+0=b$, so $x_p+z\in S(A,b)$. [L1, L2, L3, algebra]

2.1 Conversely, if $x\in S(A,b)$, then $A(x-x_p)=Ax-Ax_p=b-b=0$, so $x-x_p\in N(A)$ and $x=x_p+(x-x_p)\in x_p+N(A)$. [step 1.1, L1, L2, L3, algebra] ∎

