---
id: def-complex-measure
kind: definition
title: "A complex measure is a finite-valued countably additive set function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sigma-algebra, thm-complex-numbers-form-a-field]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Definition 6.29"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Definition

Let $(X,\mathcal A)$ be a measurable space. A **complex measure** on
$(X,\mathcal A)$ is a function
$$\nu:\mathcal A\longrightarrow\mathbb C$$
such that:

1. $\nu(\varnothing)=0$;
2. for every pairwise disjoint sequence $(E_n)_{n\in\mathbb N}$ in
   $\mathcal A$,
   $$\nu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sum_{n=0}^\infty \nu(E_n)$$
   in $\mathbb C$.

The codomain is the field $\mathbb C$
([[thm-complex-numbers-form-a-field]]), so a complex measure is finite-valued by
definition: there is no complex number called $+\infty$ or $-\infty$ to allow.
