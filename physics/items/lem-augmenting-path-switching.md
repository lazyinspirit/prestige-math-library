---
id: lem-augmenting-path-switching
kind: lemma
title: "Switching along an augmenting path increases a matching by one edge"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-alternating-and-augmenting-path, def-matching-maximum-perfect-and-matching-number]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on bipartite matching"
      url: "https://math.mit.edu/~goemans/18433S07/matching-notes.pdf"
pipeline_run: null
---

## Statement

If $P$ is an $M$-augmenting path in a finite graph, then
$$M':=M\mathbin{\triangle}E(P)$$
is a matching and $|M'|=|M|+1$.

## Facts & Assumptions

**Given:** A matching $M$ and an $M$-augmenting path $P$.

[F1] An augmenting path alternates between edges outside and inside $M$, begins and ends outside $M$, and has exposed endpoints ([[def-alternating-and-augmenting-path]]).

## Proof

**Proof technique:** constructive.

1.1 Along $P$ there is one more edge outside $M$ than inside $M$, and every internal vertex of $P$ is incident with precisely one edge of $M\cap E(P)$. [F1, construct]

1.2 Replacing the $M$-edges of $P$ by its non-$M$ edges leaves every internal vertex incident with one new matching edge, and its exposed endpoints incident with one; all edges away from $P$ are unchanged, so $M'$ is a matching. [F1]

2.1 The replacement deletes $|M\cap E(P)|$ edges and adds $|M\cap E(P)|+1$ edges, hence $|M'|=|M|+1$. [step 1.1, discharge-construct] ∎

## Remarks

- The use of symmetric difference is literal: it deletes the old matching edges on $P$ and inserts the new ones, with no choice of any further edges.
