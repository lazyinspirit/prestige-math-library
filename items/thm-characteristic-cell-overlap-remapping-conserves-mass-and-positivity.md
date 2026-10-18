---
id: thm-characteristic-cell-overlap-remapping-conserves-mass-and-positivity
kind: theorem
title: "Characteristic-cell overlap remapping preserves mass and positivity"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-characteristic-cell-overlap-remapping
  - thm-overlap-remap-l2-projection-conservation-positivity
  - lem-periodic-characteristic-map-is-orientation-preserving
  - lem-periodic-flow-departure-cells-have-positive-finite-volume
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

Assume Countable Choice and the finite measurable positive-volume partition hypotheses in [[def-characteristic-cell-overlap-remapping]]. For nonnegative source averages $\rho_j^n\ge0$, the characteristic-cell overlap remap satisfies $\rho_i^{n+1}\ge0$ for every arrival cell and
$$\sum_i|D_i|\overline\rho_i=\sum_j|C_j|\rho_j^n.$$
In particular, it satisfies
$$\sum_i|A_i|\rho_i^{n+1}=\sum_j|C_j|\rho_j^n.$$
The proof applies [[thm-overlap-remap-l2-projection-conservation-positivity]] to the source partition $\{C_j\}$ and departure partition $\{D_i\}$; its stated Countable Choice assumption is included here.

## Facts & Assumptions

**Given:** Countable Choice, finite measurable positive-volume source and arrival partitions of the periodic box, the exact characteristic flow, and nonnegative source averages.

[F1] [[def-characteristic-cell-overlap-remapping]]: $D_i=\Phi^{-1}(A_i)$, $\overline\rho_i=|D_i|^{-1}\sum_j|D_i\cap C_j|\rho_j^n$, and $\rho_i^{n+1}=(|D_i|/|A_i|)\overline\rho_i$.

[F2] [[thm-overlap-remap-l2-projection-conservation-positivity]]: under its stated Countable Choice and finite partition hypotheses, the overlap averages are nonnegative for nonnegative source values and satisfy $\sum_i|D_i|\overline\rho_i=\sum_j|C_j|\rho_j^n$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this axiom is assumed by the overlap theorem and by the local departure-volume lemma.

[F3] [[lem-periodic-characteristic-map-is-orientation-preserving]]: the exact flow is a diffeomorphism on the periodic lift and hence a bijection on the torus.

[F4] [[lem-periodic-flow-departure-cells-have-positive-finite-volume]]: under Countable Choice, the departure cells form a measurable partition and each has positive finite volume.

## Proof

1.1 By [F3] the characteristic map is bijective on the torus, and [F4] makes the departure cells a measurable positive-volume partition. Thus the source and departure partitions meet the finite-partition hypotheses of [F2]. Applying [F2] to the source values in [F1] gives $\overline\rho_i\ge0$ for every $i$ and the departure-mass identity $\sum_i|D_i|\overline\rho_i=\sum_j|C_j|\rho_j^n$. The Countable Choice assumption [A1] is exactly the axiom branch required by [F2] and [F4]. [given, A1, F1, F2, F3, F4, algebra]

2.1 Since [F4] gives $|D_i|>0$ and each arrival cell has $|A_i|>0$, [F1] scales the nonnegative $\overline\rho_i$ by the positive ratio $|D_i|/|A_i|$, so $\rho_i^{n+1}\ge0$. Also $|A_i|\rho_i^{n+1}=|D_i|\overline\rho_i$ term by term. Summing this equality and substituting the identity from step 1.1 proves the asserted total mass equality. [given, F1, F4, step 1.1, algebra] ∎
## Remarks

The batch-63 definition and theorem bodies have been inspected. The theorem assumes Countable Choice and finite measurable partitions with positive cell volumes; the departure-volume lemma supplies measurability and positive volume for $\{D_i\}$, while the periodic grid supplies those properties for $\{C_j\}$. The cited PE17 carriers are drafts, and this Step 1 contract records mathematical and dependency readiness only; it does not claim independent approval.
