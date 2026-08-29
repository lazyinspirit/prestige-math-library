---
id: lem-boundary-monomorphisms-from-stabilizers-are-well-defined
kind: lemma
title: "The boundary monomorphisms from stabilizers are well-defined"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-graph-of-groups-from-a-tree-action, lem-stabilizers-in-one-orbit-are-conjugate]
justified_by: []
aliases: []
landmark: false
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
pipeline_run: null
---

## Statement

In the quotient graph of groups attached to a tree action, changing the chosen
lifts of a quotient edge and its endpoints conjugates the two boundary
monomorphisms by the corresponding vertex-group identifications. Hence the
construction is well defined up to canonical conjugacy.

## Facts & Assumptions

**Given:** A group action without inversions on a tree and a chosen quotient edge $e$.

[L1] The quotient graph-of-groups construction uses stabilizers of chosen lifts, with the terminus map defined by a connecting element $g_e$. ([[def-quotient-graph-of-groups-from-a-tree-action]])

[L2] Stabilizers of points in the same orbit are conjugate. ([[lem-stabilizers-in-one-orbit-are-conjugate]])

## Proof

**Proof technique:** direct.

1.1 If the chosen lift $\widetilde e$ is replaced by $h\widetilde e$, then the edge stabilizer changes from $\operatorname{Stab}(\widetilde e)$ to $h\operatorname{Stab}(\widetilde e)h^{-1}$ by [L2], and the same conjugation change occurs for the endpoint stabilizers of $o(\widetilde e)$ and $t(\widetilde e)$. [L1, L2, given]

2.1 The new connecting element can be taken as $hg_ek^{-1}$ when the terminal lift is changed by $k$. Therefore the new terminus map sends $hxh^{-1}$ to $k(g_e^{-1}xg_e)k^{-1}$. This is exactly the old boundary monomorphism conjugated by the vertex-group identifications from step 1.1. [L1, step 1.1, algebra]

3.1 Hence the boundary monomorphisms are independent of representative choices up to canonical conjugacy. [step 2.1] ∎
