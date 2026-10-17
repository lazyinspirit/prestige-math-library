---
id: lem-affine-piola-transport-preserves-commuting-interpolation
kind: lemma
title: Affine Piola transport preserves commuting interpolation diagrams
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-reference-finite-element-and-unisolvent-dofs, lem-unisolvent-dofs-define-reference-interpolant, def-covariant-contravariant-piola-maps-and-hdiv-hcurl, thm-affine-piola-differential-and-trace-moment-identities]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 16
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap16.pdf
      locator: "§16.1, printed pp. 185–187: commuting diagrams for local H(div) and H(curl) interpolation."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 8
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§8.3, printed pp. 170–172: commuting interpolation in the discrete de Rham sequence."
verification: {}
---

## Statement

Let $\widehat V_j$ and $V_j$ be reference and physical spaces related by
invertible affine Piola maps $P_j:\widehat V_j\to V_j$. Let $\widehat D_j$
and $D_j$ be the corresponding differential operators, and assume the
proved affine identities $D_jP_j=P_{j+1}\widehat D_j$ from
[[thm-affine-piola-differential-and-trace-moment-identities]]. Suppose
reference interpolation operators $\widehat I_j$ are defined on spaces
containing the relevant inputs and satisfy
$$\widehat D_j\widehat I_j=\widehat I_{j+1}\widehat D_j$$
there. Define the physical interpolants by Piola conjugation
$I_j=P_j\widehat I_jP_j^{-1}$. Then
$$D_jI_j=I_{j+1}D_j$$
on every input for which these compositions are defined. This is conditional
on the reference commuting identity; it does not assert that arbitrary
unisolvent degrees of freedom commute.

## Facts & Assumptions

**Given:** Unisolvent reference interpolants as in [[def-reference-finite-element-and-unisolvent-dofs]] and [[lem-unisolvent-dofs-define-reference-interpolant]], invertible affine Piola maps, and the reference commuting identities in the statement.

[F1] The physical and reference differential operators satisfy $D_jP_j=P_{j+1}\widehat D_j$ on their domains. ([[thm-affine-piola-differential-and-trace-moment-identities]])

[F2] The interpolation operator defined by the dual shape functions is a linear map on its declared domain. ([[lem-unisolvent-dofs-define-reference-interpolant]])

## Proof

1.1 By definition $I_j=P_j\widehat I_jP_j^{-1}$. Using [F1] and the assumed reference commutation, $$D_jI_j=D_jP_j\widehat I_jP_j^{-1} =P_{j+1}\widehat D_j\widehat I_jP_j^{-1} =P_{j+1}\widehat I_{j+1}\widehat D_jP_j^{-1}.$$ [F1, given, algebra]

2.1 Apply [F1] to $P_j^{-1}$, equivalently $\widehat D_jP_j^{-1}=P_{j+1}^{-1}D_j$. Substitution into step 1.1 gives $$D_jI_j=P_{j+1}\widehat I_{j+1}P_{j+1}^{-1}D_j =I_{j+1}D_j,$$ which is the claimed physical commuting identity. The only interpolation property used was the explicitly assumed reference identity, proving the conditional scope. [F1, F2, step 1.1, algebra] ∎
