---
id: fs-savitch-stores-the-whole-configuration-graph
kind: false-statement
title: "FALSE: Savitch's algorithm stores the whole configuration graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-bounded-reachability-recursion, lem-bounded-reachability-uses-logarithmic-recursion-depth]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Statement

Savitch's algorithm stores the whole configuration graph.

## Facts & Assumptions

**Given:** Savitch's recursive reachability procedure.

[L1] The recursive definition reduces one reachability query to two shorter subqueries through one midpoint candidate at a time ([[def-bounded-reachability-recursion]]).

[L2] A direct implementation keeps only the current endpoints, the current midpoint candidate, and the recursion stack, so the full search uses only $O(\log^2 N)$ space on an $N$-vertex graph ([[lem-bounded-reachability-uses-logarithmic-recursion-depth]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], Savitch's recursion examines one midpoint candidate and one shorter subproblem at a time, rather than materializing all candidates or all adjacency data at once. [L1, given]

2.1 By [L2], the whole recursion uses only polylogarithmic space in the number of configurations. An explicit storage of the whole configuration graph would require at least enough space to name all of its vertices, which is much larger than that bound in general. So the statement is false. [L2, step 1.1, algebra] ∎
