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
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
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
the initialization terminates and has an exact unitary factor record.

[F3] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]:
left and right Givens factors can annihilate the prescribed bulge entries.

[F4] [[lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil]]:
local left/right unitary updates with local arithmetic and deflation residuals
give a global perturbation pair bounded by the sum of their pair norms.

## Proof

1.1 The initialization uses finitely many Givens loops by [F2]. In a QZ sweep, the first left rotation is chosen from $(\beta H-\alpha T)e_1$, whose only possibly nonzero entries are the first two. The following right rotation removes the new $T_{2,1}$ entry and can create only the bulge $H_{3,1}$. [F1, F2, F3, algebra]

1.2 For an infinite-deflation step with $T_{k,k}=0$, the descending right rotations make $T_{j,j}=0$ for $j=k-1,\ldots,a$. At each such stage, $T_{j+1,j}=T_{j+1,j+1}=0$, so the right rotation does not create a subdiagonal entry in $T$. It can create only $H_{j+2,j}$, which the paired left rotation zeros; that left rotation preserves triangularity because the affected entries of column $j+1$ of $T$ are both zero. The final left rotation zeros $H_{a+1,a}$ while column $a$ of $T$ remains zero, isolating the top one-by-one pair $(H_{a,a},0)$. The $(0,0)$ branch is reported as `singular-pencil-suspected`, so it is not assigned an eigenvalue. [F1, F3, induction]

1.3 There are finitely many initialization loops, at most $n$ rotations in an infinite deflation, at most $n$ rotations in a sweep, and at most $N$ sweeps. Every scalar operation either succeeds or exits with `range-failure`; missing unitarity or arithmetic certificates exit with `certificate-inconclusive`. Thus every branch terminates with a declared status. [given, F1, F2, algebra]

2.1 If the current bulge is $H_{j+1,j-1}$, [F3] supplies a left Givens factor on rows $j,j+1$ that zeros it. This can create the single $T_{j+1,j}$ entry; a right Givens factor on columns $j,j+1$ zeros that entry and can create only the next Hessenberg bulge $H_{j+2,j}$. The final rotation pair has no row below the active block, so the sweep ends Hessenberg-triangular. Structural zero assignments are recorded as deflation perturbations. [F1, F3, step 1.1, induction]

3.1 For a run with certified factors, each local update has the form $A_j=Q_j^*(A_{j-1}+E_j^A+D_j^A)Z_j$ and $B_j=Q_j^*(B_{j-1}+E_j^B+D_j^B)Z_j$, where $D_j^A,D_j^B$ are exactly the recorded entry overwrites. Applying [F4] to this finite list gives $S=Q^*(A+\Delta_A)Z$ and $T=Q^*(B+\Delta_B)Z$ for the accumulated pair $(\Delta_A,\Delta_B)$. No bound is asserted without local norm certificates. [F1, F4, step 1.3, algebra] ∎
