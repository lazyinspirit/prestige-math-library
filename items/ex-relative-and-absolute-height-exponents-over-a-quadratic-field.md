---
id: ex-relative-and-absolute-height-exponents-over-a-quadratic-field
kind: example
title: Changing relative and absolute height conventions over a quadratic field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-projective-height-counting-function
  - def-schanuel-constant
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - thm-schanuel-height-counting-in-projective-space-over-a-number-field
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen H. Schanuel, Heights in number fields, Bulletin de la Société Mathématique de France 107 (1979), Theorem 3 and proof, printed pp. 445–447"
      url: "https://www.numdam.org/item/BSMF_1979__107__433_0.pdf"
    - title: "Joseph H. Silverman, An Introduction to Height Functions, expanded version of lectures presented at MSRI, January 2006"
      url: "https://legacy.slmath.org/attachments/workshops/301/HtSurveyMSRIJan06.pdf"
      locator: "Full 69-page PDF; projective height definitions, printed pp. 2–3; rational projective-line count, p. 5; Schanuel theorem and constant, p. 6."
verification: {}
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Let $K$ be any quadratic number field, let $m\ge2$, and let $C_{K,m}$ be its Schanuel constant. If $N^{\mathrm{rel}}_{K,m}(B)$ counts points of $\mathbb P^{m-1}(K)$ with relative multiplicative height at most $B$, then
$$N^{\mathrm{rel}}_{K,m}(B)=C_{K,m}B^m+O_{K,m}(B^{m-1/2}).$$
If $N^{\mathrm{abs}}_{K,m}(T)$ counts the same points by absolute multiplicative height, then
$$N^{\mathrm{abs}}_{K,m}(T)=C_{K,m}T^{2m}+O_{K,m}(T^{2m-1}).$$
The two thresholds are related by $B=T^2$.

## Example references

[[def-number-field]]

[[def-axiom-of-choice]]

[[def-projective-height-counting-function]]

[[thm-schanuel-height-counting-in-projective-space-over-a-number-field]]

## Facts & Assumptions

**Given:** AC; a quadratic number field $K$, so $[K:\mathbb Q]=2$; an integer $m\ge2$; and thresholds $B,T\ge1$.

[F1] For $(m,N)\ne(2,1)$, the relative count is $C_{K,m}B^m+O_{K,m}(B^{m-1/N})$ and the absolute count is $C_{K,m}T^{mN}+O_{K,m}(T^{mN-1})$. ([[thm-schanuel-height-counting-in-projective-space-over-a-number-field]])

[F2] The count functions obey $N^{\mathrm{abs}}_{K,m}(T)=N^{\mathrm{rel}}_{K,m}(T^N)$. ([[def-projective-height-counting-function]])

## Verification

1.1 Here $N=2$, so $(m,N)\ne(2,1)$ and $m-1/N=m-1/2$. The relative-height clause of [F1] gives the first formula. [given, F1, algebra]

2.1 The absolute-height clause of [F1] gives exponent $mN=2m$ and error exponent $mN-1=2m-1$. Equivalently, [F2] substitutes $B=T^2$ in the relative formula, turning $B^{m-1/2}$ into $T^{2m-1}$. [given, F1, F2, step 1.1, algebra] ∎
