---
id: cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group
kind: corollary
title: "Vertex groups embed in the fundamental group of a graph of groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-normal-form-for-fundamental-groups-of-graphs-of-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Statement

For every vertex $v$ of a graph of groups $\mathcal G$, the canonical map
$G_v\to \pi_1(\mathcal G,T)$ is injective.

## Facts & Assumptions

**Given:** A graph of groups $\mathcal G$, a maximal subtree $T$, and a vertex $v$.

[L1] Every element of the graph-of-groups fundamental group has a reduced normal form, and a reduced word of positive edge length is nonidentity. ([[thm-normal-form-for-fundamental-groups-of-graphs-of-groups]])

## Proof

**Proof technique:** direct.

1.1 A nonidentity element of $G_v$ is already a reduced graph-of-groups word of edge length $0$. The edge-length-$0$ clause of [L1] says that such a reduced word represents the identity only when its unique coefficient is the identity of $G_v$. [L1, given]

2.1 Therefore no nonidentity element of $G_v$ maps to the identity in $\pi_1(\mathcal G,T)$. So the canonical map $G_v\to\pi_1(\mathcal G,T)$ is injective. [step 1.1, algebra] ∎
