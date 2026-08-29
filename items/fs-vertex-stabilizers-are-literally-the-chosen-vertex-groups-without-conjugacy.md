---
id: fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy
kind: false-statement
title: "FALSE: vertex stabilizers are literally the chosen vertex groups without conjugacy ambiguity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fundamental-group-acts-on-its-bass-serre-tree, thm-one-segment-graph-of-groups-is-an-amalgamated-free-product, thm-normal-form-for-free-products-with-amalgamation]
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

In the Bass-Serre action, every vertex stabilizer is literally equal to one of
the chosen vertex groups, with no conjugacy ambiguity.

## Facts & Assumptions

**Given:** The Bass-Serre action of a graph-of-groups fundamental group.

[L1] The stabilizer of a vertex coset $\gamma G_v$ is $\gamma G_v\gamma^{-1}$. ([[thm-fundamental-group-acts-on-its-bass-serre-tree]])

[L2] A one-segment graph of groups has the corresponding amalgamated free product as its fundamental group. ([[thm-one-segment-graph-of-groups-is-an-amalgamated-free-product]])

[L3] A positive-length normal word in a free product is nonidentity. ([[thm-normal-form-for-free-products-with-amalgamation]])

## Refutation

**Proof technique:** direct.

1.1 Consider the one-segment graph of groups with vertex groups $C_2$ and $C_3$ and trivial edge group. Its fundamental group is $C_2\ast C_3$ by [L2]. Let $a$ and $b$ be nonidentity elements of the two factors. By [L1], the vertex coset $bC_2$ has stabilizer $bC_2b^{-1}$. [L1, L2, given]

2.1 If $bab^{-1}$ lay in $C_2$, say $bab^{-1}=c$, then $bab^{-1}c^{-1}$ would be a reduced positive-length free-product word representing the identity, contrary to [L3]. Hence $bC_2b^{-1}\ne C_2$: this vertex stabilizer is a conjugate of, but not literally equal to, the chosen vertex group. [L1, L3, step 1.1, algebra] ∎
