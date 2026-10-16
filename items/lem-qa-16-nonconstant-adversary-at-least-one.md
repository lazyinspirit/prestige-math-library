---
id: lem-qa-16-nonconstant-adversary-at-least-one
kind: lemma
title: Nonconstant Boolean functions have adversary value at least one
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - def-qa-16-general-adversary-bound
  - def-qa-16-input-mismatch-matrices
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
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


If f is nonconstant, then $\operatorname{Adv}^{\pm}(f)\ge1$. In particular the finite optimal adversary value A used by the reflection evaluator may be taken with A≥1.

## Facts & Assumptions

**Given:** A finite nonconstant Boolean function f.



[F1] [[def-qa-16-general-adversary-bound]]: admissible Γ are nonzero real symmetric and vanish on equal-output pairs.

[F2] [[def-qa-16-input-mismatch-matrices]]: Δ_i marks the coordinates on which two inputs differ.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the off-diagonal two-point swap matrix has norm one.

## Proof

1.1 Choose x,y∈D with f(x)≠f(y). They are distinct bit strings, so x_i≠y_i for at least one i. Set Γ_{xy}=Γ_{yx}=1 and every other entry to zero. This Γ is nonzero and real symmetric; its only nonzero entries join opposite outputs, so Γ∘F=0. [given, F1, F2, construct]

2.1 The restriction of Γ to span{|x⟩,|y⟩} is [[0,1],[1,0]], whose eigenvalues are ±1; hence ||Γ||=1. For every i, Γ∘Δ_i is either Γ or zero, and at least one differing coordinate gives Γ itself. Thus max_i||Γ∘Δ_i||=1 and the ratio is one. [given, F2, F3, step 1.1, algebra] ∎
