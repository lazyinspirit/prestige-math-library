---
id: fs-cayley-formula-counts-unlabelled-trees
kind: false-statement
title: "Cayley's formula counts unlabelled trees"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cayley-formula, ex-trees-on-at-most-five-vertices]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISI Bangalore discrete mathematics notes, Trees and Cayley’s theorem"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## False Statement

Cayley's number $n^{n-2}$ is the number of unlabelled trees on $n$ vertices.

## Facts & Assumptions

**Given:** The claimed interpretation of Cayley's formula.

[L1] Cayley's formula counts spanning trees of the labelled complete graph $K_n$ ([[thm-cayley-formula]]).

[L2] Up to isomorphism, there are only two trees on four vertices: $P_4$ and $K_{1,3}$ ([[ex-trees-on-at-most-five-vertices]]).

## Refutation

**Proof technique:** direct.

1.1 At $n=4$, Cayley's number is $4^{4-2}=16$. [L1]

1.2 The unlabelled count is $2$. [L2]

2.1 Since $16\ne2$, Cayley's formula does not count unlabelled isomorphism types. [step 1.1, step 1.2] ∎
