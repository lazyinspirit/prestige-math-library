---
id: ex-a-wide-transversal-in-four-structural-comb-partitions
kind: example
title: "A wide transversal in four structural comb partitions"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, Claim 5.1.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

In a structural partition of a $(4,8)$-comb, select singleton partition blocks
$A_i=\{x_i\}$, one from each comb block. Suppose the pairs
$A_1A_2,A_1A_4,A_3A_4$ complete and the other three pairs anticomplete. This
is a pure transversal of width $1$, hence also of width $1/2=w/\ell^2$.

## Facts & Assumptions

**Given:** A structural partition of a $(4,8)$-comb and four selected singleton
blocks, one from each of its comb-block partitions, each of size
$1=w/(2\ell)$, with the listed pairwise adjacencies.

[F1] Such one-per-partition selected blocks form a pure $(\ell,w/\ell^2)$-blockade ([[lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade]]).

## Verification

**Proof technique:** direct calculation.

1.1 The three listed complete pairs and three listed anticomplete pairs exhaust the six unordered pairs of four blocks. Thus every pair is pure. [given]

1.2 Each selected block has size $1=8/(2\cdot4)$, so the hypotheses of [F1] are met and it yields a pure $(4,8/4^2)$-blockade. [F1, algebra]

2.1 Since $8/4^2=1/2$, this is the asserted pure $(4,1/2)$-blockade. [step 1.2, algebra] ∎
