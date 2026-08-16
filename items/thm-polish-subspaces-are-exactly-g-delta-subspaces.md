---
id: thm-polish-subspaces-are-exactly-g-delta-subspaces
kind: theorem
title: "Under Dependent Choice, a subspace of a Polish space is Polish exactly when it is $G_\\delta$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polish-space, thm-alexandrov-complete-metrizability-characterisation, prop-second-countability-is-hereditary, thm-second-countable-implies-separable, prop-polish-space-countability-conventions-agree]
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

Assume Dependent Choice, which yields the instances of Countable Choice used below. A subspace of a Polish space is Polish if and only if it is a $G_\delta$ subset.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A topological space is **Polish** when it is separable (def-separable-space) and completely metrizable: its topology is induced by some complete metric (lem-complete-remetrisation). No particular compatible complete metric or countable dense subset is part of the structure. ([[def-polish-space]]).

[F2] Assume Dependent Choice. For a subspace $Y$ of a complete metric space $X$, $Y$ is completely metrizable if and only if $Y$ is a $G_\delta$ subset of $X$. ([[thm-alexandrov-complete-metrizability-characterisation]]).

[F3] Every subspace of a second countable space is second countable. ([[prop-second-countability-is-hereditary]]).

[F4] Assuming $\mathrm{AC}_\omega$, every second countable space is separable. ([[thm-second-countable-implies-separable]]).

[F5] Assume the Axiom of Countable Choice. For a completely metrizable space, separability is equivalent to second countability. Thus either countability convention gives the same notion of Polish space. ([[prop-polish-space-countability-conventions-agree]]).

## Proof

**Proof technique:** direct.

1.1 Alexandrov gives the complete-metrizability equivalence. [given, F2, F1, F5]

2.1 A subspace of a second-countable space is second countable, hence separable under the stated choice hypothesis, while every subspace already inherits metrizability. [step 1.1, F3, F4, F1]

3.1 Combine these facts in both directions. [step 2.1, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
