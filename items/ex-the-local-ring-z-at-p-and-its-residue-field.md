---
id: ex-the-local-ring-z-at-p-and-its-residue-field
kind: example
title: '$\mathbb Z_{(p)}$ consists of rationals with denominator not divisible by $p$, has maximal ideal $p\mathbb Z_{(p)}$, and residue field $\mathbb F_p$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-at-a-prime-is-local, cor-residue-field-of-a-localisation-at-a-prime, def-localisation-at-a-prime-ideal, prop-integers-modulo-n-as-a-quotient-ring, thm-z-mod-p-is-a-field, thm-quotient-is-domain-iff-ideal-prime, lem-field-is-a-commutative-ring, ex-fraction-field-of-the-integers-is-the-rationals, thm-universal-property-of-localisation, prop-localisation-zero-equality-and-kernel-criteria]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.18: Local rings'
      url: 'https://stacks.math.columbia.edu/tag/07BH'
pipeline_run: frontier-12
---

## Example

For a positive prime integer $p$,
$$ \mathbb Z_{(p)}=\left\{\frac ab\in\mathbb Q:a,b\in\mathbb Z,\ p\nmid b\right\}. $$
It is local with maximal ideal $p\mathbb Z_{(p)}$, and its residue field is canonically $\mathbb F_p=\mathbb Z/p\mathbb Z$.

## Facts & Assumptions

**Given:** A positive prime integer $p$.

[F1] The quotient $\mathbb Z/p\mathbb Z$ is a field for prime $p$; every field is a domain; and $R/P$ is a domain exactly when $P$ is prime ([[thm-z-mod-p-is-a-field]], [[lem-field-is-a-commutative-ring]], [[thm-quotient-is-domain-iff-ideal-prime]], [[prop-integers-modulo-n-as-a-quotient-ring]]).

[F2] Localising at a prime gives a local ring with maximal ideal the extended prime ([[thm-localisation-at-a-prime-is-local]]).

[F3] Its residue field is $\operatorname{Frac}(R/\mathfrak p)$ ([[cor-residue-field-of-a-localisation-at-a-prime]]).

[F4] The field of fractions of $\mathbb Z$ is $\mathbb Q$ ([[ex-fraction-field-of-the-integers-is-the-rationals]]).

[F5] A homomorphism that sends all denominators to units factors uniquely through the localisation ([[thm-universal-property-of-localisation]]).

[F6] A localisation fraction $a/b$ is zero exactly when some denominator annihilates $a$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F7] Localisation at a prime ideal $P$ uses the multiplicative set $R\setminus P$ ([[def-localisation-at-a-prime-ideal]]).

## Verification

**Proof technique:** direct.

1.1 Fact [F1] makes $(p)$ a prime ideal, and [F7] says that the denominators in $\mathbb Z_{(p)}$ are exactly the integers outside $(p)$, namely those not divisible by $p$. Such integers are nonzero and hence units in $\mathbb Q$, so [F5] gives a map $\mathbb Z_{(p)}\to\mathbb Q$ sending $a/b$ to the same fraction. If its image is zero, multiplication by the nonzero $b$ in $\mathbb Q$ gives $a=0$, and [F6] makes $a/b=0$ in the localisation; thus the map is injective. Its image is exactly the displayed set. [F1, F4, F5, F6, F7, algebra]

2.1 By [F2], the ring is local with maximal ideal $(p)\mathbb Z_{(p)}=p\mathbb Z_{(p)}$. By [F3], its residue field is $\operatorname{Frac}(\mathbb Z/p\mathbb Z)$. Since the latter base ring is already a field by [F1], every fraction satisfies $a/b=(ab^{-1})/1$, so its fraction field is canonically itself. [F1, F2, F3, algebra] ∎
