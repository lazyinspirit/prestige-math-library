---
id: ex-uncountable-discrete-space-meets-bing-not-urysohn
kind: example
title: "An uncountable discrete space is metrizable and has a discrete basis, but is not second countable"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-discrete-family-and-sigma-bases, def-metrizable-space, def-second-countable-space, def-standard-topologies, thm-r-uncountable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Metrizable space"
      url: "https://encyclopediaofmath.org/wiki/Metrizable_space"
pipeline_run: null
---

## Example

The real set $\mathbb R$ with the discrete topology is metrizable and has a discrete basis, but is not second countable.

## Facts & Assumptions

**Given:** The set $\mathbb R$ with its discrete topology.

[L1] The real line is uncountable ([[thm-r-uncountable]]).

## Verification

**Proof technique:** direct.

1.1 The zero-one function $d(x,y)=0$ for $x=y$ and $d(x,y)=1$ otherwise is a metric inducing the discrete topology; singleton sets form a discrete basis. [given]

1.2 Any basis must contain $\{x\}$ for every $x$: applying the basis condition to the open set $\{x\}$ produces a basis member containing $x$ and contained in $\{x\}$. Thus a countable basis would inject the uncountable set $\mathbb R$ into a countable set, contradicting [L1]. [L1]

2.1 This gives the claimed profile. [step 1.1, step 1.2] ∎
