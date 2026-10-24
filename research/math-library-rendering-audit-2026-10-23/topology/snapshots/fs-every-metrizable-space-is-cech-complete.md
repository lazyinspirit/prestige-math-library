---
id: fs-every-metrizable-space-is-cech-complete
kind: false-statement
title: "FALSE: every metrizable space is Čech-complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-the-rational-numbers-form-a-baire-space, thm-cech-complete-spaces-are-baire, cor-metrizable-cech-complete-iff-completely-metrizable, cor-q-is-meager-and-not-g-delta]
justified_by: []
aliases: []
landmark: false
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
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma and the Axiom of Choice, the hypotheses carried by the equivalence of [F3] that the refutation uses. The false claim is: every metrizable space is Čech-complete.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] $\mathbb Q$, with its usual subspace topology from $\mathbb R$, is **not** a Baire space. The cited item is a false-statement item: the sentence displayed under its Statement heading is the claim it refutes, and what it establishes is that negation ([[fs-the-rational-numbers-form-a-baire-space]]).

[F2] Assume Dependent Choice. Every Čech-complete space is a Baire space. ([[thm-cech-complete-spaces-are-baire]]).

[F3] Assume the ultrafilter lemma and the Axiom of Choice. A metrizable space is Čech-complete if and only if it is completely metrizable. ([[cor-metrizable-cech-complete-iff-completely-metrizable]]).

[F4] Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under the canonical embedding $q \mapsto \hat q$ (lem-rat-embeds-dense), the set usually written $\mathbb{Q}$ once the identification is made, and put $X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then: 1. $\mathbb{Q}_{\mathbb{R}}$ is an $F_\sigma$ set (def-f-sigma-g-delta) and is meager (def-nowhere-dense-meager); 2. $X$ is a $G_\delta$ set and is residual; 3. $\mathbb{Q}_{\mathbb{R}}$ is **not** a $G_\delta$ set, and $X$ is **not** an $F_\sigma$ set. Claims 1 and 2 are bookkeeping. Claim 3 is the substance and is exactly where thm-baire-category-r is spent: no argument from the algebra of open and closed sets alone can reach it, since $\mathbb{Q}_{\mathbb{R}}$ and $X$ are interchanged by complementation while $F_\sigma$ and $G_\delta$ are, so any such argument would prove the same thing about both sets and about neither. ([[cor-q-is-meager-and-not-g-delta]]).

## Refutation

**Proof technique:** direct.

1.1 The rational line is metrizable but not Baire. [given, F3, F1, F2]

2.1 Since every Čech-complete space is Baire under the same stated Dependent Choice assumption, the rationals cannot be Čech-complete. [step 1.1, F2, F1, F4]

3.1 Equivalently, Alexandrov and the published non-$G_\delta$ result exclude complete metrizability. [step 2.1, F4, F2, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
