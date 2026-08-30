---
id: cor-finite-complex-measures-admit-integrable-radon-nikodym-densities
kind: corollary
title: "A finite complex measure absolutely continuous with respect to a sigma-finite positive measure has an integrable complex density"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures, thm-total-variation-of-a-complex-measure-is-finite, thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data, def-integrable-real-and-complex-functions-and-their-integrals]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.30"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.3"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Let $\mu$ be a positive measure and let $\nu$ be a finite complex measure on $(X,\mathcal A)$. If $\nu\ll\mu$ and $\mu$ is sigma-finite, then there exists a complex function $h\in L^1(\mu)$, unique up to $\mu$-almost-everywhere equality, such that
$$\nu(E)=\int_E h\,d\mu\qquad(E\in\mathcal A).$$

## Facts & Assumptions

**Given:** A sigma-finite positive measure $\mu$ and a finite complex measure $\nu$ with $\nu\ll\mu$.

[L1] The real and imaginary parts of $\nu$ are finite signed measures. ([[prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures]])

[L2] For complex measures, $\nu\ll\mu$ is equivalent to $\operatorname{Re}\nu\ll\mu$ and $\operatorname{Im}\nu\ll\mu$. ([[thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data]])

[L3] A signed measure satisfying a common finite exhaustion with $\mu$ and
absolutely continuous with respect to $\mu$ has an almost-everywhere unique
density; if its total variation is finite, the density is integrable
([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[L4] A complex function is integrable exactly when its real and imaginary parts are integrable. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[L5] A complex measure has finite total variation
([[thm-total-variation-of-a-complex-measure-is-finite]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the signed measures $\operatorname{Re}\nu$ and $\operatorname{Im}\nu$ are absolutely continuous with respect to $\mu$. By [L5], partition sums for their total variations are bounded by those of $|\nu|$, so both have finite total variation. Choose an increasing exhaustion $(X_n)$ with $\mu(X_n)<\infty$; it is then common to $\mu$ and both signed measures. Applying [L3], choose real-valued $u,v\in L^1(\mu)$ such that $$\operatorname{Re}\nu(E)=\int_E u\,d\mu,\qquad \operatorname{Im}\nu(E)=\int_E v\,d\mu\qquad(E\in\mathcal A).$$ [L1, L2, L3, L5, choose, algebra]

2.1 Put $h:=u+iv$. Then [L4] gives $h\in L^1(\mu)$, and for every measurable $E$ one has $$\nu(E)=\operatorname{Re}\nu(E)+i\,\operatorname{Im}\nu(E)=\int_E u\,d\mu+i\int_E v\,d\mu=\int_E h\,d\mu.$$ If $h'$ is another such density, then its real and imaginary parts give alternative signed densities for $\operatorname{Re}\nu$ and $\operatorname{Im}\nu$, so the uniqueness part of [L3] makes $h'=h$ $\mu$-almost everywhere. [step 1.1, L3, L4, algebra] ∎
