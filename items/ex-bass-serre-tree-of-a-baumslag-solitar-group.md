---
id: ex-bass-serre-tree-of-a-baumslag-solitar-group
kind: example
title: "The Bass-Serre tree of a Baumslag-Solitar group"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-bass-serre-tree-of-a-graph-of-groups, thm-one-loop-graph-of-groups-is-an-hnn-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
pipeline_run: null
---

## Example

For nonzero integers $m,n$, the Baumslag-Solitar group

$$BS(m,n)=\langle a,t\mid ta^m t^{-1}=a^n\rangle$$

is the fundamental group of a one-loop graph of groups with vertex group
$\mathbb Z$ and edge group $\mathbb Z$, where the two boundary maps are
$k\mapsto mk$ and $k\mapsto nk$.

## Facts & Assumptions

**Given:** Nonzero integers $m,n$ and the one-loop graph-of-groups description of HNN extensions.

[L1] A one-loop graph of groups yields the corresponding HNN extension. ([[thm-one-loop-graph-of-groups-is-an-hnn-extension]])

[L2] The Bass-Serre tree uses cosets of the vertex and edge groups. ([[def-bass-serre-tree-of-a-graph-of-groups]])

## Verification

**Proof technique:** direct.

1.1 Because $m,n\ne0$, the maps $\mathbb Z\to\mathbb Z$, $k\mapsto mk$ and $k\mapsto nk$, are injective. Applying [L1] to these two monomorphisms gives exactly the presentation of $BS(m,n)$. [L1, given, algebra]

2.1 Therefore [L2] describes its Bass-Serre tree: vertices are left cosets of the vertex copy of $\mathbb Z$, edges are left cosets of the edge copy of $\mathbb Z$, and the stable letter translates between adjacent levels of this tree. [L2, step 1.1] ∎
