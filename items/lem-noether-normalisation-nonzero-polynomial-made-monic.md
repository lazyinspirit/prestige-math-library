---
id: lem-noether-normalisation-nonzero-polynomial-made-monic
kind: lemma
title: "Over an infinite field, a triangular change makes a nonzero polynomial monic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Remark 8.4"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §15"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $k$ be an infinite field, let $n\ge 1$, and let
$f\in k[x_1,\ldots,x_n]$ be nonzero. Then there exist
$a_1,\ldots,a_{n-1}\in k$ and $c\in k^\times$ such that
$$g(x_1,\ldots,x_n)=c\,f(x_1+a_1x_n,\ldots,x_{n-1}+a_{n-1}x_n,x_n)$$
is monic as a polynomial in $x_n$ with coefficients in
$k[x_1,\ldots,x_{n-1}]$.

## Facts & Assumptions

**Given:** An infinite field $k$, an integer $n\ge 1$, and a nonzero polynomial $f\in k[x_1,\ldots,x_n]$.

[L1] A nonzero polynomial over an integral domain does not vanish on every tuple from an infinite subring ([[lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]]).

## Proof

**Proof technique:** direct.

1.1 Let $d$ be the total degree of $f$, and let $H$ be the homogeneous degree $d$ part of $f$. Then $H$ is nonzero. [given, algebra]

2.1 The polynomial $H(X_1,\ldots,X_{n-1},1)$ in $k[X_1,\ldots,X_{n-1}]$ is nonzero, so [L1] yields $a_1,\ldots,a_{n-1}\in k$ with $H(a_1,\ldots,a_{n-1},1)\ne 0$. [L1, step 1.1, choose]

3.1 Substitute $x_i+a_ix_n$ for $x_i$ when $i<n$. Every degree-$d$ monomial of $f$ contributes to the coefficient of $x_n^d$, and the lower-degree part of $f$ contributes only lower powers of $x_n$. Therefore the coefficient of $x_n^d$ in the transformed polynomial is exactly $H(a_1,\ldots,a_{n-1},1)\in k^\times$. [step 2.1, algebra]

4.1 Multiplying by the inverse scalar $c=H(a_1,\ldots,a_{n-1},1)^{-1}$ makes the transformed polynomial monic in $x_n$. [step 3.1, algebra] ∎
