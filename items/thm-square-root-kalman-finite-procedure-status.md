---
id: thm-square-root-kalman-finite-procedure-status
kind: theorem
title: "The square-root Kalman procedure terminates with a finite status and operation-count bound"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-finite-budget-square-root-kalman-filter
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-forward-and-back-substitution-for-triangular-systems
  - alg-scaled-householder-reflector-formation-and-application
  - lem-scaled-real-householder-step-termination-and-status
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§3.4, Algorithm 1, finite prediction/innovation/update loop"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §3.5.1, finite operation-count conventions for one filter cycle"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4, §4.3, finite-horizon filter recursion"
verification:
  precheck: pass
---

## Statement

For every finite admissible input to
[[alg-finite-budget-square-root-kalman-filter]] with finite state and
observation dimensions, the
procedure returns after finitely many arithmetic operations. For $T>0$ its
outcome is one of success, range-failure, or
innovation-factorization-failure. Let $r_0,r_{Q,k},r_{R,k}$ be the input
factor column counts, put $\rho_0=r_0$ and $\rho_{k-1}=d_{k-1}$ for
$2\le k\le T$, and set
$$q_k=\max(d_k,\rho_{k-1}+r_{Q,k}),\qquad \bar r_k=\max(p_k,r_{R,k}).$$
In a unit-cost model for scalar arithmetic, comparisons, status checks, and
entry copies, the operation count for $T>0$ is
$$O\!\left(\sum_{k=1}^T\left[d_kd_{k-1}(\rho_{k-1}+1)+q_kd_k^2+(\bar r_k+d_k)(p_k+d_k)^2\right]\right).$$
For $T=0$ the procedure returns its input pair in $O(1)$ operations. These
are termination, status, and operation-count results only; they assert
neither that the numerical factorization succeeds nor that an error bound
holds.

## Facts & Assumptions

**Given:** The finite horizon, finite dimensions, finite input matrices and vectors, and the declared finite-status behavior of the component procedures.

[F1] The algorithm has a loop over the finite horizon and each prediction, measurement, factorization, and solve has a declared finite status. [[alg-finite-budget-square-root-kalman-filter]]

[F2] Each scaled Householder step has finite loops and returns either its declared identity/reflector result or its first range-failure status. [[lem-scaled-real-householder-step-termination-and-status]]

[F3] The forward-substitution definition specifies one recursive row update for each component when the diagonal is nonzero, so its solve schedule has finitely many updates. [[def-forward-and-back-substitution-for-triangular-systems]]

[F4] Each scalar arithmetic operation, comparison, status check, and entry copy has unit cost in the operation-count convention of the Statement.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Every matrix or vector product in [F1] is evaluated by finitely many left-to-right dot products because all dimensions are finite. Each scalar operation, including conversion of a supplied entry at its read, either returns a finite value in the declared arithmetic model or the first range-failure status. Concatenation, zero padding, and block partitioning use finitely many entries. [F1, given, algebra]

1.2 Each QR call processes a finite number of columns and, within a column, a finite number of active entries. By [F2], each reflector step terminates with an identity, reflector, or range-failure result; hence a QR call either returns its reduced factor or a finite failure status. The lower-triangular innovation solve has finitely many forward-substitution row updates by [F3]; its diagonal is nonzero because [F1] returns failure before the solve otherwise. [F1, F2, F3, given, algebra]

1.3 A reduced Householder QR call on an $M\times N$ array ($M\ge N\ge1$) has $N$ passes. Pass $j$ forms a reflector using $O(M-j+1)$ scalar operations and applies it to at most $N-j$ trailing columns using $O((M-j+1)(N-j))$ operations; scans and status checks have no larger order. Summing over $j$ gives $O(MN^2)$. Hence the prediction and measurement QR calls at step $k$ cost $O(q_kd_k^2)$ and $O((\bar r_k+d_k)(p_k+d_k)^2)$, respectively. A failure can only shorten these loops. [F1, F2, F4, given, algebra]

2.1 The outer loop has at most $T$ steps, and for $T=0$ the algorithm returns its initial pair immediately. By steps 1.1 and 1.2, every entered step terminates; therefore the whole procedure returns after finitely many operations with a declared status. No success or accuracy guarantee is asserted by this termination result. [F1, step 1.1, step 1.2, induction, algebra]

3.1 The products $F_k\widehat m_{k-1|k-1}$ and $F_kL_{k-1|k-1}$ cost $O(d_kd_{k-1})$ and $O(d_kd_{k-1}\rho_{k-1})$. The product $H_kL_{k|k-1}$ costs $O(p_kd_k^2)$; the innovation product, triangular solve, factor sign changes, and all block copying/padding cost at most $O((\bar r_k+d_k)(p_k+d_k)^2+q_kd_k^2)$ because $p_k,d_k\ge1$, $q_k\ge r_{Q,k}$, and $\bar r_k\ge r_{R,k}$. Input conversions add at most one scalar rounding per supplied operand read or copied entry, so they do not change these orders. Together with step 1.3, summing over $k$ gives the stated count. For $T=0$ there is only the constant-time return, with no entry conversions. [F1, F3, F4, step 1.3, given, algebra] ∎

