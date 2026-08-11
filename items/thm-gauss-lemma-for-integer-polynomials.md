---
id: thm-gauss-lemma-for-integer-polynomials
kind: theorem
title: 'Gauss lemma: primitive factorisations over Q can be cleared to primitive factorisations over Z'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-gauss-content-lemma, def-rationals, thm-rat-field, lem-int-embeds-rat, lem-int-cancellation, def-irreducible-and-prime-elements-in-a-domain]
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
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.14'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Keith Conrad, Irreducibility Tests in Q[T], Appendix A.2'
      url: 'https://kconrad.math.uconn.edu/blurbs/ringtheory/irredtestsoverQ.pdf'
pipeline_run: null
---

## Statement

Let $f\in\mathbb Z[x]$ be primitive. If $f=gh$ in $\mathbb Q[x]$ with both $g$ and $h$ of positive degree, then there are primitive $G,H\in\mathbb Z[x]$ of positive degree such that $f=\pm GH$.

Consequently, a primitive polynomial of positive degree is irreducible in $\mathbb Z[x]$ if and only if it is irreducible in $\mathbb Q[x]$.

## Facts & Assumptions

**Given:** A primitive integer polynomial $f$ and a factorization $f=gh$ in $\mathbb Q[x]$.

[L1] Products of primitive integer polynomials are primitive, and contents multiply ([[lem-gauss-content-lemma]]).

[L2] Every rational number has an integer numerator and a nonzero integer denominator ([[def-rationals]]).

[L3] The rational numbers form a field, and the integers embed in them preserving addition and multiplication ([[thm-rat-field]], [[lem-int-embeds-rat]]).

[L4] Products of nonzero integers are nonzero, and nonzero integers cancel in products ([[lem-int-cancellation]]).

[L5] Irreducibility means that a nonzero nonunit has no factorization into two nonunits ([[def-irreducible-and-prime-elements-in-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], choose an integer numerator and nonzero integer denominator for each of the finitely many coefficients of $g$ and $h$. Their denominator products are nonzero by [L4] and are common denominators, so [L3] and division by the positive contents of the cleared polynomials give $g=rG$ and $h=sH$ with $r,s\in\mathbb Q^\times$ and primitive $G,H\in\mathbb Z[x]$ of the same positive degrees as $g,h$. [given, L1, L2, L3, L4, construct]

2.1 The equality $f=rsGH$, after writing $rs=a/b$ in lowest terms with $b>0$, gives $bf=aGH$; [L1] makes both $f$ and $GH$ primitive, so content multiplicativity gives $b=|a|$ and therefore $a/b=\pm1$; hence $f=\pm GH$. [step 1.1, L1, L2, L3, algebra]

3.1 Any integer factorization of a primitive polynomial into two nonunits has both factors of positive degree: a nonunit constant factor would have content greater than $1$, contradicting [L1]. Conversely, steps 1.1 and 2.1 turn every rational positive-degree factorization into an integer one. By [L5], irreducibility over the two rings is therefore equivalent for primitive positive-degree polynomials. [step 1.1, step 2.1, L1, L5] ∎
