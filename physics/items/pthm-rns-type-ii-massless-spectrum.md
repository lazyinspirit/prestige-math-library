---
id: pthm-rns-type-ii-massless-spectrum
kind: physics-theorem
title: "RNS Type Ii Massless Spectrum"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 10
domain: physics
physical_scope: "Conditional flat-space Type II RNS massless physical spectrum. The light-cone/relative-BRST identification and RR bispinor-to-form map are explicit unresolved inputs; no spacetime action or nonlinear field equation is claimed."
deps:
  - def-rns-gso-projection
  - def-rns-physical-state-brst-cohomology
  - pthm-rns-closed-lightcone-level-matching
  - thm-spin8-tensor-product-decompositions
  - def-axiom-of-choice
  - def-spin8-vector-and-half-spin-modules
dependency_roles:
  def-rns-gso-projection: formulation-prerequisite
  def-rns-physical-state-brst-cohomology: formulation-prerequisite
  pthm-rns-closed-lightcone-level-matching: physical-result
  thm-spin8-tensor-product-decompositions: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-spin8-vector-and-half-spin-modules: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapters 6.5–6.9, printed pp. 140–154: RNS spectrum/GSO, Type I projection, and heterotic construction."
verification:
  precheck: pass
---

## Statement

For the critical flat closed Type II RNS string with the supersymmetric GSO projection and the closed mass-shell/level-matching conditions, use the Spin(8) modules defined in def-spin8-vector-and-half-spin-modules. The massless NS-NS sector is 8_v tensor 8_v=1 direct-sum 28 direct-sum 35_v, giving dilaton, antisymmetric two-form, and symmetric traceless graviton polarizations. Equal positive left/right Ramond chirality gives 8_s tensor 8_s=1 direct-sum 28 direct-sum 35_s in IIB, corresponding to C_0, C_2, and a self-dual C_4^+ polarization; opposite chirality gives 8_s tensor 8_c=8_v direct-sum 56_v in IIA, corresponding to C_1 and C_3. The mixed sectors use 8_v tensor 8_s=8_c direct-sum 56_c and 8_s tensor 8_v=8_c direct-sum 56_c in IIB, with opposite-chirality IIA products obtained by exchanging s and c; these give the two gravitino/dilatino multiplets with the standard Type II chirality assignments. This classifies only the flat-space massless physical spectrum, not a spacetime action or nonlinear equations.

## Statement references

[Timo Weigand, Introduction to String Theory, Winter term 2011/12](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

## Facts & Assumptions

**Given:** Critical flat ten-dimensional closed Type II RNS model, $p^+\ne0$ in the light-cone chart, the stated GSO/level-matching conventions, full AC, and the external cohomology-to-light-cone input [A1].

[F1] [[def-rns-gso-projection]]: the supersymmetric chiral projection removes the NS vacuum, keeps the NS first excited vector, and selects one Ramond chirality in each sector.

[F2] [[pthm-rns-closed-lightcone-level-matching]]: in each closed chirality, $\alpha'M^2/4=N-a_s$, with $a_{NS}=1/2$ and $a_R=0$, and the left and right values agree.

[F3] [[def-rns-physical-state-brst-cohomology]]: physical states are the selected left/right relative BRST cohomology classes, conditional on $Q_B^2=0$ and stability of the relative subspace.

[F4] [[thm-spin8-tensor-product-decompositions]]: $8_v\otimes8_v=1\oplus28\oplus35_v$, $8_s\otimes8_s=1\oplus28\oplus35_s$, $8_s\otimes8_c=8_v\oplus56_v$, and the vector-spinor products are $8_c\oplus56_c$ or $8_s\oplus56_s$ in the declared chirality convention.

[F5] [[def-spin8-vector-and-half-spin-modules]] defines the exact Euclidean real modules $8_v,8_s,8_c$ and the chosen orientation/chirality convention; it does not identify Lorentzian spinor bundles.

[A1] The relative RNS BRST cohomology at generic $p^+\ne0$ is identified with the transverse light-cone state space in each GSO sector, and the RR bispinor-to-form Clifford map identifies the $1,28,35$ pieces with the stated RR potentials/self-dual four-form polarizations. The inspected source reports the spectrum but does not prove this no-ghost/cohomology identification or locally construct the Fierz map.

[A2] Full AC is assumed as defined in [[def-axiom-of-choice]], because the Spin(8) decomposition theorem [F4] assumes it.

## Proof

1.1 The mass shell in [F2] requires $N=1/2$ in each NS chirality and $N=0$ in each Ramond chirality for a massless state. By the GSO choice [F1], the retained NS first level is $8_v$, while the Ramond ground state is $8_s$ or $8_c$ according to the chirality choice. The cohomology input [A1] transfers precisely these transverse modules to the relative BRST physical-state spaces in [F3]; no other level satisfies these intercept equations. [given, F1, F2, F3, A1, algebra]

2.1 For NS–NS, [F4] decomposes $8_v\otimes8_v$ into its scalar trace, antisymmetric $28=\Lambda^2(8_v)$, and symmetric traceless $35_v$ parts, for the modules fixed in [F5]. These are respectively the dilaton, two-form, and graviton polarizations in the linear massless representation. [F4, F5, A2, step 1.1, algebra]

2.2 In IIB the equal positive Ramond chiralities give $8_s\otimes8_s=1\oplus28\oplus35_s$ for [F5]'s modules by [F4]; in IIA the opposite right chirality gives $8_s\otimes8_c=8_v\oplus56_v$. The RR form identification and self-duality convention in [A1] assign these pieces to $(C_0,C_2,C_4^+)$ and $(C_1,C_3)$, respectively. [F4, F5, A1, A2, step 1.1, algebra]

3.1 The mixed products in [F4] for the modules [F5] are $8_v\otimes8_s=8_c\oplus56_c$ and $8_s\otimes8_v=8_c\oplus56_c$ for IIB; exchanging $s$ and $c$ on one side gives the IIA products. The two left/right placements therefore give the two gravitino/dilatino multiplets with the chirality assignments fixed by the same GSO choice [F1]. The classification stops at these flat-space massless polarizations. [F1, F4, F5, A2, step 1.1, algebra] ∎

## Remarks

The proof is conditional on [A1]. The cited light-cone spectrum and the Spin(8) decompositions do not by themselves establish equivalence with relative RNS BRST cohomology or the RR Clifford-form dictionary. These are exact open authoring prerequisites, not conclusions supplied by the carrier label.
