---
id: lem-rational-function-field-has-exact-constant-field
kind: lemma
title: A rational function field has no new algebraic constants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-relative-algebraic-closure
  - def-polynomial-ring-over-a-commutative-ring
  - def-field-of-fractions
  - cor-polynomial-ring-over-a-field-is-a-pid
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

Let $k$ be a field and let $t$ be an indeterminate over $k$. The field $k$
is relatively algebraically closed in $k(t)$; equivalently, every element of
$k(t)$ algebraic over $k$ belongs to $k$.

## Statement references

[[def-relative-algebraic-closure]]

[[def-polynomial-ring-over-a-commutative-ring]]

[[def-field-of-fractions]]

[[cor-polynomial-ring-over-a-field-is-a-pid]]

## Facts & Assumptions

**Given:** A field $k$, an indeterminate $t$, and $f\in k(t)$ algebraic
over $k$.

[F1] The field $k(t)$ is the fraction field of $k[T]$; the ring $k[T]$ is a
principal ideal domain, so cancelling a greatest common divisor gives a
reduced expression $f=a(t)/b(t)$ with coprime $a,b\in k[T]$ and $b\ne0$.
([[def-field-of-fractions]], [[cor-polynomial-ring-over-a-field-is-a-pid]])

## Proof

1.1 If $f\in k$, the conclusion holds. Otherwise write
$f=a(t)/b(t)$ as in [F1]. The polynomial
$a(T)-f b(T)\in k(f)[T]$ is nonzero: if all its coefficients vanished,
then a nonzero coefficient of $b$ would give $f$ as a ratio of elements of
$k$, contrary to $f\notin k$. It has root $t$, so $t$ is algebraic over
$k(f)$. [F1, given, algebra]

1.2 If $f$ were algebraic over $k$, then $k(f)/k$ would be finite and
$t$ would be algebraic over $k$ by transitivity of algebraicity, contradicting
that $t$ is an indeterminate. Thus every element algebraic over $k$ lies in
$k$. [step 1.1, given, algebra]

2.1 Every element $c\in k$ is algebraic over $k$, since it is a root of
$T-c\in k[T]$. Combining this with step 1.2 proves the asserted equivalence
and hence that $k$ is relatively algebraically closed in $k(t)$.
[given, step 1.2, algebra] ∎
