---
id: cor-the-bull-graph-has-the-erdos-hajnal-property
kind: corollary
title: "The bull graph has the Erdős-Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bull-graph, def-erdos-hajnal-property-and-constant, thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property, cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence, thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Nguyen, Scott and Seymour, Induced subgraph density IV, Theorem 7.8"
      url: "https://arxiv.org/pdf/2307.06455"
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

The bull graph has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The bull $B$ on $\{x_1,x_2,x_3,y,z\}$ with edges $x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z$ ([[def-bull-graph]]).

[L1] Every graph on at most four vertices has the Erdős-Hajnal property ([[thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property]]).

[L2] For a single graph, the Erdős-Hajnal property is equivalent to virality of its singleton family ([[cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

[L3] A viral leaf-deleted singleton and a viral co-leaf-deleted singleton make the original singleton viral ([[thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family]]).

## Proof

**Proof technique:** direct.

1.1 The vertex $y$ is a leaf of $B$, with sole neighbor $x_1$. The vertex $x_1$ has degree $3=|B|-2$, so it is a co-leaf. Deleting $y$ leaves a triangle $x_1x_2x_3$ with pendant vertex $z$ at $x_2$; deleting $x_1$ leaves the path $x_3-x_2-z$ and isolated vertex $y$. Both resulting graphs have four vertices. [given, algebra]

2.1 By [L1] the two deleted graphs have the Erdős-Hajnal property, so [L2] makes their singleton families viral. Applying [L3] to $\{B\}$ with leaf $y$ and co-leaf $x_1$ proves that $\{B\}$ is viral. A second application of [L2] proves the statement. [step 1.1, L1, L2, L3] ∎
