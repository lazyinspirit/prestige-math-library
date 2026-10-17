---
id: thm-bartels-stewart-finite-status-and-local-pivot-uniqueness
kind: theorem
title: Finite Bartels–Stewart statuses and successful-pivot uniqueness
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-bartels-stewart-sylvester-equation
  - lem-adjugate-inverse-formula-over-a-field
  - thm-finite-budget-francis-schur-termination-and-status
  - thm-bartels-stewart-sylvester-exact-correctness
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
      locator: "Adapted numerical-method setting; this finite termination/status and successful-pivot composition is proved locally using the named typed suppliers, not asserted as a verbatim external theorem. No new external full-text reading is claimed."
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
dependency_level: 7
---

## Statement

For admitted inputs of [[alg-bartels-stewart-sylvester-equation]], the procedure terminates with a declared status, using its finite Schur controls and bounded controller programs or the stated arbitrary-terminating controller mode. Every stored local solve is unique. On `success`, the full equation $AX+XB=C$ has exactly one solution, namely the returned $X$, without an additional spectral-disjointness assumption: successful exact local pivot checks themselves imply invertibility of the full block operator. Failure or a positive threshold rejection proves neither singularity nor nonexistence unless its exact tests explicitly do so.

## Facts & Assumptions

**Given:** The algorithm's actual finite controls, exact local arithmetic, delegated rounded Schur semantics and terminating supplied evaluator contracts.

[F1] [[alg-bartels-stewart-sylvester-equation]] verifies exact Schur identities and traverses block pairs in column-increasing, row-decreasing order. A stored pivot has $\det M_{ij}\ne0$, dimension at most four, and its specified adjugate solve.

[F2] [[lem-adjugate-inverse-formula-over-a-field]]: nonzero determinant gives the two-sided inverse $M^{-1}=\operatorname{adj}(M)/\det M$.

[F3] [[thm-finite-budget-francis-schur-termination-and-status]]: the actual delegated Schur procedure terminates on its admitted finite controls and terminating evaluators, possibly with failure.

[F4] [[thm-bartels-stewart-sylvester-exact-correctness]]: a successful substitution returns an exact solution after checking its exact Schur factors.

## Proof

1.1 The default sign program is a fixed finite expression tree or its finite encoded-integer recipe. A bounded custom interpreter takes at most its per-call instruction budget, while every arbitrary-terminating program ends by its input contract; invalid/undecided outcomes propagate as failure. The two delegated Schur calls terminate by [F3], and failed calls return immediately. Exact matrix-entry/pattern certificate tests are finite. [F1, F3, given, algebra]

2.1 There are finitely many block pairs and finitely many terms in each substitution sum. Each local determinant, separation-bound expression and adjugate formula is a finite expression on a matrix of dimension at most four. A rejected test returns its declared failure. Otherwise $\det M_{ij}\ne0$, so [F2] gives a unique exact local solution. Thus the whole traversal and final finite transforms terminate. [F1, F2, step 1.1, given, algebra]

3.1 On success consider a homogeneous transformed equation $TY+YS=0$. In the algorithm's traversal order, its first block satisfies $M_{ij}\operatorname{vec}Y_{ij}=0$, hence $Y_{ij}=0$ by step 2.1. Inductively, all earlier blocks entering the current right-hand side are zero, so its unique invertible pivot again forces $Y_{ij}=0$. Every block therefore vanishes. Exact unitary Schur factors are invertible, so the original homogeneous operator $AX+XB$ also has zero kernel. [F1, F2, step 2.1, given, induction, algebra]

4.1 By [F4] the successful output is a solution. If two solutions existed, their difference would be in the homogeneous kernel, which is zero by step 3.1. Thus the output is unique without needing to assume a spectral premise not established by the caller. The positive threshold test may reject an invertible small pivot, so no converse failure conclusion is made. [F1, F4, step 3.1, algebra] ∎
