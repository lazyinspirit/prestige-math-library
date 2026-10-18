---
id: thm-certified-integer-order-bessel-enclosures
kind: theorem
title: Soundness of finite integer-order Bessel enclosures
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [alg-certified-integer-order-bessel-evaluation, def-certified-evaluation-result-contract, lem-integer-order-bessel-series-tail, lem-finite-miller-terminal-error-identity, lem-bessel-integral-midpoint-error, lem-scaled-modified-bessel-midpoint-error]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §10.9, integral representations
      url: https://dlmf.nist.gov/10.9
    - title: DLMF, §10.6, recurrence relations and derivatives
      url: https://dlmf.nist.gov/10.6
    - title: DLMF, §10.2, Bessel functions of the first kind
      url: https://dlmf.nist.gov/10.2
    - title: DLMF, §§10.2, 10.6, 10.9, 10.25, and 10.74(iii)
      url: https://dlmf.nist.gov/10.74
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

Whenever [[alg-certified-integer-order-bessel-evaluation]] returns `success`,
its interval contains the requested $J_n(x)$ or scaled modified Bessel value
$e^{-x}I_n(x)$ and passes the requested absolute-radius test. A relative
certificate is valid only when zero is outside the interval and the relative
test passes. The theorem makes no success guarantee for every input or finite
cap.

## Facts & Assumptions

**Given:** A successful return of
[[alg-certified-integer-order-bessel-evaluation]] with a sound outward interval
backend.

[F1] [[alg-certified-integer-order-bessel-evaluation]]: series, midpoint,
and finite Miller candidates are returned only after their respective tail or
terminal-error enclosures are applied; candidate intersections are taken only
when nonempty.

[F2] [[def-certified-evaluation-result-contract]]: success requires exact
inclusion and the stated radius; relative certification requires zero
exclusion.

[F3] [[lem-integer-order-bessel-series-tail]]: the truncated $J_n$ series
tail is enclosed by the geometric bound when its ratio test passes.

[F4] [[lem-finite-miller-terminal-error-identity]]: the finite normalized
backward recurrence error is exactly the displayed terminal-contamination
expression whenever its denominators are nonzero.

[F5] [[lem-bessel-integral-midpoint-error]]: the midpoint $J_n$ enclosure
contains the exact cosine integral.

[F6] [[lem-scaled-modified-bessel-midpoint-error]]: the midpoint enclosure
contains the exact scaled $I_n$ integral.

## Proof
1.1 The power-series candidate contains $J_n(x)$ by [F3]. The two midpoint candidates contain their integrals by [F5] and [F6]. The Miller candidate contains $J_n(x)$ because its interval evaluates the exact error expression in [F4] and subtracts that interval from the normalized backward value. [F1, F3, F4, F5, F6]

2.1 Every candidate used by the procedure therefore contains the same exact requested value. Any nonempty intersection of candidates also contains that value. [F1, step 1.1]

3.1 The algorithm reports `success` only after the containing interval passes the absolute-radius test and, when reported, the zero-excluding relative test in [F2]. Otherwise it returns an inconclusive or range status under finite caps. Thus the success claims are sound and do not rely on a limit as the Miller terminal index grows. [F1, F2, step 2.1] ∎