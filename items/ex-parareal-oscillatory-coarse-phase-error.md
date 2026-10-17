---
id: ex-parareal-oscillatory-coarse-phase-error
kind: example
title: "A coarse phase mismatch can increase the Parareal error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-parareal-propagator-pair
  - alg-parareal-correction-sweeps
  - lem-parareal-first-k-nodes-are-fine-exact
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 2: Methods Based on Multiple Shooting"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/07/cbms-pint-day-2.pdf"
      locator: "Slides 23–29, standard Parareal update and finite-step exactness."
    - title: "Martin J. Gander, 50 Years of Time Parallel Time Integration"
      url: "https://unige.ch/~gander/Preprints/50YearsTimeParallel.pdf"
      locator: "PDF pp. 14–16, standard recurrence and convergence caveats."
---

## Example

On $X=\mathbb R^2$, let the fine propagator be $F=I$ and the coarse propagator be $G=-I$ on each of two macro intervals, with $x_0=(1,0)$. Both maps preserve the Euclidean norm, and the initial coarse endpoint equals the fine endpoint. Yet after one Parareal sweep the endpoint error has norm $4$. The second sweep is exact, as required by the first-$k$-nodes lemma. Norm preservation alone therefore does not ensure monotone error decrease.

## Facts & Assumptions

**Given:** Two real-linear propagators, two macro intervals, and the exact Parareal recurrence.

[F1] [[alg-parareal-correction-sweeps]]: $U_0^k=x_0$ and $U_{n+1}^{k+1}=G(U_n^{k+1})+F(U_n^k)-G(U_n^k)$.

[F2] [[lem-parareal-first-k-nodes-are-fine-exact]]: after $k$ completed sweeps, each node $n\le k$ equals the sequential fine node.

[A1] $N=2$, $x_0=(1,0)$, $F=I$, and $G=-I$.

## Verification

1.1 The coarse initialization is $U_1^0=-x_0$ and $U_2^0=x_0$, while the sequential fine endpoint is $x_2=F^2x_0=x_0$. Both maps preserve the Euclidean norm because $\|Ix\|_2=\|-Ix\|_2=\|x\|_2$. [given, A1, algebra]

2.1 By [F1], $U_1^1=Gx_0+(F-G)x_0=-x_0+2x_0=x_0$, and $U_2^1=Gx_0+(F-G)(-x_0)=-x_0-2x_0=-3x_0$. [given, F1, step 1.1, algebra]

3.1 Therefore $\|U_2^1-x_2\|_2=\|-4x_0\|_2=4$. Since $K=N=2$, [F2] gives $U_2^2=x_2$. The error growth at the first sweep is transient and does not contradict finite-step exactness. [given, A1, F2, step 2.1, algebra] ∎

