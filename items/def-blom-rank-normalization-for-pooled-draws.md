---
id: def-blom-rank-normalization-for-pooled-draws
kind: definition
title: Blom rank-normal scores for pooled draws
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - lem-standard-normal-cdf-quantiles-and-symmetry
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §4.1, equation (14), arXiv v5"
      url: https://arxiv.org/pdf/1903.08008v5
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
axiom_use: "The score uses the inverse standard-normal CDF supplied by the library normal-law interface, which assumes the full Axiom of Choice. The finite ranking operations themselves use no choice."
---

## Definition

Let $x_1,\ldots,x_S\in\mathbb R$ be a nonempty finite pooled collection,
where $S\ge1$. Give each observation its average rank $r_i$ among all $S$
values; equal values receive the average of the ranks they occupy. Let $\Phi$
be the standard-normal CDF from [[def-standard-normal-and-normal-laws]]. Define
the Blom normal score

$$z_i=\Phi^{-1}\!\left(\frac{r_i-3/8}{S+1/4}\right).$$

The standard-normal CDF is continuous, strictly increasing, and has limits $0$
and $1$ at the two infinities by
[[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]]. The published
quantile result [[lem-standard-normal-cdf-quantiles-and-symmetry]] supplies the
existence and uniqueness of a finite inverse for every probability in $(0,1)$.
Since $1\le r_i\le S$, the displayed Blom fraction lies strictly between $0$
and $1$, so each score is well defined. This convention averages ties before
applying the score transform.
