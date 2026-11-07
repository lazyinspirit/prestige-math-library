---
id: thm-borel-regulator-dedekind-zeta-value-rationality
kind: theorem
title: "Borel Regulator and Positive Dedekind Zeta Values"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-borel-regulator-of-a-number-field
  - thm-borel-ranks-of-higher-k-groups-of-number-fields
  - def-dedekind-zeta-function
  - thm-dedekind-zeta-euler-product
  - def-discriminant-of-a-number-field-basis-and-order
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers"
      url: "https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf"
      locator: "Theorem 6.2 and §§6.1–6.4, printed pp. 631–633; stable-cohomology comparison and higher-regulator normalization."
    - title: "Armand Borel, Stable real cohomology of arithmetic groups"
      url: "https://numdam.org/item/10.24033/asens.1269.pdf"
      locator: "§§11–12 and Proposition 12.2, for the stable-cohomology and regulator-lattice input."
verification: {}
---

## Statement

Let $K$ be a number field, $n_K=[K:\mathbb Q]$, $D_K$ its absolute discriminant, and $m\ge1$. Let $\Lambda_{m,K}$ be the image lattice of the source-normalized Borel regulator on the free part of $K_{2m+1}(\mathcal O_K)$, and let $\operatorname{covol}(\Lambda_{m,K})$ be its covolume in the rational regulator coordinates. Then

$$\frac{\operatorname{covol}(\Lambda_{m,K})}{R'_{m,K}}\in\mathbb Q^\times,
\qquad R'_{m,K}:=|D_K|^{1/2}\zeta_K(m+1)\pi^{-n_K(m+1)}.$$

The rational factor depends on the regulator-lattice normalization. This is a rational commensurability statement, not an integral class-number formula.

## Statement references

[[def-borel-regulator-of-a-number-field]]

[[thm-borel-ranks-of-higher-k-groups-of-number-fields]]

[[def-dedekind-zeta-function]]

[[def-discriminant-of-a-number-field-basis-and-order]]

[Armand Borel, *Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers*, Theorem 6.2](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf)

## Facts & Assumptions

**Given:** A number field $K$, its signature and absolute discriminant, and an integer $m\ge1$.

[F1] [[def-borel-regulator-of-a-number-field]]: the Borel regulator uses the source-normalized primitive class and the complex-conjugation-fixed real target.

[F2] [[thm-borel-ranks-of-higher-k-groups-of-number-fields]]: the regulator target and the free part of $K_{2m+1}(\mathcal O_K)$ have rank $d_m^0$.

[F3] [[def-dedekind-zeta-function]]: $\zeta_K(s)$ is the meromorphic continuation of the ideal Dirichlet series.

[F4] [[thm-dedekind-zeta-euler-product]]: $\zeta_K(s)>0$ for real $s>1$.

[F5] [[def-discriminant-of-a-number-field-basis-and-order]]: $D_K$ denotes the absolute value of the number-field discriminant.

## Escalation

Borel's Theorem 6.2 identifies the stable-cohomology comparison scalar as $R'_{m,K}=|D_K|^{1/2}\zeta_K(m+1)\pi^{-n_K(m+1)}$ and §6.4 fixes the rational regulator normalization. The local proof is not reconstructed: it requires the stable $SL_n$ cohomology comparison, its rational structures, and the identification of the stable primitive with the Borel regulator lattice from §§4–6 and the 1974 stable-cohomology theorem. The Borel rank theorem in this batch is also escalated. The exact proposed prerequisite is `thm-borel-sl-n-stable-cohomology-regulator-comparison`, placed on this A page before this item; it must compare the source's rational primitive lattice with the source-normalized Borel regulator and retain the stable-range hypotheses. No citation is counted as that proof.
