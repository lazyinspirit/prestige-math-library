---
id: thm-pure-blockades-with-perfect-patterns-contain-large-homogeneous-subblockades
kind: theorem
title: "A pure blockade with a perfect pattern has a large complete or anticomplete subblockade"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pattern-graph-of-a-pure-blockade,
       def-perfect-graph,
       cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order,
       def-complete-anticomplete-pure-and-x-sparse-blockades,
       def-blockade-length-and-width]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Theorem 1.3"
      url: "https://arxiv.org/pdf/1606.08827"
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Section 5"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $\mathcal B=(B_1,\dots,B_t)$ be a pure blockade whose pattern graph is
perfect. Then $\mathcal B$ has a complete or anticomplete subblockade of length
at least $\sqrt t$ and of width at least the width of $\mathcal B$.

## Facts & Assumptions

**Given:** A pure blockade $\mathcal B=(B_1,\dots,B_t)$ with perfect pattern
graph $P(\mathcal B)$.

[L1] In the pattern graph, two indices are adjacent exactly when the
corresponding two blocks are complete to one another
([[def-pattern-graph-of-a-pure-blockade]]).

[L2] Every perfect graph on $t$ vertices has a clique or stable set of size at
least $\sqrt t$
([[cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order]]).

[L3] A complete subblockade is one whose block pairs are all complete, and an
anticomplete subblockade is defined similarly
([[def-complete-anticomplete-pure-and-x-sparse-blockades]]).

[L4] The width of a blockade is the minimum size of one of its blocks, so
discarding blocks cannot decrease the width bound inherited from the remaining
blocks ([[def-blockade-length-and-width]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L2] to the perfect pattern graph $P(\mathcal B)$, choose a set $I\subseteq [t]$ with $|I|\geq \sqrt t$ that is either a clique or a stable set in $P(\mathcal B)$. [L2, given, choose]

2.1 If $I$ is a clique, then [L1] says that every two blocks indexed by $I$ are complete to one another, so $(B_i:i\in I)$ is a complete subblockade in the sense of [L3]. If $I$ is a stable set, then no two indices in $I$ are adjacent in the pattern graph, so every two corresponding blocks are anticomplete and $(B_i:i\in I)$ is an anticomplete subblockade. In either case the width is at least that of $\mathcal B$ by [L4]. [step 1.1, L1, L3, L4]

3.1 Therefore $\mathcal B$ has a complete or anticomplete subblockade of length at least $\sqrt t$ and width at least the original width. [step 2.1] ∎
