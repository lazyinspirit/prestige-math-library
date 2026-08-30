---
id: def-signed-measure
kind: definition
title: "A signed measure is countably additive and takes at most one infinite value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sigma-algebra, def-extended-reals, def-absolute-and-conditional-convergence]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Definition 12.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory, Definition 6.13"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $(X,\mathcal A)$ be a measurable space. A **signed measure** on
$(X,\mathcal A)$ is a function
$$\nu:\mathcal A\longrightarrow \overline{\mathbb R}$$
such that:

1. $\nu(\varnothing)=0$;
2. $\nu$ takes at most one infinite sign: either $\nu(E)\neq-\infty$ for every
   $E\in\mathcal A$, or $\nu(E)\neq+\infty$ for every $E\in\mathcal A$;
3. for every pairwise disjoint sequence $(E_n)_{n\in\mathbb N}$ in
   $\mathcal A$,
   the series on the right is defined in the extended reals and
   $$\nu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sum_{n=0}^\infty \nu(E_n)$$
   ([[def-extended-reals]]).

The second and third clauses are load-bearing, not stylistic: together they
rule out the undefined form $(+\infty)+(-\infty)$ and require the disjoint
series to exist before countable additivity is asserted.

The next proposition proves the extra fact that if
$\nu(\bigcup_n E_n)$ is finite, then the real series $\sum_n \nu(E_n)$
converges absolutely in the sense of
[[def-absolute-and-conditional-convergence]].
