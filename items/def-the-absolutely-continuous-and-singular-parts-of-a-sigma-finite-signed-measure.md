---
id: def-the-absolutely-continuous-and-singular-parts-of-a-sigma-finite-signed-measure
kind: definition
title: "The absolutely continuous part and the singular part in the Lebesgue decomposition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures, thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 13"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.35"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Under the hypotheses of [[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]], write the unique decomposition of $\nu$ relative to $\mu$ as
$$\nu=\nu_a+\nu_s,$$
where $\nu_a\ll\mu$ and $\nu_s\perp\mu$. The measure $\nu_a$ is the **absolutely continuous part** of $\nu$ with respect to $\mu$, and $\nu_s$ is the **singular part** of $\nu$ with respect to $\mu$.
