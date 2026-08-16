---
id: ex-hilbert-cube-as-a-compact-polish-universal-space
kind: example
title: "Under the Axiom of Choice, the Hilbert cube is compact, Polish, and universal for separable metrizable spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-standard-complete-metric-on-a-countable-product, thm-hilbert-cube-universal-for-separable-metrizable-spaces, thm-tychonoff, def-polish-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. The Hilbert cube $[0,1]^{\mathbb N}$ is compact and Polish, and every separable metrizable space is homeomorphic to a subspace of it.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $((X_n,d_n))_{n\in\mathbb N}$ be complete metric spaces with $d_n\le1$. On $\prod_nX_n$, the formula $D(x,y)=\sum_{n=0}^{\infty}2^{-(n+1)}d_n(x_n,y_n)$ defines a complete metric inducing the product topology. The empty product is the one-point space. ([[lem-standard-complete-metric-on-a-countable-product]]).

[F2] Every separable metrizable space is homeomorphic to a subspace of the Hilbert cube $[0,1]^{\mathbb N}$. ([[thm-hilbert-cube-universal-for-separable-metrizable-spaces]]).

[F3] **Assume the Axiom of Choice** (def-axiom-of-choice). Let $I$ be a set and let $(X_i, \mathcal{T}_i)_{i \in I}$ be a family of compact topological spaces (def-compact-space, def-topological-space). Then the product $$P \;:=\; \prod_{i \in I} X_i$$ with the product topology (def-product-topology) is compact. **The Axiom of Choice is spent twice, and both uses are flagged below.** Once inside thm-alexander-subbase-lemma, through Zorn's lemma (thm-zorn), and once directly at step 2.1, to produce a point of a product of nonempty sets. ([[thm-tychonoff]]).

[F4] A topological space is **Polish** when it is separable (def-separable-space) and completely metrizable: its topology is induced by some complete metric (lem-complete-remetrisation). No particular compatible complete metric or countable dense subset is part of the structure. ([[def-polish-space]]).

## Verification

**Proof technique:** direct.

1.1 Give $[0,1]^{\mathbb N}$ the standard weighted complete product metric. [given, F1, F4, F3, F2]

2.1 Compactness follows from Tychonoff and second countability from the countable finite-coordinate basis; a countable rational grid is dense. [step 1.1, F4, F1, F3]

3.1 Apply the embedding theorem for universality without citing an examples-page item. [step 2.1, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
