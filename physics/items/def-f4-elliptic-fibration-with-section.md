---
id: def-f4-elliptic-fibration-with-section
kind: definition
title: "Elliptic fibration with a section"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the generic-fiber smoothness, cohomology and pointed-curve group-law suppliers; AC supplies the DC used by the cohomology construction."
deps:
  - def-f4-genus-one-fibration
  - def-axiom-of-choice
  - lem-f4-pointed-genus-one-curve-group-law
  - lem-proper-stable-base-change
  - lem-support-dimension-preserved-field-extension
  - lem-flat-local-ascent-of-regularity
  - thm-regular-equals-smooth-over-perfect-field
  - lem-proper-cohomology-field-extension
  - def-geometrically-reduced-integral-connected-fibre
dependency_roles:
  def-f4-genus-one-fibration: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-f4-pointed-genus-one-curve-group-law: mathematical-premise
  lem-proper-stable-base-change: mathematical-premise
  lem-support-dimension-preserved-field-extension: mathematical-premise
  lem-flat-local-ascent-of-regularity: mathematical-premise
  thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  lem-proper-cohomology-field-extension: mathematical-premise
  def-geometrically-reduced-integral-connected-fibre: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§3.1 and 8.2; elliptic fibrations, sections, and genus-one torsors."
    - title: "David R. Morrison and Daniel S. Park, F-Theory and the Mordell-Weil Group of Elliptically-Fibered Calabi-Yau Threefolds, arXiv:1208.2695v2"
      url: "https://arxiv.org/pdf/1208.2695v2"
      locator: "§3.1; rational sections and the Mordell–Weil group in F-theory."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume the Axiom of Choice, inherited from the generic-fiber and group-law suppliers. An **elliptic fibration with section** is a flat genus-one fibration $\pi:Y\to B$ together with a specified regular section $s:B\to Y$, meaning $\pi\circ s=\operatorname{id}_B$. A **rational section** is a section of the generic fiber over the function field $K(B)$, equivalently a rational map $B\dashrightarrow Y$ over $B$ defined on a dense open subset; it need not extend to a regular section on all of $B$. Write $F=K(B)$, $E=Y_\eta$, and $O=s(\eta)\in E(F)$. The pointed generic fiber is an elliptic curve over $F$ with its canonical regular commutative group law: over every field extension $F'/F$, the sum of $P,Q\in E(F')$ is the unique point $R$ for which the divisor $[R]$ is linearly equivalent to $[P]+[Q]-[O]$; the inverse of $P$ is the unique point in the class $2[O]-[P]$. The **Mordell–Weil group** is the abelian group $E(K(B))$, equivalently the group of rational sections with these operations performed on the generic fiber.

## Definition references

[[def-f4-genus-one-fibration]]

[[def-axiom-of-choice]]

[[lem-f4-pointed-genus-one-curve-group-law]]

[[lem-proper-stable-base-change]]

[[lem-support-dimension-preserved-field-extension]]

[[lem-flat-local-ascent-of-regularity]]

[[thm-regular-equals-smooth-over-perfect-field]]

[[lem-proper-cohomology-field-extension]]

[[def-geometrically-reduced-integral-connected-fibre]]

[T. Weigand, TASI Lectures, §§3.1 and 8.2](https://arxiv.org/pdf/1806.01854v1)

[D. R. Morrison and D. S. Park, §3.1](https://arxiv.org/pdf/1208.2695v2)

## Remarks

Here the function field $F=K(B)$ is a finitely generated extension of $\mathbb C$, hence of characteristic zero; it is not assumed algebraically closed. The generic-fiber group law follows from the actual fibration data as follows. The scheme $E$ is proper and finite type over $F$ by [[lem-proper-stable-base-change]], and its geometric generic fiber is a smooth geometrically integral genus-one curve by [[def-f4-genus-one-fibration]]. The closure test in [[def-geometrically-reduced-integral-connected-fibre]] therefore gives geometric integrality of $E$, and [[lem-support-dimension-preserved-field-extension]], applied to its structure sheaf, gives $\dim E=1$. To check smoothness over $F$ itself, take any affine chart $\operatorname{Spec}A\subset E$. The ring map $A\to A\otimes_F\bar F$ is faithfully flat. At each prime of $A$, choose a prime above it; the corresponding local map is flat local between Noetherian rings with regular target, because $E_{\bar F}$ is smooth. The descent clause of [[lem-flat-local-ascent-of-regularity]] makes its source regular. Thus $E$ is regular, and [[thm-regular-equals-smooth-over-perfect-field]] makes it smooth over the perfect field $F$. Finally [[lem-proper-cohomology-field-extension]] identifies $H^1(E,\mathcal O_E)\otimes_F\bar F$ with the one-dimensional $H^1(E_{\bar F},\mathcal O)$, so $E$ has genus one over $F$. The section gives the $F$-rational point $O$. All hypotheses of [[lem-f4-pointed-genus-one-curve-group-law]] now hold over $F$, and that lemma constructs multiplication and inversion as regular $F$-morphisms with exactly the displayed divisor-class rules. This establishes the full group-valued clause without assuming a group scheme over the base.

For the equivalence with rational maps, restricting a section on a dense open to $\eta$ gives an $F$-point. Conversely, an $F$-point of the finite-type $B$-scheme $Y$ is described in affine neighbourhoods by finitely many coordinate functions in $K(B)$ satisfying finitely many equations. Clearing their finitely many denominators on an affine neighbourhood of $\eta$ gives a morphism over $B$ on a dense open subset. The base-coordinate maps show that its composite with $\pi$ is the identity there. Two extensions of the same generic point agree after shrinking to a common dense open, since the target is separated and the source is integral. Thus rational sections modulo shrinking are exactly $E(F)$, and the group law transfers through this bijection. No extension across every point of $B$, group law on singular fibers, or finite-generation theorem for $E(F)$ is asserted here. The Axiom of Choice is [[def-axiom-of-choice]]; the group-law lemma explicitly supplies dependent choice from it for the coherent-cohomology argument.
