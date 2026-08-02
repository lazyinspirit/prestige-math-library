---
id: lem-no-augmenting-path-gives-tight-cut
kind: lemma
title: "If the residual network has no source-sink path, its reachable set gives a cut whose capacity equals the flow value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-network-flow-cut-and-residual-network, lem-flow-cut-identity-and-weak-duality]
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

If no residual $s$-$t$ path exists for a feasible flow $f$, let $S$ be the
vertices reachable from $s$ in its residual network. Then $S$ is an $s$-$t$
cut and $c(S)=|f|$.

## Facts & Assumptions

**Given:** A feasible flow $f$ whose labelled residual network has no $s$-$t$ path.

[F1] A forward residual copy exists exactly on unused original capacity, and a reverse residual copy exists exactly on positive original flow ([[def-integral-network-flow-cut-and-residual-network]]).

[L1] For every cut, outgoing flow is $|f|$ plus incoming flow and is at most the cut capacity ([[lem-flow-cut-identity-and-weak-duality]]).

## Proof

**Proof technique:** direct.

1.1 Since $t$ is not reachable, $S$ contains $s$ and excludes $t$, so it is an $s$-$t$ cut; an original arc leaving $S$ has no forward residual copy, hence is saturated. [F1]

1.2 An original arc entering $S$ from outside has no reverse residual copy starting in $S$, hence carries zero flow. [F1]

1.3 Thus outgoing flow across $S$ equals $c(S)$ and incoming flow is zero; [L1] gives $|f|=c(S)$. [L1]

2.1 The reachable set therefore has the asserted tight-cut property. [step 1.1, step 1.2, step 1.3] ∎
