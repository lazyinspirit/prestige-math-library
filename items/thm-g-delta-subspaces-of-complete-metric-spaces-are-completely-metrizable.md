---
id: thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable
kind: theorem
title: "Every $G_\\delta$ subspace of a complete metric space is completely metrizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-g-delta-and-f-sigma-in-a-topological-space, lem-open-subspace-complete-remetrisation, lem-countable-intersection-of-completely-metrizable-subspaces]
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

If $(X,d)$ is a complete metric space and $Y\subseteq X$ is $G_\delta$ in $X$, then the subspace $Y$ is completely metrizable.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $A \subseteq X$. ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F2] If $X$ is completely metrizable and $U\subseteq X$ is open, then $U$ is completely metrizable in its subspace topology. ([[lem-open-subspace-complete-remetrisation]]).

[F3] Assume the Axiom of Countable Choice. If $(X,d)$ is metrizable and $(Y_n)_{n\in\mathbb N}$ is a sequence of completely metrizable subspaces of $X$, then $\bigcap_nY_n$ is completely metrizable. ([[lem-countable-intersection-of-completely-metrizable-subspaces]]).

## Proof

**Proof technique:** direct.

1.1 The empty subspace has its unique compatible complete metric. [given, F2, F1]

2.1 Otherwise write the subspace as a countable intersection of open subspaces. [step 1.1, F3, F2]

3.1 Each open subspace is completely metrizable by the reciprocal-distance lemma, and the countable-intersection metric then gives a compatible complete metric on the intersection. [step 2.1, F3, F2]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎

