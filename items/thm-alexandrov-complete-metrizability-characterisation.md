---
id: thm-alexandrov-complete-metrizability-characterisation
kind: theorem
title: "Alexandrov's theorem, under Dependent Choice: a subspace of a complete metric space is completely metrizable exactly when it is $G_\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable, thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta, def-dependent-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-choice-interface-repair
    delegated_by: owner
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

[F1] Under Countable Choice, if $(X,d)$ is complete and $Y\subseteq X$ is
$G_\delta$ in $X$, then $Y$ is completely metrizable.
([[thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable]])

[F2] Assume Dependent Choice. If $Y$ is a completely metrizable subspace of a metric space $X$, then $Y$ is a $G_\delta$ subset of $X$. ([[thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta]]).

[F3] DC supplies a sequence beginning at any specified point of an entire
relation; Countable Choice selects from any given sequence of nonempty sets.
([[def-dependent-choice]], [[def-countable-choice]])

## Proof

**Proof technique:** direct.

1.1 The empty subspace satisfies both conditions. [given, F1, F2]

1.2 The assumed DC supplies the Countable Choice needed by [F1]. [given, F3]
For any sequence of nonempty sets, take the set of finite lists choosing from
its first finitely many members. This set contains the empty list, and the
one-term-extension relation is entire. DC starting at the empty list gives
nested lists of every finite length; their union is the required choice
function. No implication theorem from a later choice page is used.

2.1 Apply [F1] with the given complete ambient metric and the Countable [step 1.2, F1, F2]
Choice just derived. For the converse apply [F2] under the given DC; it needs
only a compatible complete metric on $Y$, not completeness of its inherited
metric. Thus both implications have their stated hypotheses.

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
