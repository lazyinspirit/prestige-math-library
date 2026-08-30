---
id: def-total-variation-of-a-signed-or-complex-measure
kind: definition
title: "The total variation |nu|(E) from countable measurable partitions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-signed-measure, def-complex-measure, def-extended-reals]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 12"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory, §6.7 and §6.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $\nu$ be a signed measure or a complex measure on $(X,\mathcal A)$. For
$E\in\mathcal A$, define its **total variation on $E$** by
$$|\nu|(E):=\sup\left\{\sum_{n=0}^\infty |\nu(E_n)|:\ (E_n)_{n\in\mathbb N}\text{ is a countable measurable partition of }E\right\},$$
where, for a signed measure, the term $|\nu(E_n)|$ means the ordinary absolute
value when $\nu(E_n)\in\mathbb R$ and means $+\infty$ when
$\nu(E_n)\in\{+\infty,-\infty\}$; for a complex measure it is the usual complex
modulus. A countable measurable partition of $E$ means:

1. each $E_n$ lies in $\mathcal A$;
2. the sets $E_n$ are pairwise disjoint;
3. $E=\bigcup_{n\in\mathbb N}E_n$.

The sum on the right is a nonnegative extended series, so it is always defined
in $[0,+\infty] \subseteq \overline{\mathbb R}$.

For signed measures, a later proposition shows that finite partitions already
suffice. For complex measures, that finite-partition shortcut is not built into
the definition here.
