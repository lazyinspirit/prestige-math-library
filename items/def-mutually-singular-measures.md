---
id: def-mutually-singular-measures
kind: definition
title: "Mutual singularity for signed or complex measures"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-signed-measure, def-complex-measure]
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Definition 6.19"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 12"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Definition

Let $\mu$ and $\nu$ be signed measures or complex measures on the same
measurable space $(X,\mathcal A)$. They are **mutually singular**, written
$$\mu\perp \nu,$$
when there are measurable sets $P,N\in\mathcal A$ with
$$P\cap N=\varnothing,\qquad P\cup N=X,$$
such that:

1. every measurable subset of $N$ has $\mu$-value $0$;
2. every measurable subset of $P$ has $\nu$-value $0$.

For positive measures this is equivalent to the usual condition
$\mu(N)=0$ and $\nu(P)=0$, because positivity turns vanishing on the ambient set
into vanishing on all measurable subsets.
