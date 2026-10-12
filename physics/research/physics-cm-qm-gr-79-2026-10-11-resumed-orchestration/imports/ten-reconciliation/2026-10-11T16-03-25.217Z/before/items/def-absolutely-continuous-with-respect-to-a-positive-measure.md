---
id: def-absolutely-continuous-with-respect-to-a-positive-measure
kind: definition
title: "Absolute continuity of a signed or complex measure with respect to a positive measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure, def-signed-measure, def-complex-measure]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Definition 13.1"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Definition 6.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.32"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Let $\mu$ be a positive measure and let $\nu$ be a signed measure or a complex measure on the same measurable space $(X,\mathcal A)$. We say that $\nu$ is **absolutely continuous with respect to $\mu$**, and write
$$\nu\ll\mu,$$
if every measurable $\mu$-null set is also $\nu$-null:
$$\mu(E)=0\qquad\Longrightarrow\qquad \nu(E)=0\qquad(E\in\mathcal A).$$
Because every measurable subset of a $\mu$-null set is again $\mu$-null, this is equivalent to requiring $\nu(F)=0$ for every measurable $F\subseteq E$ whenever $\mu(E)=0$.
