---
id: ex-gl-two-unramified-frobenius-and-hecke-polynomials
kind: example
title: "Match an unramified GL_2 Hecke polynomial with a Frobenius polynomial"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-rational-function-field-places-and-degree-map
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Theorem VI.9, printed pp. 157–159, unramified Hecke/Frobenius matching."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§1.2 and §1.3, unramified Satake and Galois factors."
---

## Example

Let $q=p^a$ be a prime power, let $\ell\ne p$, let $m\ge1$, let $v$ be a place of $F=\mathbb F_q(t)$ of degree $d$, and choose a primitive $m$-th root of unity $\zeta\in\overline{\mathbb Q}_\ell$. Set $\alpha=\zeta^d$ and $\beta=\zeta^{-d}$. For the diagonal geometric-Frobenius matrix $M_v=\operatorname{diag}(\alpha,\beta)$, define its Frobenius polynomial by $P_v^{\mathrm{Frob}}(T)=\det(I-TM_v)$. The unramified rank-two Satake parameter in this example is the unordered pair $\{\alpha,\beta\}$; define its normalized Hecke polynomial to be $P_v^{\mathrm{Hecke}}(T)=(1-\alpha T)(1-\beta T)$. Then
$$P_v^{\mathrm{Frob}}(T)=P_v^{\mathrm{Hecke}}(T)=1-(\zeta^d+\zeta^{-d})T+T^2.$$
This is a local normalization calculation and makes no assertion that the local pair extends to a global cuspidal automorphic representation.

## Example references

[Laurent Lafforgue, Theorem VI.9](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §§1.2–1.3](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Facts & Assumptions

**Given:** The matrix and the two polynomial conventions in the Example.

[F1] [[def-rational-function-field-places-and-degree-map]]: the place $v$ has the degree $d$ used to define the eigenvalues in the Example.

## Verification

1.1 By the unramified Frobenius parameter specified in the Example, the matrix is diagonal with entries $\alpha,\beta$. Its determinant polynomial is $(1-\alpha T)(1-\beta T)=1-(\alpha+\beta)T+\alpha\beta T^2$. [given, algebra]

1.2 By the normalized Hecke-polynomial definition in the Example, $P_v^{\mathrm{Hecke}}(T)=(1-\alpha T)(1-\beta T)$. Since $\alpha\beta=1$ and [F1] supplies the same degree $d$ as in the parameter definition, this equals $1-(\zeta^d+\zeta^{-d})T+T^2$, the expression in step 1.1. Thus the two polynomials agree. [F1, given, step 1.1, algebra] ∎
