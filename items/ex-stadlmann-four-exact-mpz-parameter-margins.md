---
id: ex-stadlmann-four-exact-mpz-parameter-margins
kind: example
title: "Exact MPZ parameter margins in Stadlmann’s four small-m bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§2.1.4, displayed (omega, delta) values, printed p. 9"
---

## Example

Interpret each terminating decimal as an exact rational. For the four pairs
$$(\omega,\delta)=(0.00556625,0.0207987),\ (0.00768602,0.0144419),\ (0.00883292,0.0110012),\ (0.0095447064335,0.0088658806979),$$
the margins $1-80\omega-80\delta/3$ are respectively
$$\frac{17}{250000},\qquad\frac{1}{937500},\qquad\frac{1}{937500},\qquad\frac{1}{23437500000}.$$
All four pairs have positive coordinates and satisfy $80\omega+80\delta/3<1$. This proves only that linear parameter condition; it proves no variational bound, MPZ estimate, admissible-tuple diameter, or prime-gap bound.

## Example references

[Stadlmann, §2.1.4](https://arxiv.org/pdf/2309.00425v3)

## Verification

**Given:** The four exact decimal pairs.

1.1 For a row whose decimal coordinates have common denominator $B$ and numerators $a,b$, the margin equals $(3B-240a-80b)/(3B)$. For the first three rows choose $B=10^8$. Their numerator pairs are $(556625,2079870)$, $(768602,1444190)$ and $(883292,1100120)$; the three margin numerators are respectively $20400,320,320$. Dividing by $3\cdot10^8$ gives the first three fractions in the Example. [given, algebra]

2.1 For the fourth row take $B=10^{13}$ and $(a,b)=(95447064335,88658806979)$. The margin numerator is $3B-240a-80b=1280$, so the margin is $1280/(3\cdot10^{13})=1/23437500000$. Every displayed coordinate is positive, and each calculated numerator is positive, proving all claims. [given, step 1.1, algebra] ∎

## Source notes

The native batch-139 author supplied the initial exact-margin draft. The present owner-spawned author independently derived the common-denominator calculation above. No large tuple or completed finite computation is imported.
