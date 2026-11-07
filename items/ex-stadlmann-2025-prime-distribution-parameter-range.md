---
id: ex-stadlmann-2025-prime-distribution-parameter-range
kind: example
title: "Stadlmann’s smooth-modulus exponent and parameter choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps: [thm-stadlmann-smooth-modulus-prime-distribution, thm-stadlmann-smooth-modulus-mpz-criterion]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "Theorem 1 and §2.1.2, printed pp. 2 and 7–9"
---

## Example

For a requested saving $\varepsilon>0$, put $\varepsilon_0=\min(\varepsilon,1/80)$, $\omega=1/80-\varepsilon_0/2$, and $\delta=\varepsilon_0$. Then $\omega>0$, $\delta>0$, and the MPZ parameter inequality $80\omega+80\delta/3<1$ holds. Its modulus cutoff is $x^{1/2+2\omega}=x^{1/2+1/40-\varepsilon_0}$, which is at least the requested cutoff $x^{1/2+1/40-\varepsilon}$. Thus the parameter choice gives the distribution estimate at the requested exponent, and for $0<\varepsilon\le1/80$ it gives that exponent exactly.

## Example references

[[thm-stadlmann-smooth-modulus-prime-distribution|Stadlmann's exponent 1/2+1/40−ε for prime distribution to smooth moduli]]

[[thm-stadlmann-smooth-modulus-mpz-criterion|MPZ criterion from Type I/II and Type III estimates]]

[Stadlmann, Theorem 1 and §2.1.2](https://arxiv.org/pdf/2309.00425v3)

## Facts & Assumptions

**Given:** $\varepsilon>0$, the MPZ criterion, and Stadlmann's Theorem 1.

[F1] [[thm-stadlmann-smooth-modulus-mpz-criterion]]: if $\omega,\delta>0$ and $80\omega+80\delta/3<1$, the corresponding $\Lambda$ discrepancy estimate holds to moduli $q\le x^{1/2+2\omega}$ dividing $P(x^\delta)$.

[F2] [[thm-stadlmann-smooth-modulus-prime-distribution]]: the prime discrepancy estimate holds for every positive saving $\varepsilon$ with some positive smoothness parameter.

## Verification

1.1 Since $0<\varepsilon_0\le1/80$, we have $0<\omega<1/80<1/12$ and $\delta>0$. Moreover
$$80\omega+\frac{80}{3}\delta=1-40\varepsilon_0+\frac{80}{3}\varepsilon_0=1-\frac{40}{3}\varepsilon_0<1.$$
Thus [F1] applies. [F1, given, algebra]

1.2 The cutoff exponent is $1/2+2\omega=1/2+1/40-\varepsilon_0$. Because $\varepsilon_0\le\varepsilon$, this is at least $1/2+1/40-\varepsilon$. The desired modulus set is therefore a subset of the one controlled by [F1]; its absolute discrepancies are nonnegative, so restricting the modulus sum preserves the upper bound. For $\varepsilon\le1/80$, $\varepsilon_0=\varepsilon$ and equality holds. [F1, given, step 1.1, algebra] ∎

## Proof status

The parameter calculation is complete conditional on [F1]. The MPZ and prime-distribution items now contain conditional local reductions; the Type I/II and Type III proofs on which MPZ depends remain unsupplied. The Heath–Brown coefficient Siegel–Walfisz input was separately repaired, so the former R1 zero-free-region hold is not the blocker for this route. This example remains escalated; no supplier acceptance or readiness is asserted.
