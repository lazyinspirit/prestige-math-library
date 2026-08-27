---
id: def-quotient-blockade-by-mixed-block-reachability
kind: definition
title: "The quotient blockade obtained from mixed-block reachability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-mixed-block-reachability-relation-on-a-blockade, lem-mixed-block-reachability-is-an-equivalence-relation]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 6"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal L=(L_1,\dots,L_n)$ be a blockade, and let $\mathcal M$ be its
mixed-block reachability relation. The **quotient blockade**
$\mathcal L/\mathcal M$ is obtained by replacing each $\mathcal M$-equivalence
class of original blocks by its union.

Concretely, if $\mathcal C_1,\dots,\mathcal C_t$ are the $\mathcal M$-classes,
ordered by the least original index of a block they contain, then

$$\mathcal L/\mathcal M=(D_1,\dots,D_t),\qquad D_i:=\bigcup_{L\in\mathcal C_i}L.$$

Each $D_i$ is called a **quotient block**. Because the original blocks are
pairwise disjoint and each equivalence class is nonempty, the quotient blocks
are again pairwise disjoint and nonempty.
