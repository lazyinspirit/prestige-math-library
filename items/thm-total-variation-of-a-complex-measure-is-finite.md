---
id: thm-total-variation-of-a-complex-measure-is-finite
kind: theorem
title: "Every complex measure has finite total variation"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, def-total-variation-of-a-signed-or-complex-measure, def-complex-measure, def-complex-conjugate-real-imaginary-part-and-modulus]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Chapter 9A"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, §6.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

If $\nu$ is a complex measure on $(X,\mathcal A)$, then $|\nu|(X)<+\infty$.
More generally, $|\nu|(E)<+\infty$ for every measurable $E$.

## Facts & Assumptions

**Given:** A complex measure $\nu$ on $(X,\mathcal A)$ and a measurable set $E$.

[L1] The total variation $|\nu|(E)$ is the supremum of the countable partition sums $\sum_n |\nu(E_n)|$. ([[def-total-variation-of-a-signed-or-complex-measure]])

[L2] The set functions $\alpha:=\operatorname{Re}\nu$ and
$\beta:=\operatorname{Im}\nu$ are finite signed measures and
$\nu=\alpha+i\beta$.
([[prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures]])

[L3] For a signed measure $\rho$ with Jordan parts $\rho^+,\rho^-$,
$|\rho|=\rho^++\rho^-$.
([[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]])

## Proof

**Proof technique:** direct.

1.1 Put $\alpha:=\operatorname{Re}\nu$ and $\beta:=\operatorname{Im}\nu$. By [L2], these are finite signed measures and $$|\nu(A)|=|\alpha(A)+i\beta(A)|\le|\alpha(A)|+|\beta(A)|$$ for every measurable $A$. [L2, algebra]

2.1 Let $(E_n)$ be any countable measurable partition of $E$. Step 1.1 and the one-piece lower bound in the definition of variation give $$\sum_n|\nu(E_n)|\le\sum_n|\alpha(E_n)|+\sum_n|\beta(E_n)|\le\sum_n|\alpha|(E_n)+\sum_n|\beta|(E_n).$$ By [L3], $|\alpha|=\alpha^++\alpha^-$ and $|\beta|=\beta^++\beta^-$, so countable additivity of the four positive Jordan parts turns the right side into $|\alpha|(E)+|\beta|(E)$. [L1, L3, step 1.1]

3.1 The quantities $|\alpha|(E)$ and $|\beta|(E)$ are finite by [L2] and [L3]: both Jordan parts of a finite signed measure are finite on $E$. Thus step 2.1 gives the partition-independent bound $$\sum_n|\nu(E_n)|\le|\alpha|(E)+|\beta|(E)<+\infty.$$ Taking the supremum over all countable measurable partitions in [L1] proves $|\nu|(E)<+\infty$. Applying this with $E=X$ gives $|\nu|(X)<+\infty$. [L1, L2, L3, step 2.1] ∎
