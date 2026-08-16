---
id: prop-polish-space-countability-conventions-agree
kind: proposition
title: "For completely metrizable spaces, the separable and second-countable definitions of Polish space agree under countable choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polish-space, thm-metric-countability-equivalences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
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

Assume the Axiom of Countable Choice. For a completely metrizable space, separability is equivalent to second countability. Thus either countability convention gives the same notion of Polish space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A topological space is **Polish** when it is separable (def-separable-space) and completely metrizable: its topology is induced by some complete metric (lem-complete-remetrisation). No particular compatible complete metric or countable dense subset is part of the structure. ([[def-polish-space]]).

[F2] Assuming $\mathrm{AC}_\omega$, a metrizable space is second countable iff it is separable iff it is Lindelöf. ([[thm-metric-countability-equivalences]]).

## Proof

**Proof technique:** direct.

1.1 A completely metrizable space is metrizable. [given, F1, F2]

2.1 Apply the published metrizable-space equivalence between separability and second countability under countable choice, without strengthening the choice claim to ZF. [step 1.1, F1, F2]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
