---
id: lem-ensemble-kalman-update-preserves-joint-exchangeability
kind: lemma
title: The perturbed-observation EnKF update preserves exchangeability
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-ensemble-kalman-filter
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jan Mandel, Loren Cobb, and Jonathan D. Beezley, On the Convergence of the Ensemble Kalman Filter, §2, Lemma 1"
      url: "https://arxiv.org/pdf/0901.2951v2"
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
---

## Statement

Fix the perturbed-observation update of [[alg-ensemble-kalman-filter]]. A row of random inputs is **exchangeable** if its joint law is invariant under every common permutation of the member indices. If the forecast states, forecast errors, observation perturbations, and any reference-member variables form an exchangeable input row, then the updated states together with those reference variables are exchangeable.

## Facts & Assumptions

**Given:** The inputs, maps, and update rule in the Statement.

[A1] The input row's joint law is invariant under common index permutations.

[F1] The algorithm forms member predictions, empirical means and covariance blocks, one common gain from those empirical covariance blocks, and then updates each member using its own perturbed datum. [[alg-ensemble-kalman-filter]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix a permutation $\sigma$ of $\{1,\ldots,N\}$. Applying it to the input states and errors permutes the forecast states and predicted observations by the same $\sigma$. Their empirical means are unchanged, while the sums defining $C_{xz}$ and $C_{zz}$ are unchanged because they only reorder their summands. Therefore $S_N$ and the common gain $K_N$ are unchanged. [A1, F1, given, algebra]

2.1 With the same $K_N$, the update at permuted index $i$ is exactly the original updated state at index $\sigma(i)$, since its datum perturbation and reference variable are permuted along with that member. Thus the full updated tuple under $\sigma$ is a permutation of the original updated tuple. Its law is unchanged by [A1], which is joint exchangeability. [A1, F1, step 1.1] ∎
