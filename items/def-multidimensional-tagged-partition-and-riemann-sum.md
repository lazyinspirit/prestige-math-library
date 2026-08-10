---
id: def-multidimensional-tagged-partition-and-riemann-sum
kind: definition
title: "Tagged grid partitions and Riemann sums in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-grid-partition, def-multidimensional-darboux-sums, def-multidimensional-rectangle-and-volume, lem-finite-choice, def-choice-function, def-bounded-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Definition

A **tagging** of a grid $P$ assigns to every cell $Q_i$ a point $\xi_i\in Q_i$. The lower corner is a canonical tagging, so taggings exist without choice. The **Riemann sum** is
$$S(f,P,\xi):=\sum_i f(\xi_i)\operatorname{vol}(Q_i),$$
with the iterated sum convention of [[def-multidimensional-grid-partition]].

The tagged sums **converge with mesh to $I$** if for every $\varepsilon>0$ some $\delta>0$ makes $|S(f,P,\xi)-I|<\varepsilon$ for every tagged grid with mesh below $\delta$. Finite cellwise selections used in proofs are licensed by [[lem-finite-choice]] and [[def-choice-function]], not by countable choice.

For bounded $f$, each tag lies in its cell, so termwise inequalities and nonnegative volumes give
$$L(f,P)\le S(f,P,\xi)\le U(f,P)$$
([[def-multidimensional-darboux-sums]], [[def-bounded-set]]).
