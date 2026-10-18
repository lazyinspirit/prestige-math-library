---
id: alg-certified-boys-finite-budget-branch-evaluation
kind: algorithm
title: Finite-budget certified evaluation of Boys function tables
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-boys-function-and-coulomb-auxiliary-recurrence, def-certified-evaluation-result-contract, alg-certified-gamma-loggamma-evaluation, thm-certified-gamma-loggamma-enclosures, thm-real-elementary-range-enclosures, thm-boys-integral-identities-series-and-incomplete-gamma, lem-boys-small-taylor-remainder, lem-boys-positive-midpoint-enclosure, lem-boys-incomplete-gamma-large-t-tail-bound, lem-boys-upward-downward-recurrence-error-amplification]
axiom_use: None. The procedure has finite loops and uses certified real intervals; no choice is used.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; the Boys function and its small-/large-argument regimes are discussed on pp. 20–21. This finite certified branch table and all conditional statuses are specified here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV.B, pp. 17–18. The numerical regimes are context; error certificates and finite failure branches are defined here."
---

## Definition

Input a nonnegative integer $M$, a finite dyadic interval $\mathcal T=[T_-,T_+]\subset[0,\infty)$, absolute tolerance $\varepsilon_a>0$, optional relative tolerance $\varepsilon_r>0$, a finite work cap $W$, a finite precision cap $P$, and the format parameters of [[def-certified-evaluation-result-contract]]. The requested output is a table of real dyadic intervals $I_m$ for $0\le m\le M$, with one of the statuses `success`, `inconclusive`, `domain`, or `range` from that contract.

1. Validate the domain and budgets. If $M<0$, $\mathcal T$ is not wholly nonnegative, a tolerance or cap is invalid, or a required branch domain fails, return `domain`.

2. For each endpoint $\tau\in\{T_-,T_+\}$, construct direct enclosures for the seed values $F_0(\tau)$ and $F_M(\tau)$ as follows. At $\tau=0$, use the exact rational $1/(2m+1)$. For $0<\tau\le1$, use the Taylor sum from [[thm-boys-integral-identities-series-and-incomplete-gamma]] and increase its truncation index only while $N+2\ge\tau$ and within $W,P$, using the remainder in [[lem-boys-small-taylor-remainder]]. For $1<\tau\le2m+1$, use the positive midpoint rule in [[lem-boys-positive-midpoint-enclosure]]; take $N$ through powers of two so every midpoint is dyadic, and enclose each exponential node by [[thm-real-elementary-range-enclosures]]. For $\tau>2m+1$, use [[lem-boys-incomplete-gamma-large-t-tail-bound]]: enclose $\Gamma(m+\tfrac12)$ by requesting the Gamma value at the exact positive dyadic point $m+\tfrac12$ from [[alg-certified-gamma-loggamma-evaluation]], and enclose $e^{-\tau}$ by [[thm-real-elementary-range-enclosures]]. Accept a seed only after every interval operation returns finite outward intervals and the seed meets the requested radius test; otherwise try within the remaining caps.

3. If $\tau>0$, form an upward candidate table from the $F_0(\tau)$ seed by the upward recurrence, and a downward candidate table from the $F_M(\tau)$ seed by the downward recurrence. Propagate intervals with the outward backend and record the radii at each order. A candidate is admissible only when its finite propagated radii satisfy the error estimates of [[lem-boys-upward-downward-recurrence-error-amplification]]. If both candidates are admissible, keep the one with smaller maximum radius; ties use the upward candidate. If just one is admissible, keep that one. If neither meets the requested enclosure tests within the caps, return `inconclusive`. When $\tau=0$, use the exact table directly; upward recurrence is not attempted because it divides by $2\tau$.

4. If both endpoint tables are available, use $F'_m(T)=-F_{m+1}(T)<0$ from [[thm-boys-integral-identities-series-and-incomplete-gamma]] to form $I_m=\operatorname{hull}(I_m(T_+),I_m(T_-))$ for the full input interval $\mathcal T$, where $\operatorname{hull}([a,b],[c,d])=[\min(a,c),\max(b,d)]$. Return `success` only if every output interval contains the corresponding exact range, has radius at most $\varepsilon_a$, and, when relative tolerance is requested, excludes zero and meets the relative-radius test of [[def-certified-evaluation-result-contract]]. A finite cap exhaustion returns `inconclusive`; an unrepresentable finite interval returns `range`. The procedure makes no universal-success or relative-accuracy claim near zero.
