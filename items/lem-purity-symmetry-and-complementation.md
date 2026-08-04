---
id: lem-purity-symmetry-and-complementation
kind: lemma
title: "Purity is symmetric; complementation swaps complete and anticomplete pairs and preserves mixed pairs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-edges-between-sets-and-pure-mixed-pairs, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
    - title: "ISGCI, Self-complementary classes"
      url: "https://www.graphclasses.org/classes/self_complementary.html"
pipeline_run: null
---

## Statement

For disjoint vertex sets $A,B$ in a graph $G$:

1. $(A,B)$ is complete, anticomplete, pure or mixed exactly when $(B,A)$ has the same property;
2. complementation swaps complete pairs with anticomplete pairs; and
3. complementation preserves pure pairs and mixed pairs.

## Facts & Assumptions

**Given:** A graph $G$ and disjoint sets $A,B\subseteq V(G)$.

[F1] Complete, anticomplete, pure and mixed pairs are defined by the cross-pair adjacency pattern ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[F2] Graph adjacency is symmetric, and complementation exchanges adjacency with nonadjacency between distinct vertices ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 Since $ab$ and $ba$ describe the same edge, reversing the ordered pair of sets changes none of the four properties. [F1, F2]

1.2 Every cross pair is an edge of $G$ exactly when no cross pair is an edge of $\overline G$; likewise, no cross pair is an edge of $G$ exactly when every cross pair is an edge of $\overline G$. [F2]

2.1 Hence complementation swaps complete and anticomplete pairs. It therefore preserves their union, the pure pairs, and its complement, the mixed pairs. [step 1.2, F1]

3.1 Together with symmetry from step 1.1, this proves all assertions. [step 1.1, step 2.1] ∎
