---
id: cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish
kind: corollary
title: "Under the Axiom of Countable Choice, countable products and $G_\\delta$ subspaces of Polish spaces are Polish"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-countable-products-of-completely-metrizable-spaces, thm-countable-products-of-second-countable-spaces, thm-polish-subspaces-are-exactly-g-delta-subspaces, prop-polish-space-countability-conventions-agree]
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

Assume the Axiom of Countable Choice. A countable product of Polish spaces is Polish, and every $G_\delta$ subspace of a Polish space is Polish.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Assume the Axiom of Countable Choice. Every countable product of completely metrizable spaces is completely metrizable, including the empty product. ([[thm-countable-products-of-completely-metrizable-spaces]]).

[F2] Assuming $\mathrm{AC}_\omega$, a countable product of second countable spaces is second countable. ([[thm-countable-products-of-second-countable-spaces]]).

[F3] Assume the Axiom of Countable Choice. A subspace of a Polish space is Polish if and only if it is a $G_\delta$ subset. ([[thm-polish-subspaces-are-exactly-g-delta-subspaces]]).

[F4] Assume the Axiom of Countable Choice. For a completely metrizable space, separability is equivalent to second countability. Thus either countability convention gives the same notion of Polish space. ([[prop-polish-space-countability-conventions-agree]]).

## Proof

**Proof technique:** direct.

1.1 Use the product theorem for complete metrizability and the published theorem that countable products of second-countable spaces are second countable. [given, F2, F1, F4]

2.1 For a $G_\delta$ subspace apply the Polish-subspace characterisation. [step 1.1, F3, F4]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
