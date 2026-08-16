---
id: thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube
kind: theorem
title: "Under the Axiom of Choice, a space is Polish exactly when it is homeomorphic to a $G_\\delta$ subspace of the Hilbert cube"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hilbert-cube-universal-for-separable-metrizable-spaces, thm-polish-subspaces-are-exactly-g-delta-subspaces, lem-standard-complete-metric-on-a-countable-product, thm-tychonoff]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice, which supplies both the Dependent Choice carried by the Polish-subspace characterisation of [F2] and the Choice carried by the Tychonoff theorem of [F4]. A space is Polish if and only if it is homeomorphic to a $G_\delta$ subspace of the Hilbert cube $[0,1]^{\mathbb N}$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Every separable metrizable space is homeomorphic to a subspace of the Hilbert cube $[0,1]^{\mathbb N}$. ([[thm-hilbert-cube-universal-for-separable-metrizable-spaces]]).

[F2] Assume the Axiom of Countable Choice. A subspace of a Polish space is Polish if and only if it is a $G_\delta$ subset. ([[thm-polish-subspaces-are-exactly-g-delta-subspaces]]).

[F3] Let $((X_n,d_n))_{n\in\mathbb N}$ be complete metric spaces with $d_n\le1$. On $\prod_nX_n$, the formula $D(x,y)=\sum_{n=0}^{\infty}2^{-(n+1)}d_n(x_n,y_n)$ defines a complete metric inducing the product topology. The empty product is the one-point space. ([[lem-standard-complete-metric-on-a-countable-product]]).

[F4] **Assume the Axiom of Choice** (def-axiom-of-choice). Let $I$ be a set and let $(X_i, \mathcal{T}_i)_{i \in I}$ be a family of compact topological spaces (def-compact-space, def-topological-space). Then the product $$P \;:=\; \prod_{i \in I} X_i$$ with the product topology (def-product-topology) is compact. **The Axiom of Choice is spent twice, and both uses are flagged below.** Once inside thm-alexander-subbase-lemma, through Zorn's lemma (thm-zorn), and once directly at step 2.1, to produce a point of a product of nonempty sets. ([[thm-tychonoff]]).

## Proof

**Proof technique:** direct.

1.1 Embed a Polish space in the Hilbert cube by universality. [given, F1, F2, F4]

2.1 Since the Hilbert cube is complete for its standard product metric, Alexandrov makes the image $G_\delta$. [step 1.1, F3, F1, F4]

3.1 Conversely, a $G_\delta$ subspace of the compact metrizable Hilbert cube is completely metrizable and second countable, hence Polish. [step 2.1, F1, F2, F4]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
