---
id: alg-certified-airy-evaluation
kind: algorithm
title: Finite certified Airy power-series evaluation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-certified-evaluation-result-contract, def-airy-initial-value-series, lem-airy-series-coefficient-recurrence-and-tail, thm-certified-gamma-loggamma-enclosures, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures, def-dyadic-floating-point-format-and-directed-rounding, lem-directed-dyadic-rounding-enclosure-and-error, def-real-elementary-functions-and-domains]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §9.17(i), numerical evaluation
      url: https://dlmf.nist.gov/9.17
    - title: DLMF, §9.4, Airy Maclaurin series
      url: https://dlmf.nist.gov/9.4
    - title: DLMF, §§9.2(ii), 9.4, and 9.17(i)
      url: https://dlmf.nist.gov/9.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For exact dyadic complex input $z$ and target $\operatorname{Ai}(z)$ or
$\operatorname{Bi}(z)$, this finite procedure encloses the two nonzero
residue-class series from [[def-airy-initial-value-series]]. It obtains the
four initial constants using certified Gamma enclosures and bounds each omitted class by
its first omitted term divided by $1-q$ when its subsequent ratios are at most
$q<1$. It returns `success`, `inconclusive`, or `range` under the result
contract. No relative-accuracy claim is made when the returned rectangle
contains zero.

The procedure takes finite term, work, and precision caps, a positive absolute
tolerance, optional positive relative tolerance, and a sound outward interval
backend as in [A1]. It makes no claim that a cap permits success for every
complex input.

## Facts & Assumptions

**Given:** An exact $z\in\mathbb C$, target $\operatorname{Ai}$ or
$\operatorname{Bi}$, tolerances, finite caps, and the backend assumption.

[A1] [[def-outward-rounded-interval-and-ball-operations]] and
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite
interval arithmetic expression DAG encloses its exact range, and non-finite
statuses make no finite claim. [[thm-real-elementary-range-enclosures]] and
[[thm-complex-elementary-range-enclosures]]: required real elementary and
complex exponential/logarithm ranges are enclosed whenever those evaluations
return finite results.

[F1] [[def-certified-evaluation-result-contract]]: a `success` result
contains the exact value and passes the absolute-radius test; relative
certification requires zero exclusion.

[F2] [[def-airy-initial-value-series]]: the coefficient recurrence is
$c_{k+3}=c_k/((k+3)(k+2))$, with $c_2=0$; the Ai and Bi initial constants are
the stated reciprocal-Gamma values.

[F3] [[lem-airy-series-coefficient-recurrence-and-tail]]: in a nonzero
residue class, successive absolute term ratios are
$|z|^3/((k+3)(k+2))$; a tail whose later ratios are bounded by $q<1$ is at
most its first omitted term divided by $1-q$.

[F4] [[thm-certified-gamma-loggamma-enclosures]]: a successful Gamma request
on a dyadic interval $G$ returns an enclosure of the range of $\Gamma$ on
$G$.

[F5] [[def-dyadic-floating-point-format-and-directed-rounding]] and
[[lem-directed-dyadic-rounding-enclosure-and-error]]: outward rounding of
$1/3$ and $2/3$ gives dyadic intervals containing those rational parameters.

[F6] [[def-real-elementary-functions-and-domains]] and
[[thm-real-elementary-range-enclosures]]: $3^q$ for rational $q$ is evaluated
as $\exp(q\ln3)$ with an outward interval enclosure.

## Proof
1.1 The procedure outward-rounds the exact rationals $1/3$ and $2/3$ to dyadic intervals by [F5], then obtains certified Gamma range enclosures by [F4]. It forms $3^q$ as $\exp(q\ln3)$ by [F6] and combines these intervals according to the constants in [F2] using [A1]. Hence the coefficient intervals contain the exact Ai or Bi initial values. A failure of either Gamma call propagates its inconclusive or range status. [A1, F2, F4, F5, F6]

1.2 For each class $r=0,1$, the procedure encloses its finite partial sum and its first omitted term using [A1]. If the ratio $q_r=|z|^3/((k_r+3)(k_r+2))$ at the first omitted index $k_r$ is below $1$, [F3] bounds the full class tail by that term divided by $1-q_r$. The $r=2$ class vanishes identically because $c_2=0$ in [F2]. Enlarging the sum of the two partial sums by both tail bounds therefore encloses the full Airy value. [A1, F2, F3]

2.1 The procedure returns `success` only when this containing rectangle passes the radius and applicable relative tests in [F1]. If no pair of class cutoffs within the finite caps passes, it returns `inconclusive`; an unrepresentable enclosure returns `range`. These branches terminate after finite work, and every successful enclosure is sound by step 1.2. [F1, step 1.1, step 1.2] ∎