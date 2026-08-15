---
id: thm-alexandrov-complete-metrizability-characterisation
kind: theorem
title: "Alexandrov's theorem: a subspace of a complete metric space is completely metrizable exactly when it is $G_\\delta$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable, thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta]
justified_by: []
aliases: []
landmark: true
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

Assume Dependent Choice. For a subspace $Y$ of a complete metric space $X$, $Y$ is completely metrizable if and only if $Y$ is a $G_\delta$ subset of $X$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] If $(X,d)$ is a complete metric space and $Y\subseteq X$ is $G_\delta$ in $X$, then the subspace $Y$ is completely metrizable. ([[thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable]]).

[F2] Assume Dependent Choice. If $Y$ is a completely metrizable subspace of a metric space $X$, then $Y$ is a $G_\delta$ subset of $X$. ([[thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta]]).

## Proof

**Proof technique:** direct.

1.1 The empty subspace satisfies both conditions. [given, F1, F2]

2.1 For a nonempty subspace apply the two preceding implications with the induced topology. [step 1.1, F1, F2]

3.1 In the reverse direction use the given complete ambient metric; in the forward direction use only the existence of a compatible complete metric on the subspace, not completeness of the inherited metric. [step 2.1, F1, F2]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎

