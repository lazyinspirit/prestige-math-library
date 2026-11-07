---
id: lem-function-field-pole-height-invariant-under-finite-extension
kind: lemma
title: Normalized pole height of a base-field function under finite extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-one-variable-function-field-with-constant-field
  - def-axiom-of-choice
  - def-relative-algebraic-closure
  - thm-finitely-generated-algebraic-extensions-are-finite
  - lem-proper-normal-curve-rational-function-map
  - lem-finite-flat-curve-fibre-degree
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

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field
datum with exact constants, let $L/K$ be finite, let $k_L$ be the relative
algebraic closure of $k$ in $L$, and let $C_L/k_L$ be a normal proper curve
model of $L$. For every $a\in K^\times$,
$$\frac{[k_L:k]}{[L:K]}
\sum_{u\in C_L\text{ closed}}\max(0,-\operatorname{ord}_u(a))[\kappa(u):k_L]
=\sum_{v\in C\text{ closed}}\max(0,-\operatorname{ord}_v(a))[\kappa(v):k].$$

## Statement references

[[def-one-variable-function-field-with-constant-field]]

[[def-relative-algebraic-closure]]

[[lem-proper-normal-curve-rational-function-map]]

[[lem-finite-flat-curve-fibre-degree]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a one-variable function-field datum
$(K,k,M_K)$ with exact constants, a finite extension $L/K$, the full constant
field $k_L$, normal proper curve models $C/k$ and $C_L/k_L$, and
$a\in K^\times$.

[F1] The field $k_L$ is finite over $k$. If a nonzero function on a normal
proper curve is transcendental over its constant field, the degree of its
pole fibre is the degree of the induced finite map to the projective line:
$$\sum_u\max(0,-\operatorname{ord}_u(a))[\kappa(u):k_L]
=[L:k_L(a)].$$
The same assertion on $C$ gives $[K:k(a)]$.
([[def-relative-algebraic-closure]],
[[thm-finitely-generated-algebraic-extensions-are-finite]],
[[lem-proper-normal-curve-rational-function-map]],
[[lem-finite-flat-curve-fibre-degree]])

[A1] The Axiom of Choice is assumed as required by the normal-curve map and
finite-flat fibre-degree suppliers. ([[def-axiom-of-choice]])

## Proof

1.1 If $a$ is algebraic over $k$, exactness of the constants gives $a\in k$.
Thus $a$ has order zero at every closed point of $C$ and of $C_L$, where it
lies in $k_L^\times$. Both pole sums vanish. [given, F1, A1]

1.2 Otherwise $a$ is transcendental over $k$. It remains transcendental over
$k_L$: if it were algebraic over the algebraic extension $k_L/k$, it would
be algebraic over $k$, a contradiction. By [F1], the two pole sums in the
statement, before their displayed normalization factors, are respectively
$[L:k_L(a)]$ and $[K:k(a)]$. [F1, given]

2.1 The tower law gives
$$[L:k(a)]=[L:K][K:k(a)]
=[L:k_L(a)][k_L(a):k(a)].$$
Since $a$ is transcendental, $[k_L(a):k(a)]=[k_L:k]$: a $k$-basis of
$k_L$ remains linearly independent over $k(a)$ after clearing denominators
and comparing coefficients of powers of the indeterminate $a$, and it spans
$k_L(a)$. [given, F1, algebra]

2.2 Rearranging step 2.1 yields
$$\frac{[k_L:k]}{[L:K]}[L:k_L(a)]=[K:k(a)].$$
Together with step 1.2 this is the asserted equality in the transcendental
case; step 1.1 covered the algebraic case. [step 1.1, step 1.2, step 2.1,
algebra] ∎
