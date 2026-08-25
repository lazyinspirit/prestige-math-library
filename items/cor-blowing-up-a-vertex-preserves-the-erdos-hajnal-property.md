---
id: cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property
kind: corollary
title: "Substituting a complete or an edgeless graph for a vertex preserves the Erdős–Hajnal property"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-substitution-preserves-the-erdos-hajnal-property, thm-complete-graph-free-classes-are-erdos-hajnal, prop-erdos-hajnal-property-is-complement-invariant, cor-h-free-complement-dictionary, def-complement-of-a-graph-class, def-standard-complete-bipartite-path-and-cycle-graphs, def-substitution-of-a-graph-for-a-vertex, lem-forbidden-induced-subgraph-classes-are-hereditary, def-erdos-hajnal-property-and-constant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement

Let $H$ be a graph with the Erdős–Hajnal property and let $v\in V(H)$. If $t\ge1$,
then the graph obtained by substituting $K_t$ or $\overline{K_t}$ for $v$ also
has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** A graph $H$ with the Erdős–Hajnal property, a vertex $v\in V(H)$, and an integer $t\ge1$.

[L1] For every $t\ge1$, the class of $K_t$-free graphs has the Erdős–Hajnal property ([[thm-complete-graph-free-classes-are-erdos-hajnal]]).

[L2] A graph is $\overline{K_t}$-free exactly when its complement is $K_t$-free, and the Erdős–Hajnal property is preserved by taking complements of graph classes ([[cor-h-free-complement-dictionary]], [[def-complement-of-a-graph-class]], [[prop-erdos-hajnal-property-is-complement-invariant]]).

[L3] If two graphs have the Erdős–Hajnal property, then substituting one for a vertex of the other preserves that property ([[thm-substitution-preserves-the-erdos-hajnal-property]], [[def-substitution-of-a-graph-for-a-vertex]]).

## Proof

**Proof technique:** direct.

1.1 The complete graph $K_t$ has the Erdős–Hajnal property, since every $K_t$-free class does by [L1]. [L1]

2.1 The edgeless graph $\overline{K_t}$ has the Erdős–Hajnal property: by [L2] the class of $\overline{K_t}$-free graphs is the complementary class of the $K_t$-free graphs, so it has the same property. [step 1.1, L2]

3.1 Applying [L3] to $H$ and $K_t$ shows that substituting $K_t$ for $v$ preserves the Erdős–Hajnal property, and applying [L3] to $H$ and $\overline{K_t}$ shows the same for the edgeless graph. [step 1.1, step 2.1, L3] ∎
