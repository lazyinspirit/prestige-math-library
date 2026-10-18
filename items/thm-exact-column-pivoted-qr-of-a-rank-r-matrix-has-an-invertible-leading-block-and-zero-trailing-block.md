---
id: thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block
kind: theorem
title: "Exact column-pivoted QR of a real or complex rank-r matrix has an invertible leading triangular block and zero trailing block"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ def-full-reduced-and-column-pivoted-computational-qr-factorisations, thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts, def-invertible-matrix-and-general-linear-group, def-rank-and-nullity ]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  repair: research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step4-published-alert-repair-records/thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block.json
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 4220: Numerical Analysis, Ill-posedness and regularization"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-25.html"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 3.3"
      url: "https://fncbook.com/qr/"
---

## Statement

Let $\mathbb F=\mathbb R$ or $\mathbb C$, let $A\in M_{m\times n}(\mathbb F)$
have rank $r$, and let

$$A\Pi=QR$$
be an exact column-pivoted QR factorisation in which, at each step, the next
column is chosen with maximal residual $2$-norm among the remaining columns.
Then
$$R=\begin{pmatrix}R_{11}&R_{12}\\0&0\end{pmatrix},$$

where $R_{11}\in M_r(\mathbb F)$ is upper triangular with nonzero diagonal and
hence is invertible.

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb F)$ over $\mathbb F=\mathbb R$ or $\mathbb C$, of rank $r$, and an exact column-pivoted QR factorisation $A\Pi=QR$ built by greedy residual-norm pivot selection.

[L1] Column-pivoted QR means a QR factorisation after a column permutation ([[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]).

[L2] Successive orthogonal or unitary transformations produce the QR factorisation while zeroing entries below the diagonal ([[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]).

[L3] A square matrix is invertible exactly when it has a two-sided inverse ([[def-invertible-matrix-and-general-linear-group]]).

[L4] Rank is the dimension of the image, hence also the maximal number of linearly independent columns ([[def-rank-and-nullity]]).

## Proof

**Proof technique:** compare the greedy residuals with the rank.

1.1 Use zero-based row and column indices. Suppose $k$ pivot steps have been completed and the first $k$ chosen columns are independent; for $k=0$ this condition is vacuous. Their upper triangular leading block is nonsingular, so their span is the span of the first $k$ columns of $Q$. Orthogonality or unitarity identifies the residual of each remaining column after projection onto this span with its active coordinates in rows $k$ onward. The next pivot has index $k$; the transformations in [L2] concentrate its active coordinates in row $k$ and preserve their norm. Thus $|r_{kk}|$ is the norm of that residual, without any diagonal sign or phase convention. By the greedy rule, $r_{kk}\ne0$ exactly when some remaining column lies outside the span of the first $k$ chosen columns. [L1, L2, algebra]

2.1 Induct over $k=0,\ldots,r-1$. If the first $k$ chosen columns are independent, their span has dimension $k<r$, so [L4] implies that some remaining column lies outside it. Step 1.1 and the greedy rule give $r_{kk}\ne0$, and the new chosen column is independent of its predecessors. Starting with the empty list proves that the first $r$ chosen columns are independent and that $r_{00},\ldots,r_{r-1,r-1}$ are nonzero. [step 1.1, L4, induction, algebra]

3.1 The first $r$ chosen columns are independent by step 2.1 and therefore span every column of $A$ by [L4]. Their span is the span of the first $r$ columns of $Q$, so all coordinates of every column of $Q^*A\Pi$ in rows indexed $r$ onward are zero. This gives the whole zero lower block, including every entry of the trailing block, not merely its diagonal. Hence $$R=\begin{pmatrix}R_{11}&R_{12}\\0&0\end{pmatrix}.$$ The block $R_{11}$ is upper triangular with nonzero diagonal by step 2.1; back-substitution solves $R_{11}x=b$ uniquely for every $b$, giving a two-sided inverse as in [L3]. For $r=0$, all columns of $A$ are zero and $R_{11}$ is the empty identity, which is its own inverse under [L3]. [step 1.1, step 2.1, L1, L3, L4, algebra]

4.1 Steps 2.1 and 3.1 prove the claim. [step 2.1, step 3.1] ∎
