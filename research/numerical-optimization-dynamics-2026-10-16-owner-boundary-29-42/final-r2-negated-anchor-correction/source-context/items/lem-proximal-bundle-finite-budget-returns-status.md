---
id: lem-proximal-bundle-finite-budget-returns-status
kind: lemma
title: "The proximal bundle method returns within its finite trial budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-proximal-bundle-serious-null-method
  - lem-proximal-bundle-subproblem-has-unique-minimizer
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mateo Díaz and Benjamin Grimmer, Optimal Convergence Rates for the Proximal Bundle Method, §§2–3"
      url: https://arxiv.org/pdf/2105.07874
    - title: "Dominikus Noll, Olivier Prot, and Aude Rondepierre, A proximity control algorithm to minimize nonsmooth and nonconvex functions, §§2–4"
      url: https://www.math.univ-toulouse.fr/~noll/PAPERS/pjo.pdf
verification:
  precheck: pass
---

## Statement

For a finite integer budget $N\ge1$, every invocation of [[alg-proximal-bundle-serious-null-method]] returns one of its specified statuses after at most $N$ trials. Every trial point used by the procedure is uniquely defined unless an earlier oracle-failure or stationary-or-model-failure status has already returned.

## Facts & Assumptions

**Given:** The nonempty closed convex feasible set, positive quadratic parameter, serious-step fraction, oracle rule, and finite trial budget of [[alg-proximal-bundle-serious-null-method]].

[F1] A finite nonempty maximum-affine model plus the positive quadratic has a unique minimizer on the closed convex feasible set ([[lem-proximal-bundle-subproblem-has-unique-minimizer]]).

[F2] The initialization and trial oracle calls return immediately on failure, and each trial returns on nonpositive predicted decrease or otherwise completes one serious/null branch and increments its finite trial counter ([[alg-proximal-bundle-serious-null-method]]).

## Proof

1.1 If no cut is stored, the initialization oracle either fails and returns with zero completed trials or supplies one valid cut. Thereafter the bundle is finite and nonempty; at each trial [F1] supplies a unique candidate unless an earlier status has returned. [given, F1, F2, construct]

2.1 Each trial either returns on oracle failure or $P_k\le0$, or evaluates one candidate and completes exactly one serious/null branch, appends its cut, and advances the counter by one. Thus there are at most $N$ completed trials; if none returns earlier, the procedure returns budget-exhausted after trial $N$. [F2, step 1.1, induction] ∎
