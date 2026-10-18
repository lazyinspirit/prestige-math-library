---
id: ex-erfc-subtraction-cancellation
kind: example
title: Subtracting erf from one amplifies absolute input errors in the tail
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-erfcx-moment-sequence, def-fresnel-erf-and-hypergeometric-series, lem-erf-series-geometric-tail, thm-gaussian-integral, thm-certified-erfcx-enclosures, thm-real-elementary-range-enclosures]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §7.2, definitions of erf and erfc
      url: https://dlmf.nist.gov/7.2
    - title: DLMF, §§7.2 and 7.12(i)
      url: https://dlmf.nist.gov/7.12
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 6
---

## Statement

For $x>0$, suppose the inputs to the subtraction $1-\operatorname{erf}(x)$
are approximations $1+\delta_1$ and $\operatorname{erf}(x)+\delta_2$, where
$\delta_1,\delta_2$ are signed errors. Its output error is exactly
$\delta_1-\delta_2$, so its relative error is at most
$$\frac{|\delta_1|+|\delta_2|}{\operatorname{erfc}(x)}.$$
For fixed nonzero input error bounds, this conditioning factor grows without
bound as $x\to\infty$, because $\operatorname{erfc}(x)>0$ and tends to zero.
The identity $\operatorname{erfc}(x)=e^{-x^2}\operatorname{erfcx}(x)$ and a
certified direct $\operatorname{erfcx}$ enclosure avoid this particular
subtraction.

## Facts & Assumptions

**Given:** A real $x>0$ and approximations
$\widehat 1=1+\delta_1$,
$\widehat{\operatorname{erf}}=\operatorname{erf}(x)+\delta_2$.

[F1] [[def-fresnel-erf-and-hypergeometric-series]] and [[def-erfcx-moment-sequence]]:
$\operatorname{erfc}(x)=1-\operatorname{erf}(x)$ and
$\operatorname{erfcx}(x)=e^{x^2}\operatorname{erfc}(x)$.

[F2] [[lem-erf-series-geometric-tail]]: for real $x$,
$\operatorname{erf}(x)=2\pi^{-1/2}\int_0^x e^{-t^2}\,dt$.

[F3] [[thm-gaussian-integral]]:
$\int_{-\infty}^{\infty}e^{-t^2}\,dt=\sqrt\pi$.

[F4] [[thm-certified-erfcx-enclosures]]: a successful direct $\operatorname{erfcx}$
evaluation supplies a containing absolute enclosure.

[F5] [[thm-real-elementary-range-enclosures]]: every finite successful real
elementary-range output encloses its exact value or range on an admissible
dyadic input interval; this applies to $e^{-x^2}$ for exact dyadic $x$.

## Proof
1.1 By [F1], the exact output is $\operatorname{erfc}(x)$. Subtracting the perturbed inputs gives $$\widehat 1-\widehat{\operatorname{erf}} =\operatorname{erfc}(x)+\delta_1-\delta_2.$$ Since [F2] and [F3] give $\operatorname{erfc}(x)=2\pi^{-1/2}\int_x^\infty e^{-t^2}dt>0$, division by the exact value and the triangle inequality yield the stated relative-error bound. [F1, F2, F3, algebra]

2.1 The same tail integral tends to zero as $x\to\infty$, because the nonnegative Gaussian is integrable by [F3]. If $|\delta_1|,|\delta_2|\le\eta$ with fixed $\eta>0$, the choice $\delta_1=\eta$, $\delta_2=-\eta$ attains error $2\eta$, so the relative error is $2\eta/\operatorname{erfc}(x)$ and is unbounded. By [F1], multiplying containing intervals for $\operatorname{erfcx}(x)$ and $e^{-x^2}$ with outward rounding encloses $\operatorname{erfc}(x)$ and avoids the subtraction. For exact dyadic $x>0$, [F4] and [F5] supply those factors whenever their finite evaluations succeed; this asserts no finite-cap success for arbitrary real $x$. [F1, F3, F4, F5, step 1.1] ∎
