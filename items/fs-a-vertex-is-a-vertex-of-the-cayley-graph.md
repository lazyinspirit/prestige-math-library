---
id: fs-a-vertex-is-a-vertex-of-the-cayley-graph
kind: false-statement
title: "The vertex of an indecomposable module is literally a graph vertex of a Cayley graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vertex-and-source-of-an-indecomposable-module]
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
    - title: "J. MacQuarrie, Modular Representations of Profinite Groups"
      url: "https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf"
---

## Statement

The vertex of an indecomposable module is literally a graph vertex of a Cayley
graph.

## Facts & Assumptions

**Given:** An indecomposable $kG$-module.

[F1] A vertex is a minimal $p$-subgroup for relative projectivity
([[def-vertex-and-source-of-an-indecomposable-module]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1], a module vertex is a subgroup of $G$, not a point in a graph. [F1, given]

2.1 The shared word "vertex" is only terminology. A Cayley-graph vertex is a group element, whereas the representation-theoretic vertex is a $p$-subgroup defined by relative projectivity. Therefore the statement is false. [step 1.1]

3.1 So the claimed literal identification fails. [step 1.1, step 2.1] ∎
