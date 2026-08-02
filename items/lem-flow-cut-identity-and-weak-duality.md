---
id: lem-flow-cut-identity-and-weak-duality
kind: lemma
title: "A flow's value is its net flow across every source-sink cut and never exceeds the cut capacity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-network-flow-cut-and-residual-network, def-finite-sum-in-a-commutative-monoid]
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
    - title: "M. Goemans, Lecture notes on flows and cuts"
      url: "https://math.mit.edu/~goemans/18453S17/flowscuts.pdf"
pipeline_run: null
---

## Statement

For a feasible flow $f$ and every $s$-$t$ cut $S$,
$$|f|+\sum_{\operatorname{tail}(a)\notin S,\operatorname{head}(a)\in S}f(a)=\sum_{\operatorname{tail}(a)\in S,\operatorname{head}(a)\notin S}f(a)\le c(S).$$
In particular $|f|\le c(S)$.

## Facts & Assumptions

**Given:** A finite integral network, a feasible flow $f$, and an $s$-$t$ cut $S$.

[F1] Flow is conserved at every vertex except $s,t$, its value is the outgoing flow at $s$, and a cut capacity sums outgoing capacities ([[def-integral-network-flow-cut-and-residual-network]]).

## Proof

**Proof technique:** direct.

1.1 Sum flow conservation over $S\setminus\{s\}$ and cancel arcs whose two endpoints lie in $S$; because no original arc enters $s$, the resulting equality is the displayed equality of outgoing flow with $|f|$ plus incoming flow. [F1]

1.2 Each outgoing flow term is at most its capacity, so the outgoing flow sum is at most $c(S)$. [F1]

2.1 The incoming sum is nonnegative, hence the equality and inequality of steps 1.1--1.2 give $|f|\le c(S)$. [step 1.1, step 1.2] ∎
