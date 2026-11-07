---
id: thm-product-formula-for-function-fields
kind: theorem
title: "Product formula for a function field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-finite-field-and-its-order
  - def-global-field
  - def-place-of-a-global-field
  - def-principal-weil-divisor-and-class-group
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-curves-function-fields-equivalence
  - thm-principal-divisor-degree-zero-proper-curve
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 5, Product Formula"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter VIII"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a function field with exact constant
field $k=\mathbb F_q$, represented as $k(C)$ for a smooth proper geometrically
integral curve $C/k$. For every $x\in K^\times$, use the normalized
function-field absolute values
$$|x|_v=q^{-\operatorname{ord}_v(x)[\kappa(v):k]}.$$
Then
$$\prod_{v\text{ a place of }K}|x|_v=1,$$
where all but finitely many factors equal $1$ and the product is finite.

## Statement references

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite field $k=\mathbb F_q$; a smooth
proper geometrically integral curve $C/k$; a $k$-isomorphism $K\cong k(C)$;
and $x\in K^\times$.

[A1] AC implies DC, as defined in the dependent-choice principle, which
supplies the finite-support premise of the
principal-divisor definition. ([[def-axiom-of-choice]],
[[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

[F1] A function field with exact finite constant field $k$ has a smooth
proper geometrically integral curve model under AC.
([[def-global-field]], [[thm-curves-function-fields-equivalence]])

[F2] The places of $K$ correspond to the closed points $v$ of $C$; their
normalized absolute values are
$|x|_v=q^{-\operatorname{ord}_v(x)[\kappa(v):k]}$.
([[def-place-of-a-global-field]])

[F3] Under DC, a principal divisor is the finite sum
$\operatorname{div}(x)=\sum_v\operatorname{ord}_v(x)[v]$, with degree
$\deg_k\operatorname{div}(x)=\sum_v\operatorname{ord}_v(x)[\kappa(v):k]$.
([[def-principal-weil-divisor-and-class-group]],
[[def-divisor-smooth-proper-curve]],
[[def-degree-divisor-proper-curve]])

[F4] Under AC, every principal divisor on a normal proper curve has degree
zero. ([[thm-principal-divisor-degree-zero-proper-curve]])

## Proof



**Given:** The data and hypotheses above.

1.1 By [A1] and [F3], the support $S$ of $\operatorname{div}(x)$ is finite. For every place $v\notin S$, $\operatorname{ord}_v(x)=0$, so [F2] gives $|x|_v=1$. Therefore the product over all places is exactly the finite product over $S$. [A1, F2, F3, given]

2.1 Using [F2] and the degree convention in [F3], $\prod_{v\in S}|x|_v =\prod_{v\in S}q^{-\operatorname{ord}_v(x)[\kappa(v):k]} =q^{-\deg_k(\operatorname{div}(x))}=q^0=1,$ where the degree-zero equality is [F4]. [F2, F3, F4, step 1.1, algebra]

3.1 Steps 1.1 and 2.1 prove the stated product formula and its finite-support qualification. AC is used for the curve and place interfaces and for [F4]; DC, supplied by [A1], is used to define the finite principal divisor. [A1, F1, F4, step 1.1, step 2.1] ∎

