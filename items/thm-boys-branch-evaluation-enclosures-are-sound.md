---
id: thm-boys-branch-evaluation-enclosures-are-sound
kind: theorem
title: Soundness of every successful finite-budget Boys enclosure
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [alg-certified-elementary-range-evaluation, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, alg-certified-boys-finite-budget-branch-evaluation, def-certified-evaluation-result-contract, alg-certified-gamma-loggamma-evaluation, thm-certified-gamma-loggamma-enclosures, thm-real-elementary-range-enclosures, lem-boys-small-taylor-remainder, lem-boys-positive-midpoint-enclosure, lem-boys-incomplete-gamma-large-t-tail-bound, lem-boys-upward-downward-recurrence-error-amplification, thm-boys-integral-identities-series-and-incomplete-gamma]
proof_strategy: direct
axiom_use: None. Soundness follows by finite induction through interval arithmetic and scalar integral bounds.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Boys integral and recurrence identities on pp. 19–21. The general finite enclosure certificate is proved here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV.B, pp. 17–18. Its evaluation regimes do not assert the finite certified accuracy proved here."
---

## Statement

Every call to [[alg-certified-boys-finite-budget-branch-evaluation]] terminates after finitely many operations bounded by its declared caps. Whenever it returns `success` on $\mathcal T\subset[0,\infty)$, each returned interval $I_m$ contains the exact range $\{F_m(T):T\in\mathcal T\}$ for $0\le m\le M$ and has the absolute and any reported relative accuracy required by [[def-certified-evaluation-result-contract]]. It may instead return `inconclusive`, `domain`, or `range`; no success for every finite input or cap is asserted.

## Facts & Assumptions

**Given:** An invocation of [[alg-certified-boys-finite-budget-branch-evaluation]] with finite outward interval operations. For the enclosure assertions assume its return is `success`; the termination argument also covers unsuccessful returns.

[F1] [[alg-certified-boys-finite-budget-branch-evaluation]]: the branch order is Taylor for $T\le1$, positive midpoint for $1<T\le2m+1$, and scaled incomplete-gamma tail for $T>2m+1$; table values are then propagated upward or downward and interval inputs are handled by endpoint hulls.

[F2] [[def-certified-evaluation-result-contract]]: a `success` interval contains the exact requested range, has radius at most the absolute tolerance, and claims relative accuracy only when zero is excluded and the relative-radius test passes.

[F3] [[lem-boys-small-taylor-remainder]]: in the stated monotone-term range, the Taylor partial sum plus its first omitted term encloses $F_m(T)$.

[F4] [[lem-boys-positive-midpoint-enclosure]]: the positive midpoint sum plus/minus $(m+T)/(2N)$ encloses $F_m(T)$.

[F5] [[lem-boys-incomplete-gamma-large-t-tail-bound]]: the scaled incomplete-gamma interval contains $F_m(T)$ on the large branch.

[F6] [[alg-certified-gamma-loggamma-evaluation]] and [[thm-certified-gamma-loggamma-enclosures]]: a successful Gamma request at a positive half-integer returns a rectangle containing that Gamma value. The finite algorithm has bounded child calls; its capped termination and soundness are supplied by the theorem.

[F7] [[alg-certified-elementary-range-evaluation]], [[thm-outward-rounded-operations-are-isotone-and-dag-sound]], and [[thm-real-elementary-range-enclosures]]: the explicitly called finite typed evaluator and outward arithmetic are sound; in particular, every finite real exponential range interval contains the exact exponential value or range supplied to it.

[F8] [[thm-boys-integral-identities-series-and-incomplete-gamma]]: $F'_m(T)=-F_{m+1}(T)<0$, and the upward and downward recurrences are exact for $T>0$.

[F9] [[lem-boys-upward-downward-recurrence-error-amplification]]: every finite recurrence interval contains the target value and its radius is bounded by the propagated seed and endpoint-rounding errors.

[F10] [[def-certified-evaluation-result-contract]]: work and precision caps are finite, and exhausting a cap returns `inconclusive` rather than making an uncertified claim.

## Proof

1.1 If an endpoint is zero, the internal rational is exactly $F_m(0)$ and its outward-rounded interval contains that value. Each positive-endpoint seed branch uses its own explicitly bound order $m\in\{0,M\}$. If the small-$T$ branch is used, [F3] encloses its Taylor sum by its first omitted term. If the positive midpoint branch is used, each exponential node is enclosed by [F7] and the quadrature remainder in [F4] encloses the integral. Thus every successful direct seed interval contains its Boys value. [given, F1, F3, F4, F7]

1.2 In the large branch, [F6] encloses $\Gamma(m+\tfrac12)$ whenever its Gamma call succeeds. This target is real by the positive-real Euler integral and half-integer identity in [F8], so projection onto the real coordinate preserves its enclosure. The prescribed square roots and powers enclose the positive scaling factors by [F7], which also encloses $e^{-T}$, and [F5] bounds the omitted upper incomplete-gamma tail. Outward interval operations therefore produce a containing interval for $F_m(T)$. [given, F1, F5, F6, F7, F8]

2.1 For $T>0$, apply the exact recurrence identities [F8] to each previously enclosed order. The outward interval expression encloses the exact affine recurrence image, and [F9] bounds the stored radius, since the procedure forms each affine endpoint exactly rationally and adds both final outward-conversion errors. Induction over the finite order count proves every entry of either accepted candidate table contains its exact Boys value. [F1, F8, F9, step 1.1, step 1.2, induction]

3.1 For $T_-\le T\le T_+$, [F8] makes $F_m$ decreasing, so its exact range lies between its endpoint values. The endpoint hull in [F1] therefore contains the entire range. The algorithm returns `success` only after the interval tests in [F2]; its other statuses make no success claim. [given, F1, F2, F8, step 2.1, algebra]

4.1 The algorithm visits only two endpoints and $M+1$ requested orders. Its refinement index is bounded by $W$; Taylor sums, midpoint panels and recurrence tables each have finite indices. More strongly, the shared counter is checked before every primitive operation and loop update, including all work inside Gamma and elementary subcalls. Every child receives the specified finite format/truncation inputs and the Gamma child additionally receives a finite work cap no larger than the remaining parent budget. Thus even a child whose complete construction would exceed that budget is interrupted with `inconclusive`; every branch returns a status after finitely many charged operations. No argument infers success from the size of a finite cap. [given, F1, F6, F7, F10, algebra] ∎
