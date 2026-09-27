---
id: def-integral-of-a-nonnegative-simple-function
kind: definition
title: "The integral of a nonnegative simple function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-nonnegative-simple-measurable-function, def-measure]
justified_by: [lem-well-definedness-of-the-simple-integral]
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Definition 4.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Definition

Let $s=\sum_{j=1}^m c_j\chi_{E_j}$ be a simple representation of a
nonnegative simple measurable function
([[def-nonnegative-simple-measurable-function]]) on a measure space
$(X,\mathcal A,\mu)$, so the $E_j\in\mathcal A$ are pairwise disjoint and
$c_j\ge0$. Its
**simple integral** is
$$\int s\,d\mu:=\sum_{j=1}^m c_j\mu(E_j),$$
where $\mu$ is the given measure ([[def-measure]]) and the convention
$0\cdot(+\infty)=0$ is fixed once and for all.

The next lemma proves that this value is independent of the chosen simple
representation.
