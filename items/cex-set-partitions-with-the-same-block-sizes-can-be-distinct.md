---
id: cex-set-partitions-with-the-same-block-sizes-can-be-distinct
kind: counterexample
title: "Two set partitions can have the same block-size multiset and still be different"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-set-partition-and-block]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.6"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a set partition is determined by the multiset of its block
sizes.

## Facts & Assumptions

**Given:** The partitions
$\mathcal{P}=\{\{1,2\},\{3,4\}\}$ and
$\mathcal{Q}=\{\{1,3\},\{2,4\}\}$ of $[4]$.

## Proof

**Proof technique:** direct.

1.1 Both $\mathcal{P}$ and $\mathcal{Q}$ are set partitions of $[4]$, and both have block-size multiset $\{2,2\}$. [given]

2.1 But $\{1,2\}$ is a block of $\mathcal{P}$ and not of $\mathcal{Q}$, so $\mathcal{P}\neq\mathcal{Q}$. Thus the same block sizes do not determine the partition. [step 1.1]

3.1 Therefore the claim is false. [step 2.1] ∎
