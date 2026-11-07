---
id: thm-explicit-homogeneous-linear-form-in-logarithms-waldschmidt
kind: theorem
title: "Explicit homogeneous linear-form lower bound (Waldschmidt, Theorem 10.1)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-number-field
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
  - def-complex-exponential
  - def-complex-logarithms-principal-logarithm-and-complex-powers
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Michel Waldschmidt, Linear Independence of Logarithms of Algebraic Numbers, IMSc Report 116 (1992), Theorem 10.1"
      url: "https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1"
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Chapter 5"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $m\ge1$, let $\alpha_1,\ldots,\alpha_m$ and $\beta_1,\ldots,\beta_m$ be algebraic numbers, let $\ell_i\in\mathbb C$ satisfy $\exp(\ell_i)=\alpha_i\ne0$, and put $D=[\mathbb Q(\alpha_1,\ldots,\alpha_m,\beta_1,\ldots,\beta_m):\mathbb Q]$. For a projective point $P=[x_0:\cdots:x_r]$ over a number field $K$ of degree $N$, use the absolute logarithmic height $h(P)=\log H(P)=N^{-1}\log H_K(P)$, with the finite ideal factor and with complex places weighted by $2$. Write $h(\alpha_i)=h([1:\alpha_i])$ and let $h(1:\beta_1:\cdots:\beta_m)$ denote the height of $[1:\beta_1:\cdots:\beta_m]$. Let $A_1,\ldots,A_m,B$ be real numbers with $A_i,B\ge e$, set $A=\max_i A_i$, and suppose
$$
\log A_i\ge h(\alpha_i),\qquad D\log A_i\ge e|\ell_i|\quad(1\le i\le m),\qquad \log B\ge h(1:\beta_1:\cdots:\beta_m),\qquad B\ge(50mD\log A)^{3m}.
$$
If $\Lambda=\sum_{i=1}^m\beta_i\ell_i\ne0$, then
$$
|\Lambda|>\exp\!\left(-(50m)^{3m}D^{m+2}(\log B)^2\prod_{i=1}^m\log A_i\right).
$$

## Statement references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[def-complex-exponential]]

[[def-complex-logarithms-principal-logarithm-and-complex-powers]]

[Waldschmidt, *Linear Independence of Logarithms of Algebraic Numbers*, Chapter X, Theorem 10.1](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

## Facts & Assumptions

**Given:** The Axiom of Choice, algebraic $\alpha_i\ne0$ and $\beta_i$, chosen complex logarithms $\ell_i$ of $\alpha_i$, and real parameters $A_i,B$ satisfying the stated height and size conditions.

[A1] The Axiom of Choice is assumed by the absolute number-field height definition and its product-formula normalization. ([[def-axiom-of-choice]], [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

[F1] The absolute logarithmic height is $h(P)=\log H(P)$, with $H(P)=H_K(P)^{1/[K:\mathbb Q]}$, using real weights $1$ and complex weights $2$. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

[F2] A chosen logarithm $\ell$ of $\alpha$ means $\exp(\ell)=\alpha$, with the complex exponential defined by its power series. ([[def-complex-exponential]], [[def-complex-logarithms-principal-logarithm-and-complex-powers]])

## Remarks

The source proof proceeds through an interpolation determinant and the Chapter VIII zero-estimate chain. Local proofs of the required positive-bidegree Hilbert–Samuel and intersection bounds, algebraic-subgroup degree bound, Chapter VIII zero estimate, and Chapter IX analytic determinant estimate are now supplied and independently accepted. The remaining local-proof obligations are the Chapter X full-rank interpolation argument, arithmetic lower bound for the determinant, and exact specialization of the parameters and constants to Theorem 10.1. This theorem remains held; no source citation or acceptance of those prerequisites substitutes for the missing Chapter X proof. The general inhomogeneous Baker theorem with an additive algebraic term is separate and is not a premise of this homogeneous claim.

## Remarks references

[Waldschmidt, *Linear Independence of Logarithms of Algebraic Numbers*, Chapters III, VII–X](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

[Evertse, *Diophantine Equations*, Chapter 5](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)
