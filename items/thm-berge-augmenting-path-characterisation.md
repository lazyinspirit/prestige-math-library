---
id: thm-berge-augmenting-path-characterisation
kind: theorem
title: "Berge's theorem: a matching is maximum if and only if it has no augmenting path"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-augmenting-path-switching, lem-symmetric-difference-of-two-matchings, def-alternating-and-augmenting-path]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

A matching $M$ in a finite graph is maximum if and only if no $M$-augmenting
path exists.

## Facts & Assumptions

**Given:** A matching $M$ of a finite graph $G$.

[L1] Switching along an augmenting path produces a matching with exactly one more edge ([[lem-augmenting-path-switching]]).

[L2] The nontrivial components of the symmetric difference of two matchings are alternating paths and even cycles ([[lem-symmetric-difference-of-two-matchings]]).

## Proof

**Proof technique:** direct.

1.1 If an $M$-augmenting path exists, [L1] gives a matching larger than $M$, so $M$ is not maximum. [L1]

1.2 Conversely, suppose $M$ is not maximum and choose a matching $N$ with $|N|>|M|$; decompose $M\triangle N$ using [L2]. [L2]

1.3 Every alternating cycle and every alternating path with equally many $M$- and $N$-edges has zero contribution to $|N|-|M|$, so some path component has one more $N$-edge than $M$-edge. [L2]

2.1 Such a path begins and ends with $N$-edges, so both endpoints are $M$-exposed and it is an $M$-augmenting path. [step 1.3]

3.1 Steps 1.1 and 1.2--2.1 prove both directions of the equivalence. [step 1.1, step 2.1] ∎

## Remarks

- Finiteness is used only to ensure that a nonmaximum matching has a larger matching and to make the component count finite.
