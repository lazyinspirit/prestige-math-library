---
id: def-dominated-statistical-experiment
kind: definition
title: "Dominated statistical experiments"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-statistical-experiment
  - def-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-absolutely-continuous-with-respect-to-a-positive-measure
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §2.2, PDF pp. 30–33"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
---

## Definition

Let $\mathcal E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment ([[def-statistical-experiment]]). It is
**dominated** by a supplied positive measure $\mu$ on
$(\mathcal X,\mathcal A)$ when $\mu$ is sigma-finite
([[def-finite-sigma-finite-and-semifinite-measures]]) and
$P_\theta\ll\mu$ for every $\theta\in\Theta$
([[def-absolutely-continuous-with-respect-to-a-positive-measure]]).
The dominating measure is part of the specified setup. This condition adds no
measurable structure on $\Theta$ and no measurability of
$\theta\mapsto P_\theta$.
