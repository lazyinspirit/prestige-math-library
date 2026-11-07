---
id: thm-zagier-polylogarithmic-dedekind-zeta-formula-in-weight-four
kind: theorem
title: "Weight-Four Polylogarithmic Formula for Dedekind Zeta Values"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-goncharov-rudenko-higher-bloch-groups-and-cobracket
  - thm-goncharov-rudenko-weight-four-polylogarithmic-regulator-is-borel
  - def-zagier-higher-bloch-prequotient-and-polylogarithm
  - def-borel-regulator-of-a-number-field
  - thm-borel-ranks-of-higher-k-groups-of-number-fields
  - thm-borel-regulator-dedekind-zeta-value-rationality
  - def-dedekind-zeta-function
  - def-discriminant-of-a-number-field-basis-and-order
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Alexander Goncharov and Daniil Rudenko, Motivic correlators, cluster varieties and Zagier's conjecture on ζ_F(4)"
      url: "https://arxiv.org/pdf/1803.08585"
      locator: "Theorems 1.2 and 1.3, §§9.3–9.4, printed pp. 5–6 and 90–94; exact determinant formula and Borel-regulator comparison."
    - title: "Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers"
      url: "https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf"
      locator: "§§4–6, especially Theorem 6.2 and §6.4, the stable regulator normalization."
verification: {}
---

## Statement

Let $F$ be a number field of signature $(r_1,r_2)$ with $r_2>0$, absolute discriminant $D_F$, and embeddings $\sigma_1,\dots,\sigma_{r_1+2r_2}$ ordered so that $\sigma_{r_1+i}$ and $\sigma_{r_1+r_2+i}$ are conjugate for $1\le i\le r_2$. In the rationalized Goncharov–Rudenko weight-four group, use the cobracket $\delta_4$ defined above and the source-normalized single-valued function $\mathcal L_4$. There exist $y_1,\dots,y_{r_2}\in\ker\delta_4\subset B_4^{\mathrm{GR}}(F)$ such that

$$\zeta_F(4)=\pi^{4(r_1+r_2)}|D_F|^{-1/2}\det\!\left(\mathcal L_4(\sigma_{r_1+i}(y_j))\right)_{1\le i,j\le r_2}.$$

For every $r_2$-tuple in $\ker\delta_4$, the right-hand side is a rational multiple of $\zeta_F(4)$. No identification between $B_4^{\mathrm{GR}}(F)$ and Zagier's separately defined $\mathcal B_4(F)$ is part of this statement.

## Statement references

[[def-goncharov-rudenko-higher-bloch-groups-and-cobracket]]

[[def-zagier-higher-bloch-prequotient-and-polylogarithm]]

[[def-borel-regulator-of-a-number-field]]

[Alexander Goncharov and Daniil Rudenko, *Motivic correlators, cluster varieties and Zagier's conjecture on ζ_F(4)*, Theorems 1.2–1.3](https://arxiv.org/pdf/1803.08585)

## Facts & Assumptions

**Given:** A number field $F$ with $r_2>0$, its absolute discriminant, the ordered embeddings, and the rationalized group and regulator conventions stated above.

[F1] [[def-goncharov-rudenko-higher-bloch-groups-and-cobracket]]: $B_4^{\mathrm{GR}}(F)$ has a weight-four cobracket with the stated kernel.

[F2] [[def-zagier-higher-bloch-prequotient-and-polylogarithm]]: $\mathcal L_4$ is the source-normalized parity-selected single-valued polylogarithm expression.

[F3] [[thm-borel-regulator-dedekind-zeta-value-rationality]]: the Borel regulator lattice covolume is a rational multiple of the normalized positive zeta scalar.

[F4] [[def-discriminant-of-a-number-field-basis-and-order]]: $D_F$ is the absolute value of the field discriminant.

[F5] [[thm-goncharov-rudenko-weight-four-polylogarithmic-regulator-is-borel]]: the weight-four polylogarithmic regulator over $\mathbb C$ is a nonzero rational multiple of Borel's regulator.

## Escalation

The source proves this statement from its weight-four motivic-complex map, the Borel-regulator comparison, and the stable-cohomology theorem. The local proof is not reconstructed: the source's Theorems 1.14, 7.6, and 9.1 and their full hypotheses are not supplied as local proofs here, the positive Borel regulator comparison in [F3] is escalated, and the complex-field comparison [F5] is also escalated. The source group $B_4^{\mathrm{GR}}(F)$ has been defined separately from Zagier's $\mathcal B_4(F)$; no unproved identification is used. The proposed suppliers are `thm-gr-weight-four-determinant-from-borel-regulator` and the GR comparison suppliers recorded in [F5], placed before this item on the A page. The source theorem is established, but this carrier is not ready.
