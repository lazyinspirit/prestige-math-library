---
id: ex-degree-zero-divisor-class-group-of-projective-line
kind: example
title: "Degree-zero divisor classes on the projective line over a finite field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dependent-choice
  - def-divisor-smooth-proper-curve
  - def-finite-field-and-its-order
  - def-principal-weil-divisor-and-class-group
  - lem-projective-line-divisors-classified-by-degree
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 5"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
    - title: "William Fulton, Algebraic Curves, Chapter 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice and let $k=\mathbb F_q$. For the Weil divisor
class group of $\mathbb P^1_k$, the degree-zero subgroup
$$
\operatorname{Cl}^0(\mathbb P^1_k)=\ker\bigl(\deg:\operatorname{Div}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)\longrightarrow\mathbb Z\bigr)
$$
is the trivial group $\{0\}$. In particular, it is finite.

## Example references

[[def-finite-field-and-its-order]]

[[def-degree-divisor-proper-curve]]

[[def-principal-weil-divisor-and-class-group]]

[[lem-projective-line-divisors-classified-by-degree]]

[[thm-cartier-weil-divisors-curves-agree]]

[[thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite field $k=\mathbb F_q$, and
$C=\mathbb P^1_k$.

[A1] AC implies DC; the projective-line divisor and Cartier-Weil interfaces
carry both premises. ([[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

[F1] The projective line is a smooth proper geometrically integral curve, and
every divisor $D$ on it is linearly equivalent to $\deg_k(D)[\infty]$.
([[lem-projective-line-divisors-classified-by-degree]])

[F2] On a smooth proper curve the Cartier-to-Weil map is an isomorphism
compatible with principal divisors, so Cartier linear equivalence gives the
same class in the Weil divisor class group.
([[thm-cartier-weil-divisors-curves-agree]])

[F3] The Weil divisor class group is
$\operatorname{Cl}(C)=\operatorname{Div}(C)/\operatorname{Prin}(C)$; degree
descends to it because every principal divisor has degree zero.
([[def-principal-weil-divisor-and-class-group]],
[[def-degree-divisor-proper-curve]],
[[def-divisor-smooth-proper-curve]])

[F4] For every smooth proper geometrically integral curve over a finite
field, the degree-zero divisor class group is finite.
([[thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field]])

## Verification



**Given:** The data and hypotheses above.

1.1 Let $[D]\in\operatorname{Cl}^0(C)$. Since degree is the homomorphism in [F3], any representative divisor $D$ has degree zero. By [F1], $D$ is linearly equivalent to $\deg_k(D)[\infty]=0$; [F2] carries this linear equivalence to equality of Weil divisor classes. Therefore $[D]=0$ and $\operatorname{Cl}^0(C)=\{0\}$. [F1, F2, F3, given]

2.1 The curve $C$ satisfies the hypotheses of [F4], so its degree-zero class group is finite. Step 1.1 computes that finite group exactly as the trivial group. AC and DC are inherited as in [A1]. [A1, F4, step 1.1] ∎

