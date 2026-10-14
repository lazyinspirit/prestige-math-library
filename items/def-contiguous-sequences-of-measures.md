---
id: def-contiguous-sequences-of-measures
kind: definition
title: Contiguous sequences of probability measures
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-probability-measure]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 21, PDF pp. 8–14
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/21notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §§1.1–1.3
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Definition

Let $(\mathcal X,\mathcal A)$ be one measurable space and let $P_n,Q_n$ be
probability measures on it ([[def-probability-measure]]). The sequence
$(Q_n)$ is **contiguous with respect to** $(P_n)$, written $Q_n\triangleleft
P_n$, if for every sequence $A_n\in\mathcal A$,
$$P_n(A_n)\longrightarrow0\quad\Longrightarrow\quad Q_n(A_n)\longrightarrow0.$$
The sequences are **mutually contiguous**, written $Q_n\triangleleft\triangleright
P_n$, if both $Q_n\triangleleft P_n$ and $P_n\triangleleft Q_n$.

Contiguity is a relation between sequences of laws, not absolute continuity at
each finite $n$. It says that events negligible under one sequence remain
negligible under the other in the indicated direction.
