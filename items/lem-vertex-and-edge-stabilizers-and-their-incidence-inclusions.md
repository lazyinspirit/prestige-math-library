---
id: lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions
kind: lemma
title: "Vertex and edge stabilizers determine the quotient incidences"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-graph-of-an-action-without-inversions, def-subgroup]
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
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
---

## Statement

Let a group $G$ act without inversions on an oriented graph $X$, and let $e$ be
an oriented edge with origin $v$ and terminus $w$. Then the edge stabilizer

$$G_e:=\{g\in G:g\cdot e=e\}$$

is a subgroup of both vertex stabilizers $G_v$ and $G_w$. Moreover, replacing
$e,v,w$ by another representative of the same quotient edge conjugates all three
stabilizers by the same element of $G$, so the inclusions

$$G_e\hookrightarrow G_v,\qquad G_e\hookrightarrow G_w$$

are the representative-independent incidence maps attached to the quotient edge.

## Facts & Assumptions

**Given:** An action without inversions on an oriented graph and an oriented edge $e$ from $v$ to $w$.

[L1] The quotient graph records vertex and edge orbits, with origin and terminus descending from representatives. ([[def-quotient-graph-of-an-action-without-inversions]])

[L2] A subgroup is a subset closed under products and inverses. ([[def-subgroup]])

## Proof

**Proof technique:** direct.

1.1 If $g\in G_e$, then $g\cdot e=e$, so applying origin and terminus to this equality gives $g\cdot v=v$ and $g\cdot w=w$. Thus $G_e\subseteq G_v\cap G_w$. Since each stabilizer is an intersection of solution sets to $g\cdot x=x$, it is closed under products and inverses, hence is a subgroup by [L2]. [L1, L2, given]

2.1 If $e'=h\cdot e$, then $G_{e'}=hG_eh^{-1}$ and similarly $G_{h\cdot v}=hG_vh^{-1}$ and $G_{h\cdot w}=hG_wh^{-1}$. Therefore passing to another representative of the quotient edge conjugates the two inclusion maps by the same $h$, so the quotient incidence data from [L1] is well defined up to that canonical conjugacy. [L1, step 1.1, algebra] ∎
