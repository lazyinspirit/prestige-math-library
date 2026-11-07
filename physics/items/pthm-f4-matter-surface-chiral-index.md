---
id: pthm-f4-matter-surface-chiral-index
kind: physics-theorem
title: Matter-surface flux chiral index
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
category: string-theory
deps:
  - def-f4-crepant-resolution-and-matter-surface
  - post-f4-codimension-two-matter-and-yukawa-dictionary
  - post-f4-g4-supersymmetry-transversality-conditions
  - post-f4-mtheory-g4-shifted-quantization
  - def-m2-brane-worldvolume-action
  - post-f4-m2-matter-curve-zero-mode-dictionary
  - thm-riemann-roch-compact-riemann-surfaces
dependency_roles:
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
  post-f4-codimension-two-matter-and-yukawa-dictionary: physical-assumption
  post-f4-g4-supersymmetry-transversality-conditions: physical-assumption
  post-f4-mtheory-g4-shifted-quantization: physical-assumption
  def-m2-brane-worldvolume-action: physical-assumption
  post-f4-m2-matter-curve-zero-mode-dictionary: physical-assumption
  thm-riemann-roch-compact-riemann-surfaces: mathematical-premise
physical_scope: "Conditional geometric F-theory chiral-index relation on a fixed smooth resolved compact elliptic Calabi–Yau fourfold. The displayed proof establishes the smooth matter-curve branch when the flux is algebraic and induces the line bundle in the local zero-mode postulate. It does not prove the planned broader claim for arbitrary quantized non-algebraic flux classes or singular matter curves; those cases remain explicitly escalated. The index is net chirality only."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Sven Krause, Christoph Mayrhofer, and Timo Weigand, G4 flux, chiral matter and singularity resolution in F-theory compactifications, arXiv:1109.3454v2"
      url: "https://arxiv.org/pdf/1109.3454v2"
      locator: "§4.2, printed pp. 24–26, the general matter-surface index ansatz, model-specific checks, and the stated absence at that time of a wrapped-M2 first-principles derivation."
    - title: "Andreas P. Braun, Andrés Collinucci, and Roberto Valandro, G-flux in F-theory and algebraic cycles, arXiv:1107.5337v3"
      url: "https://arxiv.org/pdf/1107.5337v3"
      locator: "§4.3.1, printed pp. 18–19, explicit algebraic-cycle fluxes and matter-surface indices in the stated models."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§9.2, printed pp. 85–87, matter-surface indices; §9.5.1, pp. 92–95, the smooth matter-curve zero-mode and Riemann–Roch route."
verification:
  precheck: pass
---

## Statement

In a specified four-dimensional F-theory compactification with a smooth resolved compact elliptic Calabi–Yau fourfold, gauge-preserving quantized flux $g_4$, and an integral matter surface $S_R$ for representation $R$, the standard net chiral index is $\chi_R=\int_{S_R}g_4$, with orientation fixed by the selected weight convention. This is a net index, not the vectorlike multiplicity or full zero-mode spectrum.

## Facts & Assumptions

**Given:** The resolved model and weight convention, the flux constraints, and the physical zero-mode premises stated below. The general claim is retained at the planned scope; the proof here closes only the smooth-curve/algebraic-flux branch.

[F1] [[def-f4-crepant-resolution-and-matter-surface]] defines the chosen smooth resolved geometry and matter surface; its current Step 1 record is stale, and the exact geometric interface is not treated as independently ready.

[F2] [[post-f4-codimension-two-matter-and-yukawa-dictionary]] currently states the conditional matter-curve and chosen fibral-curve/matter-surface dictionary. Its current Step 1 record is escalated for stale resolved-geometry readiness and an outstanding Kodaira/local-minimal-Weierstrass input; its old missing-M2-action reason and internal absence note are stale and are not used in this proof.

[F3] [[post-f4-g4-supersymmetry-transversality-conditions]] formulates the physical gauge-preserving and supersymmetry conditions; this current A-page carrier has not yet received its final Step 1 record.

[F4] [[post-f4-mtheory-g4-shifted-quantization]] is the local conditional free-period CY4 flux-shift item; the generic shifted-quantization and M2-tension inputs required upstream still lack current Step 1 readiness records.

[F5] [[def-m2-brane-worldvolume-action]] currently defines the classical M2 Wess–Zumino term with coefficient $T_{M2}$ under its smooth timelike worldvolume and CJS sign conventions. Its current Step 1 record is ready, and the action does not alone supply a zero-mode index.

[F6] [[post-f4-m2-matter-curve-zero-mode-dictionary]] adopts the smooth-curve/algebraic-flux interface: $\chi_R=h^0(C_R,\mathcal L_R\otimes\mathcal S_R)-h^1(C_R,\mathcal L_R\otimes\mathcal S_R)$, $\mathcal S_R^2\cong K_{C_R}$, and $\deg\mathcal L_R=\int_{S_R}g_4$. Its explicit physical scope is narrower than this item's planned general statement.

[F7] [[thm-riemann-roch-compact-riemann-surfaces]] gives $h^0(C,\mathcal O_C(D))-h^1(C,\mathcal O_C(D))=\deg D+1-g$ for a compact Riemann surface of genus $g$ and divisor $D$.

## Proof

**Proof technique:** Riemann–Roch for the smooth algebraic matter-curve branch, conditional on the adopted physical zero-mode dictionary.

1.1 By [F1] and [F2], the chosen resolved matter surface is the selected fibral curve family over the matter curve; [F3] and [F4] are the model's gauge-preserving and flux-quantization hypotheses, not consequences of Riemann–Roch. Assume in addition that the selected $C_R$ is smooth and compact and that the flux is in the algebraic branch of [F6]. Choose a divisor $D_R$ representing $\mathcal L_R\otimes\mathcal S_R$. Applying [F7] gives $\chi_R=\deg(\mathcal L_R\otimes\mathcal S_R)+1-g(C_R)$. Since $\mathcal S_R^{\otimes2}\cong K_{C_R}$, its degree is $g(C_R)-1$; therefore the spin contribution cancels and $\chi_R=\deg\mathcal L_R$. [F1, F2, F3, F4, F6, F7, given, algebra]

2.1 By [F6], $\deg\mathcal L_R=\int_{S_R}g_4$ with the same selected weight orientation. Substituting this identity into step 1.1 proves $\chi_R=\int_{S_R}g_4$ on this smooth-curve/algebraic-flux branch. The exact planned bosonic M2 Wess–Zumino action [F5] does not supply the missing quantum Dirac/zero-mode identification for arbitrary non-algebraic quantized classes or singular curves, so this does not establish the unrestricted statement above. [F5, F6, step 1.1, algebra] ∎

## Unresolved scope

The broad planned statement remains unproved for flux classes without an algebraic lift and for singular matter curves. The item is retained at its planned interface and is escalated; it is not a claim that the additional branch hypotheses follow from ordinary flux quantization.

## Statement references

[[def-f4-crepant-resolution-and-matter-surface]]

[[post-f4-codimension-two-matter-and-yukawa-dictionary]]

[[post-f4-g4-supersymmetry-transversality-conditions]]

[[post-f4-mtheory-g4-shifted-quantization]]

[[def-m2-brane-worldvolume-action]]

[[post-f4-m2-matter-curve-zero-mode-dictionary]]

[[thm-riemann-roch-compact-riemann-surfaces]]
