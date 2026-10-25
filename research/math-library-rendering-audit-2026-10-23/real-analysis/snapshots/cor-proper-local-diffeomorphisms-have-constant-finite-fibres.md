---
id: cor-proper-local-diffeomorphisms-have-constant-finite-fibres
kind: corollary
title: "A proper Euclidean local diffeomorphism over a connected target has constant finite fibre cardinality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets, def-connected-space, def-equinumerous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, Proposition 2.19"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
pipeline_run: null
---

## Statement

Under the hypotheses of [[thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets]], there is a positive natural number $d$ such that every fibre of $f$ is equinumerous with a set of size $d$ ([[def-equinumerous]]).

## Facts & Assumptions

**Given:** A proper regular $C^1$ map $f:U\to V$ with nonempty source and connected target $V$ ([[def-connected-space]]).

[L1] Every $y\in V$ has an open neighbourhood whose preimage is a finite disjoint union of open sets, each carried $C^1$-diffeomorphically onto that neighbourhood by $f$ ([[thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets]]).

## Proof

**Proof technique:** direct.

1.1 Over a neighbourhood supplied by [L1], every fibre meets each sheet exactly once. Sending a fibre point to its unique sheet gives a bijection from every fibre there to the same nonempty finite sheet index set. Thus fibre cardinality is locally constant. [L1]

2.1 For each positive natural $d$, let $V_d$ be the set of target points with fibre cardinality $d$. Step 1.1 makes every $V_d$ open, and the $V_d$ form a disjoint cover of $V$. If two were nonempty, one and the union of all the others would disconnect $V$. Hence exactly one $V_d$ is nonempty, and it is all of $V$. [step 1.1, given] ∎
