---
id: op-birch-swinnerton-dyer-conjecture
kind: open-problem
title: Birch–Swinnerton-Dyer rank and leading-term conjecture
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 40
deps:
  - def-global-field
  - def-abelian-variety-over-a-field
  - def-elliptic-curve-minimal-discriminant-conductor-and-l-function-over-q
  - def-neron-tate-canonical-height
  - def-tate-shafarevich-group-of-abelian-variety
  - thm-mordell-weil-for-abelian-varieties-over-number-fields
  - thm-bcdt-every-elliptic-curve-over-q-is-modular
  - thm-mellin-continuation-and-functional-equation-for-newform-l-function
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: J. S. Milne, Elliptic Curves, Chapter IV §10.5
      url: https://www.jmilne.org/math/Books/ectext6.pdf
      locator: Conjecture 10.5, printed pp. 166–167; the rank, period, regulator, Tate–Shafarevich and Tamagawa normalizations.
    - title: Clay Mathematics Institute, Birch and Swinnerton-Dyer Conjecture
      url: https://www.claymath.org/Millennium%20Problems/
      locator: Current Millennium Prize Problems page, Unsolved problems list, including the Birch and Swinnerton-Dyer Conjecture.
---

## Open problem

Let $E/\mathbb Q$ be an elliptic curve and let $r=\operatorname{rank}E(\mathbb Q)$, which is finite by Mordell–Weil. Let $L(E,s)$ be the Hasse–Weil Euler product with the local factors fixed in the A-page definition, continued to a neighbourhood of $s=1$ by modularity and the weight-two Mellin continuation. Define $\operatorname{Sha}(E/\mathbb Q)=\ker(H^1(\mathbb Q,E)\to\prod_v H^1(\mathbb Q_v,E))$. Let $\omega_E$ be a Néron differential on a minimal Weierstrass model and put $\Omega_E=\int_{E(\mathbb R)}|\omega_E|$. For each bad finite prime $p$, let $c_p=[E(\mathbb Q_p):E^0(\mathbb Q_p)]$, where $E^0(\mathbb Q_p)$ consists of points reducing to the nonsingular part of the special fibre. Let $\operatorname{Reg}(E/\mathbb Q)$ be the determinant of the Néron–Tate height pairing on a $\mathbb Z$-basis of $E(\mathbb Q)/E(\mathbb Q)_{\mathrm{tors}}$; it is $1$ when $r=0$ and is basis-independent because a basis change is unimodular.

The conjecture asserts that $\operatorname{Sha}(E/\mathbb Q)$ is finite, that $L(E,s)$ has a zero of order $r$ at $s=1$, and that
$$\lim_{s\to1}\frac{L(E,s)}{(s-1)^r}=\frac{\Omega_E\,\operatorname{Reg}(E/\mathbb Q)\,\#\operatorname{Sha}(E/\mathbb Q)\,\prod_{p\,\mathrm{bad}}c_p}{\#E(\mathbb Q)_{\mathrm{tors}}^2}.$$

## Open problem references

[[def-elliptic-curve-minimal-discriminant-conductor-and-l-function-over-q]]

[[def-neron-tate-canonical-height]]

[[def-tate-shafarevich-group-of-abelian-variety]]

[[thm-mordell-weil-for-abelian-varieties-over-number-fields]]

[[thm-bcdt-every-elliptic-curve-over-q-is-modular]]

[[thm-mellin-continuation-and-functional-equation-for-newform-l-function]]

[J. S. Milne, *Elliptic Curves*, Chapter IV §10.5](https://www.jmilne.org/math/Books/ectext6.pdf)

[Clay Mathematics Institute, *The Millennium Prize Problems*, Unsolved problems list](https://www.claymath.org/Millennium%20Problems/)

## Facts & Assumptions

**Given:** AC and DC; an elliptic curve $E/\mathbb Q$; its Mordell–Weil group, Hasse–Weil L-function, Néron–Tate pairing and Tate–Shafarevich group with the conventions in the statement.

[A1] The Néron–Tate and Tate–Shafarevich interfaces use AC and DC. ([[def-axiom-of-choice]], [[def-dependent-choice]], [[def-neron-tate-canonical-height]], [[def-tate-shafarevich-group-of-abelian-variety]])

[F1] The Mordell–Weil theorem supplies finite generation of $E(\mathbb Q)$, so its rank, torsion subgroup and regulator basis are defined. ([[thm-mordell-weil-for-abelian-varieties-over-number-fields]])

[F2] The supplier defines a canonical quadratic height for a specified symmetric line bundle. It does not choose the elliptic line bundle or fix the polarization factor in the BSD height pairing; matching that numerical normalization in the regulator is an explicit unresolved interface below. ([[def-neron-tate-canonical-height]])

[F3] The Tate–Shafarevich supplier defines the localization kernel used in the formula. ([[def-tate-shafarevich-group-of-abelian-variety]])

[F4] Modularity identifies the elliptic-curve L-function with a weight-two newform L-function, and the Mellin supplier gives its continuation and functional equation. ([[thm-bcdt-every-elliptic-curve-over-q-is-modular]], [[thm-mellin-continuation-and-functional-equation-for-newform-l-function]])

## Status

The Clay Mathematics Institute currently lists this as an unsolved Millennium Prize problem. The analytic continuation clause is established by modularity in the standard account; the rank equality, full leading-term formula and finiteness of $\operatorname{Sha}$ remain the conjectural assertions.

## Unresolved prerequisites

The generic canonical-height supplier does not fix the elliptic symmetric line bundle or the polarization factor defining the standard BSD regulator. That exact normalization must be verified before a local construction of the displayed regulator or any coefficient adjustment is claimed; no numerical factor is invented here. The displayed full BSD target is retained.

The current BCDT carrier states a modular-curve morphism, so its further identification of the elliptic Euler factors with a weight-two newform L-function also needs an exact local supplier. The current BCDT carrier is escalated because the full proof and its axiom audit have not been reviewed. The Mellin-continuation carrier is escalated because its Fricke-eigenrelation supplier is proof-open. Their pages, `modularity-lifting-and-elliptic-curve-modularity` and `beilinson-bloch-kato-tamagawa-conjectures`, are outside the A-page's declared transitive page closure. The statements above are conditional on the exact interfaces and do not claim these carriers are accepted.
