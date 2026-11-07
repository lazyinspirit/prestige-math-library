---
id: lem-projective-function-field-height-extension-invariance
kind: lemma
title: Field-of-definition invariance of projective function-field height
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-one-variable-function-field-with-constant-field
  - def-relative-algebraic-closure
  - thm-finitely-generated-algebraic-extensions-are-finite
  - lem-proper-normal-curve-rational-function-map
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical Heights on Varieties with Morphisms, §1"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K/k$ be a one-variable function field with
exact constants, let $L/K$ be finite, and let $P\in\mathbb P^1(L)$. For a
finite extension $L'/L$, use
the full constant fields $k_L$ and $k_{L'}$ and the induced curve models. The
normalized curve-degree expression
$$c_k\frac{[k_L:k]}{[L:K]}\deg(\psi_P)$$
is unchanged when computed over $L'$ instead of $L$.

## Statement references

[[def-axiom-of-choice]]

[[def-function-field-height-on-projective-line]]

[[def-one-variable-function-field-with-constant-field]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a one-variable function field $K/k$ with exact
constants, finite extensions $L/K$ and $L'/L$, a point $P=[x:y]\in\mathbb P^1(L)$, and the
degree convention in [[def-function-field-height-on-projective-line]].

[F1] The relative algebraic closure of $k$ in each finite extension is its
constant field, and a nonconstant coordinate $f=x/y$ defines a morphism of
degree $[L:k_L(f)]$ from the corresponding normal proper curve.
([[def-one-variable-function-field-with-constant-field]],
[[def-relative-algebraic-closure]],
[[thm-finitely-generated-algebraic-extensions-are-finite]],
[[lem-proper-normal-curve-rational-function-map]])

[A1] The Axiom of Choice is required by the normal-curve map supplier.
([[def-axiom-of-choice]])

## Proof

1.1 If $P$ is constant over $k_L$, then it is also constant over $k_{L'}$,
so both curve-degree expressions are zero. Otherwise put $f=x/y$. By [F1],
the degrees over $L$ and $L'$ are respectively $[L:k_L(f)]$ and
$[L':k_{L'}(f)]$. [A1, F1, given]

1.2 In the nonconstant case, $f$ is transcendental over $k_{L'}$: if it were
algebraic over $k_{L'}$, then it would be algebraic over $k_L$, contrary to
the exact constant field of $L$. Choose a $k_L$-basis of $k_{L'}$. It remains
linearly independent over $k_L(f)$, since clearing denominators in a relation
over $k_L(f)$ gives a polynomial relation in the transcendental $f$, and each
coefficient then vanishes by basis independence. The $k_L(f)$-span is closed
under multiplication because products of basis elements are $k_L$-linear
combinations of basis elements. It is a finite-dimensional subring of $L'$. For
each nonzero element, multiplication is an injective linear map of this finite-
dimensional space to itself, hence surjective; the span is therefore a field.
It contains $k_{L'}$ and $k_L(f)$, so it equals
$k_{L'}(f)$. Thus $[k_{L'}(f):k_L(f)]=[k_{L'}:k_L]$.
[A1, F1, given, algebra]

2.1 The tower formula gives
$[L':k_L(f)]=[L':L][L:k_L(f)]$ and
$[L':k_L(f)]=[k_{L'}:k_L][L':k_{L'}(f)]$. Therefore
$$[L':k_{L'}(f)]=\frac{[L':L]}{[k_{L'}:k_L]}[L:k_L(f)].$$
Multiplication by $c_k[k_{L'}:k]/[L':K]$ cancels the factors
$[L':L]$ and $[k_{L'}:k_L]$, leaving
$c_k[k_L:k][L:K]^{-1}[L:k_L(f)]$. [F1, algebra]

3.1 Both the constant and nonconstant cases give the same value over $L$ and
$L'$. Taking a compositum proves independence of every finite field of
definition for a point of $\mathbb P^1(\overline K)$. [step 1.1, step 2.1] ∎
