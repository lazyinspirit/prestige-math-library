---
id: fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure
kind: false-statement
title: "FALSE: the epsilon-delta condition characterises absolute continuity for every measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure-with-density,
       def-absolutely-continuous-with-respect-to-a-positive-measure,
       cor-integral-over-a-null-set-vanishes,
       thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Exercise 14"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 13.2 discussion"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

**False claim:** For every signed or complex measure $\nu$, absolute continuity $\nu\ll\mu$ is equivalent to the epsilon-delta small-set condition.

## Facts & Assumptions

**Given:** The measure $\nu(E)=\int_Ex^{-1}\chi_{(0,1)}(x)\,d\lambda(x)$.

[L1] This nonnegative density defines a measure
([[def-measure-with-density]]), and the integral over every Lebesgue-null set
vanishes ([[cor-integral-over-a-null-set-vanishes]]), so the measure is
absolutely continuous with respect to Lebesgue measure by
[[def-absolutely-continuous-with-respect-to-a-positive-measure]].

[L2] The valid theorem requires finiteness. ([[thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], the measure $\nu$ satisfies $\nu\ll\lambda$. [L1, given]

2.1 With $\varepsilon=1$, every $\delta>0$ fails: for $E=(0,\delta/2)$ one has $\lambda(E)<\delta$ but $$\nu(E)=\int_0^{\delta/2}\frac{dx}{x}=+\infty>1.$$ Thus the epsilon-delta condition does not follow from absolute continuity in this sigma-finite but nonfinite case. [step 1.1, L2, algebra] ∎
