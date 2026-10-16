---
id: def-qa-16-input-mismatch-matrices
kind: definition
title: Input-mismatch masks and entrywise filtering
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-16-boolean-query-domain
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

## Definition


For a finite Boolean query problem (N,D,f), all matrices below are indexed by the same fixed ordering of D. For i∈[N], define the input-mismatch matrix
$$(\Delta_i)_{xy}:=\mathbf 1[x_i\ne y_i].$$
For same-size matrices define the entrywise product $(A\circ B)_{xy}:=A_{xy}B_{xy}$. Define the same-output mask $F_{xy}:=\mathbf 1[f(x)=f(y)]$ and the all-ones matrix $J_{xy}:=1$. Thus $J-F$ is the opposite-output mask.

## Facts & Assumptions

**Given:** A finite Boolean query problem (N,D,f) with its fixed input ordering.



[F1] [[def-qa-16-boolean-query-domain]]: every row/column label is an element of the same finite D⊆{0,1}^N with output f(x).

## Proof

1.1 For every i∈[N], set (Δ_i)_{xy}=1 when x_i≠y_i and 0 otherwise; then Δ_i is a real symmetric Boolean matrix indexed by D×D. Define (A∘B)_{xy}=A_{xy}B_{xy} for matrices with the same row and column labels. [given, F1, construct]

2.1 Set F_{xy}=1[f(x)=f(y)] and J_{xy}=1 for all x,y∈D. If x=y, every Δ_i(x,x)=0; if x≠y, then x and y differ in at least one coordinate, so at least one Δ_i(x,y)=1. Hence J−F is supported exactly on pairs with opposite outputs, and every diagonal entry is excluded by every query mask. [given, F1, step 1.1, algebra] ∎
