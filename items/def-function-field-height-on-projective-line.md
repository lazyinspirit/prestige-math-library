---
id: def-function-field-height-on-projective-line
kind: definition
title: Absolute projective height on P¹ over a one-variable function field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-one-variable-function-field-with-constant-field
  - lem-projective-function-field-height-extension-invariance
  - def-relative-algebraic-closure
  - thm-finitely-generated-algebraic-extensions-are-finite
  - thm-normalization-glues-integral-finite-type-curves
  - lem-proper-normal-curve-rational-function-map
  - def-degree-divisor-proper-curve
justified_by:
  - thm-function-field-projective-height-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical Heights on Varieties with Morphisms, §1"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice and let $(K,k,M_K)$ be a one-variable
function-field datum with exact constants. For a finite extension $L/K$, let
$k_L$ be the relative algebraic closure of $k$ in $L$ and choose a normal
proper curve model $C_L/k_L$ with function field $L$. For
$P=[x:y]\in\mathbb P^1(L)$, let $\psi_P:C_L\to\mathbb P^1_{k_L}$ be the
morphism defined by $P$. Put $c_k=\log q$ if $k=\mathbb F_q$ and $c_k=1$
otherwise, and define
$$h_K(P)=c_k\,\frac{[k_L:k]}{[L:K]}\deg(\psi_P).$$
If $y\ne0$, this degree is zero when $x/y\in k_L$ and is
$[L:k_L(x/y)]$ otherwise; if $y=0$, the degree is zero. For every closed
point $u\in C_L$ set
$$|a|_{u/K}=\exp\!\left(-c_k[k_L:k]\operatorname{ord}_u(a)[\kappa(u):k_L]\right)
\quad(a\in L^\times),$$
and set $|0|_{u/K}=0$. The theorem below proves that $h_K(P)$ is independent
of the chosen finite field of definition and equals
$$\frac1{[L:K]}\sum_{u\in C_L\text{ closed}}\log\max(|x|_{u/K},|y|_{u/K}).$$

## Definition references

[[def-axiom-of-choice]]

[[def-one-variable-function-field-with-constant-field]]

[[lem-projective-function-field-height-extension-invariance]]

[[def-relative-algebraic-closure]]

[[thm-finitely-generated-algebraic-extensions-are-finite]]

[[thm-normalization-glues-integral-finite-type-curves]]

[[lem-proper-normal-curve-rational-function-map]]

