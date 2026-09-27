---
id: ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case
kind: example
title: "The leaf/co-leaf corollary recovers the $P_5$ case from the $P_4$ case"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property, cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property, prop-erdos-hajnal-property-passes-to-hereditary-subclasses, lem-forbidden-induced-subgraph-classes-are-hereditary, def-standard-complete-bipartite-path-and-cycle-graphs, def-coleaf-of-a-graph, def-graph-isomorphism-and-complement]
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

## Example

Graphs with no induced $P_5$ and no induced $\overline{P_5}$ have the
Erdős-Hajnal property, and this follows from the $P_4$ case via the
leaf/co-leaf corollary.

## Facts & Assumptions

**Given:** The family $\mathcal F:=\{P_5,\overline{P_5}\}$.

[L1] If deleting a leaf from one member of a finite forbidden family and a co-leaf from another member produces two smaller families with the Erdős-Hajnal property, then the original family has the Erdős-Hajnal property ([[cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property]]).

[L2] The Erdős-Hajnal property passes from a hereditary class to each hereditary subclass ([[prop-erdos-hajnal-property-passes-to-hereditary-subclasses]]).

[L3] For every forest $H$, graphs with no induced $H$ and no induced $\overline H$ have the Erdős-Hajnal property ([[cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property]]).

[L4] A co-leaf of a graph is a vertex that is a leaf of the complement, equivalently a vertex of degree $|V(G)|-2$ ([[def-coleaf-of-a-graph]]).

[L5] The complement contains exactly the nonedges of the original graph ([[def-graph-isomorphism-and-complement]]).

[L6] Every class defined by forbidden induced subgraphs is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

## Verification

**Proof technique:** direct.

1.1 The graph $P_5$ has leaf $1$. By [L5], the complement $\overline{P_5}$ has edges $13$, $14$, $15$, $24$, $25$, and $35$, so vertex $1$ has degree $3=5-2$. By [L4], vertex $1$ is therefore a co-leaf of $\overline{P_5}$. Delete that leaf of $P_5$ and that co-leaf of $\overline{P_5}$. The resulting smaller families are $$\mathcal F_1=\{P_4,\overline{P_5}\}\qquad\text{and}\qquad \mathcal F_2=\{P_5,\overline{P_4}\}.$$ From the path edges $12$, $23$, and $34$, [L5] gives complement edges $13$, $14$, and $24$, which form the path $3$-$1$-$4$-$2$. Thus $\overline{P_4}\cong P_4$. [given, L4, L5, algebra]

2.1 The path $P_4$ is a forest, and step 1.1 shows that $\overline{P_4}\cong P_4$. Therefore [L3] applied with $H=P_4$ gives the Erdős-Hajnal property for the hereditary class of $P_4$-free graphs. By [L6], the classes defined by forbidding $\{P_4,\overline{P_5}\}$ and $\{P_5,\overline{P_4}\}$ are hereditary. Each is a subclass of the $P_4$-free class, using step 1.1 for the second family. Hence [L2] gives the Erdős-Hajnal property for both $\mathcal F_1$ and $\mathcal F_2$. [step 1.1, L2, L3, L6]

3.1 Applying [L1] to the family $\mathcal F=\{P_5,\overline{P_5}\}$ and the two smaller families from steps 1.1 and 2.1 yields the Erdős-Hajnal property for graphs with no induced $P_5$ and no induced $\overline{P_5}$. [step 1.1, step 2.1, L1] ∎
