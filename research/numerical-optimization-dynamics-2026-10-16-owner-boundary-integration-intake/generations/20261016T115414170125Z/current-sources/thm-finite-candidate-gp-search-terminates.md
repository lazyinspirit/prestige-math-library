---
id: thm-finite-candidate-gp-search-terminates
kind: theorem
title: Finite-candidate Gaussian-process acquisition search terminates within its budget
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 2
proof_strategy: direct
deps: [alg-finite-candidate-gp-acquisition-search]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Peter I. Frazier, A Tutorial on Bayesian Optimization, §2"
      url: "https://arxiv.org/pdf/1807.02811"
    - title: "Niranjan Srinivas et al., Gaussian Process Optimization in the Bandit Setting, §3"
      url: "https://arxiv.org/pdf/0912.3995"
---

## Statement

For a nonempty finite candidate list of length $M\ge1$ and finite horizon $N\ge0$, the finite-candidate procedure in [[alg-finite-candidate-gp-acquisition-search]] either returns its finite trace or an explicit inadmissible-model, solve, acquisition, observation, or budget status after finitely many operations, assuming each matrix solve and observation call returns or reports failure in finite time.

## Facts & Assumptions

**Given:** A finite ordered candidate list, horizon $N\ge0$, and the algorithm's exact solve/status and acquisition instructions.

[F1] At each successful horizon step the method inspects at most $M$ acquisition values and appends exactly one observation; invalid inputs and every solve, acquisition, or observation failure branch return immediately. [[alg-finite-candidate-gp-acquisition-search]]

## Proof

1.1 The input validation and finite scan of $M$ candidates terminate. The only additional operations at a stage are the stated finite Cholesky/triangular solves and one observation call, each of which either returns or reports failure by the Given condition. [given, F1, algebra]

2.1 Each successful stage appends one observation, so at most $N$ horizon stages occur; after the last stage the method returns its trace. If validation fails or any solve, comparison, or observation reports unavailable, the algorithm returns immediately. Thus all branches terminate after finitely many operations. [step 1.1, F1, induction] ∎

