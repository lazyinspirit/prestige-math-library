---
id: thm-stadlmann-type-i-ii-smooth-modulus-estimate
kind: theorem
title: "Stadlmann’s improved Type I/II estimate for smooth moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps: [def-smooth-modulus-exponent-of-distribution, def-siegel-walfisz-coefficient-sequence, thm-bilinear-bombieri-vinogradov-for-coefficients, thm-rational-phase-incomplete-sum-bound, lem-two-variable-reciprocal-phase-completion-from-rank-three-bound, thm-weil-bound-for-hyper-kloosterman-sums]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§2.1 Proposition 1; complete proof in §§3.1–3.5, printed pp. 8–27"
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§5.3 dispersion reduction and §4.4 rational-phase estimates"
---

## Statement

Let $\omega,\delta,\sigma>0$ satisfy
$$72\omega+24\delta<1,\qquad48\omega+16\delta+4\sigma<1,\qquad64\omega+20\delta+2\sigma<1.$$
Let $\alpha,\beta$ be coefficient sequences at scales $M(x),N(x)$ with $x>1$, $N(x)\in[x^{1/2-\sigma},x^{1/2}]$, and $M(x)\asymp x/N(x)$. Assume $\beta$ has the Siegel–Walfisz property. Then for every $a\in\mathbb Z$ and $A>0$,
$$\sum_{\substack{q\le x^{1/2+2\omega}\\q\mid P(x^\delta)\\(q,a)=1}}\left|\Delta(\alpha*\beta;a,q)\right|\ll_{A,\omega,\delta}x(\log x)^{-A}.$$
The implied constant may also depend on the fixed coefficient-growth and Siegel–Walfisz constants, but not on the sequence values. The coefficient, smoothness and modulus conventions are those defined earlier on this page. Here the discrepancy is the FULL-SUPPORT one in the actual source Proposition1,
$$\Delta(\gamma;a,q):=\sum_{n\equiv a\ (q)}\gamma(n)-\frac1{\varphi(q)}\sum_{(n,q)=1}\gamma(n).$$
It is distinct from the hard-window discrepancy used in the prime-exponent definition.

## Statement references

[[def-smooth-moduli-and-progression-discrepancy|Squarefree smooth moduli and progression discrepancy]]

[[def-smooth-modulus-exponent-of-distribution|Exponent of distribution to squarefree smooth moduli]]

[[def-siegel-walfisz-coefficient-sequence|Coefficient sequences with the Siegel–Walfisz property]]

[[thm-bilinear-bombieri-vinogradov-for-coefficients|Bilinear Bombieri–Vinogradov estimate for coefficient sequences]]

[[thm-rational-phase-incomplete-sum-bound|Incomplete rational-phase sums from Deligne and one van der Corput step]]

[Stadlmann, Proposition 1](https://arxiv.org/pdf/2309.00425v3)

[Polymath8a, §4.4 and §5.3](https://arxiv.org/pdf/1402.0811v3)

## Facts & Assumptions

**Given:** The parameters $\omega,\delta,\sigma$, scale functions $M(x),N(x)$, coefficient sequences $\alpha,\beta$, and the Siegel–Walfisz property of $\beta$.

[F1] [[def-siegel-walfisz-coefficient-sequence]]: the input factor $\beta$ is uniformly equidistributed in reduced residue classes, with the divisor factor $\tau(qr)^{O(1)}$ and arbitrary fixed logarithmic saving.

[F2] [[thm-bilinear-bombieri-vinogradov-for-coefficients]]: the full-support quantitative bound retains its short-factor losses; its arbitrary-saving BV corollary applies when BOTH factor scales are at least a fixed power of the ambient scale. A hard product cutoff is not supplied by whole-support SW alone. The displayed parameter inequality implies $4\sigma<1$, which gives $N\ge x^{1/2-\sigma}$ with a fixed positive power, while $M\asymp x/N$ is also of positive-power size; thus the balanced scale condition can be met here. The present held route must still verify the localized SW hypotheses for its hard cutoff, rather than treating the old unrestricted-cutoff transcription as a proved input.

[F3] [[thm-rational-phase-incomplete-sum-bound]]: the incomplete reciprocal-rational phase bounds are stated only when the smoothing scale $N$ is at least the congruence modulus $d$, in addition to the dense-divisibility and other displayed hypotheses. Any application must verify this inequality. The supplier remains unproved.

## Proof obligation

Stadlmann's Proposition 1 is proved by the new $q$-van der Corput process in §3.2, a diagonal and large-divisor reduction, and Lemmas 8–17 controlling congruence removal, gcd sums, exponential phases and parameter ranges. This complete analytic argument has not been reconstructed in the local item. The direct edge to the Heath–Brown coefficient Siegel–Walfisz theorem was removed because Proposition 1 assumes that property as a hypothesis; the separate theorem is required by the later prime-distribution and minorant applications. This item remains escalated for its unsupplied §3 proof.

## Necessary source-convention correction

The native hard-window substitution into this generic-coefficient proposition is false, even with $M=N=\sqrt x$: an elementary nonprincipal-character block cancellation gives whole-support SW but a restricted modulus3 discrepancy at least $x/80$. The authentic preimage and full counterexample are recorded in `research/number-theory-all-141-2026-10-25-escalations/windowed-bilinear139/typeI-before/` and `typeI-hard-window-counterexample.md`. The actual source Proposition1(2.1) sums full coefficient support; its separate prime-exponent Definition1 uses a window. Only that necessary discrepancy convention is corrected here. The full generic coefficient family and numerical parameter region are retained, while the original dispersion proof remains held. A hard-window application must separately establish its valid localization, for example beginning with genuinely interval-stable factors; enhanced-level localization still needs its own dispersion argument, and no new hypothesis has been silently added to this source proposition.

## Corrected direct supplier scope

The rational-phase supplier formerly claimed the bound for all $N\ge1$; the range $N<d$ has an explicit counterexample. It now requires $N\ge d$. The dispersion reduction and each use of the phase estimate must establish that scale inequality in its own variables, or separately bound any remaining short-scale cases. This check is part of the still-unsupplied proof obligation above; neither the Type I/II theorem nor the phase supplier is made ready by the correction.

## Partial two-variable completion

The unconditional rank-three input needed here is the $n=3$ specialization of [[thm-weil-bound-for-hyper-kloosterman-sums]], which remains escalated with its sheaf-construction and purity supplier. Given that specific input, [[lem-two-variable-reciprocal-phase-completion-from-rank-three-bound]] proves Stadlmann §3.5 Lemma 12 by finite CRT, local rank-three completion, and Poisson summation, even for positive scales below one. For the congruence-restricted two-variable sum, write $m=qm′$ and substitute $d=qr+d_*$ and $n=qs+n_*$. Squarefreeness gives $(q,m′)=1$; the $q$-component of the phase is constant and the $m′$-component has the helper form. Its scales are $\Delta/q,N/q$, and the helper’s product of factors becomes exactly $q^{-1}(\Delta/\sqrt m+\sqrt m)(N/\sqrt m+\sqrt m)$. This supplies the finite congruence-removal step of Lemma 13, conditional on the rank-three input. This does not accept the rank-three theorem, the one-variable supplier, or the remaining Type I/II dispersion proof, and does not complete this item's public Statement.
