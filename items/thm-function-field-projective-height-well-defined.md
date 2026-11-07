---
id: thm-function-field-projective-height-well-defined
kind: theorem
title: Well-definedness and nonnegativity of the projective function-field height
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-function-field-height-on-projective-line
  - lem-projective-function-field-height-extension-invariance
  - def-relative-algebraic-closure
  - def-degree-divisor-proper-curve
  - def-principal-weil-divisor-and-class-group
  - lem-proper-normal-curve-rational-function-map
  - lem-finite-flat-curve-fibre-degree
  - thm-principal-divisor-degree-zero-proper-curve
  - def-axiom-of-choice
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

Assume the Axiom of Choice, let $(K,k,M_K)$ be a one-variable function-field
datum with exact constants, let $L/K$ be finite, and let
$P=[x:y]\in\mathbb P^1(L)$. The divisor sum defining the projective height is
finite, is independent of the projective coordinates and of the finite field
of definition, and equals its curve-degree expression. It is nonnegative. If
$P$ has coordinates algebraic over $k$, then its height is zero.

## Statement references

[[def-function-field-height-on-projective-line]]

[[lem-projective-function-field-height-extension-invariance]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a one-variable function-field datum
$(K,k,M_K)$ with exact constants, a finite extension $L/K$, a normal proper
curve model $C_L/k_L$ of $L$, and $P=[x:y]\in\mathbb P^1(L)$.

[F1] The relative algebraic closure $k_L$ of $k$ in $L$ is finite over $k$;
the rational function $f=x/y$ defines a morphism $C_L\to\mathbb P^1_{k_L}$
of degree $[L:k_L(f)]$ when it is nonconstant, and degree zero when it is
constant; its pole-fibre degree is
$$\sum_{u\in C_L\text{ closed}}\max(0,-\operatorname{ord}_u(f))[\kappa(u):k_L]
=[L:k_L(f)].$$
([[def-relative-algebraic-closure]],
[[lem-proper-normal-curve-rational-function-map]],
[[lem-finite-flat-curve-fibre-degree]])

[F2] For every $a\in L^\times$, the principal divisor on $C_L$ is finite
and has degree zero:
$$\sum_{u\in C_L\text{ closed}}\operatorname{ord}_u(a)[\kappa(u):k_L]=0.$$
This holds under the Axiom of Choice, which implies Dependent Choice.
([[thm-principal-divisor-degree-zero-proper-curve]],
[[def-degree-divisor-proper-curve]],
[[def-principal-weil-divisor-and-class-group]])

[F3] For finite extensions $L'/L$, the normalized curve-degree expression
$c_k[k_L:k][L:K]^{-1}\deg(\psi_P)$ is unchanged when calculated over $L'$;
the result for two finite fields of definition follows by passing to their
compositum. ([[lem-projective-function-field-height-extension-invariance]])

[A1] The Axiom of Choice is used by the normal-curve map, the finite-flat
fibre-degree lemma, and the principal-divisor theorem. These suppliers also
use Dependent Choice only where declared; no additional choice axiom is used.
([[def-axiom-of-choice]],
[[lem-proper-normal-curve-rational-function-map]],
[[lem-finite-flat-curve-fibre-degree]],
[[thm-principal-divisor-degree-zero-proper-curve]])

## Proof

1.1 If $x=0$ and $y\ne0$, the local sum is
$-c_k[k_L:k]\sum_u\operatorname{ord}_u(y)[\kappa(u):k_L]=0$ by [F2], and the
curve-degree height is zero. Otherwise, if $y\ne0$, put $f=x/y$. The local
absolute value in the definition gives
$$\log\max(|x|_{u/K},|y|_{u/K})
=-c_k[k_L:k]\min(\operatorname{ord}_u(x),\operatorname{ord}_u(y))[\kappa(u):k_L].$$
The right side is
$$-c_k[k_L:k]\operatorname{ord}_u(y)[\kappa(u):k_L]
+c_k[k_L:k]\max(0,-\operatorname{ord}_u(f))[\kappa(u):k_L].$$
Summing the first term gives zero by [F2]. The second gives zero if $f$ is
constant and gives $c_k[k_L:k][L:k_L(f)]$ if $f$ is nonconstant, by [F1].
Thus the sum is finite and, after division by $[L:K]$, it is exactly the
height formula. [A1, F1, F2, given, algebra]

1.2 If $y=0$, then $x\ne0$ and the local sum is
$-c_k[k_L:k]\sum_u\operatorname{ord}_u(x)[\kappa(u):k_L]=0$ by [F2]. This
agrees with the degree-zero convention for the constant point $[1:0]$. Hence
the divisor sum agrees with the curve-degree formula in all cases and is
nonnegative. [A1, F2, step 1.1, given]

2.1 Replacing $(x,y)$ by $(\lambda x,\lambda y)$ for $\lambda\in L^\times$
adds $[L:K]^{-1}\sum_u\log|\lambda|_{u/K}$ to the height. By the definition
of $|\cdot|_{u/K}$ this is
$-c_k[k_L:k][L:K]^{-1}\sum_u\operatorname{ord}_u(\lambda)[\kappa(u):k_L]$,
which is zero by [F2]. Thus the value is independent of the projective
coordinates. [F2, step 1.1, algebra]

2.2 For a point defined over nested finite extensions $L'/L/K$, [F3] gives
the same height computed from either curve model. For two arbitrary finite
fields of definition, their compositum is finite over each, so applying [F3]
twice proves independence of the chosen field. [F3, given]

3.1 If both coordinates of $P$ are algebraic over $k$, then they belong to
$k_L$ by definition of the relative algebraic closure. The induced map
$C_L\to\mathbb P^1_{k_L}$
is constant and has degree zero, so the height is zero by the degree formula;
field independence from step 2.2 gives the same value in any field of
definition. [F1, F3, step 2.2, given] ∎
