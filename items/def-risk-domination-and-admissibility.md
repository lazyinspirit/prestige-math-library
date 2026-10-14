---
id: def-risk-domination-and-admissibility
kind: definition
title: Risk domination and admissibility
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [def-loss-function-and-risk]
justified_by: []
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
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.2, PDF pp. 102–104"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §5, PDF pp. 11–12"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Definition

For two decision rules $\delta_0,\delta_1$ in one decision problem,
$\delta_1$ **dominates** $\delta_0$ if
$R(\theta,\delta_1)\leq R(\theta,\delta_0)$ for every parameter $\theta$,
with strict inequality for at least one $\theta$. A rule is **admissible** if
no decision rule dominates it; otherwise it is inadmissible. Risk is the
extended-valued function of [[def-loss-function-and-risk]]. Admissibility is
a pointwise comparison across the whole parameter set; it does not assert that
the rule minimizes risk at any particular parameter or under a global
criterion.
