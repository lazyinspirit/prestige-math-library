---
id: def-estimand-on-a-statistical-model
kind: definition
title: "Estimands on a statistical model"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-parametric-statistical-model]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §1.4.1, PDF pp. 22–23"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, pp. 1–2"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Definition

For a parametric model with parameter set $\Theta$, an **estimand** or
**parameter target** is a specified function
$$
\psi:\Theta\to\mathcal T_0,
$$
where $\mathcal T_0$ is a set of target values
([[def-parametric-statistical-model]]). This definition imposes no measurable
structure on $\Theta$ or $\mathcal T_0$ and does not require $\psi$ to determine
the full parameter value.
