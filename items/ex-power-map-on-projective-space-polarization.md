---
id: ex-power-map-on-projective-space-polarization
kind: example
title: "The coordinate power map on projective space"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-polarized-endomorphism-of-projective-variety
  - thm-absolute-height-is-invariant-under-field-extension
  - thm-canonical-height-functional-equation-and-bounded-error
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Joseph H. Silverman, Arithmetic and dynamical degrees on projective varieties"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
      locator: "Lecture 3, printed pp. 14–16"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms"
      url: "https://www.numdam.org/article/CM_1993__89_2_163_0.pdf"
      locator: "§1, Proposition 1.2"
verification: {}
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Let $K$ be a number field, let $n\ge1$, and let $d\ge2$. The map
$$
\Phi_d:\mathbb P^n\longrightarrow\mathbb P^n,\qquad [X_0:\cdots:X_n]\longmapsto[X_0^d:\cdots:X_n^d]
$$
is polarized by $\mathcal O_{\mathbb P^n}(1)$ with weight $d$. For every algebraic point $P\in\mathbb P^n(\overline K)$, its canonical height is the standard absolute logarithmic projective height:
$$
\widehat h_{\Phi_d,\mathcal O(1)}(P)=h(P).
$$

## Example references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[def-polarized-endomorphism-of-projective-variety]]

[[thm-canonical-height-functional-equation-and-bounded-error]]

## Facts & Assumptions

**Given:** AC; a number field $K$; integers $n\ge1$ and $d\ge2$; and a point $P=[x_0:\cdots:x_n]$ defined over a finite extension $E/K$.

[A1] AC is assumed in the absolute height and polarization interfaces. ([[def-axiom-of-choice]], [[def-polarized-endomorphism-of-projective-variety]])

[F1] The logarithmic absolute height is the weighted sum of the local logarithmic maxima of homogeneous coordinates, and is invariant under finite extension of the field of definition. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]], [[thm-absolute-height-is-invariant-under-field-extension]])

[F2] The canonical height is the limit of $d^{-m}h(\Phi_d^m(P))$ for any representative of the height class. ([[thm-canonical-height-functional-equation-and-bounded-error]])

## Verification

1.1 The coordinates $X_0^d,\ldots,X_n^d$ do not vanish simultaneously at a projective point, so they define a morphism. Each is homogeneous of degree $d$, and the pullback of a hyperplane is a degree-$d$ divisor; thus $\Phi_d^*\mathcal O(1)\cong\mathcal O(d)$ and the map has the stated polarization. [given, A1, algebra]

1.2 For every place $v$ of a finite field of definition $E$, $\max_i|x_i^d|_v=(\max_i|x_i|_v)^d$. Summing the logarithms with the weights in [F1] gives $h(\Phi_d(P))=d h(P)$. [given, F1, algebra]

2.1 Iterating step 1.2 gives $h(\Phi_d^m(P))=d^m h(P)$ for every $m\ge0$. [given, step 1.2, induction]

3.1 By [F2] and step 2.1, $\widehat h_{\Phi_d,\mathcal O(1)}(P)=\lim_{m\to\infty}d^{-m}d^m h(P)=h(P)$. [given, F2, step 2.1, algebra] ∎
