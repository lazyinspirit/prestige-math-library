---
id: lem-finite-refining-small-diameter-covers-of-compact-metric-spaces
kind: lemma
title: "Compact metric spaces admit finite refining covers of arbitrarily small diameter"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-metric-compactness, lem-closed-subset-of-a-compact-space-is-compact, def-metric-bounded-diameter]
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

If $K$ is a nonempty compact metric space, there is a finite rooted levelled tree $T=\bigcup_{n\in\mathbb N}T_n$ and nonempty compact sets $(K_s)_{s\in T}$ such that $T_0$ has one root $r$ with $K_r=K$, every node has a finite nonempty set of children whose sets cover its set, every child set is contained in its parent set, and $\operatorname{diam}(K_s)\le2^{-n}$ for $s\in T_n$ after a harmless rescaling of the metric.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $(X,d)$ be a metric space (def-metric-space), with open sets as in def-metric-topology and balls as in def-metric-ball. ([[def-metric-compactness]]).

[F2] Let $(X,d)$ be a compact metric space (def-metric-compactness, def-metric-space) and let $F \subseteq X$ be closed in $X$ (def-metric-topology). Then $F$ is a compact subset of $X$: the metric subspace $(F, d_F)$ is a compact metric space (def-isometry-and-metric-embedding). No choice principle is used. ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[F3] Let $(X,d)$ be a metric space (def-metric-space) and let $A, B \subseteq X$. ([[def-metric-bounded-diameter]]).

## Proof

**Proof technique:** direct.

1.1 At stage zero use the whole nonempty compact space. [given, F2, F1, F3]

2.1 Cover each compact piece by finitely many sufficiently small nonempty closed subsets obtained from a finite ball cover. [step 1.1, F2, F1]

3.1 Index these sets by a finite rooted levelled tree, with every parent equal to the union of its finitely many children, and arrange diameters tending to zero with the level. [step 2.1, F1]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎

