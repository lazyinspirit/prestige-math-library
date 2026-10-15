---
id: def-v-weighted-total-variation-distance
kind: definition
title: Weighted total variation for probability measures
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-total-variation-distance-for-probability-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, §1, notation and conventions"
      url: "https://arxiv.org/pdf/1507.05021v3"
    - title: "Gautam Iyer, Lecture 20: Langevin Monte Carlo, course notes, §3"
      url: "https://geometrycollective.github.io/monte-carlo/notes/Lecture20/Lecture20.pdf"
---

## Definition

Let $d\ge1$, let $W:\mathbb R^d\to[1,\infty)$ be Borel measurable, and let
$\mu,\nu$ be Borel probability measures on $\mathbb R^d$ with
$\int W\,d\mu<\infty$ and $\int W\,d\nu<\infty$. Define their
**$W$-weighted total-variation distance** by
$$\|\mu-\nu\|_W:=\sup_{f\,\mathrm{Borel},\ |f|\le W}\left|\int f\,d\mu-\int f\,d\nu\right|.$$
The moment hypotheses make every integral in the supremum finite. This is the
signed-measure test-function norm used in weighted-variation bounds. For
$W\equiv1$ it has the usual factor of two relative to the event-supremum
probability distance in [[def-total-variation-distance-for-probability-laws]].
Here a Borel probability measure is in the sense of [[def-probability-measure]],
on the Borel sigma-algebra of [[def-borel-sigma-algebra]].
