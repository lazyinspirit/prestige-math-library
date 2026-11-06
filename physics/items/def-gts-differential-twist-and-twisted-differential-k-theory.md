---
id: def-gts-differential-twist-and-twisted-differential-k-theory
kind: definition
title: Differential twist and twisted differential K-theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 6
deps:
  - def-gts-differential-extension-of-a-generalized-cohomology-theory
  - def-gts-u-1-bundle-gerbe-with-connection-and-curving
justified_by: []
dependency_roles:
  def-gts-differential-extension-of-a-generalized-cohomology-theory: mathematical-premise
  def-gts-u-1-bundle-gerbe-with-connection-and-curving: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ulrich Bunke and Thomas Nikolaus, Twisted Differential Cohomology
      url: https://arxiv.org/pdf/1406.3231v1
      locator: Definitions 4.1, 4.6, 4.9 and 4.11, the de Rham algebra equivalence (12), and Section 5, differential twists, shifted twists and the differential-function spectrum.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $E$ be a commutative ring spectrum and let a differential refinement consist of a real commutative differential graded algebra $A$ and an equivalence $\rho:E\wedge H\mathbb R\simeq H A$ of commutative $H\mathbb R$-algebra spectra, preserving the unit, multiplication and their coherent homotopies. For a smooth manifold $M$, let $\Omega A=\Omega^*_M\otimes_{\mathbb R}A$ be the sheaf of differential graded algebras of forms with coefficients in $A$. Write $\underline A$ for the locally constant coefficient sheaf. The de Rham map $H\underline A\to H\Omega A$, induced by locally constant degree-zero forms, is an equivalence of sheaves of commutative $H\mathbb R$-algebra spectra: on coordinate balls the radial Poincaré homotopy, tensored with $A$ with the graded signs, contracts the form direction to constants. Compose the sheafification of $\rho$ with this de Rham equivalence to obtain $\rho_M:\underline{E\wedge H\mathbb R}\simeq H\Omega A$. Whenever $(E_\tau)_{\mathbb R}$ is regarded as an $H\Omega A$-module below, its scalar action is transported along this specified algebra equivalence (equivalently, use derived extension of scalars along $\rho_M$). A **differential twist** consists of a sheaf $E_\tau$ of $E$-module spectra on $M$ that is locally equivalent to the constant sheaf $E$ as an $E$-module, a module $\mathcal M_\tau$ over $\Omega A$, and an equivalence $c:(E_\tau)_{\mathbb R}\simeq H(\mathcal M_\tau)$ of sheaves of $H\Omega A$-modules, where $(E_\tau)_{\mathbb R}:=E_\tau\wedge H\mathbb R$. The module $\mathcal M_\tau$ is required to be invertible, meaning that there is an $\Omega A$-module $\mathcal N$ with an actual isomorphism $\mathcal M_\tau\otimes_{\Omega A}\mathcal N\cong\Omega A$ of sheaves of differential graded modules; it is $K$-flat, meaning that tensoring it with a quasi-isomorphism of $\Omega A$-modules gives a quasi-isomorphism; and it is weakly locally constant, meaning that its image after localization at quasi-isomorphisms is locally constant. Morphisms consist of equivalences of the topological twists and actual isomorphisms of the differential graded form modules, compatible with $c$ through a specified homotopy identifying the comparison maps. Write $\kappa:E_\tau\to(E_\tau)_{\mathbb R}$ for realification. Define the associated differential-function spectrum by the homotopy pullback

$$\operatorname{Diff}(E_\tau,\mathcal M_\tau,c):=E_\tau\mathop\times_{H(\mathcal M_\tau)}H(\mathcal M_\tau)_{\ge0},$$

where the map from $E_\tau$ to $H(\mathcal M_\tau)$ is $c\circ\kappa$, the other map is induced by inclusion of the naive degreewise nonnegative truncation, and $H$ is the Eilenberg–Mac Lane spectrum of a differential graded module. Use cohomological grading for the differential-form module: $\mathcal M_\tau[q]^j=\mathcal M_\tau^{j+q}$ with differential $(-1)^q d$ and shifted action $a\cdot_{[q]}m=(-1)^{q|a|}am$ for homogeneous $a\in\Omega A$, so $H(\mathcal M_\tau[q])\simeq\Sigma^qH(\mathcal M_\tau)$. For each integer $q$, apply the same pullback prescription to the shifted triple $(\Sigma^qE_\tau,\mathcal M_\tau[q],c[q])$ and define $\widehat E^q_\tau(M)=\pi_0\mathbf R\Gamma(M;\operatorname{Diff}(\Sigma^qE_\tau,\mathcal M_\tau[q],c[q]))$, where $c[q]$ is the suspended comparison equivalence. The naive truncation is applied after this shift. In particular all cohomological degrees are not defined by homotopy groups of one fixed unshifted truncation. For a $U(1)$-bundle gerbe with connection, a degree-three complex $K$-twist is specified only after choosing a comparison from its Dixmier–Douady class and differential data to such a full twist; the gerbe presentation alone is not that comparison.

## Definition references

[[def-gts-differential-extension-of-a-generalized-cohomology-theory]]

[[def-gts-u-1-bundle-gerbe-with-connection-and-curving]]

## Morphisms

An isomorphism of twists consists of an equivalence of the topological module spectra and an actual isomorphism of sheaves of differential graded form modules, together with a homotopy identifying the induced real comparison maps. A quasi-isomorphism of form modules alone is not a permitted change of presentation: naive truncation need not preserve such a quasi-isomorphism. Automorphisms and their homotopies remain part of the twist data.

## Remarks

The twist includes the topological class, differential-form module, real comparison and their equivalences. It is not defined by a curvature three-form alone. No map from every gerbe to a complex $K$-theory twist is asserted without the specified comparison data.
