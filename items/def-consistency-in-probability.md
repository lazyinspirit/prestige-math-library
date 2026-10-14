---
id: def-consistency-in-probability
kind: definition
title: "Pointwise consistency in probability"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [def-estimator-sequence-in-iid-experiments]
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
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, PDF pp. 6–7"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
    - title: "John Duchi, Theory of Statistics, Stats 300B Lecture 3, Winter 2018, PDF pp. 3–4"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-03.pdf"
---

## Definition

Let $(T_n)$ be an estimator sequence of an estimand $\psi$ with metric target $(\mathcal T,d)$, and fix $\theta\in\Theta$. The sequence is **consistent in probability at $\theta$** if for every $\varepsilon>0$,
$$P_\theta^{\otimes n}\bigl(\{x\in\mathcal X^n:d(T_n(x),\psi(\theta))>\varepsilon\}\bigr)\longrightarrow0.$$

The error event is measurable: by the triangle inequality, $t\mapsto d(t,\psi(\theta))$ is continuous, so its strict superlevel set at $\varepsilon$ is open in the target metric topology and hence Borel; its preimage under $T_n$ is measurable.

The consistency is **pointwise** because $\theta$ is fixed before the limit. It does not assert uniform convergence over $\Theta$ ([[def-estimator-sequence-in-iid-experiments]]).
