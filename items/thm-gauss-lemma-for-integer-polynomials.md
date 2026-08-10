---
id: thm-gauss-lemma-for-integer-polynomials
kind: theorem
title: 'Gauss lemma: primitive factorisations over Q can be cleared to primitive factorisations over Z'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-gauss-content-lemma, thm-rat-field, lem-int-cancellation, def-irreducible-and-prime-elements-in-a-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

[L2] The rational numbers form a field, and every finite set of rational coefficients admits a common nonzero integer denominator ([[thm-rat-field]]).

[L3] Nonzero integers cancel in products ([[lem-int-cancellation]]).

[L4] Irreducibility means that a nonzero nonunit has no factorization into two nonunits ([[def-irreducible-and-prime-elements-in-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 Clear denominators using [L2] and divide the resulting integer polynomials by their positive contents to write $g=rG$ and $h=sH$ with $r,s\in\mathbb Q^\times$ and primitive $G,H\in\mathbb Z[x]$ of the same positive degrees as $g,h$. [given, L1, L2, construct]

2.1 The equality $f=rsGH$, after writing $rs=a/b$ in lowest terms with $b>0$, gives $bf=aGH$; [L1] makes both $f$ and $GH$ primitive, so their content characterizations force $b=|a|$, and coprimality of $a,b$ with [L3] gives $a/b=\pm1$; hence $f=\pm GH$. [step 1.1, L1, L2, L3, algebra]

3.1 Any integer factorization is also rational, while steps 1.1 and 2.1 turn every rational positive-degree factorization into an integer one; by [L4], irreducibility over the two rings is therefore equivalent for primitive positive-degree polynomials. [step 1.1, step 2.1, L4] ∎
