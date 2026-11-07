---
id: def-schanuel-constant
kind: definition
title: Schanuel constant for projective-space counting
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-number-field-regulator
  - thm-number-field-regulator-is-well-defined
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-ideal-class-group-of-a-domain
  - thm-finiteness-of-the-number-field-class-group
  - def-roots-of-unity-in-a-field
  - lem-roots-of-unity-in-a-number-field-are-finite
  - def-dedekind-zeta-function
  - thm-dedekind-zeta-euler-product
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
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $K$ be a number field of degree $N=[K:\mathbb Q]$ and signature $(r_1,r_2)$, and let $m\ge2$ be an integer. Write $h_K:=|\operatorname{Cl}(\mathcal O_K)|$ for the finite ideal class number, $w_K:=|\mu(K)|$ for the finite number of roots of unity in $K$, $D_K:=|\operatorname{disc}(\mathcal O_K)|>0$ for the absolute discriminant, and $R_K$ for the regulator formed with logarithmic coordinates $\log|\sigma(\varepsilon)|$ at real places and $2\log|\tau(\varepsilon)|$ at one place from each complex pair, with $R_K=1$ when $r_1+r_2-1=0$. At the real argument $m$, let
$$
\zeta_K(m):=\sum_{0\ne\mathfrak a\subseteq\mathcal O_K}(N\mathfrak a)^{-m},
$$
where the sum is over nonzero integral ideals and $N\mathfrak a=|\mathcal O_K/\mathfrak a|$. This series is finite and positive. Define the geometric factor and Schanuel constant by
$$
\kappa_{K,m}:=\left(\frac{2^{r_1}(2\pi)^{r_2}}{\sqrt{D_K}}\right)^m m^{r_1+r_2-1},\qquad C_{K,m}:=\frac{h_KR_K}{w_K\zeta_K(m)}\,\kappa_{K,m}.
$$

## Definition references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-archimedean-embeddings-and-number-field-signature]]

[[def-number-field-regulator]]

[[thm-number-field-regulator-is-well-defined]]

[[def-discriminant-of-a-number-field-basis-and-order]]

[[thm-number-field-discriminant-is-well-defined-and-nonzero]]

[[cor-ring-of-integers-is-a-dedekind-domain]]

[[def-ideal-class-group-of-a-domain]]

[[thm-finiteness-of-the-number-field-class-group]]

[[def-roots-of-unity-in-a-field]]

[[lem-roots-of-unity-in-a-number-field-are-finite]]

[[def-dedekind-zeta-function]]

[[thm-dedekind-zeta-euler-product]]

