---
id: thm-low-rank-adi-finite-status-and-well-definedness
kind: theorem
title: Finite ADI shifts have well-defined solves and explicit statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-low-rank-alternating-direction-implicit-lyapunov
  - lem-hurwitz-negative-shift-matrix-invertible
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
dependency_level: 3
---

## Statement

For admitted inputs of [[alg-low-rank-alternating-direction-implicit-lyapunov]], the shift-pair validation and update procedure terminate with a declared status after at most $k$ updates and a finite scan of the $k$ shifts. For every admissible shift with $\operatorname{Re}p_j<0$, its exact shifted solve exists uniquely. On `completed`, $Z_k$ has at most $kr$ columns and $X_k=Z_kZ_k^*$ with the recorded residual factor $R_k$. This is not a convergence or real-factor assertion; paired real-data shifts may be processed in complex arithmetic.

## Facts & Assumptions

**Given:** A Hurwitz matrix, a finite forcing factor and a finite shift list with the algorithm's exact finite linear-solve operations.

[F1] [[alg-low-rank-alternating-direction-implicit-lyapunov]] defines the pair-consuming validation scan, individual-shift updates and statuses.

[F2] [[lem-hurwitz-negative-shift-matrix-invertible]]: Hurwitz $A$ and $\operatorname{Re}p<0$ imply $A+pI$ is invertible.

## Proof

1.1 In the pairing scan, each accepted real entry advances the index by one and each accepted nonreal pair advances it by two; an unpaired entry returns immediately. Thus the scan has at most $k$ checks, including the empty list. For a pair $(p,\overline p)$ the second entry is consumed by the validation scan, not incorrectly tested for a third partner. The update loop still visits both indices. [F1, given, algebra]

2.1 Each valid update has $c_j=-2\operatorname{Re}p_j>0$. By [F2] its exact linear system has a unique solution. Other shift checks return their declared status. Each matrix operation and positive scalar square root is finite, and the update index increases until $k$ or an earlier return, so the procedure terminates. [F1, F2, step 1.1, given, algebra]

3.1 Initialization has zero factor columns and $X_0=0$. Each successful update appends $r$ columns and sets $X_j=Z_jZ_j^*$ and $R_j$ by its explicit recurrence. Hence completion has at most $kr$ columns and exactly the recorded output relations, also for $k=0$. No contraction or limiting shift property was used. [F1, step 2.1, given, algebra] ∎
