---
id: def-radon-nikodym-derivative
kind: definition
title: "The Radon-Nikodym derivative as an almost-everywhere equivalence class"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, def-measure-null-set-and-almost-everywhere]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, paragraph after 9.36"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 13"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Definition

Let $\mu$ be a sigma-finite positive measure.

1. If $\nu$ is a signed measure satisfying the hypothesis of [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]] and $\nu\ll\mu$, the **Radon-Nikodym derivative** $d\nu/d\mu$ is the $\mu$-almost-everywhere equivalence class of measurable real-valued functions $f$ satisfying the measurable-set integral formula in that theorem.
2. If $\nu$ is a finite complex measure and $\nu\ll\mu$, the **Radon-Nikodym derivative** $d\nu/d\mu$ is the $\mu$-almost-everywhere equivalence class of complex $L^1(\mu)$ functions $h$ satisfying
   $$\nu(E)=\int_E h\,d\mu\qquad(E\in\mathcal A),$$
   as given by [[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]].

In both cases the derivative is not a distinguished pointwise function: it is determined only up to $\mu$-almost-everywhere equality in the sense of [[def-measure-null-set-and-almost-everywhere]].
