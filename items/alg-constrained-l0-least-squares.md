---
id: alg-constrained-l0-least-squares
kind: algorithm
title: "Constrained support-search least squares"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-natural-numbers
  - def-finite-cardinality
  - def-fixed-design-projection-estimator
  - lem-finite-support-projection-selection-is-borel
  - cor-cardinality-of-the-power-set
justified_by:
  - thm-sparse-subset-risk-upper-bound
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
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, §8.2.2"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§1–2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Definition

**Input:** naturals $n,d\ge1$, a fixed design $X\in\mathbb R^{n\times d}$, a data
vector $y\in\mathbb R^n$, and a natural $s$ with $0\le s\le d$.

**Candidate supports:** list all subsets $S\subseteq\{1,\ldots,d\}$ with
$|S|\le s$ in lexicographic order of their length-$d$ indicator vectors,
using $0<1$. This is a finite nonempty list because it contains $\varnothing$
and is contained in the finite power set of $\{1,\ldots,d\}$.

**Procedure:** for each candidate $S$, let $V_S$ be the span of the columns of
$X$ indexed by $S$ and compute $\widehat\mu_S=P_{V_S}y$. Compute its residual
score $q_S=\|y-\widehat\mu_S\|_2^2$. Initialize the incumbent at the first
candidate. Scan the remaining candidates in the stated order, replacing the
incumbent exactly when a strictly smaller score is found; retain the earlier
candidate on a tie. Return the selected support and its fitted vector
$\widehat\mu_s$.

Each $V_S$ is finite-dimensional, so the projections are defined by
[[def-fixed-design-projection-estimator]]. The fitted-vector selection is Borel
measurable by [[lem-finite-support-projection-selection-is-borel]]. The procedure
performs a finite exhaustive support search; no computational-efficiency claim is
made.
