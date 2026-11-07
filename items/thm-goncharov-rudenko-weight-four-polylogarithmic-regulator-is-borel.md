---
id: thm-goncharov-rudenko-weight-four-polylogarithmic-regulator-is-borel
kind: theorem
title: "Goncharov–Rudenko's Weight-Four Polylogarithmic Regulator Is Borel"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-goncharov-rudenko-higher-bloch-groups-and-cobracket
  - def-zagier-higher-bloch-prequotient-and-polylogarithm
  - def-higher-quillen-k-group-of-ring-of-integers
  - def-borel-regulator-of-a-number-field
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
      locator: "Theorem 1.3(iv), printed p. 6; proof completed in §9.3, with dependencies Theorems 1.14, 7.6, and 9.1."
verification: {}
---

## Statement

Let $B_\bullet^{\mathrm{GR}}(\mathbb C;4)$ be the rationalized weight-four complex defined above, so $H^1(B_\bullet^{\mathrm{GR}}(\mathbb C;4))=\ker\delta_4$. There is a canonical source homomorphism

$$\iota_4:K_7(\mathbb C)\otimes_{\mathbb Z}\mathbb Q\longrightarrow H^1(B_\bullet^{\mathrm{GR}}(\mathbb C;4))$$

After identifying the source-normalized Borel target $\mathbb R(3)$ with its real coordinate, the composite of $\iota_4$ with the map induced by $\mathcal L_4$ is a nonzero rational multiple of Borel's regulator $r_4^B$.

## Statement references

[[def-goncharov-rudenko-higher-bloch-groups-and-cobracket]]

[[def-zagier-higher-bloch-prequotient-and-polylogarithm]]

[[def-borel-regulator-of-a-number-field]]

[Goncharov and Rudenko, *Motivic correlators, cluster varieties and Zagier's conjecture on ζ_F(4)*, Theorem 1.3(iv)](https://arxiv.org/pdf/1803.08585)

## Facts & Assumptions

**Given:** The rationalized weight-four complex over $\mathbb C$ and the source-normalized Borel class.

[F1] [[def-goncharov-rudenko-higher-bloch-groups-and-cobracket]]: the first cohomology of the weight-four complex is $\ker\delta_4\subset B_4^{\mathrm{GR}}(\mathbb C)$.

[F2] [[def-zagier-higher-bloch-prequotient-and-polylogarithm]]: $\mathcal L_4$ is the parity-selected source-normalized single-valued polylogarithm expression.

[F3] [[def-borel-regulator-of-a-number-field]]: $r_4^B$ is the Borel regulator on $K_7(\mathbb C)$ with target $\mathbb R(3)$.

## Escalation

This is Goncharov–Rudenko Theorem 1.3(iv). The local proof is not reconstructed: its proof in §9.3 depends on Theorems 1.14, 7.6, and 9.1, including the motivic-complex map, its regulator realization, and a nonzero normalization computation. The exact proposed suppliers are `thm-gr-weight-four-motivic-complex-exactness`, `thm-gr-weight-four-cochain-regulator-identity`, and `thm-gr-weight-four-borel-class-nonzero-normalization`, all placed on this A page before the present item. The source citation does not constitute the proof.
