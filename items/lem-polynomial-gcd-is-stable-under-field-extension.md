---
id: lem-polynomial-gcd-is-stable-under-field-extension
kind: lemma
title: 'The monic gcd of two base-field polynomials is unchanged after extending the coefficient field'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monic-greatest-common-divisor-of-polynomials, thm-bezout-identity-for-polynomials, def-subfield, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Lemma 1.1'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Statement

Let $F\subseteq E$ be a field extension and let $f,g\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.

## Facts & Assumptions

**Given:** A subfield $F\subseteq E$ and polynomials $f,g\in F[x]$ not both zero.

[L1] The monic gcd is the unique monic common divisor divisible by every common divisor ([[def-monic-greatest-common-divisor-of-polynomials]]).

[L2] If $d=\gcd(f,g)$ in $F[x]$, then $d=Af+Bg$ for some $A,B\in F[x]$ ([[thm-bezout-identity-for-polynomials]]).

[L3] A subfield has the same zero, one, operations, and inverses as the ambient field ([[def-subfield]]).

[L4] A coefficient inclusion extends uniquely to a ring homomorphism of polynomial rings ([[thm-universal-property-of-a-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $d$ be the monic gcd in $F[x]$; it divides $f,g$ there and hence in $E[x]$ under [L4], while [L2] remains the identity $d=Af+Bg$ in $E[x]$ by [L3] and [L4]. [given, L1, L2, L3, L4]

2.1 Every common divisor of $f,g$ in $E[x]$ divides the right side of the Bézout identity and hence divides $d$; since $d$ is monic, [L1] identifies it as the monic gcd computed in $E[x]$. [step 1.1, L1, L2] ∎
