---
id: thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block
kind: theorem
title: "Exact column-pivoted QR of a real or complex rank-r matrix has an invertible leading triangular block and zero trailing block"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-full-reduced-and-column-pivoted-computational-qr-factorisations, thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts, def-invertible-matrix-and-general-linear-group, def-rank-and-nullity]
aliases: []
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
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

1.1 After $k$ pivot steps, the first $k$ pivoted columns span the same subspace as the first $k$ columns of $QR$, and the next pivot diagonal entry $r_{kk}$ is the norm of the residual of the chosen column after projection onto that span. Hence $r_{kk}\ne 0$ exactly when some remaining column still has a nonzero residual, that is, still lies outside the span of the first $k$ chosen columns. [L1, L2, algebra]

2.1 For $k<r$, the chosen columns cannot already span every column of $A$, because then all columns would lie in a $k$-dimensional span and [L4] would give rank at most $k<r$. Therefore some remaining column has nonzero residual, and by the greedy rule step 1.1 gives $r_{kk}\ne 0$. Thus the first $r$ diagonal entries of $R$ are nonzero. [step 1.1, L4, algebra]

3.1 After $r$ pivot columns have been chosen, [L4] says no further independent column exists. Hence every remaining column lies in the span of the first $r$ chosen columns, so every remaining residual is zero. Step 1.1 then forces every entry below and on the diagonal in the trailing block to be zero, giving $$R=\begin{pmatrix}R_{11}&R_{12}\\0&0\end{pmatrix}.$$ The block $R_{11}$ is upper triangular with nonzero diagonal by step 2.1, so it is invertible. [step 1.1, step 2.1, L3, L4, algebra]

4.1 Steps 2.1 and 3.1 prove the claim. [step 2.1, step 3.1] ∎
