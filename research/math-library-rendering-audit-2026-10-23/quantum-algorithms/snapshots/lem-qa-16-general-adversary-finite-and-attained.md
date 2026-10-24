---
id: lem-qa-16-general-adversary-finite-and-attained
kind: lemma
title: Finite, attained general adversary value for nonconstant Boolean functions
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - def-qa-16-input-mismatch-matrices
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qa-16-boolean-query-domain
  - thm-heine-borel-rn
  - thm-extreme-value-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


For a finite Boolean query problem (N,D,f), restrict to real symmetric Γ indexed by D with Γ∘F=0 and denominator d(Γ)=max_i||Γ∘Δ_i||. If f is nonconstant, every nonzero admissible Γ has d(Γ)>0, the ratio ||Γ||/d(Γ) is finite, and its supremum is a maximum. For constant f define Adv±(f)=0.

## Facts & Assumptions

**Given:** A finite Boolean query problem (N,D,f).



[F1] [[def-qa-16-boolean-query-domain]]: D is a finite subset of {0,1}^N and f labels each input 0 or 1.

[F2] [[def-qa-16-input-mismatch-matrices]]: Δ_i marks exactly the pairs that differ at coordinate i; F marks equal-output pairs.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is continuous and dominates every matrix entry in absolute value.

[F4] [[thm-heine-borel-rn]]: closed bounded subsets of each positive finite-dimensional real Euclidean space are compact.

[F5] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its maximum.

## Proof

1.1 Let x,y have opposite outputs. Then x≠y, so there is i with x_i≠y_i. The symmetric matrix with entries 1 at (x,y),(y,x) and zero elsewhere is an admissible nonzero Γ; at least one Γ∘Δ_i has norm 1, while all have norm at most 1. Thus every nonconstant f has a positive-denominator admissible matrix. [given, F1, F2, F3, construct]

2.1 If Γ is admissible and nonzero, some Γ_xy≠0. By Γ∘F=0 its endpoints have opposite outputs, hence differ at some coordinate i. Then |Γ_xy|=|(Γ∘Δ_i)_{xy}|≤||Γ∘Δ_i||, so max_i||Γ∘Δ_i||>0. The same argument shows that the normalization max_i||Γ∘Δ_i||≤1 forces every entry |Γ_xy|≤1. [given, F2, F3, step 1.1]

3.1 The normalized set of real symmetric Γ with Γ∘F=0 and max_i||Γ∘Δ_i||≤1 is closed and bounded in the finite-dimensional matrix space, hence compact by [F4]. It is nonempty by step 1.1. The norm is continuous since $|\|\Gamma\|-\|\Gamma'\||\le\|\Gamma-\Gamma'\|\le\|\Gamma-\Gamma'\|_F$, so [F5] gives a finite attained maximum; by homogeneity this maximum is exactly the ratio supremum in the definition. [given, F1, F2, F3, F4, F5, step 1.1, step 2.1, algebra] ∎
