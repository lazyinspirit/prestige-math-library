---
id: def-projective-height-counting-function
kind: definition
title: Projective-space point count ordered by absolute multiplicative height
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - thm-northcott-finiteness-for-projective-points
  - thm-natural-logarithm-laws
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stephen H. Schanuel, Heights in number fields, Bulletin de la Société Mathématique de France 107 (1979), Theorem 3, printed pp. 446–447"
      url: "https://www.numdam.org/item/BSMF_1979__107__433_0.pdf"
    - title: "Joseph H. Silverman, An Introduction to Height Functions, expanded version of lectures presented at MSRI, January 2006"
      url: "https://legacy.slmath.org/attachments/workshops/301/HtSurveyMSRIJan06.pdf"
      locator: "Full 69-page PDF; projective height definitions, printed pp. 2–3; rational projective-line count, p. 5; Schanuel theorem and constant, p. 6."
verification: {}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice. Let $K$ be a number field of degree $N=[K:\mathbb Q]$, let $m\ge2$ be an integer, and let $H_K(P)$ and $H(P)=H_K(P)^{1/N}$ be the relative and absolute multiplicative Weil heights of $P\in\mathbb P^{m-1}(K)$. For real $B,T\ge1$, define
$$
N^{\mathrm{rel}}_{K,m}(B):=\#\{P\in\mathbb P^{m-1}(K):H_K(P)\le B\},\qquad N^{\mathrm{abs}}_{K,m}(T):=\#\{P\in\mathbb P^{m-1}(K):H(P)\le T\}.
$$
Both counts are finite, and $N^{\mathrm{abs}}_{K,m}(T)=N^{\mathrm{rel}}_{K,m}(T^N)$.

## Definition references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]]

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[thm-northcott-finiteness-for-projective-points]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ of degree $N$, an integer $m\ge2$, and real thresholds $B,T\ge1$.

[F1] $H_K(P)\ge1$ and $H(P)=H_K(P)^{1/N}$ for each $P\in\mathbb P^{m-1}(K)$. ([[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]])

[F2] For every $C\ge1$, the set of points with absolute logarithmic height at most $\log C$ is finite. ([[thm-northcott-finiteness-for-projective-points]])

[F3] The logarithm is strictly increasing on the positive reals and maps $C$ to $\log C$. ([[thm-natural-logarithm-laws]])

[F4] The absolute logarithmic height is $h(P)=\log H(P)$. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

## Proof

1.1 Since $B,T\ge1$, their logarithms are defined and nonnegative. By [F1], $H_K(P)\le B$ is equivalent to $H(P)\le B^{1/N}$, and by [F4], $H(P)\le T$ is equivalent to $h(P)=\log H(P)\le\log T$ because [F3] makes logarithm strictly increasing. [given, F1, F3, F4, algebra]

2.1 Applying [F2] with $C=B^{1/N}$ shows that the relative-height set is finite, and applying it with $C=T$ shows that the absolute-height set is finite. The defining height relation in [F1] gives $H(P)\le T$ if and only if $H_K(P)\le T^N$, so the two finite sets in that identity are equal. [given, F1, F2, step 1.1, algebra] ∎
