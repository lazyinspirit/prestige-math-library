---
id: thm-six-colour-theorem-for-planar-graphs
kind: theorem
title: "Every planar graph has a proper vertex colouring with at most six colours"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-planar-graph-has-low-degree-vertex, def-proper-vertex-colouring-and-chromatic-number, def-graph-deletion-contraction-minor-and-subdivision, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Activity 306"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Statement

Every planar graph has a proper vertex colouring with at most six colours ([[def-proper-vertex-colouring-and-chromatic-number]]). Vertex deletion is from [[def-graph-deletion-contraction-minor-and-subdivision]], and the proof is finite induction [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A finite simple planar graph $G$.

[L1] Every nonnull simple planar graph has a vertex of degree at most five ([[cor-planar-graph-has-low-degree-vertex]]).

[F1] A proper $k$-vertex-colouring is a function $c:V\to k$ such that $c(u)\ne c(v)$ whenever $\{u,v\}\in E$ ([[def-proper-vertex-colouring-and-chromatic-number]]).



## Proof

**Proof technique:** induction.

1.1 The null graph has the empty proper colouring. [base, F1]

1.2 For a nonnull graph choose by [L1] a vertex $v$ of degree at most five. The planar graph $G-v$ has a proper six-colouring by the induction hypothesis. [ih, L1]

2.1 At most five colours appear on the neighbours of $v$, so one of the six colours is absent there. Give $v$ that colour. Edges not incident with $v$ remain proper, and every edge incident with $v$ has differently coloured endpoints by construction. [step 1.2, F1]

3.1 This extends the induction colouring at every nonnull stage, so every planar graph is six-colourable. [step 1.1, step 2.1, discharge-induction] ∎
