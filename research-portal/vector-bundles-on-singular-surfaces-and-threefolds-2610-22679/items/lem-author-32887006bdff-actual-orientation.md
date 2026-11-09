---
id: lem-author-32887006bdff-actual-orientation
kind: lemma
title: Actual EM orientation and projective bundle maps on that model
status: draft
domain: mathematics
deps:
  - lem-author-32887006bdff-em-p1-model
  - thm-author-32887006bdff-em-graded-input
  - thm-author-32887006bdff-p1-spectrum-input
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  thm-author-32887006bdff-em-graded-input: mathematical-premise
  thm-author-32887006bdff-p1-spectrum-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. The model $\mathcal E_S$ carries a linear orientation whose first Chern class on every $Y\in\mathrm{Sm}_S$ is exactly the supplied EM class. It satisfies Annala–Iwasa’s projective bundle formula with that orientation, for all finite projective spaces and bundles. The diagonal identifications in the preceding lemma preserve these actual maps.

## Facts & Assumptions
[A1] The assumed [[math:def-axiom-of-choice]] and fixed bounds discharge the inherited premises of the actual graded/PBF input [[thm-author-32887006bdff-em-graded-input]] and model [[lem-author-32887006bdff-em-p1-model]] in steps 1.1–3.1. All orientation and projective-bundle maps are those of these supplied constructions.

[F1] [[thm-author-32887006bdff-em-graded-input]] supplies the pointed Picard map $R\Gamma_{\rm Nis}(\mathbb G_m)[-1]\to\mathbb Z(1)_{\rm mot}$ and its actual products/PBF.

[F2] [[thm-author-32887006bdff-p1-spectrum-input]] identifies a linear orientation with a Picard class lifting the unit along $[\mathcal O(1)]:\mathbb P^1\to\mathrm{Pic}$; orientable spectra are fundamental and their stable coefficient model has the same module/cohomology operations. [[lem-author-32887006bdff-em-p1-model]] supplies that model.

## Proof
**Given:** The model $\mathcal E_S$, the Axiom of Choice and the fixed compatible site and universe bounds.

**Goal:** Verify orientation and the full source PBF hypotheses.

1.1 Shift the Picard map in [F1] by2. Since $\mathrm{Pic}(Y)\simeq\Omega^\infty R\Gamma_{\rm Nis}(Y,\mathbb G_m)[1]$, this gives a pointed map $\mathrm{Pic}\to\Omega^\infty A_1$. Multiplication gives the associated module map $\mathrm{Pic}\otimes\mathcal E_S\to\mathbb P^1\otimes\mathcal E_S$. On the universal $\mathcal O(1)$ this is exactly the bonding class used in the model; by its Ω-condition it restricts to the identity under P¹ suspension. Thus it is the linear orientation of [F2], with the original EM first Chern class, not an arbitrarily chosen group isomorphism. [A1, F1, F2, construct]

2.1 The actual complex PBF in [F1] is compatible with multiplication and the bonding class. Levelwise its reduced P-space formula is the source PBF for the stable coefficient model. Negative level indices that occur are zero: reduced weight-zero P¹ cohomology is zero by [F1], so looping $A_0$ by P¹ is zero, and further negative shifts remain zero. Thus the levelwise formulas also cover the low-level boundary, not only sufficiently large levels. [A1, F1, step 1.1]

3.1 Orientability and [F2] identify the space and stable coefficient models on fundamental spectra, so the formula of step 2.1 is the required equivalence of oriented motivic modules. Its products and tautological class are those in step 1.1. The general bundle version follows from the source PBF or its local descent statement, preserving the same class. No affine-torsor detection or homotopy invariance has been assumed. [A1, F1, F2, step 1.1, step 2.1] ∎
