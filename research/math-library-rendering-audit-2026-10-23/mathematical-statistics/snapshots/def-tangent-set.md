---
id: def-tangent-set
kind: definition
title: Tangent set of a statistical model at a law
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-dqm-submodel-through-a-law
  - thm-dqm-score-mean-zero
  - def-mean-zero-square-integrable-space
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
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §4
      url: https://arxiv.org/pdf/1709.06418
---

## Definition

Fix a model $\mathcal M$ containing a law $P$ and designate a collection of allowed submodels through $P$. Each allowed submodel is a one-sided DQM path as in [[def-dqm-submodel-through-a-law]]. Its score is the $P$-almost-sure equivalence class proved unique by [[thm-dqm-score-mean-zero]], and it belongs to $L^2_0(P)$ ([[def-mean-zero-square-integrable-space]]).

The **tangent set** $\dot{\mathcal M}(P)$ is the set of scores of the designated paths. The model specification determines which paths are allowed. In particular, the tangent set need not be a linear space: it may be a **cone**, meaning it is closed under multiplication by nonnegative real scalars, while failing closure under negative scalars. One-sided restrictions can produce this behavior. The closed linear span of the tangent set is a separate construction.
