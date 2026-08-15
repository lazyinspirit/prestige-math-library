---
id: cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property
kind: corollary
title: "Every graph on at most three vertices has the Erdős–Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-erdos-hajnal-property-and-constant, def-h-free-and-family-free-graph, thm-complete-graph-free-classes-are-erdos-hajnal, thm-p3-free-graphs-have-square-root-homogeneous-sets, prop-erdos-hajnal-property-is-complement-invariant, lem-forbidden-induced-subgraph-classes-are-hereditary, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
pipeline_run: null
---

## Statement

Every finite graph $H$ with $|V(H)|\le3$ has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** A finite graph $H$ with at most three vertices.

[L1] A graph $H$ has the Erdős–Hajnal property when its hereditary $H$-free class has a positive exponent ([[def-erdos-hajnal-property-and-constant]], [[def-h-free-and-family-free-graph]], [[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L2] For every $t\ge1$, the class of $K_t$-free graphs has the Erdős–Hajnal property ([[thm-complete-graph-free-classes-are-erdos-hajnal]]).

[L3] Every $P_3$-free graph $G$ satisfies $\operatorname{hom}(G)\ge\sqrt{|V(G)|}$, so $P_3$ has the property ([[thm-p3-free-graphs-have-square-root-homogeneous-sets]]).

[L4] A graph and its complement have exactly the same Erdős–Hajnal constants ([[prop-erdos-hajnal-property-is-complement-invariant]]).

[L5] The graphs $K_t$ and $P_3$ have the standard edge sets, and $P_0$ is the null graph ([[def-standard-complete-bipartite-path-and-cycle-graphs]]); complementation replaces the edge set by all missing pairs ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** cases.

1.1 [assume-case null] If $|V(H)|=0$, every graph contains the unique empty induced embedding of $H$, so the $H$-free class has no members and [L1] is vacuously satisfied by every positive exponent. [L1]

1.2 [assume-case nonnull] Suppose $1\le|V(H)|\le3$. Up to isomorphism and complementation, $H$ is one of $K_1,K_2,K_3$, or $P_3$: this follows by the edge count for orders at most two, and for order three by separating the cases of zero, one, two, or three edges. [L5, algebra]

2.1 Each complete case has the property by [L2], the path case has it by [L3], and every complementary case has it by [L4]. [step 1.2, L2, L3, L4]

3.1 The cases are exhaustive, so every graph on at most three vertices has the Erdős–Hajnal property. [step 1.1, step 2.1, cases-exhaustive] ∎
