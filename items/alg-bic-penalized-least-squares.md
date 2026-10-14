---
id: alg-bic-penalized-least-squares
kind: algorithm
title: "Penalized support-search least squares"
status: draft
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
  - thm-bic-fitted-risk-bound
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
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, §10.1 and Theorem 2.14"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§1–2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Definition

**Input:** naturals $n,d\ge1$, a fixed design $X\in\mathbb R^{n\times d}$, a data
vector $y\in\mathbb R^n$, and a penalty $\tau^2\ge0$.

List all supports $S\subseteq\{1,\ldots,d\}$ in lexicographic order of their
length-$d$ indicator vectors, using $0<1$. For each $S$, let $V_S$ be the span
of the corresponding columns of $X$, compute $\widehat\mu_S=P_{V_S}y$, and
score

$$q_S:=n^{-1}\|y-\widehat\mu_S\|_2^2+\tau^2|S|.$$

Initialize the incumbent at the first support and scan the rest in order,
replacing it exactly when a strictly smaller score is found; on a tie retain the
earlier support. Return the selected support $\widehat S$ and fitted vector
$\widehat\mu_{\mathrm{BIC}}=\widehat\mu_{\widehat S}$. The candidate family is
finite by [[cor-cardinality-of-the-power-set]], and the fitted-vector selection
is Borel measurable by [[lem-finite-support-projection-selection-is-borel]].
This is an exhaustive combinatorial procedure, not an efficiency guarantee.
