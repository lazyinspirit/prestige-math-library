---
id: def-place-of-a-global-field
kind: definition
title: "Place of a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-equivalent-field-absolute-values
  - def-global-field
  - def-multiplicative-absolute-value-on-a-field
  - thm-curves-function-fields-equivalence
  - thm-function-field-places-correspond-to-closed-points
  - thm-number-field-places-classification
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, §§7.1–7.4"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 5"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice for the classification interfaces below. If $K$ is
a global field, a **place** of $K$ is an equivalence class of nontrivial
multiplicative absolute values on $K$, where $|\cdot|_1$ and $|\cdot|_2$ are
equivalent when $|x|_2=|x|_1^c$ for every $x\in K$ and some real $c>0$.

If $K$ is a number field, its places correspond to its real embeddings, its
conjugate pairs of nonreal complex embeddings, and the nonzero prime ideals
$\mathfrak p$ of its ring of integers $\mathcal O_K$. The finite place
associated with $\mathfrak p$ has representative
$$|x|_{\mathfrak p}=(N\mathfrak p)^{-\operatorname{ord}_{\mathfrak p}(x)}.$$

If $K$ is a function field with exact constant field $k=\mathbb F_q$, choose a
smooth proper geometrically integral curve $C/k$ and a $k$-isomorphism
$K\cong k(C)$. Its places correspond bijectively to the closed points $x$ of
$C$. The normalized representative is $|0|_x=0$ and
$$|f|_x=q^{-\operatorname{ord}_x(f)[\kappa(x):k]}\qquad(f\in K^\times).$$
Thus its valuation ring is $\mathcal O_{C,x}$; changing the model transports
the correspondence through the curve/function-field equivalence.

## Definition references

[[def-global-field]]

[[def-multiplicative-absolute-value-on-a-field]]

[[def-equivalent-field-absolute-values]]

[[thm-number-field-places-classification]]

[[thm-function-field-places-correspond-to-closed-points]]

[[thm-curves-function-fields-equivalence]]

[[def-axiom-of-choice]]

## Remarks

The equivalence class is the place; the displayed formulas select convenient
representatives. In the function-field normalization, the residue degree is
part of the exponent, as required by the degree-weighted divisor convention.

## Remarks references

[[def-degree-divisor-proper-curve]]

[[def-divisor-smooth-proper-curve]]
