---
id: def-qa-deutsch-promise
kind: definition
title: Deutsch constant-versus-balanced promise
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-promise-query-instance
  - def-qa-task-and-promise-domain
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.4, PDF pp.29-33: complete DJ and BV promises, amplitudes, query bounds."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
      locator: "§6.1, PDF pp.7-11 (printed pp.1-5): independent direct Deutsch, DJ and BV derivations and classical comparisons."
---

## Definition

Let $f:\{0,1\}\to\{0,1\}$ be the total Boolean function of a [[def-qa-promise-query-instance]]. Encode $f$ by its hidden length-two truth table $z=f(0)f(1)\in\{0,1\}^2$, whose associated oracle function is $f_z=f$. The **Deutsch promise** is the decision task with YES set $Y=\{00,11\}$ and NO set $N=\{01,10\}$. The required output is $0$ on $Y$ (constant, $f(0)=f(1)$) and $1$ on $N$ (balanced, $f(0)\ne f(1)$). All four Boolean functions on one bit are promised. The truth table labels the hidden instance; the query interface supplies oracle access to $f$.

## Facts & Assumptions

**Given:** A total function $f:\{0,1\}\to\{0,1\}$.

[F1] [[def-qa-task-and-promise-domain]]: a decision task consists of disjoint YES and NO subsets of the encoded inputs; no answer is required outside their union.

[F2] [[def-qa-promise-query-instance]]: each promised instance supplies a total function on its entire address domain.

## Verification

1.1 Writing the two function values in order gives exactly the four strings $00,01,10,11$. By the Definition, $00$ and $11$ are in $Y$, while $01$ and $10$ are in $N$. These two sets are disjoint and cover all four possible tables, so the promised output is well-defined. [given, F1, F2, algebra]

2.1 The totality in [F2] makes both evaluations $f(0)$ and $f(1)$ available. Equality gives the constant case and inequality gives the balanced case by the two disjoint rows of the table in step 1.1. [given, F2, step 1.1, algebra] ∎
