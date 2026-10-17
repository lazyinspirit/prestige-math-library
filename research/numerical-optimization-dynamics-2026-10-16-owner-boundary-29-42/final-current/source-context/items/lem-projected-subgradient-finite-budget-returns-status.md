---
id: lem-projected-subgradient-finite-budget-returns-status
kind: lemma
title: "The projected subgradient method returns within its finite budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-projected-subgradient-method
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - thm-finite-jensen-inequality-in-euclidean-space
  - lem-finite-set-has-max
  - lem-finite-sum-laws
  - def-max-min
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, §3.1"
      url: https://arxiv.org/pdf/1405.4980
    - title: "Dimitri Bertsekas, MIT 6.253 Complete Lecture Notes, Lecture 15"
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
verification:
  precheck: pass
---

## Statement

Let $N\ge1$ be an integer and run [[alg-projected-subgradient-method]] with all stated inputs. Every execution returns after at most $N$ oracle calls. On failure it returns the feasible current iterate and a best observed point if one has been observed, or none otherwise; it does not return a full-horizon average. If all calls succeed, the weighted average is defined and feasible, a best observed iterate exists, and the status is budget-exhausted after exactly $N$ updates.

## Facts & Assumptions

**Given:** A nonempty closed convex feasible set, a finite budget, positive stepsizes, and the oracle/failure rules of [[alg-projected-subgradient-method]].

[F1] Every point has a unique nearest-point projection onto a nonempty closed convex set ([[thm-nearest-point-in-a-nonempty-closed-convex-set]]).

[F2] A convex combination of feasible points remains feasible ([[thm-finite-jensen-inequality-in-euclidean-space]]).

[F3] A nonempty finite list of real values has a minimum attained at one of its members ([[lem-finite-set-has-max]], [[def-max-min]]); scanning the list in increasing index order and replacing the record only on a strict decrease yields the least-index minimizer, by induction on the finite list length.

[F4] A finite sum of nonnegative terms is nonnegative, and a zero sum forces every term to be zero; therefore a nonempty finite sum of strictly positive terms is strictly positive ([[lem-finite-sum-laws]]).

## Proof

1.1 Initially $x_0\in C$. At each successful oracle call, if $x_k\in C$, [F1] gives a unique projected point $x_{k+1}\in C$. Induction over the successful calls proves feasibility and unique definition of each iterate through at most $N$ calls. [given, F1, induction]

2.1 A failed call returns immediately; if no earlier value was observed, the optional best field is none, and otherwise [F3] supplies a least-index best among the finite observed list. If all calls succeed, $N\ge1$ and every $\alpha_k>0$, so $A_N=\sum_{k<N}\alpha_k>0$ by [F4]. The weights $\alpha_k/A_N$ are positive and sum to one by the scaling law for finite sums; [F2] makes the weighted average feasible, and [F3] gives a least-index best observed point. The finite loop completes exactly $N$ updates and returns budget-exhausted. [given, F2, F3, F4, step 1.1, algebra] ∎
