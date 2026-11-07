---
id: thm-polymath-type-iii-smooth-modulus-estimate
kind: theorem
title: "Polymath8a Type III estimate for densely divisible moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps: [def-polymath-type-iii-estimate, thm-bilinear-bombieri-vinogradov-for-coefficients, thm-hyper-kloosterman-composite-modulus-correlation]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "Theorem 2.8(v) and complete proof in §7, printed pp. 11 and 83–94"
    - title: "N. M. Katz, Gauss Sums, Kloosterman Sums, and Monodromy Groups"
      url: "https://web.math.princeton.edu/~nmk/Katz-GKM.pdf"
      locator: "Kloosterman sheaf inputs, Theorems 4.1.1 and 11.1"
---

## Statement

Fix $0<\varpi<1/12$, $0<\delta<1/4+\varpi$, and $0<\sigma<1/2$ such that
$$\sigma>\frac1{18}+\frac{28}{9}\varpi+\frac{2}{9}\delta.$$
Then the Type III distribution estimate for squarefree moduli in $D_I^{(1)}(x^\delta)$ holds with level $Q\asymp x^{1/2+2\varpi}$: for every real $x>1$, bounded set $I$ of primes, integer $a$ coprime to $P_I$, and coefficient sequences $\alpha,\psi_1,\psi_2,\psi_3$ at scales $M,N_1,N_2,N_3$ satisfying
$$MN_1N_2N_3\asymp x,\qquad N_jN_k\gg x^{1/2+\sigma}\ (j\ne k),\qquad x^{2\sigma}\ll N_j\ll x^{1/2-\sigma},$$
with $\psi_1,\psi_2,\psi_3$ smooth, one has, for every fixed $A>0$,
$$\sum_{\substack{q\le Q\\q\in D_I^{(1)}(x^\delta)}}\left|\Delta_x(\alpha*\psi_1*\psi_2*\psi_3;a,q)\right|\ll_A x(\log x)^{-A}.$$
Here $D_I^{(1)}(x^\delta)$ consists of squarefree moduli with prime factors in $I$ that satisfy the one-fold dense-divisibility condition; coefficient, smoothness, discrepancy and convolution have the earlier definitions' conventions.

## Statement references

[[def-polymath-type-iii-estimate|Type III distribution estimate for smooth coefficient sequences]]

[[def-polymath-densely-divisible-moduli|Iterated dense divisibility of squarefree moduli]]

[[thm-hyper-kloosterman-composite-modulus-correlation|Squarefree composite-modulus correlation for rank-three hyper-Kloosterman sums]]

[[thm-bilinear-bombieri-vinogradov-for-coefficients|Bilinear Bombieri–Vinogradov estimate for coefficient sequences]]

[Polymath8a, Theorem 2.8(v) and §7](https://arxiv.org/pdf/1402.0811v3)

## Facts & Assumptions

**Given:** The parameters $\varpi,\delta,\sigma$, a bounded prime set $I$, a primitive class modulo $P_I$, coefficient sequences at the four scales, and the parameter inequalities in the statement.

[F1] [[def-polymath-type-iii-estimate]]: Type III estimates average the discrepancy of $\alpha*\psi_1*\psi_2*\psi_3$ over $q\in D_I^{(1)}(x^\delta)$ with $q\le Q\asymp x^{1/2+2\varpi}$.

[F2] [[thm-bilinear-bombieri-vinogradov-for-coefficients]]: the full-support quantitative bound retains its short-factor losses; its arbitrary-saving BV corollary applies when BOTH factor scales are at least a fixed power of the ambient scale. A hard product cutoff is not supplied by whole-support SW alone. The present held route must verify these actual factor and localization hypotheses, rather than treating the old unrestricted-cutoff transcription as a proved input.

[F3] [[thm-hyper-kloosterman-composite-modulus-correlation]]: the required squarefree composite-modulus rank-three Kloosterman correlations have the stated gcd-sensitive square-root bound.

## Proof obligation

The source proof in §7 first reduces by bilinear Bombieri–Vinogradov to exponential sums, completes and factors them into rank-three hyper-Kloosterman correlations, and then balances diagonal/off-diagonal cases under the displayed parameter inequalities. The full reduction and parameter optimization have not been reconstructed as a local proof. The corrected full-support bilinear estimate is locally supplied at its explicit balanced/full-range scopes; the required localized reduction and Deligne/Kloosterman correlation arguments remain held.
