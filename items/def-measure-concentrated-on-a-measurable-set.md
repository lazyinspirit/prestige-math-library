---
id: def-measure-concentrated-on-a-measurable-set
kind: definition
title: "A positive, signed, or complex measure concentrated on a measurable set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure, def-signed-measure, def-complex-measure]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 13"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, §6.8"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $\nu$ be a positive measure, a signed measure, or a complex measure on $(X,\mathcal A)$, and let $S\in\mathcal A$. We say that $\nu$ is **concentrated on $S$** if
$$\nu(E)=\nu(E\cap S)\qquad(E\in\mathcal A).$$
Equivalently, every measurable subset of $X\setminus S$ has $\nu$-value $0$. For a positive measure this is the same as $\nu(X\setminus S)=0$, but for a signed or complex measure the stronger subsetwise vanishing is the load-bearing form used in later proofs.
