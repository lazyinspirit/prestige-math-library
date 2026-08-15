---
id: cex-edge-deletion-alone-cannot-prove-induced-removal
kind: counterexample
title: "Induced removal must permit adding edges as well as deleting them"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-induced-graph-removal-lemma, def-standard-complete-bipartite-path-and-cycle-graphs, def-induced-copy-number]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

For every $n\ge3$ there is an $n$-vertex graph with an induced empty three-vertex graph that cannot be destroyed by edge deletions, although adding one edge destroys that induced copy.

## Facts & Assumptions

**Given:** An integer $n\ge3$.

[L1] Induced removal permits changing adjacencies in both directions ([[thm-induced-graph-removal-lemma]]).

[L2] The empty graph on three vertices has no edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] Labelled induced copies are injective maps preserving edges and nonedges ([[def-induced-copy-number]]).

## Counterexample

**Proof technique:** direct.

1.1 Begin with $K_n$, choose a triple $S$, and delete exactly its three internal edges. By [L2] and [L3], $S$ induces the empty three-vertex graph. [given, L2, L3, choose]

2.1 It is the unique unlabelled empty triple: every triple other than $S$ contains a vertex outside $S$, and that vertex is adjacent to both other vertices. [step 1.1]

2.2 Deleting more edges never changes any of the three nonedges within $S$ into an edge, so the induced empty triple on $S$ survives every deletion-only operation. [step 1.1]

3.1 Adding any one of the three missing edges within $S$ destroys this copy, and step 2.1 shows the resulting graph has no empty triple. Thus allowing additions, as [L1] does, is indispensable. [step 2.1, step 2.2, L1] ∎
