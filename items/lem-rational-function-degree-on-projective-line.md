---
id: lem-rational-function-degree-on-projective-line
kind: lemma
title: Degree of a rational function as a map of the projective line
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-rational-function-field-has-exact-constant-field
  - lem-gauss-lemma-over-a-ufd
  - thm-polynomial-degree-of-a-product-over-a-domain
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.1"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical Heights on Varieties with Morphisms, §1"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
verification: {}
---

## Statement

Let $k$ be a field, let $t$ be an indeterminate over $k$, let
$a,b\in k[T]$ be coprime with $b\ne0$, and suppose $f=a(t)/b(t)\in k(t)$ is
nonconstant. Then
$$[k(t):k(f)]=\max(\deg a,\deg b).$$

## Statement references

[[lem-gauss-lemma-over-a-ufd]]

[[thm-polynomial-degree-of-a-product-over-a-domain]]

[[lem-rational-function-field-has-exact-constant-field]]

[[def-field-of-fractions]]

[[def-polynomial-ring-over-a-commutative-ring]]

[[cor-polynomial-ring-over-a-field-is-a-pid]]

## Facts & Assumptions

**Given:** A field $k$, coprime polynomials $a,b\in k[T]$ with $b\ne0$,
an indeterminate $t$, and the nonconstant rational function $f=a(t)/b(t)$.

[F1] For a UFD $R$, a primitive polynomial in $R[T]$ is irreducible over
$R[T]$ exactly when it is irreducible over the fraction field after
coefficient extension. ([[lem-gauss-lemma-over-a-ufd]])

[F2] The degree of a product of nonzero polynomials over a domain is the sum
of their degrees. ([[thm-polynomial-degree-of-a-product-over-a-domain]])

[F3] Every element of $k(t)$ algebraic over $k$ lies in $k$; hence the
nonconstant $f$ in the statement is transcendental over $k$.
([[lem-rational-function-field-has-exact-constant-field]])

## Proof

1.1 By [F3], $f$ is transcendental over $k$. Let $U$ be an indeterminate and
set $Q(U,T)=a(T)-U b(T)$. This is
irreducible in $k[U,T]$: in a factorization, degrees in $U$ add to one, so
one factor is independent of $U$ and lies in $k[T]$; it then divides both
coefficients $a$ and $b$ of $Q$ as a polynomial in $U$, hence is a unit by
coprimality. [F2, F3, given, algebra]

1.2 The polynomial $Q$ is primitive as a polynomial in $T$ over $k[U]$. If
a nonconstant $c(U)$ divided all its coefficients, then $c$ would have degree
one because each coefficient has degree at most one in $U$. Write
$c(U)$ proportional to $U-c_0$. Divisibility of every coefficient
$a_i-Ub_i$ would force $a_i=c_0b_i$ for every $i$, giving $a=c_0b$ and
making $f$ constant, a contradiction. [given, algebra]

2.1 By [F1], $Q$ is irreducible in $k(U)[T]$. The isomorphism
$k(U)\to k(f)$ sending $U$ to the transcendental element $f$ carries it to
$a(T)-f b(T)$, which has root $t$. Its degree in $T$ is
$n=\max(\deg a,\deg b)$: if the degrees tie, its leading coefficient is
$a_n-fb_n\ne0$ because $f$ is nonconstant; if they differ, the larger-degree
leading coefficient survives. Thus this irreducible polynomial is the
minimal polynomial of $t$ over $k(f)$ and $[k(t):k(f)]=n$.
[F1, F2, given, algebra]

2.2 Step 2.1 is the claimed degree formula. [step 2.1] ∎
