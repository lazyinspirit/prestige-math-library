---
id: thm-polynomial-is-separable-iff-coprime-to-its-derivative
kind: theorem
title: 'A nonzero polynomial over a field is separable exactly when its gcd with its derivative is $1$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-repeated-root-derivative-criterion, lem-polynomial-gcd-is-stable-under-field-extension, thm-bezout-identity-for-polynomials, thm-polynomial-quotient-is-a-field-iff-irreducible, lem-polynomial-factorisation-into-irreducibles, thm-universal-property-of-a-polynomial-ring, prop-canonical-quotient-ring-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Proposition 1.2'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Statement

Let $F$ be a field and let $0\ne f\in F[x]$. Then $f$ is separable over $F$ if and only if $\gcd(f,f')=1$ in $F[x]$.

## Facts & Assumptions

**Given:** A field $F$ and a nonzero polynomial $f\in F[x]$.

[L1] In any extension field, a root of $f$ is repeated exactly when it is also a root of $f'$ ([[thm-repeated-root-derivative-criterion]]).

[L2] The monic gcd of two base-field polynomials is unchanged after a field extension ([[lem-polynomial-gcd-is-stable-under-field-extension]]).

[L3] If $p$ is irreducible, then $F[x]/(p)$ is a field ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[L4] Every nonzero nonunit polynomial over a field has an irreducible factor ([[lem-polynomial-factorisation-into-irreducibles]]).

[L5] A coefficient homomorphism and a chosen image of $x$ determine an evaluation homomorphism ([[thm-universal-property-of-a-polynomial-ring]]).

[L6] The canonical map $R\to R/I$ is a surjective ring homomorphism with kernel $I$ ([[prop-canonical-quotient-ring-map]]).

[L7] For polynomials not both zero over a field, their monic gcd is a polynomial linear combination of them ([[thm-bezout-identity-for-polynomials]]).

## Proof

**Proof technique:** direct.

1.1 If $\gcd(f,f')=1$, [L2] says that the gcd remains $1$ in every extension field, and [L7] supplies a Bézout identity there. A common root of $f$ and $f'$ would evaluate that identity to $0=1$ by [L5], so [L1] shows that $f$ has no repeated root and is separable. [given, L1, L2, L5, L7]

1.2 Conversely, if $d=\gcd(f,f')\ne1$, then $d$ is a nonconstant nonunit and [L4] supplies an irreducible factor $p$ of $d$. Fact [L3] makes $E=F[x]/(p)$ a field. No nonzero constant lies in $(p)$ because a nonconstant polynomial cannot divide it, so [L6] makes the canonical map $F\to E$ injective and identifies $F$ with a subfield of $E$. Under the evaluation map of [L5], the residue class of $x$ is a common root in $E$ of $p$, hence of $d$, $f$, and $f'$. [given, L2, L3, L4, L5, L6]

2.1 By [L1], the common root from step 1.2 is a repeated root of $f$, so a separable $f$ must have $d=1$; combined with step 1.1, this proves the biconditional. [step 1.1, step 1.2, L1] ∎
