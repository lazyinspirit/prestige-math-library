---
id: cor-positive-codimension-immersed-submanifolds-are-null
kind: corollary
title: "Positive-codimension immersed submanifolds are null"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-image-of-a-lower-dimensional-c1-manifold-is-null,
       def-immersed-submanifold, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (cor-positive-codimension-immersed-submanifolds-are-null). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Every immersed submanifold of positive codimension in a smooth manifold is a
null subset of the ambient manifold.

## Facts & Assumptions

**Given:** Countable Choice and an immersed $m$-dimensional submanifold $S$ of an $n$-manifold $N$ with $m<n$.

[F1] An immersed submanifold is an $m$-manifold equipped with a smooth injective immersion into the ambient manifold ([[def-immersed-submanifold]]).

[L1] The image of a lower-dimensional $C^1$ manifold is null ([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], the immersed submanifold has a smooth injective immersion $i:S\to N$; its image is the subset of $N$ in the statement. [F1, given]

2.1 Since $m<n$, [L1] under the stated Countable Choice makes $i(S)$ null in $N$. [L1, step 1.1] ∎
