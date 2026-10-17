---
id: prop-finite-barycentric-interpolation-evaluator-returns-status
kind: proposition
title: "The finite barycentric evaluator terminates with an explicit status"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - alg-finite-barycentric-interpolation-evaluator
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 1"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
---

## Statement

For every input tuple of [[alg-finite-barycentric-interpolation-evaluator]], the procedure terminates and returns one of its declared statuses. If it returns *success*, its value is an element of the supplied floating-point set $\mathbb F$. The statement asserts no accuracy or forward-error bound.

## Facts & Assumptions

**Given:** The finite arrays, query, and floating-point system supplied to the algorithm.

[F1] [[alg-finite-barycentric-interpolation-evaluator]]: the procedure loops over the finite index sets $0,\ldots,n$, each checked operation returns either an in-range rounded value or *range_failure*, and each detected failure branch returns immediately.

## Proof

1.1 The input validation examines only the $n+1$ nodes and data values. If a node or ordering check fails it returns *invalid_nodes*; if a data or query check fails it returns *invalid_data*. Otherwise it either returns the node value at an exact node, which is in $\mathbb F$, or proceeds to weight construction. [given, F1]

2.1 Weight construction visits at most $(n+1)n$ node pairs and performs finitely many checked operations. Each operation either returns a value in $\mathbb F$ or returns *range_failure*, which stops the procedure, so this stage terminates. [given, F1, step 1.1]

3.1 If weight construction completes, the evaluation loop visits exactly $n+1$ terms. Every checked operation either returns a value in $\mathbb F$ or exits with *range_failure*. After the loop, a zero denominator returns *range_failure*; otherwise the checked final division either returns *range_failure* or returns *success* with a value in $\mathbb F$. [F1, step 2.1]

4.1 These cases exhaust the procedure's branches and every loop is finite, so every input terminates with a declared status. [step 1.1, step 2.1, step 3.1] ∎
