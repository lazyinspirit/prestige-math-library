---
id: cor-metrizable-cech-complete-iff-completely-metrizable
kind: corollary
title: "Under the ultrafilter lemma and the Axiom of Choice, a metrizable space is Čech-complete exactly when it is completely metrizable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-completely-metrizable-spaces-are-cech-complete, thm-metrizable-cech-complete-spaces-are-completely-metrizable]
justified_by: []
aliases: []
landmark: true
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

Assume the ultrafilter lemma and the Axiom of Choice. A metrizable space is Čech-complete if and only if it is completely metrizable.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Assume the ultrafilter lemma and the Axiom of Choice. Every completely metrizable space is Čech-complete. ([[thm-completely-metrizable-spaces-are-cech-complete]]).

[F2] Assume the ultrafilter lemma. Every metrizable Čech-complete space is completely metrizable. ([[thm-metrizable-cech-complete-spaces-are-completely-metrizable]]).

## Proof

**Proof technique:** direct.

1.1 The empty space lies in both classes. [given, F1, F2]

2.1 For a nonempty metrizable space combine the two preceding implications, retaining metrizability only for the direction from Čech-completeness to complete metrizability. [step 1.1, F2, F1]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎

