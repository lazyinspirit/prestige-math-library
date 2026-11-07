---
id: thm-gts-bogomolovtiantodorov-unobstructedness
kind: theorem
title: "Bogomolov–Tian–Todorov unobstructedness"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC, inherited from compact Kähler Hodge and deformation suppliers."
deps:
  - thm-gts-kuranishi-semi-universal-deformation
  - thm-gts-t1-lifting-principle-for-analytic-deformations
  - thm-gts-artin-relative-hodge-base-change
  - lem-gts-ddbar-lemma-implies-frolicher-e1-degeneration
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - thm-gts-the-lemma-for-compact-kahler-manifolds
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - def-axiom-of-choice
dependency_roles:
  thm-gts-kuranishi-semi-universal-deformation: mathematical-premise
  thm-gts-t1-lifting-principle-for-analytic-deformations: mathematical-premise
  thm-gts-artin-relative-hodge-base-change: mathematical-premise
  lem-gts-ddbar-lemma-implies-frolicher-e1-degeneration: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  thm-gts-the-lemma-for-compact-kahler-manifolds: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§1.1, Theorems 1.4–1.6 and the proof of Theorem 1.5, printed pp. 7–8: E₁/base-change and T¹-lifting route."
    - title: "Pierre Deligne, Théorie de Hodge II, Publications Mathématiques de l’IHÉS 40 (1971)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "§4.2.1–§4.2.7, printed pp. 43–47: algebraic Hodge-variation hypotheses and their limits."
verification:
  precheck: pending
---

## Statement

Let $X$ be a compact Kähler complex manifold of dimension $n\ge1$ with holomorphically trivial canonical bundle and a chosen nowhere-zero holomorphic $n$-form $\Omega$. Then the Kuranishi analytic germ is smooth of dimension $h^1(X,T_X^{1,0})$; equivalently, all sufficiently small complex-structure deformations are unobstructed. This is a local deformation statement and does not identify the germ with a global fine moduli space.

## Statement references

[[thm-gts-kuranishi-semi-universal-deformation]]

[[thm-gts-t1-lifting-principle-for-analytic-deformations]]

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

[Voisin, Theorem 1.5 and proof](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Facts & Assumptions

**Given:** Full AC; a compact Kähler $n$-fold $X$; a specified trivialization of $K_X$ with corresponding nowhere-zero holomorphic volume form $\Omega$; the compact Kähler Hodge package; and the completed T¹ and relative-Hodge inputs below.

[A1] Full AC is [[def-axiom-of-choice]], inherited from the compact elliptic Hodge suppliers.

[F1] The canonical bundle is $K_X=\Lambda^n\Omega_X^1$; the given nowhere-zero holomorphic $n$-form is a trivialization on every component and assumes no simple connectivity or full $SU(n)$ holonomy ([[def-gts-kahler-class-canonical-bundle-and-ricci-form]]).

[F2] On a compact Kähler manifold the Hodge decomposition identifies Dolbeault cohomology with the $H^{p,q}$ pieces ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]).

[F3] For a proper Artin analytic deformation, the relative Hodge cohomology modules are locally free and commute with restriction to lower Artin order under the exact hypotheses in [[thm-gts-artin-relative-hodge-base-change]].

[F4] A successive analytic deformation lifts if and only if its relative Kodaira–Spencer class lifts ([[thm-gts-t1-lifting-principle-for-analytic-deformations]]).

[F5] The Kuranishi germ is the zero locus of a holomorphic obstruction map $\kappa:H^1(X,T_X^{1,0})\to H^2(X,T_X^{1,0})$, with tangent space $H^1(X,T_X^{1,0})$ ([[thm-gts-kuranishi-semi-universal-deformation]]).

[F6] The compact Kähler $\partial\bar\partial$ lemma says a $d$-closed, $d$-exact pure-type form is $\partial\bar\partial$-exact with the stated sign and endpoint convention ([[thm-gts-the-lemma-for-compact-kahler-manifolds]]).

[F7] Under [F6], the central Frölicher spectral sequence degenerates at $E_1$; a local proof gives a $d$-closed representative for each Dolbeault class ([[lem-gts-ddbar-lemma-implies-frolicher-e1-degeneration]]). The helper's proof status is ready; its use here is the exact stated consequence.

## Proof

**Proof technique:** direct.

1.1 The chosen trivialization supplies a nowhere-zero holomorphic volume form on the central fibre. The Hodge decomposition [F2] identifies central groups $H^q(X,\Omega_X^p)$ with $H^{p,q}(X)$, while the $\partial\bar\partial$ lemma [F6] and its E$_1$ consequence [F7] verify the central degeneration hypothesis required by [F3]. Relative base change then extends the volume section through each Artin order to the relative canonical line bundle. A section reducing to a nowhere-zero section remains nowhere zero over a nilpotent thickening, because in each local frame its coefficient reduces to a unit and every lift of a unit across a nilpotent ideal is a unit. Contraction with this relative form is therefore an isomorphism $T_{X_m/B_m}\cong\Omega^{n-1}_{X_m/B_m}$ at each order $m$. The base-change surjectivity in [F3] lifts the relative Kodaira–Spencer class in $H^1(T_{X_m/B_m})$ to the next order. [A1, F1, F2, F3, F6, F7, given, algebra]

2.1 By the T¹-lifting equivalence [F4], every order-$m$ marked deformation extends to order $m+1$. Starting with any first-order tangent vector and applying induction gives compatible deformations to every finite Artin order. Hence the analytic Kuranishi map in [F5] is zero. Indeed if its lowest nonzero homogeneous term had degree d, choose a tangent vector v on which that term is nonzero. An inductively lifted one-parameter deformation with that first-order tangent has a classifying map t(ε)=εv+O(ε²) through every finite order by [F5]. Then κ(t(ε)) has nonzero degree-d coefficient κ_d(v), contradicting the order-d lift. Thus no such homogeneous term exists. The map $\kappa$ is holomorphic, so its convergent Taylor series is identically zero near the origin. [F4, F5, step 1.1, given, algebra]

3.1 The Kuranishi base is the zero locus of $\kappa$ by [F5]; since $\kappa$ vanishes identically, this base is an open analytic neighborhood of $0$ in $H^1(X,T_X^{1,0})$, hence smooth of dimension $h^1(X,T_X^{1,0})$. The Kuranishi groupoid retains automorphisms as in [F5], so this local smoothness does not produce a global fine moduli space. [F5, step 2.1, algebra] ∎

## Remarks

The completed T¹-lifting, relative base-change and relative holomorphic Kuranishi constructions discharge the three interfaces used in this deduction. No Calabi–Yau metric theorem is a prerequisite: the argument uses the complex Kähler Hodge package and the specified holomorphic volume form only.
