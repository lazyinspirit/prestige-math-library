---
id: thm-finite-candidate-gp-search-terminates
kind: theorem
title: Finite-candidate Gaussian-process acquisition search terminates within its budget
status: published
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

For a nonempty finite candidate list of length $M\ge1$, a horizon $N\ge0$, and an initial-list length $s$ with $0\le s\le N$, the procedure in [[alg-finite-candidate-gp-acquisition-search]] terminates after at most $N-s$ observation calls. It returns `complete` with the posterior state at history length $N$, or one of its explicit inadmissible-model, posterior-solve-unavailable, acquisition-inconclusive, or observation-unavailable statuses. Assume every validation, positive-definiteness check, Cholesky factorization, triangular solve, acquisition-certificate check, and observation call finishes in finite time or reports failure.

## Facts & Assumptions

**Given:** A finite ordered candidate list, horizon $N\ge0$, initial-list length $0\le s\le N$, and the algorithm's validation, posterior-update, acquisition, and status instructions.

[F1] At each successful horizon step the method inspects at most $M$ acquisition values and appends exactly one observation; invalid inputs and every solve, acquisition, or observation failure branch return immediately. [[alg-finite-candidate-gp-acquisition-search]]

## Proof

1.1 The input validation and finite scan of $M$ candidates terminate by the Given condition. Initializing the posterior, updating it after an observation, and checking an acquisition certificate each use finitely many stated operations; each positive-definiteness check, factorization, solve, and observation call returns or reports failure in finite time. Every failure branch returns an explicit status. [given, F1, algebra]

2.1 Each successful stage appends one observation, so there are at most $N-s$ such stages. After the final observation the algorithm computes the posterior at history length $N$ and returns `complete`; if that update or any earlier validation, solve, acquisition-certificate, or observation step fails, it returns the corresponding explicit status. Thus every branch terminates after finitely many operations. [step 1.1, F1, induction] ∎

