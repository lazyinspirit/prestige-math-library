---
id: thm-baire-sequence-space-is-polish
kind: theorem
title: "Under the Axiom of Countable Choice, Baire sequence space is Polish, and its standard ultrametric is complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-baire-sequence-space, def-polish-space, def-complete-metric-space, thm-countable-union-of-countable]
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
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

On $\mathbb N^{\mathbb N}$ define $d(x,y)=0$ for $x=y$ and $d(x,y)=2^{-k}$ when $k$ is the least index with $x_k\ne y_k$. Then $d$ is a complete ultrametric inducing the cylinder topology. Assuming the Axiom of Countable Choice, Baire sequence space is separable and hence Polish.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] The **Baire sequence space** is $\mathcal N:=\mathbb N^{\mathbb N}$, the set of functions from $\mathbb N$ to itself (def-the-set-of-functions-from-one-set-to-another), with the product topology obtained by giving each copy of $\mathbb N$ the discrete topology (def-product-topology, def-standard-topologies). For a finite sequence $s=(s_0,\ldots,s_{k-1})$, its cylinder is $N_s:=\{x\in\mathcal N:x_i=s_i\text{ for }i<k\}$. The empty sequence has cylinder $\mathcal N$, and these cylinders form a basis. ([[def-baire-sequence-space]]).

[F2] A topological space is **Polish** when it is separable (def-separable-space) and completely metrizable: its topology is induced by some complete metric (lem-complete-remetrisation). No particular compatible complete metric or countable dense subset is part of the structure. ([[def-polish-space]]).

[F3] Let $(X,d)$ be a metric space (def-metric-space). $(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$ converges to a point of $X$; a subset $A\subseteq X$ is called complete when the metric subspace $(A,d_A)$ is complete. ([[def-complete-metric-space]]).

[F4] **Assume the Axiom of Countable Choice**. Let $(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets indexed by $\mathbb{N}$. Then $$U = \bigcup_{n \in \mathbb{N}} A_n$$ is at most countable ([[thm-countable-union-of-countable]]).

## Proof

**Proof technique:** direct.

1.1 Give two unequal sequences distance $2^{-k}$ where $k$ is their first differing index. [given, F1, F3]

2.1 Verify the ultrametric and cylinder topology. [step 1.1, F1, F2]

3.1 A Cauchy sequence eventually stabilises in every coordinate, producing a limit; eventually constant sequences form a countable dense set. [step 2.1, F4, F1, F2]

4.1 Check the zero-index convention at the first coordinate. [step 3.1, F4]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
