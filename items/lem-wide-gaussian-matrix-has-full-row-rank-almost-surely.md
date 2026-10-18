---
id: lem-wide-gaussian-matrix-has-full-row-rank-almost-surely
kind: lemma
title: A wide Gaussian matrix has full row rank almost surely
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-lebesgue-measure-is-a-complete-measure, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, §10.2"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.4.2"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $k\ge1$, $\ell>k$, and let $G\in F^{k\times\ell}$ have iid standard
real Gaussian or normalized complex Gaussian entries. Then
$\operatorname{rank}(G)=k$ almost surely.

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and a finite matrix with the density and independence specified in [[def-standard-real-and-normalized-complex-gaussian-matrix-law]].

[F1] Matrix entries have the stated product density, so each row is absolutely continuous with respect to finite-dimensional real-coordinate Lebesgue measure ([[def-standard-real-and-normalized-complex-gaussian-matrix-law]]).

[F2] Orthogonal or unitary changes of coordinates preserve this Gaussian law ([[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F3] For a nonnegative product-measurable function, the product integral equals either iterated integral ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] Under Countable Choice, finite-dimensional Lebesgue measure is countably subadditive ([[thm-lebesgue-measure-is-a-complete-measure]]).

[A1] Countable Choice supplies the Lebesgue measure used for the density ([[def-countable-choice]]).

## Proof

1.1 A fixed proper real or complex linear subspace $L\subsetneq F^\ell$ has probability zero for one Gaussian row: choose an orthogonal/unitary coordinate change sending $L$ into $\{z_1=0\}$, use [F2], and integrate the density over this coordinate subspace. It is Lebesgue-null: inside each bounded box $[-M,M]^d$ it lies in a coordinate hyperplane coverable by a box of width $2\varepsilon$ and bounded remaining sides, whose volume tends to zero with $\varepsilon$; [F4] makes that hyperplane null, and countable subadditivity covers the whole hyperplane. [F1, F2, F4, A1, choose]

2.1 Induct on the number $j\le k$ of revealed rows. The first row is nonzero almost surely by step 1.1 applied to the zero subspace. The dependence event for $j$ rows is measurable because it is the common zero set of the finitely many $j\times j$ minors. If the first $j-1$ rows are independent, their span is proper since $j-1<k<\ell$; for each fixed such tuple, step 1.1 makes the section of the event that row $j$ lies in their span null. The exceptional dependent tuples are null by induction. Applying [F3] to the nonnegative indicator of dependence gives probability zero for the first $j$ rows to be dependent. The induction is finite and concludes at $j=k$. [step 1.1, F3, choose]

3.1 Outside this null event, the $k$ rows are linearly independent, hence the row rank equals $k$. [step 2.1, algebra] ∎
