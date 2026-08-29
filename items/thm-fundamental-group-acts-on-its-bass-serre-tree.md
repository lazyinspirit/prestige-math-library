---
id: thm-fundamental-group-acts-on-its-bass-serre-tree
kind: theorem
title: "The fundamental group acts without inversions on its Bass-Serre tree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group, def-bass-serre-tree-of-a-graph-of-groups, lem-the-bass-serre-coset-graph-is-a-tree, lem-stabilizers-in-one-orbit-are-conjugate]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
pipeline_run: null
---

## Statement

Let $\Gamma=\pi_1(\mathcal G,T)$ and let $\widetilde X$ be its Bass-Serre tree.
Then:

1. $\Gamma$ acts on $\widetilde X$ by left multiplication on cosets.
2. The action is without inversions.
3. The quotient graph is the original underlying graph $X$.
4. The stabilizer of a vertex coset $\gamma G_v$ is $\gamma G_v\gamma^{-1}$,
   and the stabilizer of an edge coset $\gamma G_e$ is $\gamma G_e\gamma^{-1}$.

## Facts & Assumptions

**Given:** A graph of groups $\mathcal G$, a maximal subtree $T$, and $\Gamma=\pi_1(\mathcal G,T)$.

[L1] The Bass-Serre graph has vertices and edges given by left cosets, with the stated origin and terminus maps. ([[def-bass-serre-tree-of-a-graph-of-groups]])

[L2] That coset graph is a tree. ([[lem-the-bass-serre-coset-graph-is-a-tree]])

[L3] Points in the same orbit have conjugate stabilizers. ([[lem-stabilizers-in-one-orbit-are-conjugate]])

## Proof

**Proof technique:** direct.

1.1 Left multiplication $\gamma'\cdot(\gamma G_v)=(\gamma'\gamma)G_v$ and $\gamma'\cdot(\gamma G_e)=(\gamma'\gamma)G_e$ is well defined on the cosets of [L1], and the formulas for origin and terminus in [L1] are preserved by that multiplication. So $\Gamma$ acts by graph automorphisms on $\widetilde X$. [L1, given]

2.1 The orbit of the base vertex coset $G_v$ is the set of all cosets $\gamma G_v$, so the quotient vertices are identified with the original vertices $v$; the same holds for edges. Hence the quotient graph is exactly $X$. An inversion would send some oriented edge coset to its reverse, which would force the two opposite orientations of one edge of $X$ into the same orbit; that does not happen in the quotient description. [L1, step 1.1]

2.2 The stabilizer of the base vertex coset $G_v$ is $G_v$ itself, and similarly for $G_e$. Therefore [L3] gives $\operatorname{Stab}(\gamma G_v)=\gamma G_v\gamma^{-1}$ and $\operatorname{Stab}(\gamma G_e)=\gamma G_e\gamma^{-1}$ for arbitrary cosets in the same orbits. [L3, step 1.1]

3.1 Combining steps 1.1, 2.1, and 2.2 with [L2] proves all four claims. [L2, step 1.1, step 2.1, step 2.2] ∎
