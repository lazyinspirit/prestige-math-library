---
id: def-likelihood-ratio-as-rn-derivative
kind: definition
title: "Likelihood ratio as a Radon–Nikodym derivative"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-probability-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-axiom-of-choice
  - def-total-variation-of-a-signed-or-complex-measure
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-mutually-singular-measures
  - thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures
  - thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures
  - lem-positive-lebesgue-components-of-a-positive-measure
  - def-radon-nikodym-derivative
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§2.2 and 3.2, PDF pp. 30–33 and 54–55"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, §13.3 (book pagination)"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and proof, §6.8 (notes pp. 75–77)"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $P_0$ and $P_1$ be probability measures on the same measurable space.
Assume AC. Their Lebesgue decomposition relative to $P_0$ is the unique
decomposition
$P_1=P_{1,\mathrm{ac}}+P_{1,\mathrm{s}}$ with
$P_{1,\mathrm{ac}}\ll P_0$ and $P_{1,\mathrm{s}}\perp P_0$
([[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]],
[[thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures]]).
Both components are positive by
[[lem-positive-lebesgue-components-of-a-positive-measure]], and
$P_{1,\mathrm{ac}}$ is finite because their sum has mass one. Define the
**likelihood-ratio density** of $P_1$ against $P_0$ to be the
$P_0$-almost-everywhere class
$$
\frac{dP_{1,\mathrm{ac}}}{dP_0}
$$
of [[def-radon-nikodym-derivative]]. Under AC this class has a nonnegative
measurable representative by
[[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]].

This is a full density of $P_1$ with respect to $P_0$ only in the
absolutely continuous case $P_1\ll P_0$. If that condition fails, the
singular component remains separate. A displayed representative is not a
canonical pointwise function: its values are determined only
$P_0$-almost everywhere.
