---
id: ex-inverting-six-in-the-integers
kind: example
title: '$\mathbb Z[1/6]$ consists exactly of rationals $a/6^n$ and inverts precisely the primes $2$ and $3$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-localisation, thm-universal-property-of-localisation, prop-localisation-zero-equality-and-kernel-criteria, ex-fraction-field-of-the-integers-is-the-rationals, def-prime, cor-prime-iff-euclid-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.9: Localization'
      url: 'https://stacks.math.columbia.edu/tag/00CM'
pipeline_run: frontier-12
---

## Example

Inside $\mathbb Q$,
$$ \mathbb Z[1/6]=\mathbb Z_6=\left\{\frac a{6^n}:a\in\mathbb Z,\ n\in\mathbb N\right\}. $$
Among positive prime integers, exactly $2$ and $3$ become units in this ring.

## Facts & Assumptions

**Given:** The principal localisation of $\mathbb Z$ at $6$ and its canonical map into $\mathbb Q$.

[F1] The principal localisation at $6$ consists of fractions $a/6^n$ ([[def-principal-localisation]]).

[F2] The field $\operatorname{Frac}(\mathbb Z)$ is canonically $\mathbb Q$ ([[ex-fraction-field-of-the-integers-is-the-rationals]]).

[F3] For an integer prime $q>1$, $q\mid ab$ implies $q\mid a$ or $q\mid b$ ([[cor-prime-iff-euclid-property]]).

[F4] A map that sends the chosen denominators to units extends uniquely through the localisation ([[thm-universal-property-of-localisation]]).

[F5] A fraction $a/s$ is zero exactly when some denominator annihilates $a$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

## Verification

**Proof technique:** direct.

1.1 The inclusion $\mathbb Z\hookrightarrow\mathbb Q$ sends $6$ to a unit, so [F4] gives a map $\mathbb Z_6\to\mathbb Q$ with $a/6^n\mapsto a/6^n$. If its image is zero, multiplication by the nonzero element $6^n$ in the field $\mathbb Q$ gives $a=0$, and then [F5] makes $a/6^n=0$; hence the map is injective. Its image is exactly the set displayed in [F1]. [F1, F2, F4, F5, algebra]

2.1 The elements $2$ and $3$ are units because $2(3/6)=1$ and $3(2/6)=1$. [step 1.1, algebra]

3.1 If a positive prime $q$ is a unit, then $q(a/6^n)=1$ for some $a,n$, so $qa=6^n$. The case $n=0$ is impossible because $q>1$. For $n>0$, [F3] applied repeatedly to $6^n=2^n3^n$ gives $q\mid2$ or $q\mid3$, and primality with positivity forces $q=2$ or $q=3$. [F3, step 1.1, algebra] ∎
