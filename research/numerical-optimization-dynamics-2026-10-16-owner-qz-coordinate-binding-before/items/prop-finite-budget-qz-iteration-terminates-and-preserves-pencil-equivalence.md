---
id: prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
kind: proposition
title: "Every finite-budget QZ run returns a status and records unitary transforms and explicit deflations"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-finite-budget-qz-iteration-with-deflation-and-residual
  - prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
  - lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil
  - lem-qz-two-sided-local-computed-update-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §§3.1–3.5"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §12.8"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Statement

Every run of [[alg-finite-budget-qz-iteration-with-deflation-and-residual]]
terminates with a declared status. After each successful initialization or
QZ/infinite-deflation sweep, the stored pair is Hessenberg-triangular, except
at explicitly isolated blocks. For any run with a certified exact-unitary
factor record and local update residuals, the returned pair $(S,T)$ satisfies
$$S=Q^*(A+\Delta_A)Z,\qquad T=Q^*(B+\Delta_B)Z,$$
where $(\Delta_A,\Delta_B)$ is the accumulated arithmetic and explicit
deflation perturbation pair. This proposition gives no bound on its size.

## Facts & Assumptions

**Given:** The finite input, budget $N$, tolerance $\tau$, and operationwise
finite-arithmetic model stated in the algorithm.

[F1] [[alg-finite-budget-qz-iteration-with-deflation-and-residual]] has finite
loops, a finite sweep budget, explicit range-failure handling, and records each
arithmetic residual and each assigned structural zero.

[F2] [[prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence]]:
the exact initialization gives the finite index schedule and support induction; numerical reconstruction instead uses [F5].

[F3] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]:
left and right Givens factors can annihilate the prescribed bulge entries.

[F4] [[lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil]]:
local left/right unitary updates with local arithmetic and deflation residuals
give a global perturbation pair bounded by the sum of their pair norms.

[F5] [[lem-qz-two-sided-local-computed-update-bound]] supplies common computed
left/right factors for both matrices, correct row-target orientation, exact
target writes, pulled-back perturbations, and explicit local norm bounds.

## Proof

1.1 The initialization uses finitely many Givens loops by [F2]. In a QZ sweep, the first left rotation is chosen from the computed first two components of $(\beta H-\alpha T)e_1$, whose only possibly nonzero entries are the first two. The following right rotation removes the new $T_{2,1}$ entry and can create only the bulge $H_{3,1}$. [F1, F2, F3, F5, algebra]

1.2 For an infinite-deflation step with $T_{k,k}=0$, the descending right rotations make $T_{j,j}=0$ for $j=k-1,\ldots,a$. At each such stage, $T_{j+1,j}=T_{j+1,j+1}=0$, so the right rotation does not create a subdiagonal entry in $T$. It can create only $H_{j+2,j}$, which the paired left rotation zeros; that left rotation preserves triangularity because the affected entries of column $j+1$ of $T$ are both zero. The final left rotation zeros $H_{a+1,a}$ while column $a$ of $T$ remains zero, isolating the top one-by-one pair $(H_{a,a},0)$. The mandatory post-isolation scan reports the $(0,0)$ branch as `singular-pencil-suspected`, so it is not assigned an eigenvalue. The targeted zeros are explicit assignments; applying rounded rotations to other already-zero coordinate pairs preserves them exactly. [F1, F3, F5, induction]

1.3 There are finitely many initialization loops, at most $2n$ rotations per infinite isolation or per active-block sweep, at most $n$ successful infinite removals, and at most $N$ sweeps over at most $n$ active blocks. An unsuccessful isolation exits rather than repeating indefinitely. Each residual/controller evaluation uses finite prescribed factor/column loops. Every scalar operation either succeeds or exits with `range-failure`; missing unitarity or arithmetic certificates exit with `certificate-inconclusive`. Thus every branch terminates with a declared status. [given, F1, F2, algebra]

2.1 If the current bulge is $H_{j+1,j-1}$, [F3] supplies a left Givens factor on rows $j,j+1$ that zeros it. This can create the single $T_{j+1,j}$ entry; a right Givens factor on columns $j,j+1$ zeros that entry and can create only the next Hessenberg bulge $H_{j+2,j}$. The final rotation pair has no row below the active block, so the sweep ends Hessenberg-triangular. Computed target entries are explicitly zeroed with [F5], so this support induction also holds in rounded storage. Structural writes are included in their arithmetic allowance; only separate tolerance writes enter the deflation ledger. [F1, F3, F5, step 1.1, induction]

3.1 For a run with certified factors, each local update has the form $A_j=Q_j^*(A_{j-1}+E_j^A+D_j^A)Z_j$ and $B_j=Q_j^*(B_{j-1}+E_j^B+D_j^B)Z_j$, where $E_j$ includes the structural target write and $D_j$ is the saved separate tolerance write, pulled back from post-action coordinates as required by [F5]. Applying [F4] to this finite list gives $S=Q^*(A+\Delta_A)Z$ and $T=Q^*(B+\Delta_B)Z$ for the accumulated pair $(\Delta_A,\Delta_B)$. No bound is asserted without local norm certificates. [F1, F4, F5, step 1.3, algebra]

3.2 Before `qz-computed`, both arrays are triangular and all diagonal pairs are nonzero. Their homogeneous determinant is $\prod_k(\beta S_{kk}-\alpha T_{kk})$, a product of nonzero linear polynomials, hence is not identically zero. The returned pencil is regular; any label with second coordinate zero is an infinite candidate of this returned perturbed pencil. This proves no exact original-input infinite-eigenvalue or forward-error claim. [F1, step 2.1, algebra] ∎
