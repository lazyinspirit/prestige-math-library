---
id: prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence
kind: proposition
title: "Givens reduction terminates with a unitary-equivalent Hessenberg-triangular pair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-generalized-hessenberg-triangular-reduction
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-triangular-and-diagonal-matrices-over-a-commutative-ring
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §3.1"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
---

## Statement

For every input of [[alg-generalized-hessenberg-triangular-reduction]], the
algorithm terminates and returns orthogonal/unitary $Q,Z$, an upper Hessenberg
matrix $H$, and an upper triangular matrix $T$ such that
$$H=Q^*AZ,\qquad T=Q^*BZ.$$

## Facts & Assumptions

**Given:** $A,B\in\mathbb F^{n\times n}$ with $n\ge1$ and $\mathbb F\in\{\mathbb R,\mathbb C\}$.

[F1] [[alg-generalized-hessenberg-triangular-reduction]] performs a finite sequence of left Givens rotations and paired right Givens restorations, with the accumulators updated as $Q\leftarrow QL^*$ and $Z\leftarrow ZR$.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: each selected Givens factor is unitary and zeros its targeted coordinate.

## Proof

1.1 The triangularisation loops range over finitely many pairs $(i,j)$ with $j=0,\ldots,n-1$ and $i=n-1,\ldots,j+1$. For fixed $j$, descending $i$ zeros $B_{i,j}$ without changing already cleared entries below it. The rotations act on rows with indices at least $j$, whose entries in columns less than $j$ are zero by upper triangularity; hence they do not create below-diagonal entries in earlier columns. After all columns, $B$ is upper triangular. [given, F1, F2, choose]

2.1 For $j=0$ there are no earlier Hessenberg columns, so the base condition is vacuous. For general $j$, assume every earlier column already has the Hessenberg pattern. Descend through $i=n-1,\ldots,j+2$; the left factor zeros $A_{i,j}$. Since $B$ was upper triangular, this left factor can create below-diagonal fill only at $B_{i,i-1}$; the paired right factor zeros that entry. It creates no further below-diagonal entries in $B$, because rows below $i$ are zero in columns $i-1,i$. The right factor does not touch column $j$ because $i-1\ge j+1$, and the left factors preserve all earlier Hessenberg columns, whose entries in rows $i-1,i$ are already zero. Thus after the loop, column $j$ of $A$ is zero below row $j+1$. [F1, F2, step 1.1, algebra, base, ih]

3.1 Induction over $j=0,\ldots,n-3$ proves that the final $A$ is upper Hessenberg and $B$ remains upper triangular. Each left update $A\leftarrow LA$ is matched by $Q\leftarrow QL^*$, and each right update $A\leftarrow AR$ is matched by $Z\leftarrow ZR$; direct substitution preserves $A_{\rm current}=Q^*A_{\rm input}Z$ and $B_{\rm current}=Q^*B_{\rm input}Z$. The finite loops terminate, proving the claim. [step 1.1, step 2.1, F1, F2, algebra, induction, discharge-induction] ∎
