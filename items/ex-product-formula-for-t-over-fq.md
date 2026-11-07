---
id: ex-product-formula-for-t-over-fq
kind: example
title: "The function-field product formula for t in F_q(t)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-finite-field-and-its-order
  - def-dependent-choice
  - def-place-of-a-global-field
  - lem-projective-line-divisors-classified-by-degree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-product-formula-for-function-fields
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 5"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter VIII"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice and let $K=\mathbb F_q(t)$ with its exact constant
field $\mathbb F_q$. Let $v_0$ and $v_\infty$ be the places corresponding to
the zero and pole of $t$ on $\mathbb P^1_{\mathbb F_q}$. For the normalized
function-field absolute values,
$$|t|_{v_0}=q^{-1},\qquad |t|_{v_\infty}=q,$$
and $|t|_v=1$ at every other place. Their product is $1$.

## Example references

[[def-finite-field-and-its-order]]

[[def-place-of-a-global-field]]

[[lem-projective-line-divisors-classified-by-degree]]

[[thm-product-formula-for-function-fields]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite field $\mathbb F_q$; the rational
function field $K=\mathbb F_q(t)$; and its places $v_0,v_\infty$.

[A1] AC implies the Dependent Choice principle; the projective-line divisor
classification carries both premises. ([[def-axiom-of-choice]],
[[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

[F1] Places of $\mathbb F_q(t)$ correspond to closed points of
$\mathbb P^1_{\mathbb F_q}$, with
$|f|_v=q^{-\operatorname{ord}_v(f)[\kappa(v):\mathbb F_q]}$.
([[def-place-of-a-global-field]])

[F2] On the projective line with coordinate $t$, the divisor of $t$ is
$[V(t)]-[\infty]$, the point $V(t)$ has residue degree $1$, and the point at
infinity has residue degree $1$. ([[lem-projective-line-divisors-classified-by-degree]])

[F3] For a function field over its exact finite constant field, the product
of the normalized absolute values of every nonzero element is $1$.
([[thm-product-formula-for-function-fields]])

## Verification



**Given:** The data and hypotheses above.

1.1 By [F2], $\operatorname{ord}_{v_0}(t)=1$, $\operatorname{ord}_{v_\infty}(t)=-1$, and $\operatorname{ord}_v(t)=0$ at all other closed points. The two displayed points have residue degree $1$. [F2, given]

2.1 Substitution into the normalized formula in [F1] gives $|t|_{v_0}=q^{-1}$, $|t|_{v_\infty}=q$, and $|t|_v=1$ for every other place. Thus the product is the finite product $q^{-1}q=1$. [F1, step 1.1, algebra]

3.1 The direct calculation in step 2.1 agrees with the general function-field product formula [F3]. AC and the derived DC are exactly the premises of the place and projective-line interfaces; the numerical product itself uses no additional choice. [A1, F3, step 2.1] ∎

