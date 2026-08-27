---
id: lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades
kind: lemma
title: "Pure blockades with $P_4$-free patterns contain complete or anticomplete subblockades of square-root length"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pattern-graph-of-a-pure-blockade, lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets]
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
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, §5"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $\mathcal{B}=(B_1,\dots,B_t)$ be a pure blockade whose pattern graph is
$P_4$-free. Then $\mathcal{B}$ has a complete or anticomplete subblockade of
length at least $\sqrt t$ and of width at least the width of $\mathcal{B}$.

## Facts & Assumptions

**Given:** A pure blockade $\mathcal{B}=(B_1,\dots,B_t)$ with $P_4$-free pattern
graph $P(\mathcal{B})$.

## Proof

**Proof technique:** direct.

1.1 By [[lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets]], the pattern graph $P(\mathcal{B})$ has a clique or stable set $I\subseteq[t]$ with $|I|\geq\sqrt t$. [given]

2.1 If $I$ is a clique, then by the definition of the pattern graph every pair of blocks indexed by $I$ is complete, so $(B_i:i\in I)$ is a complete subblockade. If $I$ is a stable set, the same definition makes $(B_i:i\in I)$ anticomplete. In either case the width does not decrease when blocks are discarded. [step 1.1, given]

3.1 Therefore $\mathcal{B}$ contains a complete or anticomplete subblockade of length at least $\sqrt t$ and of at least the original width. [step 2.1] ∎
